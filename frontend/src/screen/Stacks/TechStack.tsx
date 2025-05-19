import { LiaLaptopSolid } from "react-icons/lia";
import StackWithProgress from "../../components/StackWithProgress";
import { FiDatabase, FiServer } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";

const TechStack = () => {
  return (
    <div>
      <section className="overflow-hidden min-h-screen pb-10 pt-20 md:pt-32 relative px-3 z-10 max-w-6xl m-auto justify-center items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-main text-center">
          Tech Stack
        </h2>
        <p className="text-center text-second max-sm:px-3 max-sm:text-sm max-w-2xl mt-4 dark:text-zinc-400 m-auto">
          An overview of the technologies I use to create modern web
          applications.
        </p>

        <div className="grid sm:grid-cols-2 mt-14 gap-5">
          <div className="rounded-lg flex-1  overflow-hidden bg-zinc-50 dark:bg-[rgba(32,35,255,0.03)] border border-[rgba(255,255,255,0.05)] flex flex-col shadow-sm  transition-all">
            <div className="sm:p-5 p-3 flex flex-col h-full gap-2">
              <div className="flex gap-3 items-center">
                <div className="dark:text-main text-main bg-main-ligt max-sm:h-8 max-sm:w-8 h-8 w-8 flex justify-center items-center rounded-lg">
                  <LiaLaptopSolid size={18} />
                </div>
                <span className="font-bold text-lg">Frontend</span>
              </div>
              <div className="flex flex-col gap-5 mt-5 w-full">
                <StackWithProgress stack="React" progress={60} />
                <StackWithProgress stack="Typescript" progress={40} />
                <StackWithProgress stack="TailwindCSS" progress={55} />
              </div>
            </div>
          </div>

          <div className="rounded-lg flex-1 overflow-hidden bg-zinc-50 dark:bg-[rgba(32,35,255,0.03)] border border-[rgba(255,255,255,0.05)] flex flex-col shadow-sm  transition-all">
            <div className="sm:p-5 p-3 flex flex-col h-full gap-2">
              <div className="flex gap-3 items-center">
                <div className="dark:text-main text-main bg-main-ligt max-sm:h-8 max-sm:w-8 h-8 w-8 flex justify-center items-center rounded-lg">
                  <FiServer size={18} />
                </div>
                <span className="font-bold text-lg">Backend</span>
              </div>
              <div className="flex flex-col gap-5 mt-5 w-full">
                <StackWithProgress stack="NodeJS" progress={60} />
                <StackWithProgress stack="Spring Boot" progress={20} />
              </div>
            </div>
          </div>

          <div className="rounded-lg flex-1 overflow-hidden bg-zinc-50 dark:bg-[rgba(32,35,255,0.03)] border border-[rgba(255,255,255,0.05)] flex flex-col shadow-sm  transition-all">
            <div className="sm:p-5 p-3 flex flex-col h-full gap-2">
              <div className="flex gap-3 items-center">
                <div className="dark:text-main text-main bg-main-ligt max-sm:h-8 max-sm:w-8 h-8 w-8 flex justify-center items-center rounded-lg">
                  <FiDatabase size={18} />
                </div>
                <span className="font-bold text-lg">Database</span>
              </div>
              <div className="flex flex-col gap-5 mt-5 w-full">
                <StackWithProgress stack="MongoDB" progress={60} />
              </div>
            </div>
          </div>

          <div className="rounded-lg flex-1 overflow-hidden bg-zinc-50 dark:bg-[rgba(32,35,255,0.03)] border border-[rgba(255,255,255,0.05)] flex flex-col shadow-sm  transition-all">
            <div className="sm:p-5 p-3 flex flex-col h-full gap-2">
              <div className="flex gap-3 items-center">
                <div className="dark:text-main text-main bg-main-ligt max-sm:h-8 max-sm:w-8 h-8 w-8 flex justify-center items-center rounded-lg">
                  <GrTechnology size={18} />
                </div>
                <span className="font-bold text-lg">Other</span>
              </div>
              <div className="flex flex-col gap-5 mt-5 w-full">
                <StackWithProgress stack="Java" progress={30} />
                <StackWithProgress stack="JavaScript" progress={70} />
                <StackWithProgress stack="Redis" progress={50} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
