import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { RiGitForkLine } from "react-icons/ri";

// Language color mapping (expand as needed)
const languageColors: { [key: string]: string } = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  Go: "#00ADD8",
  C: "#555555",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
  Shell: "#89e051",
  Ruby: "#701516",
  Rust: "#dea584",
  Dart: "#00B4AB",
  default: "#ccc",
};

type RecentGithubProjectsProps = {
  title: string;
  description: string;
  url: string;
  language: string;
  forks: number;
  stars: number;
};

const RecentGithubProjects: React.FC<RecentGithubProjectsProps> = ({
  title,
  description,
  forks,
  language,
  stars,
  url,
}) => {
  const dotColor = languageColors[language] || languageColors.default;

  return (
    <div className="flex flex-col justify-between sm:h-40 bg-zinc-50 border-zinc-100 hover:border-zinc-200 transition-all dark:bg-[rgba(32,35,255,0.03)] dark:border-[rgba(255,255,255,0.05)]  hover:text-main p-3 sm:p-5 rounded-md border">
      <div className="sm:text-lg font-semibold flex justify-between items-center">
        <a target="_blank" href={url} rel="noopener noreferrer">
          <span className="cursor-pointer hover:underline">{title}</span>
        </a>
        <a target="_blank" href={url} rel="noopener noreferrer">
          <MdArrowOutward className="cursor-pointer" />
        </a>
      </div>

      <p className="text-second text-xs sm:text-sm mt-1 line-clamp-2">
        {description}
      </p>

      <div className="flex text-zinc-950 items-center gap-4 mt-2 text-sm dark:text-zinc-400">
        {language && (
          <div className="flex max-sm:text-xs items-center gap-1">
            <div
              className="h-2.5 w-2.5 max-sm:h-2 max-sm:w-2 rounded-full"
              style={{ backgroundColor: dotColor }}
            ></div>
            <span>{language}</span>
          </div>
        )}

        <div className="flex items-center gap-1">
          <FaRegStar />
          <span>{stars}</span>
        </div>

        <div className="flex items-center gap-1">
          <RiGitForkLine />
          <span>{forks}</span>
        </div>
      </div>
    </div>
  );
};

export default RecentGithubProjects;
