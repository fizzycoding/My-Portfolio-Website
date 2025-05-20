import ProjectCard from "../../components/ProjectCard";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import portfolioImage from "../../assets/image.png";
import uiVaultImage from "../../assets/uivaiult.png";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "React Portfolio",
    description:
      "A personal portfolio built with React and TailwindCSS to showcase my skills, experience, and projects.",
    image: portfolioImage,
    techStack: ["React", "TailwindCSS", "TypeScript", "Framer motion"],
    demoLink: "https://your-portfolio-site.com",
    githubLink: "https://github.com/fizzycoding/My-Portfolio-Website",
  },
  {
    title: "UI Vault",
    description: "UI Components, with complete code ",
    image: uiVaultImage,
    techStack: ["React", "Javascript", "Tailwind"],
    demoLink: "https://uivault.vercel.app/",
    githubLink: "https://github.com/fizzycoding/UI-Vault",
  },
];

const PersonalProject = () => {
  return (
    <div>
      <section className="overflow-hidden min-h-screen pb-10 pt-20 md:pt-32 relative px-3 z-10 max-w-6xl m-auto justify-center items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-main text-center">
          My Projects
        </h2>
        <p className="text-center text-second max-sm:px-3 max-sm:text-sm max-w-2xl mt-4 dark:text-zinc-400 m-auto">
          A showcase of real-world projects I've built using modern
          technologies.
        </p>

        <div className="mt-14">
          <div className="flex gap-2 flex-col mb-6">
            <h3 className="text-xl text-zinc-950 dark:text-zinc-50 md:text-2xl font-bold ">
              Personal Projects
            </h3>
            <p className="text-second max-sm:text-sm max-w-2xl  dark:text-zinc-400 ">
              Projects that helped me grow as a developer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <a target="_blank" href="https://github.com/fizzycoding/">
            <div className="mt-10 bg-gray-50 cursor-pointer text-black flex justify-center items-center leading-none text-sm m-auto font-medium w-full sm:w-52 gap-2 transition-all hover:gap-4 shadow-md p-3 border rounded-lg">
              <span>See my all projects</span>
              <FaArrowUpRightFromSquare />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PersonalProject;
