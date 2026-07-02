import React, { useEffect, useState } from "react";
import iconsArray from "./icons";
import { motion } from "framer-motion";
import axios from "../utils/axios";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  const [githubData, setGithubData] = useState({});

  const HomePageApiCall = async () => {
    try {
      const { data } = await axios.get("sandeep923");
      setGithubData(data);
    } catch (error) {
      console.log(`Home :: ${error}`);
    }
  };

  useEffect(() => {
    document.title = "Sandeep Gupta | Home";
    HomePageApiCall();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col dark:text-white/80 text-black/80">

      <section className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 w-full max-w-screen-lg mx-auto px-4 sm:px-8 lg:px-10 py-16 lg:py-24">

        <motion.div
          className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left w-full lg:w-[55%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Available badge */}
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-semibold border border-green-500/20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </motion.span>

          <motion.p
            className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I'm
          </motion.p>

          <div className="flex flex-col gap-2">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1] dark:text-white text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {githubData.name?.split(" ")[0] || "Sandeep"}
              <br />
              <span className="glow-text">
                {githubData.name?.split(" ").slice(1).join(" ") || "Kumar Gupta"}
              </span>
            </motion.h1>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-[2px] w-8 bg-indigo-500 rounded-full" />
              <p className="text-base sm:text-lg font-semibold tracking-wide opacity-70">
                Frontend Developer
              </p>
            </motion.div>
          </div>

          <motion.p
            className="text-sm sm:text-base opacity-60 max-w-md leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.7 }}
          >
            {githubData.bio ||
              "Building fast, clean, and responsive web experiences using React.js, Next.js & TypeScript."}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full glass-card">
              <FaMapMarkerAlt size={10} className="text-indigo-400" />
              {githubData.location || "Kathmandu, Nepal"}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full glass-card">
              <MdWork size={10} className="text-indigo-400" />
              1.5 yrs experience
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full glass-card">
              <FaGithub size={10} className="text-indigo-400" />
              {githubData.public_repos || "10"}+ public repos
            </span>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="/contact"
              className="accent-btn text-sm py-2.5 px-7 rounded-xl font-semibold"
            >
              Hire Me
            </a>
            <a

              href={`https://github.com/${githubData.login || "sandeep923"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm py-2.5 px-5 rounded-xl glass-card border border-indigo-500/20 hover:border-indigo-500/60 font-semibold transition-all duration-200"
            >
              <FaGithub size={15} />
              GitHub
            </a>
            <a

              href="https://www.linkedin.com/in/sandeep-gupta-254099233/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm py-2.5 px-5 rounded-xl glass-card border border-indigo-500/20 hover:border-indigo-500/60 font-semibold transition-all duration-200"
            >
              <FaLinkedin size={15} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[40%] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-3xl scale-110" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            />
            {/* {githubData.avatar_url ? (
              <img
                src={githubData.avatar_url}
                alt={githubData.name}
                className="relative w-full h-full rounded-full object-cover ring-4 ring-indigo-500/40 shadow-2xl"
              />
            ) : (
              <div className="relative w-full h-full rounded-full glass-card ring-4 ring-indigo-500/40 flex items-center justify-center text-6xl font-black glow-text">
                S
              </div>
            )} */}

            <img
              src="/website/profile.jpg"
              alt="Sandeep Gupta"
              className="relative w-full h-full rounded-full object-cover ring-4 ring-indigo-500/40 shadow-2xl"
            />
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 glass-card px-3 py-1.5 rounded-xl border border-indigo-500/20 text-xs font-bold"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              React.js ⚛️
            </motion.div>
          </div>
        </motion.div>

      </section>

      <motion.section
        className="w-full border-t border-b border-indigo-500/10 py-5 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] opacity-70 mb-4">
          Tech Stack
        </p>
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
          style={{ display: "flex", width: "max-content" }}
        >
          {[...iconsArray, ...iconsArray].map((Icon, index) => (
            <div
              key={index}
              className="flex-shrink-0 dark:text-white/70 text-black/70 hover:text-indigo-500 transition-colors duration-300"
            >
              <Icon size={28} />
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* <motion.div
        className="flex flex-col items-center gap-1.5 py-6 opacity-60 cursor-pointer hover:opacity-60 transition-opacity duration-200"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase ">
          Scroll Down
        </span>
        <HiArrowDown size={14} />
      </motion.div> */}
  <motion.div
      className="flex flex-col items-center gap-1.5 py-6 opacity-60 cursor-pointer hover:opacity-80 transition-opacity duration-200"
      animate={{ y: [0, 6, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      onClick={() => navigate("/projects")}
    >
      <span className="text-[10px] font-bold tracking-[0.25em] uppercase">
        View Projects
      </span>
      <HiArrowDown size={14} />
    </motion.div>
    </div>
  );
};

export default Home;