import React, { useState } from "react";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { IPlayerState } from "../../../types/player";
import { ITrackItem } from "../../../types/track";
import Deezer, { createDeezerService } from "../../../services/deezer";

const initialState: IPlayerState = {
  currentTrack: null,
  isPlaying: false,
  position: 0,
  currentPlaylist: [],
  currentPlaylistTrackIndex: -1,
};

let deezerService: null | Deezer = null;
(async () => {
  // todo: take appId from .env
  return await createDeezerService(400384);
})().then((service: Deezer) => {
  deezerService = service;
});

export const player = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<ITrackItem>) => {
      state.currentTrack = action.payload;
      // state.currentPlaylist.push(action.payload);
    },
    playTracks: (state, action: PayloadAction<number[]>) => {
      deezerService?.playTracks(action.payload);
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      // if ()
      if (action.payload) {
        deezerService?.play();
      } else {
        deezerService?.pause();
      }
      state.isPlaying = action.payload;
    },
    setPosition: (state, action: PayloadAction<number>) => {
      state.position = action.payload;
    },
    resetPlayerState: (state) => {
      state.currentTrack = null;
      state.isPlaying = false;
    },
    playNextTrack: (state) => {
      if (state.currentPlaylist.length) {
        const nextTrack =
          state.currentPlaylist[state.currentPlaylistTrackIndex + 1];
        if (nextTrack) {
          deezerService?.playTracks([nextTrack.id]);
          state.isPlaying = true;
          state.currentPlaylistTrackIndex++;
          state.currentTrack = nextTrack;
        }
      }
    },
    playPrevTrack: (state) => {
      if (state.currentPlaylist.length) {
        const prevTrack: ITrackItem =
          state.currentPlaylist[state.currentPlaylistTrackIndex - 1];
        if (prevTrack) {
          deezerService?.playTracks([prevTrack.id]);
          state.isPlaying = true;
          state.currentPlaylistTrackIndex--;
          state.currentTrack = prevTrack;
        }
      }
    },
    addTrackToQueue: (state, action: PayloadAction<ITrackItem>) => {
      state.currentPlaylist.push(action.payload);
      // if player is empty
      if (!state.currentTrack) {
        state.currentTrack = action.payload;
      }
    },
    removeFromQueue: (state, action: PayloadAction<ITrackItem>) => {
      const trackIdx = state.currentPlaylist.findIndex(
        (t) => t.id === action.payload.id
      );

      if (trackIdx > -1) {
        const previousTrack = state.currentPlaylist[trackIdx - 1];
        const nextTrack = state.currentPlaylist[trackIdx + 1];

        // if previous track or next track is present, make it current playlist track index, if not, get first track
        state.currentPlaylistTrackIndex = nextTrack ? trackIdx + 1 : 0;
        state.currentPlaylistTrackIndex = previousTrack ? trackIdx - 1 : 0;

        state.currentPlaylist.splice(trackIdx, 1);

        // if only one present track removed from playlist, start new playlist
        if (!state.currentPlaylist.length) {
          state.currentPlaylistTrackIndex = -1;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentTrack,
  setIsPlaying,
  setPosition,
  resetPlayerState,
  playNextTrack,
  playPrevTrack,
  addTrackToQueue,
  playTracks,
  removeFromQueue,
} = player.actions;

export default player.reducer;
