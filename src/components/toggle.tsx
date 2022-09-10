import React, { useState, useEffect } from "react";
import MoonIcon from "./icons/moon";
import SunIcon from "./icons/sun";
import { useDispatch } from "react-redux";

import { changeDarkMode } from "./redux/reducers/darkMode";

const Toggle = () => {
  const [isDark, setDarkmode] = useState<boolean>();

  const dispatch = useDispatch();

  const handleOnToggle = () => {
    setDarkmode(!isDark);
  };

  useEffect(() => {
    if (isDark === true) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      dispatch(changeDarkMode(localStorage.theme));
    }
    if (isDark === false) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      dispatch(changeDarkMode(localStorage.theme));
    }
  }, [isDark, dispatch]);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDarkmode(true);
    }
  }, []);

  return (
    <>
      <button>
        {isDark ? (
          <SunIcon onClick={handleOnToggle} className="text-neutral-200 hover:text-neutral-400" />
        ) : (
          <MoonIcon onClick={handleOnToggle} className="text-neutral-800 hover:text-neutral-600" />
        )}
      </button>
    </>
  );
};

export default Toggle;
