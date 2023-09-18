import { DarkModeToggle } from "..";
import { applyThemePreference } from "../../helpers/utils/applyThemePreference";
import useThemeStore from "../../store/useThemeStore";
import { useEffect } from "react";
import { BiSolidHome } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { VscProject } from "react-icons/vsc";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "./components/NavLink";

export const NavBar = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);
  return (
    <nav className="bg-white dark:bg-[#4d5c61] w-20 fixed top-10 left-10 bottom-10 z-10  rounded-3xl items-start justify-center ">
      <ul className="absolute top-0 left-0 w-full h-full pl-[1.25rem] pt-5 pb-5 flex flex-col justify-between ">
        <div>
          <NavLink icon={<BiSolidHome size={28} />} />
        </div>

        <div>
          <NavLink icon={<BiSolidHome size={28} />} />
          <NavLink icon={<MdOutlineLocalGroceryStore size={28} />} />
          <NavLink icon={<VscProject size={28} />} />
          <NavLink icon={<BsTelephoneFill size={28} />} />
          <DarkModeToggle toggleTheme={toggleTheme} theme={theme} />
        </div>
        <div>
          <NavLink icon={<IoSettingsSharp size={28} />} />
          <NavLink icon={<FaUserAlt size={28} />} />
        </div>
      </ul>
    </nav>
  );
};
