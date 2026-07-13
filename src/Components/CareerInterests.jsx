import React from "react";
import { motion } from "framer-motion";
import { FaDatabase } from "react-icons/fa";
      import {
  FaBrain,
  FaCode,
  FaServer,
  FaCloud,
  FaBuilding,
  FaGamepad,
} from "react-icons/fa";
import { FaUsers, FaLinkedin, FaAward, FaArrowRight } from "react-icons/fa";

const interests = [
  {
    title: "Software Engineering",
    icon: <FaCode className="text-4xl text-cyan-400" />,
    description:
      "Designing scalable, maintainable, and high-performance software systems.",
  },
  {
    title: "Artificial Intelligence",
    icon: <FaBrain className="text-4xl text-purple-400" />,
    description:
      "Building intelligent applications using LLMs, RAG, NLP, and Machine Learning.",
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-4xl text-emerald-400" />,
    description:
      "Developing secure APIs, databases, authentication, and enterprise backends.",
  },
  {
    title: "Cloud Computing",
    icon: <FaCloud className="text-4xl text-sky-400" />,
    description:
      "Deploying scalable applications using Azure, containers, and cloud services.",
  },
  {
    title: "Enterprise Software",
    icon: <FaBuilding className="text-4xl text-orange-400" />,
    description:
      "Creating business applications with .NET, SQL Server, and modern architectures.",
  },
  {
    title: "Game Development",
    icon: <FaGamepad className="text-4xl text-pink-400" />,
    description: "Crafting immersive gameplay experiences using Unity and C#.",
  },
];

function CareerInterests() {
  return (
    <>
      <div className="mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h3 className="text-4xl font-bold">
            Career{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Interests
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            Areas where I aspire to contribute, innovate, and grow throughout my
            software engineering career.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {interests.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
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
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
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
    </>
  );
}

export default CareerInterests;
