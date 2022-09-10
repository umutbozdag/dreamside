import Image from "next/image";
import { useSelector } from "react-redux";
import albumPic from "../../../public/album.png";
import Player from "../player";
import { RootState } from "../redux/store";

const Aside = () => {
  const { currentTrack } = useSelector((state: RootState) => state.player);
  return (
    <div className="flex items-center flex-col bg-slate-300/30 rounded-r-md border-l border-neutral-300/20 dark:border-neutral-600/20 dark:bg-zinc-900 px-6">
      <div className="mt-12">
        <Player />
      </div>
    </div>
  );
};

export default Aside;
