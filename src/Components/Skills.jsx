import React from 'react';
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Database,
  BrainCircuit,
  Gamepad2,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 size={22} />,
    skills: [
      { name: "C", icon: "c" },
      { name: "C#", icon: "cs" },
      { name: "C++", icon: "cpp" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "SQL", icon: "mysql" },
    ],
  },

  {
    title: "Backend",
    icon: <Database size={22} />,
    skills: [
      { name: "ASP.NET Core", icon: "dotnet" },
      { name: "REST APIs" },
      { name: "Entity Framework Core" },
      { name: "SQL Server", icon: "postgres" },
      { name: "Node.js", icon: "nodejs" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "JWT Authentication" },
    ],
  },

  {
    title: "AI / ML",
    icon: <BrainCircuit size={22} />,
    skills: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Scikit-Learn", icon: "sklearn" },
      { name: "NumPy", icon: "python" },
      { name: "Pandas", icon: "python" },
      { name: "LLMs" },
      { name: "RAG" },
      { name: "LangChain" },
      { name: "Jupyter Notebooks", icon: "pycharm" },
      { name: "Hugging Face" },
    ],
  },

  {
    title: "Game Development",
    icon: <Gamepad2 size={22} />,
    skills: [
      { name: "Unity", icon: "unity" },
      { name: "Gameplay Programming" },
      { name: "Enemy AI" },
      { name: "Animation" },
      { name: "UI Systems" },
    ],
  },

  {
    title: "Tools",
    icon: <Wrench size={22} />,
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Azure DevOps", icon: "azure" },
      { name: "Postman", icon: "postman" },
      { name: "Visual Studio", icon: "visualstudio" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];

function Skills() {
  return (
    <>
       <div className="mt-24">
                <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h3 className="text-4xl font-bold">
            Ski
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              lls
            </span>
          </h3>
      
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A comprehensive look at the languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </motion.div>
      
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                      }}
                      whileHover={{ y: -6 }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                    >
                      {/* Category Heading */}
      
                      <div className="mb-6 flex items-center gap-3 text-cyan-400">
                        {category.icon}
      
                        <h4 className="text-xl font-semibold">{category.title}</h4>
                      </div>
      
                      {/* Skills */}
      
                      <div className="grid grid-cols-2 gap-4">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-slate-900/40
                      px-4
                      py-3
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-400/40
                      hover:bg-slate-800/60
                    "
                          >
                            {skill.icon ? (
                              <img
                                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                alt={skill.name}
                                className="h-9 w-9 transition-transform duration-300 group-hover:scale-110"
                              />
                            ) : (
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-xs font-bold text-cyan-400">
                                {skill.name
                                  .split(" ")
                                  .map((word) => word[0])
                                  .join("")}
                              </div>
                            )}
      
                            <span className="text-sm text-slate-300">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
    </>
  )
}

export default Skills
