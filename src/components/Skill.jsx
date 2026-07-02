// import React, { useEffect } from "react";
// import { SiHyperskill } from "react-icons/si";
// import Heading from "./Heading";
// import { motion } from "framer-motion";

// const Skill = () => {
//   useEffect(() => {
//   document.title = "Sandeep Gupta | Skills";
//   }, [])
//   const mySkills = [
//     {
//       nameOfTechnologyOrLanguage: "HTML",
//       performanceInThis: 85,
//       bgColor: "#364953",
//     },
//     {
//       nameOfTechnologyOrLanguage: "CSS",
//       performanceInThis: 80,
//       bgColor: "#5A5549",
//     },
//     {
//       nameOfTechnologyOrLanguage: "JavaScript",
//       performanceInThis: 89,
//       bgColor: "#37B99C",
//     },
//     {
//       nameOfTechnologyOrLanguage: "Tailwind",
//       performanceInThis: 87,
//       bgColor: "#2D8DC1",
//     },
//     {
//       nameOfTechnologyOrLanguage: "React Js",
//       performanceInThis: 85,
//       bgColor: "#E06153",
//     },
//     {
//       nameOfTechnologyOrLanguage: "API",
//       performanceInThis: 85,
//       bgColor: "#5485C5",
//     },
//     {
//       nameOfTechnologyOrLanguage: "Material UI",
//       performanceInThis: 80,
//       bgColor: "#E67553",
//     },
//     {
//       nameOfTechnologyOrLanguage: "Nextjs",
//       performanceInThis: 70,
//       bgColor: "#FECEA9",
//     },
//     {
//       nameOfTechnologyOrLanguage: "TypeScript",
//       performanceInThis: 75,
//       bgColor: "#A6A6A6",
//     },
//   ];

//   return (
//     <div className="lg:w-full lg:h-screen w-full h-[60vh] lg:px-10 dark:text-white/65 text-black/75">
//       <div className="flex flex-col h-full">
//         {/* Heading */}
//         <Heading title="My Skills" Icon={SiHyperskill} />

//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, scale: 1.5 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         >
//           <h1 className="text-3xl lg:text-4xl font-black w-full text-center mb-4">
//             Frontend Skills <span className="text-yellow-400">Showcase</span>
//           </h1>

//           <p className="text-xs lg:text-sm font-medium w-full text-center">
//             Showcasing my proficiency in modern frontend technologies.
//           </p>
//         </motion.div>
//         {/* Skills */}
//         <div className="flex items-center justify-evenly w-full mb-2 h-full overflow-x-auto scrollbar-hidden gap-2">
//           {mySkills.map((skills, index) => (
//             <div
//               className="flex flex-col h-full items-center justify-evenly gap-2 w-fit px-5 flex-shrink-0"
//               key={index}
//             >
//               <div className="h-full flex items-end overflow-hidden w-full relative pt-10">
//                 <motion.div
//                   initial={{ y: skills.performanceInThis, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
//                   transition={{ duration: 0.6, ease: "linear" }}
//                   style={{
//                     height: `${skills.performanceInThis}%`,
//                     backgroundColor: `${skills.bgColor}`,
//                   }}
//                   className="w-full rounded-t-lg relative skill-bar px-4"
//                   data-tooltip={`${skills.performanceInThis}%`}
//                 ></motion.div>
//               </div>

//               <motion.h1
//                 className="text-center text-xs whitespace-nowrap w-16 h-9 font-medium"
//                 initial={{ y: 20, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, ease: "linear" }}
//               >
//                 {skills.nameOfTechnologyOrLanguage}
//                 <span
//                   style={{ color: `${skills.bgColor}` }}
//                   className="text-xs ml-1"
//                 >
//                   {skills.performanceInThis}%
//                 </span>
//               </motion.h1>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skill;



import React, { useEffect } from "react";
import { SiHyperskill } from "react-icons/si";
import {
  FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub,
} from "react-icons/fa";
import {
  RiReactjsFill, RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiTypescript, SiMaterialdesign, SiBootstrap,
  SiNextdotjs, SiPostgresql, SiPrisma, SiPostman,
} from "react-icons/si";
import Heading from "./Heading";
import { motion } from "framer-motion";

const Skill = () => {
  useEffect(() => {
    document.title = "Sandeep Gupta | Skills";
  }, []);

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: RiReactjsFill, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Zustand", icon: RiReactjsFill, color: "#4F46E5" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: FaNodeJs, color: "#000000" },
      ],
    },
    {
      category: "Styling",
      skills: [
        { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#06B6D4" },
        { name: "Material UI", icon: SiMaterialdesign, color: "#007FFF" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      ],
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
        { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
      ],
    },
    {
      category: "Deployment & Tools",
      skills: [
        { name: "Git", icon: FaGithub, color: "#181717" },
        { name: "Vercel", icon: SiNextdotjs, color: "#000000" },
        { name: "Railway", icon: FaNodeJs, color: "#0A66C2" },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen px-4 sm:px-8 lg:px-16 dark:text-white/65 text-black/75 py-4">

      <Heading title="My Skills" Icon={SiHyperskill} />

      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2">
          Technical Skills <span className="glow-text">Showcase</span>
        </h1>
        <p className="text-xs sm:text-sm font-medium opacity-70 max-w-xl mx-auto">
          A breakdown of my technical skills across languages, frameworks, styling, and tools.
        </p>
      </motion.div>

      <div className="flex flex-col gap-10 pb-10">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-6 bg-indigo-500 rounded-full" />
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-indigo-400">
                {category.category}
              </h2>
              <div className="h-[2px] flex-1 bg-indigo-500/20 rounded-full" />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="glass-card flex flex-col items-center justify-center gap-2 p-3 sm:p-4 cursor-default group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                >
                  <div
                    className="p-2 rounded-xl transition-all duration-300"
                    style={{
                      backgroundColor: `${skill.color}18`,
                      boxShadow: `0 0 0 0 ${skill.color}`,
                    }}
                  >
                    <skill.icon
                      size={28}
                      style={{ color: skill.color }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-xs font-bold text-center leading-tight">
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;