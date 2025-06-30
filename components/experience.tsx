"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { fadeInUp, staggerContainer, hoverLift } from "@/lib/animations"
import { EXPERIENCES } from "@/lib/data"
import Link from "next/link"

export function Experience() {
  const { ref, controls } = useScrollReveal()

  // const experiences = [
  //   {
  //     period: "2023 — Present",
  //     title: "Senior Full Stack Developer",
  //     company: "TechCorp",
  //     companyUrl: "https://techcorp.com",
  //     description:
  //       "Build and maintain critical components used to construct TechCorp's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
  //     technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  //   },
  //   {
  //     period: "2021 — 2023",
  //     title: "Frontend Developer",
  //     company: "StartupXYZ",
  //     companyUrl: "https://startupxyz.com",
  //     description:
  //       "Developed and shipped highly interactive web applications for iOS and Android using React Native. Built and maintained critical components and features for the company's main product.",
  //     technologies: ["React", "React Native", "JavaScript", "Redux", "Firebase"],
  //   },
  //   {
  //     period: "2020 — 2021",
  //     title: "Junior Web Developer",
  //     company: "WebAgency",
  //     companyUrl: "https://webagency.com",
  //     description:
  //       "Built, styled, and shipped high-quality websites and applications for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, and more.",
  //     technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
  //   },
  // ]

  return (
    <motion.section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      ref={ref}
      variants={staggerContainer}
      initial="initial"
      animate={controls}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/75 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {EXPERIENCES.map((exp, index) => (
            <motion.li key={index} className="mb-12" variants={fadeInUp} transition={{ delay: index * 0.1 }}>
              <motion.div
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500 sm:col-span-2">
                  {exp.duration.from} — {exp.duration.to || "Present"}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <motion.a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 focus-visible:text-teal-600 dark:focus-visible:text-teal-300 group/link text-base transition-colors"
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {exp.title} · {exp.at}
                          <motion.div
                            className="inline-block ml-1 translate-y-px"
                            whileHover={{ x: 2, y: -2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <ExternalLink className="h-4 w-4 shrink-0" />
                          </motion.div>
                        </span>
                      </motion.a>
                    </div>
                  </h3>
                  <div className="mt-2 text-sm leading-normal text-slate-700 dark:text-slate-300">
                    {Array.isArray(exp.descriptions) ? (
                      <ul>
                        {exp.descriptions.map((desc, descIndex) => (
                          <li key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                        ))}
                      </ul>
                    ) : (
                      exp.descriptions
                    )}
                  </div>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.techstacks.map((tech, techIndex) => (
                      <motion.li
                        key={techIndex}
                        className="mr-1.5 mt-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="flex items-center rounded-full bg-teal-100 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-800 dark:text-teal-300">
                          {tech}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </ol>
        <motion.div className="mt-12" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center font-medium leading-tight text-slate-900 dark:text-slate-200 font-semibold group transition-colors"
            // target="_blank"
            // rel="noreferrer"
            {...hoverLift}
          >
            <Link
              rel="noreferrer"
              href="/resume"
            >
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-600 dark:group-hover:border-teal-300 motion-reduce:transition-none">
                  View Full Resume
                </span>
                <motion.div
                  className="ml-1 inline-block"
                  whileHover={{ x: 2, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ExternalLink className="h-4 w-4 shrink-0" />
                </motion.div>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
