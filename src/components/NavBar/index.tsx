import { DarkModeToggle } from "..";
import { applyThemePreference } from "../../helpers/utils/applyThemePreference";
import useThemeStore from "../../store/useThemeStore";
import { useEffect } from "react";
import { BiSolidHome } from "react-icons/bi";

import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { VscProject } from "react-icons/vsc";
import { NavLink } from "./components/NavLink";

import { Link } from "react-router-dom";

export const NavBar = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);
  return (
    <nav className="bg-[#cecec0] dark:bg-[#4d5c61] lg:w-20 lg:h-[91.5%] fixed lg:top-10 lg:left-10 lg:bottom-10 z-10 rounded-3xl items-start justify-center mr-5 max-lg:w-[99%] max-lg:h-20 max-lg:bottom-1">
      <ul className="absolute top-0 left-0 w-full h-full pl-[1.20rem]  pb-5 flex flex-col justify-between ">
        <div className="w-14 h-14 -ml-[0.40rem] max-lg:-ml-[0.70rem] mt-5 max-lg:mt-[0.80rem] flex items-center justify-center">
          <Link to="/">
            <img
              src="/profile.png"
              className="rounded-full border-[#4d5c61] dark:border-white border-2 cursor-pointer"
              alt="Profile Logo NavBar"
            />
          </Link>
        </div>

        <div className="max-lg:w-full max-lg:flex max-lg:top-0 max-lg:absolute">
          <NavLink router="/" icon={<BiSolidHome size={28} />} />
          <NavLink router="/projects" icon={<VscProject size={28} />} />
          <NavLink router="/" icon={<MdOutlineLocalGroceryStore size={28} />} />
        </div>
        <div>
          <DarkModeToggle toggleTheme={toggleTheme} theme={theme} />
        </div>
      </ul>
    </nav>
  );
};
