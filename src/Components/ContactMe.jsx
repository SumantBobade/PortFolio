import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactMe() {
  return (
    <section
      id="contact"
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
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I'm actively looking for Software Engineering, Full Stack, AI and
            Game Development opportunities. Let's connect and build something
            impactful.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold">Contact Information</h3>

            <p className="mt-6 leading-8 text-slate-400">
              Whether you have an internship opportunity, full-time role,
              collaboration idea, or simply want to discuss technology, I'd love
              to hear from you.
            </p>

            {/* Contact Items */}

            <div className="mt-10 space-y-8">
              {/* Email */}

              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <FaEnvelope size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>

                  <a
                    href="mailto:sumantbobade@gmail.com"
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    sumantbobade@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}

              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <FaLinkedin size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">LinkedIn</h4>

                  <a
                    href="https://linkedin.com/in/sumant-bobade"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    linkedin.com/in/sumant-bobade
                  </a>
                </div>
              </div>

              {/* GitHub */}

              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <FaGithub size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">GitHub</h4>

                  <a
                    href="https://github.com/SumantBobade"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    github.com/SumantBobade
                  </a>
                </div>
              </div>

              {/* Location */}

              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <FaMapMarkerAlt size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>

                  <p className="text-slate-400">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Availability Card */}

            <motion.div
              whileHover={{ y: -5 }}
              className="mt-12 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

                <h4 className="font-semibold text-emerald-300">
                  Available for Internships & Full-Time Roles
                </h4>
              </div>

              <p className="mt-4 leading-7 text-slate-300">
                Currently seeking opportunities in Software Engineering, Full
                Stack Development, Artificial Intelligence, and Backend
                Development.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}

          {/* Contact Form goes here in Part 2 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold">Send Me a Message</h3>

            <p className="mt-4 text-slate-400">
              Have an opportunity, project, or idea? Fill out the form below and
              I'll get back to you as soon as possible.
            </p>

            <form className="mt-10 space-y-6">
              {/* Name */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-slate-900/60
          px-5
          py-4
          text-white
          placeholder:text-slate-500
          outline-none
          transition
          duration-300
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/20
        "
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-slate-900/60
          px-5
          py-4
          text-white
          placeholder:text-slate-500
          outline-none
          transition
          duration-300
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/20
        "
                />
              </div>

              {/* Subject */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Internship Opportunity"
                  className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-slate-900/60
          px-5
          py-4
          text-white
          placeholder:text-slate-500
          outline-none
          transition
          duration-300
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/20
        "
                />
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="
          w-full
          resize-none
          rounded-xl
          border
          border-white/10
          bg-slate-900/60
          px-5
          py-4
          text-white
          placeholder:text-slate-500
          outline-none
          transition
          duration-300
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/20
        "
                />
              </div>

              {/* Button */}

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                className="
        group
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        py-4
        text-lg
        font-semibold
        shadow-lg
        shadow-cyan-500/20
        transition
      "
              >
                <FaPaperPlane className="transition group-hover:translate-x-1" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
