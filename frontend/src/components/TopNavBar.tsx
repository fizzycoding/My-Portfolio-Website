import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavOptions from "./NavOptions";
import { FiHome, FiSend } from "react-icons/fi";
import { LuCodeXml, LuMoon, LuSun } from "react-icons/lu";
import { ImStack } from "react-icons/im";
import { GoPerson } from "react-icons/go";

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
      className={`z-50 fixed w-full p-3 bg-clip-padding backdrop-filter backdrop-blur-md items-center flex justify-between transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-darkbg bg-opacity-60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="items-center flex justify-between max-w-6xl m-auto w-full">
        <span className="text-main font-bold text-lg">Kirtiman</span>
        <div
          ref={navRef}
          className="relative flex gap-8 flex-row justify-center items-center"
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
            <div key={item.title} data-title={item.title}>
              <NavOptions
                route={item.route}
                icon={item.icon}
                title={item.title}
                active={activeRoute === item.title}
              />
            </div>
          ))}
        </div>
        <div
          className="cursor-pointer hover:bg-main-ligt p-1.5 rounded-md"
          onClick={() => setDark((prev) => !prev)}
        >
          {dark ? <LuMoon /> : <LuSun />}
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
  