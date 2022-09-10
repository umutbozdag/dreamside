import Link from "next/link";
import MoonIcon from "../icons/moon";
import SunIcon from "../icons/sun";
import Toggle from "../toggle";

const Header = () => {
  return (
    <div className="h-16 flex items-center justify-between mb-6">
      <div className="text-[20px] text-slate-900 dark:text-slate-200">
        Dreamside
      </div>

      <Toggle />
    </div>
  );
};

export default Header;
