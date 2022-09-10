import PlayIcon from "./icons/play";
import PlaylistAddIcon from "./icons/playlist-add";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { ITrackItem } from "../types/track";
import {
  addTrackToQueue,
  playTracks,
  removeFromQueue,
  setCurrentTrack,
  setIsPlaying,
} from "../components/redux/reducers/player";
import { RootState } from "./redux/store";
import PauseIcon from "./icons/pause";
import PlaylistRemoveIcon from "./icons/playlist-remove";

const TrackItem = ({ track }: { track: ITrackItem }) => {
  const dispatch = useDispatch();
  const { currentTrack, isPlaying, currentPlaylist } = useSelector(
    (state: RootState) => state.player
  );

  const handleOnPlay = () => {
    dispatch(setCurrentTrack(track));
    dispatch(playTracks([track.id]));
    dispatch(setIsPlaying(true));
  };

  const handleOnPause = () => {
    dispatch(setIsPlaying(false));
  };

  const handleOnAddToQueue = () => {
    dispatch(addTrackToQueue(track));
  };

  const handleOnRemoveFromQueue = () => {
    dispatch(removeFromQueue(track));
  };

  const formatDuration = (): string => {
    const [min, sec] = (track.duration / 100).toFixed(2).toString().split(".");
    return `${min}:${sec}`;
  };

  const QueueComponent = (
    <>
      {!currentPlaylist.includes(track) ? (
        <PlaylistAddIcon
          width={24}
          height={24}
          className="cursor-pointer mr-3 text-neutral-800 hover:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400"
          onClick={handleOnAddToQueue}
        />
      ) : (
        <PlaylistRemoveIcon
          width={24}
          height={24}
          className="cursor-pointer text-red-500 hover:text-neutral-700 dark:text-red-400 dark:hover:text-neutral-400 mr-3"
          onClick={handleOnRemoveFromQueue}
        />
      )}
    </>
  );
  return (
    <div className="flex items-center justify-between w-full hover:bg-neutral-200/70 dark:hover:bg-neutral-800 rounded-md p-2">
      <div className="flex items-center">
        {!currentTrack ? (
          <PlayIcon
            className="mr-4 text-neutral-800 hover:text-neutral-600 cursor-pointer dark:text-neutral-200 dark:hover:text-neutral-400"
            width={20}
            height={20}
            onClick={handleOnPlay}
          />
        ) : isPlaying && currentTrack.id === track.id ? (
          <PauseIcon
            className="mr-4 text-red-500 hover:text-red-400 cursor-pointer"
            width={22}
            height={22}
            onClick={handleOnPause}
          />
        ) : (
          <PlayIcon
            className="mr-4 text-neutral-800 cursor-pointer hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
            width={20}
            height={20}
            onClick={handleOnPlay}
          />
        )}

        <div className="flex items-center">
          <Image
            src={track && track.album.cover_medium}
            alt="Picture of the author"
            width={40}
            height={40}
          />

          <div className="flex flex-col ml-2">
            <span className="text-md text-neutral-800 dark:text-neutral-200">
              {track && track.title}
            </span>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {track && track.artist.name}
            </span>
          </div>
        </div>
      </div>

      <span className="text-md text-neutral-700 dark:text-neutral-300">
        {track && track.album.title}
      </span>

      <div className="flex items-center">
        {currentTrack && QueueComponent}

        {/* <HeartIcon className="cursor-pointer mr-3" width={16} height={16} /> */}

        <div className="text-neutral-500 dark:text-neutral-400">
          {track && formatDuration()}
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
