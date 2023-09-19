import { ToggleThemeButtonProps } from "../models";

import { BsFillMoonStarsFill, BsBrightnessHighFill } from "react-icons/bs";

export const DarkModeToggle = ({
  toggleTheme,
  theme,
}: ToggleThemeButtonProps) => {
  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="ml-1 mt-5  rounded  text-black dark:text-white font-semibold"
    >
      {theme === "dark" ? (
        <BsBrightnessHighFill size={32} />
      ) : (
        <BsFillMoonStarsFill size={28} />
      )}
    </button>
  );
};
