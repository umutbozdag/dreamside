import { ITrackItem } from "./track";

export interface IPlayerState {
  currentTrack: ITrackItem | null;
  isPlaying: boolean;
  position: number;
  currentPlaylist: ITrackItem[];
  currentPlaylistTrackIndex: number;
}
