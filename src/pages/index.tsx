import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Aside from "../components/layouts/aside";
import Header from "../components/layouts/header";
import {
  playNextTrack,
  playPrevTrack,
  resetPlayerState,
  setIsPlaying,
} from "../components/redux/reducers/player";
import { RootState } from "../components/redux/store";
import Tracks from "../components/tracks";
import Deezer, { createDeezerService } from "../services/deezer";
import { DeezerEventsEnum } from "../types/deezerEventsEnum";
import { setPosition } from "../components/redux/reducers/player";
import useKeyPress from "../hooks/useKeyPress";
import Search from "../components/search";

export default function Home() {
  const dispatch = useDispatch();
  const [service, setService] = useState<Deezer | null>(null);
  const { isPlaying, currentTrack } = useSelector(
    (state: RootState) => state.player
  );

  // spacebar
  const spacePress: boolean = useKeyPress(" ");
  const arrowRightPress: boolean = useKeyPress("ArrowRight");
  const arrowLeftPress: boolean = useKeyPress("ArrowLeft");

  useEffect(() => {
    if (currentTrack && spacePress) {
      dispatch(setIsPlaying(!isPlaying));
    }
  }, [spacePress]);

  useEffect(() => {
    if (currentTrack && arrowRightPress) {
      dispatch(playNextTrack());
    }
  }, [arrowRightPress]);

  useEffect(() => {
    if (currentTrack && arrowLeftPress) {
      dispatch(playPrevTrack());
    }
  }, [arrowLeftPress]);

  useEffect(() => {
    const deezerService = async () => {
      // todo: take appId from .env
      return await createDeezerService(400384);
    };

    deezerService().then((service: Deezer) => {
      setService(service);
      service.subscribe(
        DeezerEventsEnum.PLAYER_POSITION,
        ([position, duration]: [position: number, duration: number]) => {
          dispatch(setPosition(position));
        }
      );

      service.subscribe(DeezerEventsEnum.TRACK_END, (position: number) => {
        // play next
        dispatch(playNextTrack());
        dispatch(resetPlayerState());
      });
    });
  }, []);
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 min-h-screen">
      <div className="container mx-auto">
        <Header />

        <div className="flex justify-center items-center h-[800px]">
          <div className="rounded-md flex w-full justify-center shadow-neutral-800/20 dark:shadow-neutral-800/20 shadow-xl border dark:border-neutral-600/20">
            <div id="dz-root"></div>
            <div className="p-6 bg-neutral-200/40 dark:bg-neutral-800/40 w-full">
              <div className="flex items-center justify-between">
                <Search />
              </div>
              <Tracks />
            </div>
            <Aside />
          </div>
        </div>
      </div>
    </div>
  );
}
