import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Database,
  BrainCircuit,
  Gamepad2,
  Wrench,
} from "lucide-react";
// import {
//   SiC,
//   SiCplusplus,
//   SiSharp,
//   SiPython,
//   SiJavascript,
//   SiHtml5,
//   SiCss3,
//   SiReact,
//   SiNodedotjs,
//   SiDotnet,
//   SiMysql,
//   SiMongodb,
//   SiTensorflow,
//   SiScikitlearn,
//   SiNumpy,
//   SiPandas,
//   SiUnity,
//   SiGit,
//   SiGithub,
//   SiPostman,
//   SiVisualstudio,
// } from "react-icons/si";

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
import CurrentlyLearning from "./CurrentlyLearning";

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
    description:
      "Crafting immersive gameplay experiences using Unity and C#.",
  },
];


export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020617] py-28 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl font-black">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            A passionate software developer focused on building scalable
            applications, AI-powered solutions and immersive digital
            experiences.
          </p>
        </motion.div>

        {/* About + Education */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* About */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-6 text-3xl font-bold">About Me</h3>

            <p className="leading-8 text-slate-400">
              I'm{" "}
              <span className="font-semibold text-cyan-400">Sumant Bobade</span>
              , an Artificial Intelligence and Data Science undergraduate
              passionate about building scalable software, AI-powered
              applications and immersive game experiences.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              I enjoy solving real-world problems using modern technologies
              including ASP.NET Core, React, Python, Unity and Machine Learning.
              I believe in writing clean, maintainable code while continuously
              learning new technologies and software design principles.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-3xl font-bold text-cyan-400">9.27</h4>

                <p className="text-slate-400">CGPA</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-cyan-400">8+</h4>

                <p className="text-slate-400">Projects</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-cyan-400">AI</h4>

                <p className="text-slate-400">ML Enthusiast</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-cyan-400">Full Stack</h4>

                <p className="text-slate-400">Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Education */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="text-cyan-400" size={32} />

              <h3 className="text-3xl font-bold">Education</h3>
            </div>

            <div className="rounded-2xl border border-cyan-500/10 bg-slate-900/40 p-6">
              <h4 className="text-2xl font-semibold">Bachelor of Technology</h4>

              <p className="mt-3 text-cyan-400">
                Artificial Intelligence & Data Science
              </p>

              <p className="mt-4 text-slate-400">
                Vishwakarma Institute of Information Technology
              </p>

              <div className="mt-8 flex justify-between border-t border-white/10 pt-6">
                <div>
                  <p className="text-sm text-slate-500">Duration</p>

                  <h5 className="mt-2 font-semibold">2023 - 2027</h5>
                </div>

                <div className="text-right">
                  <p className="text-sm text-slate-500">CGPA</p>

                  <h5 className="mt-2 text-xl font-bold text-cyan-400">
                    9.27 / 10
                  </h5>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}

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
        {/* =======================================================
    TECH STACK
======================================================= */}

        {/* ===================== TECH STACK ===================== */}

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

        {/* =======================================================
    CAREER INTERESTS
======================================================= */}

 
{/* ================= Career Interests ================= */}

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

        {/* =======================================================
    LEADERSHIP & COMMUNITY
======================================================= */}

        {/* ================= Leadership & Community ================= */}

<div className="mt-32">

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-14 text-center"
  >
    <h3 className="text-4xl font-bold">
      Leadership{" "}
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        & Community
      </span>
    </h3>

    <p className="mx-auto mt-4 max-w-3xl text-slate-400">
      Beyond academics, I actively contribute to student communities,
      mentor peers, and organize initiatives that create opportunities
      for learning, collaboration, and professional growth.
    </p>
  </motion.div>

  <div className="relative">

    {/* Timeline Line */}

    <div className="absolute left-6 top-0 hidden h-full w-[2px] bg-gradient-to-b from-cyan-500 to-blue-600 lg:block"></div>

    <div className="space-y-10">

      {/* Card 1 */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:ml-16"
      >
        <div className="absolute -left-[72px] top-8 hidden h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 lg:flex">
          <FaUsers className="text-xl text-white" />
        </div>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h4 className="text-2xl font-bold text-cyan-400">
              Vice-Chairperson
            </h4>

            <p className="mt-2 text-lg text-white">
              I2IOC-TPO, VIIT Pune
            </p>
          </div>

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            2024 – Present
          </span>
        </div>

        <ul className="mt-8 space-y-4 text-slate-300">

          <li className="flex gap-3">
            <FaArrowRight className="mt-1 text-cyan-400" />
            Coordinated placement activities and student engagement initiatives.
          </li>

          <li className="flex gap-3">
            <FaArrowRight className="mt-1 text-cyan-400" />
            Organized technical workshops, coding events, and career guidance sessions.
          </li>

          <li className="flex gap-3">
            <FaArrowRight className="mt-1 text-cyan-400" />
            Mentored juniors for internships, technical interviews, and placements.
          </li>

          <li className="flex gap-3">
            <FaArrowRight className="mt-1 text-cyan-400" />
            Collaborated with faculty and recruiters to improve placement initiatives.
          </li>

        </ul>
      </motion.div>

      {/* Card 2 */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:ml-16"
      >
        <div className="absolute -left-[72px] top-8 hidden h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 lg:flex">
          <FaLinkedin className="text-xl text-white" />
        </div>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h4 className="text-2xl font-bold text-cyan-400">
              LinkedIn Campus Ambassador
            </h4>

            <p className="mt-2 text-lg text-white">
              LinkedIn
            </p>
          </div>

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Community Role
          </span>
        </div>

        <ul className="mt-8 space-y-4 text-slate-300">

          <li className="flex gap-3">
            <FaArrowRight className="mt-1 text-cyan-400" />
            Connected students with industry professionals and recruiters.
          </li>

          <li className="flex gap-3">
            <FaArrowRight className="mt-1 text-cyan-400" />
            Promoted networking opportunities and professional branding.
          </li>

          <li className="flex gap-3">
            <FaArrowRight className="mt-1 text-cyan-400" />
            Encouraged participation in learning initiatives and technical communities.
          </li>

          <li className="flex gap-3">
            <FaArrowRight className="mt-1 text-cyan-400" />
            Helped build a stronger developer ecosystem on campus.
          </li>

        </ul>
      </motion.div>

    </div>

    {/* Achievement Summary */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">
        <FaAward className="text-4xl text-yellow-400" />

        <div>
          <h4 className="text-2xl font-bold text-white">
            Leadership Philosophy
          </h4>

          <p className="mt-2 text-slate-300">
            I believe great engineers create value not only through technical
            expertise but also by mentoring others, collaborating effectively,
            and contributing to a thriving community.
          </p>
        </div>
      </div>
    </motion.div>

  </div>

</div>

        {/* =======================================================
    CURRENTLY LEARNING
======================================================= */}

        <CurrentlyLearning/>
      </div>
    </section>
  );
}
