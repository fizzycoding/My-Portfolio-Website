import React from "react";
import { IoIosGlobe } from "react-icons/io";
import { LuGithub } from "react-icons/lu";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techStack,
  demoLink,
  githubLink,
}) => {
  return (
    <div className="rounded-lg overflow-hidden bg-zinc-50 dark:bg-[rgba(32,35,255,0.03)] border border-[rgba(255,255,255,0.05)] flex flex-col shadow-sm  transition-all">
      <img
        src={image}
        alt={title}
        className="min-h-52 max-h-52 object-cover  w-full"
      />

      <div className="sm:p-5 p-3 flex h-full justify-between flex-col gap-4">
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-semibold text-lg text-main hover:underline">
              {title}
            </h3>
            <p className="text-second text-sm mt-1 line-clamp-4">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-main bg-main-ligt rounded-lg px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mt-3">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 leading-none flex justify-center text-sm font-medium items-center gap-1 sm:gap-2 p-2 border rounded-lg hover:bg-[rgba(87,87,216,0.05)]"
          >
            <IoIosGlobe />
            <span>Demo</span>
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border rounded-lg hover:bg-[rgba(87,87,216,0.05)]"
          >
            <LuGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
