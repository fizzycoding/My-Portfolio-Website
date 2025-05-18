import type { ReactElement } from "react";

type AboutCardProps = {
  icon: ReactElement;
  title: string;
  description: string;
  tailwindClass?: string;
};
const AboutCard: React.FC<AboutCardProps> = ({
  icon,
  title,
  description,
  tailwindClass,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`border flex flex-col gap-4 hover:scale-[1.01] border-zinc-100 p-5 rounded-lg transition-all duration-300 dark:bg-[rgba(255,255,255,0.005)] hover:dark:bg-[rgba(255,255,255,0.01)]  dark:border-zinc-900 hover:border-zinc-200 hover:bg-gradient-to-t hover:from-[rgba(0,0,0,0.02)] hover:to-[rgba(0,0,0,0.01)] ${tailwindClass}`}
    >
      <div className="text-main flex items-center gap-2">
        {icon}
        <span className="text-zinc-950 dark:text-zinc-50 font-medium sm:text-lg leading-none">
          {title}
        </span>
      </div>
      <p className="sm:text-sm text-xs  text-second dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
};

export default AboutCard;
