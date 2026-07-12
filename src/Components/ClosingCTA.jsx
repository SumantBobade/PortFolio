import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import resume from "/Resume/Sumant_s_ASP.NET.pdf";

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-28">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="rounded-[40px] border border-white/10 bg-white/5 p-14 text-center backdrop-blur-xl"
        >

          <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400">
            THANK YOU
          </p>

          <h2 className="text-5xl font-black leading-tight text-white">

            Thanks for visiting my

            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              Portfolio

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

            I enjoy solving challenging engineering problems and building
            software that creates real impact. If you think my skills and
            experience align with your team, I'd be delighted to connect and
            discuss how I can contribute.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="#contact"
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              Let's Connect

              <FaArrowRight className="transition group-hover:translate-x-1" />

            </a>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:bg-white/5"
            >
              <FaDownload />

              Download Resume

            </a>

          </div>

          {/* Bottom Quote */}

          <div className="mt-14 border-t border-white/10 pt-8">

            <p className="italic text-slate-500">

              "Always learning. Always building. Always improving."

            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}