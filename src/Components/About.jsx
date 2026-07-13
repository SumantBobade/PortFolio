import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Database,
  BrainCircuit,
  Gamepad2,
  Wrench,
} from "lucide-react";
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
import Skills from "./Skills";
import TechStack from "./TechStack";
import CareerInterests from "./CareerInterests";
import Leadership from "./Leadership";



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
        <Skills />
        <TechStack/>
        <CurrentlyLearning />
        <CareerInterests />
        <Leadership/>
       
      </div>
    </section>
  );
}
