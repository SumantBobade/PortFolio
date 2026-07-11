import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const filters = ["All", "AI", "Full Stack", "Unity"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020617] py-28 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="mb-3 text-cyan-400 uppercase tracking-[0.35em]">
            Portfolio
          </p>

          <h2 className="text-5xl font-black">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A selection of projects demonstrating my experience in
            Full Stack Development, Artificial Intelligence,
            Enterprise Applications and Game Development.
          </p>
        </motion.div>

        {/* Filter Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                rounded-full
                px-6
                py-3
                transition-all
                duration-300
                border
                ${
                  activeFilter === filter
                    ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/30"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400 hover:text-cyan-300"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .4 }}
            className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (

              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />

            ))}
          </motion.div>

        </AnimatePresence>

      </div>
    </section>
  );
}