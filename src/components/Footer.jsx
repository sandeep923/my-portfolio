import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigationLinks = [
    { URL: "/home", name: "Home" },
    { URL: "/skills", name: "Skills" },
    { URL: "/projects", name: "Projects" },
    { URL: "/contact", name: "Contact" },
  ];

  const socialLinks = [
    {
      URL: "https://github.com/sandeep923",
      name: "GitHub",
      icon: FaGithub,
    },
    {
      URL: "https://www.linkedin.com/in/sandeep-gupta-254099233/",
      name: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      URL: "https://www.instagram.com/sandeepsg700/",
      name: "Instagram",
      icon: FaInstagram,
    },
    {
      URL: "https://x.com/sandeepsg700",
      name: "Twitter",
      icon: FaXTwitter,
    },
  ];

  const animationSettings = { duration: 0.8, ease: "easeInOut" };

  return (
    <footer className="w-full skill-bg dark:text-white text-black">

      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-8 lg:px-16 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10">

          <motion.div
            className="flex flex-col gap-1 cursor-pointer"
            onClick={scrollToTop}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={animationSettings}
          >
            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter leading-none">
              Sandeep's
            </h1>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter leading-none ">
              Portfolio.
            </h1>
            <p className="text-xs sm:text-sm opacity-70 mt-2 max-w-[200px]">
              Frontend Developer based in Kathmandu, Nepal.
            </p>
          </motion.div>

          <div className="flex gap-10 sm:gap-16">

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={animationSettings}
            >
              <h3 className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4">
                Navigation
              </h3>
              <ul className="flex flex-col gap-3">
                {navigationLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.URL}
                    className="capitalize LinkAnimation font-medium text-xs sm:text-sm dark:after:bg-white"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={animationSettings}
            >
              <h3 className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4">
                Social
              </h3>
              <ul className="flex flex-col gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium text-xs sm:text-sm hover:text-indigo-400 transition-colors duration-200 group"
                  >
                    <social.icon
                      size={14}
                      className="opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                    />
                    {social.name}
                  </a>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-white/10" />

      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-8 lg:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs opacity-80 text-center sm:text-left">
          © {new Date().getFullYear()} Sandeep Kumar Gupta. All rights reserved.
        </p>
        <p className="text-xs opacity-80">
          Built with React.js & Tailwind CSS
        </p>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-lg bg-white/10 hover:bg-indigo-500/30 transition-colors duration-200"
        >
          <HiArrowUp size={12} />
          Back to top
        </motion.button>
      </div>

    </footer>
  );
};

export default Footer;
