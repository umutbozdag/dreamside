import { useEffect } from "react";
import useTracks from "../swr/useTracks";
import TrackItem from "./track-item";
import TrackItemSkeleton from "./track-item-skeleton";
const Tracks = () => {
  const { tracks, isLoading } = useTracks();

  return (
    <div className="overflow-x-hidden mt-6">
      <h2 className="text-2xl mb-4 dark:text-neutral-300">
        Top tracks from your country
      </h2>
      <div className="overflow-y-auto h-[600px]">
        {isLoading &&
          [...Array(10)].map((x, y) => <TrackItemSkeleton key={y} />)}
        {tracks &&
          !isLoading &&
          tracks.map((track: any) => {
            return <TrackItem track={track} key={track.id}></TrackItem>;
          })}
      </div>
    </div>
  );
};
export default Tracks;
