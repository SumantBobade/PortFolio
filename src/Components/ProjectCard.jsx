import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -12,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {/* Featured Badge */}

      {project.featured && (
        <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white">
          <FaStar className="text-yellow-300" />
          Featured
        </div>
      )}

      {/* Image */}

      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
      </div>

      {/* Content */}

      <div className="p-7">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="mt-6 flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 transition hover:scale-105"
            >
              <FaExternalLinkAlt size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-1 w-full scale-x-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}