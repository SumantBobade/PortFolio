import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

import profile from "../assets/pic.png";
import resume from "/Resume/Sumant_s_ASP.NET.pdf";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiUnity,
  SiDotnet,
  SiDevelopmentcontainers,
} from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#020617] min-h-screen text-white"
    >
      {/* Background */}

      <div className="absolute left-[-120px] top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="absolute right-[-120px] bottom-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[220px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-20 px-6 pt-32 lg:flex-row">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 backdrop-blur-xl">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
            </span>

            <span className="text-sm font-medium text-emerald-300">
              Available for Internships
            </span>
          </div>

          {/* Heading */}

          <h3 className="mt-10 text-xl text-slate-400">Hello, I'm</h3>

          <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Sumant Bobade
            </span>
          </h1>

          {/* Typing */}

          <div className="mt-8 h-16">
            <h2 className="text-2xl font-semibold md:text-4xl">
              I'm a{" "}
              <span className="text-cyan-400">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2500,

                    "AI Engineer",
                    2500,

                    "Game Developer",
                    2500,

                    "Software Engineer",
                    2500,
                  ]}
                  speed={45}
                  repeat={Infinity}
                />
              </span>
            </h2>
          </div>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Passionate about building scalable web applications, AI-powered
            software, and immersive gameplay experiences. I enjoy solving
            real-world problems through clean architecture, modern technologies
            and intuitive user experiences.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold transition duration-300 hover:scale-105"
            >
              View Projects
              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-slate-700 px-8 py-4 transition hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <Download size={20} />
              Resume
            </a>
          </div>

          {/* Social */}

          <div className="mt-12 flex gap-7">
            <a
              href="https://github.com/SumantBobade"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={30}
                className="transition hover:scale-125 hover:text-white"
              />
            </a>

            <a
              href="https://linkedin.com/in/sumant-bobade"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={30}
                className="transition hover:scale-125 hover:text-[#0A66C2]"
              />
            </a>

            <a href="mailto:sumantbobade@gmail.com">
              <MdEmail
                size={32}
                className="transition hover:scale-125 hover:text-red-400"
              />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex w-full justify-center lg:w-1/2"
        >
          {/* Glow */}

          <div className="absolute h-[430px] w-[330px] rounded-[40px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-3xl" />

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
          >
            <img
              src={profile}
              alt="Profile"
              className="h-[500px] w-[380px] object-cover"
            />
          </motion.div>

          {/* Floating Badges */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-0 top-10 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-5 py-3 backdrop-blur-xl"
          >
            <SiReact className="text-cyan-400 text-xl" />
            <span>React</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute right-0 top-28 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-5 py-3 backdrop-blur-xl"
          >
            <SiDevelopmentcontainers className="text-green-400 text-xl" />
            <span>Development</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -left-4 bottom-36 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-5 py-3 backdrop-blur-xl"
          >
            <SiUnity className="text-white text-xl" />
            <span>Unity</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute right-2 bottom-8 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-5 py-3 backdrop-blur-xl"
          >
            <SiDotnet className="text-violet-400 text-xl" />
            <span>ASP.NET</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute left-10 bottom-4 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-5 py-3 backdrop-blur-xl"
          >
            <SiNodedotjs className="text-green-500 text-xl" />
            <span>Node.js</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute right-12 top-2 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-5 py-3 backdrop-blur-xl"
          >
            <SiMongodb className="text-green-600 text-xl" />
            <span>MongoDB</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
