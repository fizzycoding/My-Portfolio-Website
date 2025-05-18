import { FaRegFolder } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";
import { MdOutlineAccessTime } from "react-icons/md";
import { VscTools } from "react-icons/vsc";

const stats = [
  {
    title: "3+",
    subtitle: "Completed projects",
    icon: <FaRegFolder size={20} />,
  },
  {
    title: "Fresher",
    subtitle: "Years of experience",
    icon: <MdOutlineAccessTime size={20} />,
  },
  {
    title: "500+",
    subtitle: "Hours coding",
    icon: <LuCodeXml size={20} />,
  },
  {
    title: "10+",
    subtitle: "Technologies used",
    icon: <VscTools size={20} />,
  },
];

const AboutMeScreen = () => {
  return (
    <div>
      <section className="overflow-hidden py-20 min-h-screen relative z-10 max-w-6xl m-auto flex flex-col">
        <div className="sm:min-h-96 flex justify-center flex-col gap-10 m-auto">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold ">
              Who am I?
            </h2>
            <p className="text-second max-sm:px-3 max-sm:text-sm sm:font-medium mt-5 dark:text-zinc-400 m-auto">
              I'm a passionate Web & App Developer focused on building clean,
              functional, and user-friendly experiences. I enjoy turning ideas
              into real products and continuously learning to improve my skills
            </p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold  ">
              What I Do?
            </h2>
            <ul className="ml-2 list-disc list-outside pl-3 max-sm:pl-5 text-second max-sm:px-3 max-sm:text-sm sm:font-medium mt-5 dark:text-zinc-400">
              <li>10+ projects built using React, TypeScript & Next.js</li>
              <li className="mt-2">
                Working with MongoDB, Express, and REST APIs
              </li>
              <li className="mt-2">Open-source contributor on GitHub</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 max-md:mt-10 max-sm:mt-5 max-sm:flex-col bg-zinc-50 dark:bg-[rgba(255,255,255,0.007)] p-5 sm:p-10 rounded-2xl flex-wrap">
          {stats.map((item, index) => (
            <div
              key={index}
              className="border-2 flex flex-1 min-w-[200px] flex-col gap-4 hover:scale-[1.01] border-zinc-300 p-5 sm:p-8 rounded-lg transition-all duration-300 dark:bg-darkbg dark:border-[#f8f8f816] shadow-md justify-between"
            >
              <div className="text-main flex justify-between flex-1 flex-col items-center">
                <div className="flex mb-3">
                  <div className="text-main bg-main-ligt p-3 flex justify-center items-center rounded-full">
                    {item.icon}
                  </div>
                </div>
                <div className="justify-center items-center flex-col flex">
                  <span className="text-zinc-950 dark:text-zinc-50 font-bold text-2xl sm:text-3xl leading-none">
                    {item.title}
                  </span>
                  <span className="text-second text-nowrap dark:text-zinc-400 max-md:text-sm max-sm:text-xs leading-none text-center">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMeScreen;
