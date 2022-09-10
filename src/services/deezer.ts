import { DeezerEventsEnum } from "../types/deezerEventsEnum";
import { ITrackItem } from "../types/track";

export interface IDeezer {
  init: () => Promise<any>;
  play: () => void;
  pause: () => void;
  next: () => void;
  previous: () => void;
  playTracks: (trackIds: number[], cb?: Function) => void;
  seek: (position: number) => void;
  setVolume: (volume: number) => void;
  addToQueue: (trackIds: number[], cb?: Function) => void;
  subscribe: (name: string, cb: Function) => void;
  getTrackList: () => ITrackItem[];
  getCurrentIndex: () => number;
  _appId: number;
}

export default class Deezer implements IDeezer {
  public _appId: number;
  static instance: Deezer;

  constructor(appId: number) {
    this._appId = appId;
  }

  public static getInstance(_appId: number): Deezer {
    if (!Deezer.instance) {
      Deezer.instance = new Deezer(_appId);
    }
    return Deezer.instance;
  }

  init() {
    return new Promise((resolve, reject) => {
      if (typeof window !== "undefined") {
        window?.DZ?.init({
          appId: this._appId,
          channelUrl: `http://localhost:3000/channel.html`,
          player: {
            onload: function (response) {
              resolve(response);
            },
          },
        });
      }
    });
  }

  play() {
    window.DZ.player.play();
  }

  pause() {
    window.DZ.player.pause();
  }

  next() {
    window.DZ.player.next();
  }

  previous() {
    window.DZ.player.prev();
  }

  playTracks(trackIds: number[], cb?: Function) {
    window.DZ.player.playTracks(trackIds, cb);
  }

  seek(position: number) {
    window.DZ.player.seek(position);
  }

  getCurrentIndex() {
    return window.DZ.player.getCurrentIndex();
  }

  setVolume(volume: number) {
    window.DZ.player.setVolume(volume);
  }

  getTrackList() {
    return window.DZ.player.getTrackList();
  }

  addToQueue(trackIds: number[], cb?: Function) {
    window.DZ.player.addToQueue(trackIds, cb);
  }

  getCurrentTrack(cb: Function): ITrackItem {
    return window.DZ.player.getCurrentTrack(cb);
  }

  subscribe(name: string, cb: Function) {
    window.DZ.Event.subscribe(name, cb);
  }
}

export const createDeezerService = async (appId: number) => {
  const service: Deezer = Deezer.getInstance(appId);
  await service.init();
  return service;
};
