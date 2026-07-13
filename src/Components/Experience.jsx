import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCertificate,
    FaExternalLinkAlt,
  FaAward,
} from "react-icons/fa";

const experiences = [
  {
    company: "XRGF",
    role: "AR Developer",
    duration: "Aug 2024 – Aug 2025",
    location: "Pune, India",
    description:
      "Developed AR applications using ARCore and Unity, collaborating with cross-functional teams to create immersive experiences for clients.",
    highlights: [
      "Developed enterprise-grade software components.",
      "Collaborated with experienced software engineers.",
      "Applied clean coding practices and Git workflows.",
      "Worked in an Agile development environment.",
    ],
    tech: ["ARCore", "Unity", "Figma", "App Design"],
  },
  {
    company: "AICTE",
    role: "AI / ML Intern",
    duration: " Apr 2024– Jun 2024",
    location: "Remote",
    description:
      "Developed AI-powered solutions, collaborated on software projects, and contributed to backend development and deployment workflows.",
    highlights: [
      "Developed enterprise-grade software components.",
      "Collaborated with experienced software engineers.",
      "Applied clean coding practices and Git workflows.",
      "Worked in an Agile development environment.",
    ],
    tech: ["Python", "LLMs", "React", ".NET"],
  },
];

const certifications = [
  {
    title: "IBM Full Stack Software Developer Professional Certificate",
    issuer: "IBM",
    link: "https://coursera.org/share/15b35681bb85190f6352054a250fc3f8",
  },
  {
    title: "Unity Certified Associate: Game Developer",
    issuer: "Unity Technologies",
    link: "https://www.credly.com/badges/7156e04f-de9c-4cca-abb8-1ea11507182a/public_url",
  },
  {
    title: "Unity Junior Programmer",
    issuer: "Unity Technologies",
    link: "https://www.credly.com/badges/3452d1dd-dcda-4e5b-9dbf-cae593d839d3/public_url",
  },

  {
    title: "Software Developer Career Guide and Interview Preparation",
    issuer: "IBM",
    link: "https://coursera.org/share/de578ed0e4f6a404a45895536416c397",
  },

  {
    title: ".NET FullStack Developer Professional Certificate",
    issuer: "Coursera",
    link: "https://coursera.org/share/fd8507799e399bf585b87f5208609d6d",
  },
  {
    title: "Unity Essentials",
    issuer: "Unity Technologies",
    link: "https://www.credly.com/badges/91ca3bbb-c9a5-408a-8741-a0fc8f1684f3/public_url",
  },
  {
    title: "Advanced C# Programming in .NET Core",
    issuer: "Coursera",
    link: "https://coursera.org/share/f9052e188d251ae7723467f38a13e990",
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
            Practical experience, leadership, and continuous learning that shape
            my journey as a software engineer.
          </p>
        </motion.div>

        {/* Experience */}

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-800/50 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Top Gradient */}

              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

              {/* Background Glow */}

              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20" />

              {/* Header */}

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                {/* Left */}

                <div className="flex gap-5">
                  {/* Company Logo */}

                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="h-12 object-contain"
                      />
                    ) : (
                      <FaBriefcase className="text-3xl text-cyan-400" />
                    )}
                  </div>

                  {/* Role */}

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl font-bold">{exp.role}</h3>

                      {index === 0 && (
                        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                          Current
                        </span>
                      )}
                    </div>

                    <h4 className="mt-2 text-xl font-semibold text-cyan-400">
                      {exp.company}
                    </h4>
                  </div>
                </div>

                {/* Right */}

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    <FaCalendarAlt className="mr-2 inline" />
                    {exp.duration}
                  </span>

                  <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                    <FaMapMarkerAlt className="mr-2 inline" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}

              <p className="relative mt-8 text-lg leading-8 text-slate-300">
                {exp.description}
              </p>

              {/* Highlights */}

              {exp.highlights && (
                <div className="mt-8 grid gap-4">
                  {exp.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                      <p className="text-slate-400">{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack */}

              <div className="mt-8 flex flex-wrap gap-3">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                <span className="text-sm text-slate-500">
                  Professional Experience
                </span>

                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-cyan-500/30 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}


        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h3 className="text-4xl font-bold">
              Professional{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Certifications
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-slate-400">
              Industry-recognized certifications that strengthen my expertise in
              software engineering, cloud computing, artificial intelligence and
              enterprise technologies.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
          group
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-gradient-to-br
          from-slate-900/90
          via-slate-900/70
          to-slate-800/50
          p-7
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-cyan-400/40
          hover:shadow-2xl
          hover:shadow-cyan-500/10
        "
              >
                {/* Top Gradient */}

                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

                {/* Glow */}

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />

                {/* Header */}

                <div className="relative flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="h-10 object-contain"
                      />
                    ) : (
                      <FaAward className="text-3xl text-yellow-400" />
                    )}
                  </div>

                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                    Verified
                  </span>
                </div>

                {/* Title */}

                <h4 className="mt-7 text-xl font-bold leading-7 text-white">
                  {cert.title}
                </h4>

                <p className="mt-2 text-cyan-400">{cert.issuer}</p>

                {/* Issue Date */}

                {cert.date && (
                  <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
                    <FaCalendarAlt />

                    {cert.date}
                  </div>
                )}

                {/* Footer */}

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-slate-500">
                    View Credential
                  </span>

                  <FaExternalLinkAlt className="text-cyan-400 transition group-hover:translate-x-1" />
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
