import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";

const ContactPage = () => {
  return (
    <div>
      <section className="overflow-hidden md:py-20 relative z-1 max-sm:mb-5 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-main text-center">
          Contact
        </h2>
        <p className="text-center text-second max-sm:px-3 max-sm:text-sm sm:font-medium max-w-2xl mt-5 dark:text-zinc-400 m-auto">
          Got a project idea? Don't hesitate to contact me to discuss it.
        </p>

        <div className="w-full flex-col gap-4 justify-center items-center px-3 flex mt-5  sm:mt-16">
          <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:p-3 w-full max-w-xl gap-6 justify-between bg-zinc-50 border-zinc-100 hover:border-zinc-200 transition-all dark:bg-[rgba(255,255,255,0.01)] hover:scale-[1.01] p-5 rounded-md border dark:border-zinc-800">
            <div className="flex">
              <div className="text-main bg-main-ligt max-sm:h-8 max-sm:w-8 h-10 w-10 flex justify-center items-center rounded-lg">
                <MdOutlineMail size={22} />
              </div>
            </div>
            <div className="flex-1 gap-1 flex flex-col">
              <h3 className="sm:text-lg font-semibold">E-mail</h3>
              <a
                href="mailto:fizzycoding@gmail.com"
                className="text-main cursor-pointer hover:underline font-semibold sm:text-lg"
              >
                fizzycoding@gmail.com
              </a>
              <p className="text-second dark:text-zinc-400 max-sm:text-sm">
                Mail me for any project or collaboration request
              </p>
            </div>
          </div>

          <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:p-3 w-full max-w-xl gap-6 justify-between bg-zinc-50 border-zinc-100 hover:border-zinc-200 transition-all dark:bg-[rgba(255,255,255,0.01)] hover:scale-[1.01] p-5 rounded-md border dark:border-zinc-800">
            <div className="flex">
              <div className="text-main bg-main-ligt max-sm:h-8 max-sm:w-8 h-10 w-10 flex justify-center items-center rounded-lg">
                <MdOutlineLocationOn size={22} />
              </div>
            </div>
            <div className="flex-1 gap-1 flex flex-col">
              <h3 className="sm:text-lg font-semibold">Location</h3>
              <span className="text-main font-semibold sm:text-lg">
                Korba, Chhattisgarh, India
              </span>
              <p className="text-second dark:text-zinc-400 max-sm:text-sm">
                Feel free to reach out for any project inquiries.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 max-sm:p-3 w-full max-w-xl  justify-between bg-zinc-50 border-zinc-100 hover:border-zinc-200 transition-all dark:bg-[rgba(255,255,255,0.01)] hover:scale-[1.01] p-5 rounded-md border dark:border-zinc-800">
            <h3 className="sm:text-lg font-semibold">Social Links</h3>
            <div className="flex gap-5 items-center">
              <a href="https://github.com/fizzycoding" target="_blank">
                <div className="flex">
                  <div className="transition-all text-black dark:hover:text-main dark:text-zinc-200 hover:text-main cursor-pointer hover:bg-main-ligt max-sm:h-8 max-sm:w-8 h-10 w-10 flex justify-center items-center rounded-lg">
                    <LuGithub size={22} />
                  </div>
                </div>
              </a>

              <a href="https://linkedin.com/in/kirtiman-patel" target="_blank">
                <div className="flex">
                  <div className="transition-all text-black dark:hover:text-main dark:text-zinc-200 hover:text-main cursor-pointer hover:bg-main-ligt max-sm:h-8 max-sm:w-8 h-10 w-10 flex justify-center items-center rounded-lg">
                    <FaLinkedinIn size={22} />
                  </div>
                </div>
              </a>

              <a href="https://www.instagram.com/fizzycoding/" target="_blank">
                <div className="flex">
                  <div className="transition-all text-black dark:hover:text-main dark:text-zinc-200 hover:text-main cursor-pointer hover:bg-main-ligt max-sm:h-8 max-sm:w-8 h-10 w-10 flex justify-center items-center rounded-lg">
                    <FaInstagram size={22} />
                  </div>
                </div>
              </a>

              <a href="https://x.com/fizzycoding" target="_blank">
                <div className="flex">
                  <div className="transition-all text-black dark:hover:text-main dark:text-zinc-200 hover:text-main cursor-pointer hover:bg-main-ligt max-sm:h-8 max-sm:w-8 h-10 w-10 flex justify-center items-center rounded-lg">
                    <BsTwitterX size={22} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
