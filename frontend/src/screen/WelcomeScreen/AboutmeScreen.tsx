import { FiCoffee } from "react-icons/fi";
import { HiCode } from "react-icons/hi";
import { LuBrain } from "react-icons/lu";
import AboutCard from "../../components/AboutCard";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TiFlashOutline } from "react-icons/ti";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const AboutData = [
  {
    icon: <HiCode size={17} />,
    title: "Lifelong Learner",
    tailwindClass: "sm:col-span-3 sm:row-start-1",
    description:
      "Always exploring modern tech like React, Tailwind, Node.js & MongoDB to build real-world apps.",
  },
  {
    icon: <LuBrain />,
    title: "Creative Builder",
    tailwindClass: "sm:col-span-2 sm:col-start-4 sm:row-start-1",
    description:
      "Blending logic and design to craft simple, meaningful user experiences.",
  },
  {
    icon: <FiCoffee size={18} />,
    title: "Passion-Driven Coding",
    tailwindClass: "sm:col-span-2 sm:col-start-4 sm:row-start-2",
    description:
      "As a fresher, I give 100% to clean, efficient, and scalable code.",
  },
  {
    icon: <TiFlashOutline />,
    tailwindClass: "sm:col-span-3 sm:col-start-1 sm:row-start-2",
    title: "Performance First",
    description:
      "Fast, responsive, and smooth — I focus on getting the details right.",
  },
  {
    icon: <HiOutlineRocketLaunch size={18} />,
    title: "Always Growing",
    tailwindClass: "sm:col-span-5 sm:col-start-1 sm:row-start-3",
    description:
      "I stay up-to-date with new tools and techniques, and actively work on personal projects to sharpen my skills and give back to the dev community.",
  },
];

const AboutmeScreen = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <section className="overflow-hidden py-10 relative z-10 max-w-5xl m-auto justify-center items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-main text-center">
          About me
        </h2>
        <p className="text-center text-second max-sm:px-3 max-sm:text-sm sm:font-medium max-w-2xl mt-5 dark:text-zinc-400 m-auto">
          I'm a passionate Web and App Developer, currently a fresher, focused
          on building clean and functional user experiences. I believe in
          consistency, daily learning, and continuously improving to craft
          better digital solutions.
        </p>

        <div
          className="grid sm:grid-cols-5 sm:grid-rows-3 p-3 sm:p-10 sm:gap-10 gap-4 max-sm:mt-5 w-full max-w-7xl"
          ref={ref}
        >
          {AboutData.map(({ icon, title, description, tailwindClass }, i) => (
            <motion.div
              key={i}
              className={tailwindClass}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            >
              <AboutCard
                icon={icon}
                title={title}
                description={description}
                tailwindClass="w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutmeScreen;
