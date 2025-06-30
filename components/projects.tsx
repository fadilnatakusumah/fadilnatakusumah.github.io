"use client"

import { motion, spring } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { fadeInUp, staggerContainer, hoverLift, scaleIn } from "@/lib/animations"
import { PROJECTS } from "@/lib/data"

export function Projects() {
  const { ref, controls } = useScrollReveal()

  // const projects = [
  //   {
  //     title: "E-Commerce Platform",
  //     description:
  //       "A full-stack e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product catalog, shopping cart, and order management.",
  //     image: "/placeholder.svg?height=200&width=300",
  //     technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
  //     liveUrl: "https://example.com",
  //     githubUrl: "https://github.com/username/ecommerce",
  //   },
  //   {
  //     title: "Task Management App",
  //     description:
  //       "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
  //     image: "/placeholder.svg?height=200&width=300",
  //     technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
  //     liveUrl: "https://example.com",
  //     githubUrl: "https://github.com/username/taskmanager",
  //   },
  //   {
  //     title: "Weather Dashboard",
  //     description:
  //       "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.",
  //     image: "/placeholder.svg?height=200&width=300",
  //     technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
  //     liveUrl: "https://example.com",
  //     githubUrl: "https://github.com/username/weather",
  //   },
  // ]

  return (
    <motion.section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      ref={ref}
      variants={staggerContainer}
      initial="initial"
      animate={controls}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/75 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <motion.li key={index} className="mb-12" variants={fadeInUp} transition={{ delay: index * 0.1 }}>
              <motion.div
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <motion.a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 focus-visible:text-teal-600 dark:focus-visible:text-teal-300 group/link text-base transition-colors"
                      href={project.appLink || project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {/* <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span> */}
                      <span>
                        {project.title}
                        <motion.div
                          className="inline-block ml-1 translate-y-px"
                          whileHover={{ x: 2, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <ExternalLink className="h-4 w-4 shrink-0" />
                        </motion.div>
                      </span>
                    </motion.a>
                  </h3>
                  <div className="mt-2 text-sm leading-normal text-slate-700 dark:text-slate-300">
                    {Array.isArray(project.descriptions) ? (
                      <ul>
                        {project.descriptions.map((desc, descIndex) => (
                          <li key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                        ))}
                      </ul>
                    ) : (
                      project.descriptions
                    )}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    {project.appLink && <motion.a
                      href={project.appLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                      {...hoverLift}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </motion.a>}
                    {project.githubLink && <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                      {...hoverLift}
                    >
                      <Github className="h-3 w-3" />
                    </motion.a>}
                  </div>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.techstacks.map((tech, techIndex) => (
                      <motion.li
                        key={techIndex}
                        className="mr-1.5 mt-2"
                        variants={scaleIn}
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
                <motion.div
                  className="sm:order-1 sm:col-span-2 sm:translate-y-1"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: spring, stiffness: 400, damping: 17 }}
                >
                  <Image
                    alt={project.image}
                    loading="lazy"
                    width={200}
                    height={48}
                    className="rounded border-2 border-slate-200/50 dark:border-slate-200/10 transition group-hover:border-slate-300 dark:group-hover:border-slate-200/30"
                    src={project.image || "/placeholder.svg"}
                  />
                </motion.div>
              </motion.div>
            </motion.li>
          ))}
        </ul>
        <motion.div className="mt-12" variants={fadeInUp}>
          <motion.a
            className="inline-flex items-center leading-tight text-slate-900 dark:text-slate-200 font-semibold group transition-colors"
            href="/projects"
            {...hoverLift}
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-600 dark:group-hover:border-teal-300 motion-reduce:transition-none">
                View Full Project Archive
              </span>
              <motion.div
                className="ml-1 inline-block"
                whileHover={{ x: 2, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <ExternalLink className="h-4 w-4 shrink-0" />
              </motion.div>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}
