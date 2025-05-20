import type { FC, ReactElement } from "react";

type NavOptionProps = {
  icon: ReactElement;
  title: string;
  active?: boolean;
};

const NavOptions: FC<NavOptionProps> = ({ icon, title, active }) => {
  return (
    <div
      className={`flex flex-row cursor-pointer gap-0.5 items-center justify-center  transition-colors duration-300 ${
        active ? "text-main" : "text-gray-500 hover:text-main"
      }`}
    >
      {icon}
      <span className="text-sm font-semibold">{title}</span>
    </div>
  );
};

export default NavOptions;
