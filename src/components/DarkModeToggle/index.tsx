import { ToggleThemeButtonProps } from "../models";
import { HiLightBulb } from "react-icons/hi";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const DarkModeToggle = ({
  toggleTheme,
  theme,
}: ToggleThemeButtonProps) => {
  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2 rounded  text-black dark:text-white font-semibold"
    >
      {theme === "dark" ? (
        <HiLightBulb size={28} />
      ) : (
        <BsFillMoonStarsFill size={28} />
      )}
    </button>
  );
};
