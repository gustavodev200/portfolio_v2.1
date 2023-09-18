import { IconBaseProps } from "react-icons";

interface ButtonIconProps {
  icon: IconBaseProps;
}

export const NavLink = ({ icon }: ButtonIconProps) => {
  return (
    <li className="relative active:bg-[#cecec0] w-full text-black dark:text-white ">
      <a href="#" className="relative  w-full flex  mt-5 active:text-[#4d5c61]">
        <span className="pt-3 pl-2 pb-3">
          <>{icon}</>
        </span>
      </a>
    </li>
  );
};
