import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="overflow-hidden min-h-screen py-20 md:py-20 relative z-10 justify-center max-w-5xl m-auto items-center"
      ref={ref}
    >
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-bold text-main text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Contact
      </motion.h2>

      <motion.p
        className="text-center text-second max-sm:px-3 max-sm:text-sm sm:font-medium max-w-2xl mt-5 dark:text-zinc-400 m-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        Got a project idea? Don't hesitate to contact me to discuss it.
      </motion.p>

      <div className="w-full flex-col gap-4 m-auto justify-center items-center px-3 flex mt-5 sm:mt-16 max-w-xl">
        {[
          // Array of contact blocks for easier animation mapping
          {
            icon: <MdOutlineMail size={22} />,
            title: "E-mail",
            href: "mailto:fizzycoding@gmail.com",
            displayText: "fizzycoding@gmail.com",
            description: "Mail me for any project or collaboration request",
          },
          {
            icon: <MdOutlineLocationOn size={22} />,
            title: "Location",
            displayText: "Korba, Chhattisgarh, India",
            description: "Feel free to reach out for any project inquiries.",
          },
        ].map(({ icon, title, href, displayText, description }, i) => (
          <motion.div
            key={i}
            className="flex max-sm:flex-col max-sm:gap-2 max-sm:p-3 w-full gap-6 justify-between bg-zinc-50 border-zinc-100 hover:border-zinc-200 transition-all dark:bg-[rgba(255,255,255,0.01)] hover:scale-[1.01] p-5 rounded-md border dark:border-zinc-800"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.15 * (i + 2),
              ease: "easeOut",
            }}
          >
            <div className="flex">
              <div className="text-main bg-main-ligt max-sm:h-8 max-sm:w-8 h-10 w-10 flex justify-center items-center rounded-lg">
                {icon}
              </div>
            </div>
            <div className="flex-1 gap-1 flex flex-col">
              <h3 className="sm:text-lg font-semibold">{title}</h3>
              {href ? (
                <a
                  href={href}
                  className="text-main cursor-pointer hover:underline font-semibold sm:text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {displayText}
                </a>
              ) : (
                <span className="text-main font-semibold sm:text-lg">
                  {displayText}
                </span>
              )}
              <p className="text-second dark:text-zinc-400 max-sm:text-sm">
                {description}
              </p>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="flex flex-col gap-4 max-sm:p-3 w-full justify-between bg-zinc-50 border-zinc-100 hover:border-zinc-200 transition-all dark:bg-[rgba(255,255,255,0.01)] hover:scale-[1.01] p-5 rounded-md border dark:border-zinc-800"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
        >
          <h3 className="sm:text-lg font-semibold">Social Links</h3>
          <div className="flex gap-5 items-center">
            {[
              {
                href: "https://github.com/fizzycoding",
                icon: <LuGithub size={22} />,
              },
              {
                href: "https://linkedin.com/in/kirtiman-patel",
                icon: <FaLinkedinIn size={22} />,
              },
              {
                href: "https://www.instagram.com/fizzycoding/",
                icon: <FaInstagram size={22} />,
              },
              {
                href: "https://x.com/fizzycoding",
                icon: <BsTwitterX size={22} />,
              },
            ].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <div className="transition-all text-black dark:hover:text-main dark:text-zinc-200 hover:text-main cursor-pointer hover:bg-main-ligt max-sm:h-8 max-sm:w-8 h-10 w-10 flex justify-center items-center rounded-lg">
                  {icon}
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
