import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavOptions from "./NavOptions";
import { FiHome, FiSend } from "react-icons/fi";
import { LuCodeXml, LuMoon, LuSun } from "react-icons/lu";
import { ImStack } from "react-icons/im";
import { GoPerson } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { RiMenuLine } from "react-icons/ri";

const navItems = [
  { title: "Welcome", icon: <FiHome />, route: "/" },
  { title: "About", icon: <GoPerson />, route: "/about" },
  { title: "Projects", icon: <LuCodeXml />, route: "/projects" },
  { title: "Stack", icon: <ImStack />, route: "/stack" },
  { title: "Contact", icon: <FiSend />, route: "/contact" },
];

function TopNavBar() {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState<boolean>(
    () => localStorage.getItem("theme") === "dark"
  );
  const [opened, setOpened] = useState(false);
  const [height, setHeight] = useState<number>(0);

  const navTop = useRef<HTMLDivElement>(null);
  useEffect(() => {
    navTop && navTop.current && setHeight(navTop.current.clientHeight);
  }, []);

  const activeRoute =
    navItems.find((item) => item.route === location.pathname)?.title ||
    "Welcome";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    if (!navRef.current) return;
    const el = navRef.current.querySelector(`[data-title="${activeRoute}"]`);
    if (el instanceof HTMLElement) {
      const left = el.offsetLeft + el.offsetWidth / 2;
      setUnderlineStyle({
        left,
        width: el.offsetWidth * 0.9,
      });
    }
  }, [activeRoute]);

  return (
    <div
      ref={navTop}
      className={`z-50 fixed w-full p-3 bg-clip-padding backdrop-filter backdrop-blur-md items-center flex justify-between transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-darkbg bg-opacity-60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="items-center flex justify-between max-w-6xl m-auto w-full">
        <span className="text-main font-bold text-2xl max-sm:text-lg">Kirtiman</span>
        <div
          ref={navRef}
          className="relative hidden md:flex gap-8 flex-row justify-center items-center"
        >
          {/* Underline */}
          <span
            className="absolute -bottom-1.5 h-[2px] bg-main transition-all duration-300"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
              transform: "translateX(-50%)",
            }}
          />

          {/* Nav Items */}
          {navItems.map((item) => (
            <Link to={item.route}>
              <div key={item.title} data-title={item.title}>
                <NavOptions
                  icon={item.icon}
                  title={item.title}
                  active={activeRoute === item.title}
                />
              </div>
            </Link>
          ))}
        </div>

        {opened && (
          <div
            style={{ top: height }}
            className={`dark:bg-darkbg border-t bg-white shadow-sm left-0 right-0 w-full justify-center absolute md:hidden flex flex-col`}
          >
            {navItems.map((item) => (
              <Link to={item.route}>
                <div
                  className="flex p-3"
                  key={item.title}
                  onClick={() => setOpened(false)}
                  data-title={item.title}
                >
                  <NavOptions
                    icon={item.icon}
                    title={item.title}
                    active={activeRoute === item.title}
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
        <div className="flex justify-center items-center gap-3">
          <div
            className="cursor-pointer flex justify-center items-center gap-3 hover:bg-main-ligt p-1.5 rounded-md"
            onClick={() => setDark((prev) => !prev)}
          >
            {dark ? <LuMoon /> : <LuSun />}
          </div>
          <div
            className="cursor-pointer hidden max-md:flex justify-center items-center gap-3 hover:bg-main-ligt p-1.5 rounded-md"
            onClick={() => setOpened((prev) => !prev)}
          >
            {opened ? <RxCross2 /> : <RiMenuLine />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
