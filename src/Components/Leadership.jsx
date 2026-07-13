import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLinkedin, FaAward, FaArrowRight } from "react-icons/fa";

function Leadership() {
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
            Leadership{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              & Community
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            Beyond academics, I actively contribute to student communities,
            mentor peers, and organize initiatives that create opportunities for
            learning, collaboration, and professional growth.
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
                  Coordinated placement activities and student engagement
                  initiatives.
                </li>

                <li className="flex gap-3">
                  <FaArrowRight className="mt-1 text-cyan-400" />
                  Organized technical workshops, coding events, and career
                  guidance sessions.
                </li>

                <li className="flex gap-3">
                  <FaArrowRight className="mt-1 text-cyan-400" />
                  Mentored juniors for internships, technical interviews, and
                  placements.
                </li>

                <li className="flex gap-3">
                  <FaArrowRight className="mt-1 text-cyan-400" />
                  Collaborated with faculty and recruiters to improve placement
                  initiatives.
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

                  <p className="mt-2 text-lg text-white">LinkedIn</p>
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
                  Encouraged participation in learning initiatives and technical
                  communities.
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
                  I believe great engineers create value not only through
                  technical expertise but also by mentoring others,
                  collaborating effectively, and contributing to a thriving
                  community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Leadership;
