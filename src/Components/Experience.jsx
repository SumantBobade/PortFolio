import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

const experiences = [
  {
    company: "SAP Labs",
    role: "SAP STAR Intern",
    duration: "May 2026 – Present",
    location: "Bengaluru, India",
    description:
      "Working on enterprise software development while gaining hands-on experience with SAP technologies and modern software engineering practices.",
    tech: ["SAP", "Java", "Git", "Enterprise Software"],
  },
  {
    company: "Company Name",
    role: "AI / Software Intern",
    duration: "Jan 2026 – Apr 2026",
    location: "Remote",
    description:
      "Developed AI-powered solutions, collaborated on software projects, and contributed to backend development and deployment workflows.",
    tech: ["Python", "LLMs", "React", ".NET"],
  },
];

const certifications = [
  {
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    link: "#",
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    link: "#",
  },
  {
    title: "Oracle Java Foundations",
    issuer: "Oracle",
    link: "#",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    link: "#",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#020617] py-28 text-white"
    >
      {/* Glow */}

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400">
            PROFESSIONAL JOURNEY
          </p>

          <h2 className="text-5xl font-bold">
            Experience{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              & Certifications
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400">
            Practical experience, leadership, and continuous learning that
            shape my journey as a software engineer.
          </p>
        </motion.div>

        {/* Experience */}

        <div className="space-y-8">

          {experiences.map((exp, index) => (

            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-6 md:flex-row md:justify-between">

                <div>

                  <div className="flex items-center gap-3">
                    <FaBriefcase className="text-cyan-400" />
                    <h3 className="text-2xl font-bold">
                      {exp.role}
                    </h3>
                  </div>

                  <h4 className="mt-2 text-lg text-cyan-300">
                    {exp.company}
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-400">

                    <span className="flex items-center gap-2">
                      <FaCalendarAlt />
                      {exp.duration}
                    </span>

                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      {exp.location}
                    </span>

                  </div>

                </div>

              </div>

              <p className="mt-6 leading-8 text-slate-400">
                {exp.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {exp.tech.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* Certifications */}

        <div className="mt-24">

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-3xl font-bold"
          >
            Certifications
          </motion.h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {certifications.map((cert) => (

              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/30"
              >
                <FaCertificate className="text-4xl text-yellow-400" />

                <h4 className="mt-5 font-semibold">
                  {cert.title}
                </h4>

                <p className="mt-2 text-sm text-slate-400">
                  {cert.issuer}
                </p>

                <div className="mt-5 flex items-center gap-2 text-cyan-400">
                  View Credential
                  <FaExternalLinkAlt size={12} />
                </div>

              </motion.a>

            ))}

          </div>

        </div>

        {/* Closing Banner */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 text-center backdrop-blur-xl"
        >
          <h3 className="text-3xl font-bold">
            Committed to Continuous Learning
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-300">
            I continuously expand my technical skills through internships,
            certifications, and hands-on projects to stay aligned with modern
            software engineering practices.
          </p>
        </motion.div>

      </div>
    </section>
  );
}