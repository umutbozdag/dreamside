export type TracksResponseData = {
  tracks: ITrackItem[];
};

export interface ITrackItem {
  id: number;
  title: string;
  duration: number;
  preview: string;
  artist: {
    name: string,
    picture: string
  };
  album: {
    title: string,
    cover_big: string,
    cover_medium: string,
    cover_small: string,
    cover_xl: string,
    cover: string
  };
}
