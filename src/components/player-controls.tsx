import { useDispatch, useSelector } from "react-redux";
import NextIcon from "./icons/next";
import PauseIcon from "./icons/pause";
import PlayIcon from "./icons/play";
import PrevIcon from "./icons/prev";
import {
  playNextTrack,
  playPrevTrack,
  setIsPlaying,
} from "./redux/reducers/player";
import { RootState } from "./redux/store";

const PlayerControls = () => {
  const dispatch = useDispatch();
  const { currentTrack, isPlaying, position, currentPlaylist } = useSelector(
    (state: RootState) => state.player
  );

  const handleOnPlay = () => {
    if (!currentTrack) return;
    dispatch(setIsPlaying(true));
  };

  const handleOnPause = () => {
    dispatch(setIsPlaying(false));
  };

  const handleOnNext = () => {
    dispatch(playNextTrack());
  };

  const handleOnPrev = () => {
    dispatch(playPrevTrack());
  };

  return (
    <div className="flex items-center justify-center ">
      <PrevIcon
        width={24}
        height={24}
        className="cursor-pointer mr-8 text-neutral-800 hover:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400"
        onClick={handleOnPrev}
      />
      {!isPlaying ? (
        <PlayIcon
          className="cursor-pointertext-neutral-800 hover:text-neutral-600 cursor-pointer dark:text-neutral-200 dark:hover:text-neutral-400"
          width={28}
          height={28}
          onClick={handleOnPlay}
        />
      ) : (
        <PauseIcon
        className="cursor-pointer text-red-500 hover:text-red-400"
          onClick={handleOnPause}
          width={28}
          height={28}
        />
      )}

      <NextIcon
        width={24}
        height={24}
        className="cursor-pointer ml-8 text-neutral-800 hover:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400"
        onClick={handleOnNext}
      />
    </div>
  );
};

export default PlayerControls;
