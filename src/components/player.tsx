import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import styles from "./styles/player.module.css";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayerControls from "./player-controls";
import cx from "classnames";

const Player = () => {
  const { currentTrack, isPlaying, position } = useSelector(
    (state: RootState) => state.player
  );

  return (
    <div className="flex flex-col">
      <div className={cx(styles.player)}>
        <CircularProgressbarWithChildren
          value={currentTrack ? (position / currentTrack.duration) * 100 : 0}
          strokeWidth={3}
          className="progressBarSvg"
          styles={buildStyles({
            strokeLinecap: "round",
            pathColor: "#EF5466",
            trailColor: '#ffffff'
          })}
        >
          <div className={cx(styles.disc, isPlaying && styles.rotating)}>
            {currentTrack?.album.cover_big ? (
              <>
                <Image
                  className={styles.cover}
                  src={currentTrack.album.cover_big}
                  width={80}
                  height={80}
                />
              </>
            ) : null}
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="mb-12 mt-6">
        <p className="text-neutral-800 dark:text-neutral-200 text-lg break-words">{currentTrack?.title}</p>
        <p className="text-neutral-600 dark:text-neutral-500 text-md">{currentTrack?.artist.name}</p>
      </div>
      <div className="flex justify-center">
        <PlayerControls />
      </div>
    </div>
  );
};

export default Player;
