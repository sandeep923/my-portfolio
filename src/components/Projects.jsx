// import React, { useState, useEffect } from "react";
// import axios from "../utils/axios";
// import { GoProjectRoadmap } from "react-icons/go";
// import Card from "./Card";
// import Heading from "./Heading";
// import { motion } from "framer-motion";
// import Loading from "./Loader/Loading";
// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   // GitHub Repo
//   const gitHubProjectHandler = async () => {
//     try {
//       const { data } = await axios.get("/ravi181919/repos");
//       const filter = data.filter((repos) => repos.homepage);
//       setProjects(filter);
//       // setProjects(data) // if you wnat to show all repos
//     } catch (error) {
//       console.error("Error fetching GitHub repositories:", error);
//     }
//   };

//   useEffect(() => {
//     document.title = "Ravi Gupta | Projects";
//     gitHubProjectHandler();
//   }, []);

//   return projects.length > 0 ? (
//     <div className="w-full flex flex-col justify-center items-center dark:text-white/65 backdrop-blur-lg text-black/75">
//       {/* Heading */}
//       <Heading title={"Projects"} Icon={GoProjectRoadmap} />

//       <motion.div
//         className="text-center"
//         initial={{opacity: 0, scale: 0.5, }}
//         whileInView={{opacity: 1, scale: 1, }}
//         transition={{ duration: 0.8, ease: "easeInOut" }}
//       >
//         <h1 className="text-3xl lg:text-4xl font-black w-full text-center mb-2">
//           Explore my <span className="text-yellow-400">Projects</span>
//         </h1>

//         <p className=" text-xs lg:text-sm font-medium w-full text-center mb-10 ">
//          A showcase of innovative web applications crafted with modern
//           technologies demonstrating creativity and technical expertise.
//         </p>
//       </motion.div>
//       {/* Cards */}
//       <div className="w-full lg:py-1 mb-6 lg:flex-wrap overflow-x-auto scrollbar-hidden lg:w-full dark:text-white/65  text-black/75 h-fit flex items-center lg:items-center lg:justify-center justify-start gap-4 lg:px-5 px-4">
//         {projects.length > 0 ? (
//           projects.map((repo) => <Card key={repo.id} projects={repo} />)
//         ) : (
//           <Loading />
//         )}
//       </div>
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default Projects;


// import React, { useState, useEffect } from "react";
// import axios from "../utils/axios";
// import { GoProjectRoadmap } from "react-icons/go";
// import Card from "./Card";
// import Heading from "./Heading";
// import { motion } from "framer-motion";
// import Loading from "./Loader/Loading";
// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const gitHubProjectHandler = async () => {
//     try {
//       const { data } = await axios.get("/sandeep923/repos");
//       const filter = data.filter((repos) => repos.homepage);
//       setProjects(filter);
//     } catch (error) {
//       console.error("Error fetching GitHub repositories:", error);
//     }
//   };

//   useEffect(() => {
//   document.title = "Sandeep Gupta | Projects";
//     gitHubProjectHandler();
//   }, []);

//   return projects.length > 0 ? (
//     <div className="w-full flex flex-col justify-center items-center dark:text-white/65 backdrop-blur-lg text-black/75">
//       {/* Heading */}
//       <Heading title={"Projects"} Icon={GoProjectRoadmap} />

//       <motion.div
//         className="text-center"
//         initial={{opacity: 0, scale: 0.5, }}
//         whileInView={{opacity: 1, scale: 1, }}
//         transition={{ duration: 0.8, ease: "easeInOut" }}
//       >
//         <h1 className="text-3xl lg:text-4xl font-black w-full text-center mb-2">
//           Explore my <span className="text-yellow-400">Projects</span>
//         </h1>

//         <p className=" text-xs lg:text-sm font-medium w-full text-center mb-10 ">
//          A showcase of innovative web applications crafted with modern
//           technologies demonstrating creativity and technical expertise.
//         </p>
//       </motion.div>
//       {/* Cards */}
//       <div className="w-full lg:py-1 mb-6 lg:flex-wrap overflow-x-auto scrollbar-hidden lg:w-full dark:text-white/65  text-black/75 h-fit flex items-center lg:items-center lg:justify-center justify-start gap-4 lg:px-5 px-4">
//         {projects.length > 0 ? (
//           projects.map((repo) => <Card key={repo.id} projects={repo} />)
//         ) : (
//           <Loading />
//         )}
//       </div>
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default Projects;

import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import { GoProjectRoadmap } from "react-icons/go";
import Card from "./Card";
import Heading from "./Heading";
import { motion } from "framer-motion";
import Loading from "./Loader/Loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const gitHubProjectHandler = async () => {
    try {
      const { data } = await axios.get("/sandeep923/repos");
      const sorted = data
        .filter((repo) => !repo.fork)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
      setProjects(sorted);
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Sandeep Gupta | Projects";
    gitHubProjectHandler();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="w-full flex flex-col justify-center items-center dark:text-white/65 text-black/75 px-4 py-6">

      <Heading title={"Projects"} Icon={GoProjectRoadmap} />

      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-3xl lg:text-4xl font-black text-center mb-2">
          Explore my <span className="glow-text">Projects</span>
        </h1>
        <p className="text-xs lg:text-sm font-medium text-center text-zinc-500 dark:text-zinc-400">
          A showcase of innovative web applications crafted with modern
          technologies demonstrating creativity and technical expertise.
        </p>
      </motion.div>

      {projects.length === 0 ? (
        <p className="text-sm text-zinc-400">No projects found.</p>
      ) : (
        <div className="w-full max-w-screen-lg flex flex-wrap justify-center gap-4">
          {projects.map((repo) => (
            <Card key={repo.id} projects={repo} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Projects;