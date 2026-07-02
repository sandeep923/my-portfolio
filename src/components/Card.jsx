import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Card = ({ projects }) => {
  return (
    projects && (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full sm:w-[48%] lg:w-[31%] bg-white/30 dark:bg-white/5 backdrop-blur-lg shadow-lg border border-white/20 rounded-xl dark:text-white/65 flex flex-col"
      >
        <div className="w-full h-full rounded-xl py-4 px-4 flex flex-col gap-3">

          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full shrink-0"
              src={projects.owner.avatar_url}
              alt={projects.owner.login}
            />
            <div className="overflow-hidden">
              <a
                href={projects.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold hover:text-indigo-500 transition-colors truncate block"
              >
                {projects.name}
              </a>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                by {projects.owner.login}
              </p>
            </div>
          </div>

          <p className="text-xs text-zinc-600 dark:text-zinc-400 min-h-[2.5rem] line-clamp-2">
            {projects.description || "No description provided."}
          </p>

          {projects.topics.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {projects.topics.slice(0, 4).map((topic) => (
                <span
                  key={topic}
                  className="text-[10px] bg-indigo-500/20 text-indigo-500 font-medium rounded-full px-2 py-[2px]"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-3">
              <span>⭐ {projects.stargazers_count}</span>
              <span>🍴 {projects.forks_count}</span>
              <span>🔧 {projects.open_issues_count}</span>
            </div>
            {projects.language && (
              <span className="bg-zinc-200 dark:bg-zinc-700 px-2 py-[2px] rounded-full text-[10px] font-medium">
                {projects.language}
              </span>
            )}
          </div>

          <div className="border-t border-white/10 dark:border-white/5" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={projects.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 transition-colors"
              >
                <FaGithub className="text-sm" />
                Code
              </a>
              {projects.homepage && (
                <a
                  href={projects.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 transition-colors"
                >
                  <FiExternalLink className="text-sm" />
                  Demo
                </a>
              )}
            </div>
            <p className="text-[10px] text-zinc-400">
              {new Date(projects.updated_at).toLocaleDateString()}
            </p>
          </div>

        </div>
      </motion.div>
    )
  );
};

export default Card;