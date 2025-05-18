import type { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

type NavOptionProps = {
  icon: ReactElement;
  title: string;
  active?: boolean;
  route: string;
};

const NavOptions: FC<NavOptionProps> = ({ icon, title, active, route }) => {
  return (
    <Link to={route}>
      <div
        className={`flex flex-row cursor-pointer gap-0.5 items-center justify-center transition-colors duration-300 ${
          active ? "text-main" : "text-gray-500 hover:text-main"
        }`}
      >
        {icon}
        <span className="text-sm font-semibold">{title}</span>
      </div>
    </Link>
  );
};

export default NavOptions;
