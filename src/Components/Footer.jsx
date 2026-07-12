import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaHeart,
  FaItchIo,
} from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617] text-white">

      {/* Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">

        {/* Top */}

        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-black">

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                Sumant Bobade

              </span>

            </h2>

            <p className="mt-4 max-w-md leading-7 text-slate-400">

              Passionate about building scalable software,
              AI-powered applications,
              and immersive gaming experiences.

            </p>

          </div>

          {/* Navigation */}

          <div className="flex flex-wrap justify-center gap-8 text-slate-300">

            {[
              "Home",
              "About",
              "Projects",
              "Contact",
            ].map((item) => (

              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-cyan-400"
              >
                {item}
              </a>

            ))}

          </div>

          {/* Social */}

          <div className="flex gap-5">

            <a
              href="https://github.com/SumantBobade"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white/5
              transition
              hover:bg-cyan-500
              hover:scale-110
              "
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/sumant-bobade/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white/5
              transition
              hover:bg-cyan-500
              hover:scale-110
              "
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://huggingface.co/SumantBobade"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white/5
              transition
              hover:bg-cyan-500
              hover:scale-110
              "
            >
              <SiHuggingface size={22} />
            </a>

            <a
              href="https://sumantbobade.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white/5
              transition
              hover:bg-cyan-500
              hover:scale-110
              "
            >
              <FaItchIo size={22} />
            </a>

            {/* Back To Top */}

            <button
              onClick={scrollToTop}
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              transition
              hover:scale-110
              "
            >
              <FaArrowUp />
            </button>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-center text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Sumant Bobade.
            All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">

            Built with

            <FaHeart className="text-red-500" />

            React • Tailwind CSS • Framer Motion

          </p>

        </div>

      </div>

    </footer>
  );
}