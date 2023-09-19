import { IconBaseProps } from "react-icons";
import { Link } from "react-router-dom";

interface ButtonIconProps {
  icon: IconBaseProps;
  router: string;
}

export const NavLink = ({ icon, router }: ButtonIconProps) => {
  return (
    <li className="relative w-full text-black dark:text-white  rounded-tl-[20px] rounded-bl-[20px] active:bg-[#cecec0] ">
      {/* <b className="absolute none -top-[20px] h-[20px] w-full bg-[#cecec0] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#4d5c61] before:rounded-br-[20px]"></b>
      <b className="absolute none -bottom-[20px] h-[20px] w-full bg-[#cecec0] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#4d5c61] before:rounded-tr-[20px]"></b> */}
      <Link
        to={router}
        className="relative w-full flex mt-5 active:text-[#4d5c61]"
      >
        <span className="pt-3 pl-2 pb-3">
          <>{icon}</>
        </span>
      </Link>
    </li>
  );
};
