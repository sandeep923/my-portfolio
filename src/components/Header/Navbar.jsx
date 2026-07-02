import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./nav_style.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const arrayForLinks = [
    { URL: "/home", name: "Home" },
    { URL: "/skills", name: "Skills" },
    { URL: "/projects", name: "Projects" },
    { URL: "/contact", name: "Contact" },
    // {
    //   URL: "https://www.linkedin.com/in/sandeep-gupta-254099233/",
    //   name: "LinkedIn",
    // },
  ];

  const toggleDarkMode = () => {
    const theme = document.documentElement.classList;
    if (darkMode) {
      theme.remove("dark");
      theme.add("light");
    } else {
      theme.remove("light");
      theme.add("dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-md bg-zinc-200/80 dark:bg-zinc-800/80 border-b border-indigo-500/10">
      <div className="w-full max-w-screen-lg mx-auto px-4 py-2 flex items-center justify-between">

        <NavLink to="/" className="w-8 h-8 flex items-center justify-center">
          <img
            src={ "/website/favicon.ico"}
            alt="Logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/default-fallback.png";
            }}
            className="w-full h-full object-cover rounded-full"
          />
        </NavLink>

        <ul className="hidden md:flex items-center gap-8">
          {arrayForLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.URL}
              className="LinkAnimation capitalize font-medium text-sm dark:after:bg-white"
            >
              {link.name}
            </NavLink>
          ))}
          <a

            href="/website/Sandeep_Kumar_Gupta_CV_latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="LinkAnimation capitalize font-medium text-sm dark:after:bg-white text-zinc-800 dark:text-white"
          >
            CV
          </a>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/sandeep923"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-black dark:text-white bg-zinc-100 dark:bg-zinc-700 p-[6px] rounded-lg hover:bg-indigo-500/20 transition-colors duration-200"
          >
            <FaGithub />
          </a>

          <span
            onClick={toggleDarkMode}
            className="text-lg text-black dark:text-white bg-zinc-100 dark:bg-zinc-700 p-[6px] rounded-lg cursor-pointer hover:bg-indigo-500/20 transition-colors duration-200"
          >
            {darkMode ? <FiMoon /> : <MdOutlineLightMode />}
          </span>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl text-black dark:text-white bg-zinc-100 dark:bg-zinc-700 p-[6px] rounded-lg hover:bg-indigo-500/20 transition-colors duration-200 border-none outline-none"
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden w-full bg-zinc-100/95 dark:bg-zinc-800/95 backdrop-blur-md border-t border-indigo-500/10 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {arrayForLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.URL}
                onClick={() => setMenuOpen(false)}
                className="LinkAnimation capitalize font-medium text-sm dark:after:bg-white py-1"
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
