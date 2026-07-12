import React from "react";
import { motion } from "framer-motion";
import { FaDocker, FaMicrosoft, FaGithub, FaRobot } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiKubernetes } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { GrSystem } from "react-icons/gr";

const learningItems = [
  {
    title: "Azure Cloud",
    icon: <VscAzure className="text-4xl text-sky-400" />,
    description:
      "Deploying scalable applications using Azure App Services, Storage and cloud-native solutions.",
  },
  {
    title: "Docker",
    icon: <FaDocker className="text-4xl text-blue-400" />,
    description:
      "Containerizing full-stack applications for consistent development and deployment.",
  },
  {
    title: "Kubernetes",
    icon: <SiKubernetes className="text-4xl text-sky-500" />,
    description:
      "Learning container orchestration, scaling and production-ready deployments.",
  },
  {
    title: "System Design",
    icon: <GrSystem className="text-4xl text-green-400" />,
    description:
      "Studying scalable architectures, caching, databases and distributed systems.",
  },
  {
    title: "AI Agents & MCP",
    icon: <FaRobot className="text-4xl text-violet-400" />,
    description:
      "Building intelligent AI agents using MCP, RAG and modern LLM workflows.",
  },
  {
    title: "CI/CD",
    icon: <FaGithub className="text-4xl text-white" />,
    description:
      "Automating testing and deployment using GitHub Actions and Azure DevOps.",
  },
];

function CurrentlyLearning() {
  return (
    <div>
      {/* ================= CURRENTLY EXPLORING ================= */}

      <div className="mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400">
            CONTINUOUS LEARNING
          </p>

          <h3 className="text-4xl font-bold">
            Currently{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Exploring
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400">
            I believe great engineers never stop learning. Here are the
            technologies and concepts I'm currently exploring to build better
            software.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {learningItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
          group
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400/30
          hover:shadow-xl
          hover:shadow-cyan-500/10
        "
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="transition duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  Learning
                </span>
              </div>

              <h4 className="text-2xl font-semibold text-white">
                {item.title}
              </h4>

              <p className="mt-4 leading-7 text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentlyLearning;
