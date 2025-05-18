import { useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";

const MainScreen = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity and scale based on scroll
  const opacity = Math.max(1 - scrollY / 300, 0); // fade out after ~300px
  const scale = Math.max(1 - scrollY / 1000, 0.95); // scale down slightly

  return (
    <>
      <section
        className="min-h-screen flex flex-col justify-center items-center relative z-10 transition-all duration-300 ease-in-out"
        style={{
          opacity,
          transform: `scale(${scale})`,
          transition: "opacity 0.2s, transform 0.2s",
        }}
      >
        <div className="flex flex-col gap-10 mt-32">
          {/* Top Badge */}
          <div className="h-full flex">
            <div className="m-auto bg-[rgba(61,116,237,0.15)] border border-[rgba(61,116,237,0.23)] p-2 px-3 rounded-2xl justify-center items-center gap-2 leading-none flex flex-row text-xs sm:text-sm font-semibold text-main">
              <div className="relative w-3 h-3 flex items-center justify-center">
                <div className="absolute w-3 h-3 rounded-full bg-[rgb(61,116,237)] opacity-30 animate-ping" />
                <div className="h-1.5 w-1.5 sm:w-2 sm:h-2 rounded-full bg-[rgb(61,116,237)] z-10 shadow-md " />
              </div>
              <span>Currently looking for an opportunity</span>
              <IoArrowForward size={10} />
            </div>
          </div>

          {/* Name */}
          <div className="m-auto text-3xl sm:text-5xl md:text-7xl font-bold text-main flex text-center flex-col flex-1">
            <h1>Kirtiman Patel</h1>
            <h1>Fullstack Developer</h1>
          </div>

          {/* Subtitle */}
          <span className="text-center max-sm:text-xs px-10 leading-none max-sm:font-medium text-second">
            Crafting innovative, high‑performance web experiences—together.
          </span>

          {/* Buttons */}
          <div className="flex max-sm:flex-col px-12 justify-center gap-5 items-center">
            <div className="bg-main max-sm:w-full text-white flex font-medium text-xs sm:text-sm justify-center items-center leading-none py-3 gap-1 rounded-xl cursor-pointer hover:bg-main-hover transition-all duration-200 shadow-sm px-5">
              <span>Discover my project</span>
              <IoArrowForward size={12} />
            </div>
            <div className="border max-sm:w-full border-zinc-300 text-zinc-800 dark:text-zinc-100 dark:border dark:border-[rgba(147,197,253,0.2)] flex font-medium text-xs sm:text-sm justify-center items-center leading-none py-3 gap-1 rounded-xl cursor-pointer hover:bg-main-ligt transition-all duration-200 shadow-sm px-5">
              <span>Download my CV</span>
            </div>
          </div>
        </div>
      </section>

      {/* Background Blurs */}
      <div className="absolute inset-0 flex -z-10">
        <div className="h-96 absolute -top-16 -left-20 w-[40%] blur-[10rem] opacity-20 rounded-full bg-main"></div>
        <div className="h-40 bottom-24 absolute right-20 rounded-full blur-[10rem] opacity-80 w-[20%] bg-purple-600"></div>
      </div>
    </>
  );
};

export default MainScreen;
