import React from "react";
import { motion } from "framer-motion";

function TechStack() {
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
            Tech{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Technologies I use to design, develop and deploy scalable software
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {[
            { name: "React", icon: "react" },
            { name: ".NET", icon: "dotnet" },
            { name: "Node.js", icon: "nodejs" },
            { name: "Python", icon: "python" },
            { name: "JavaScript", icon: "javascript" },
            { name: "C#", icon: "cs" },
            { name: "C++", icon: "cpp" },
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "Azure", icon: "azure" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "MySQL", icon: "mysql" },
            { name: "TensorFlow", icon: "tensorflow" },
            { name: "Unity", icon: "unity" },
            { name: "Postman", icon: "postman" },
            { name: "VS Code", icon: "vscode" },
            { name: "Visual Studio", icon: "visualstudio" },
            { name: "Tailwind", icon: "tailwind" },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.04,
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:shadow-xl
                hover:shadow-cyan-500/10
              "
            >
              <div className="flex flex-col items-center">
                <img
                  src={`https://skillicons.dev/icons?i=${tech.icon}`}
                  alt={tech.name}
                  className="h-16 w-16 transition duration-300 group-hover:scale-110"
                />

                <h4 className="mt-4 text-center font-medium text-slate-200">
                  {tech.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TechStack;
