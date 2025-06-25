import { PROJECTS } from "@/lib/data"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function ProjectsArchive() {
  // const allProjects = [
  //   {
  //     year: "2024",
  //     title: "E-Commerce Platform",
  //     description: "A full-stack e-commerce platform built with Next.js and Stripe integration.",
  //     technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
  //     liveUrl: "https://example.com",
  //     githubUrl: "https://github.com/username/ecommerce",
  //   },
  //   {
  //     year: "2024",
  //     title: "Task Management App",
  //     description: "A collaborative task management application with real-time updates.",
  //     technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
  //     liveUrl: "https://example.com",
  //     githubUrl: "https://github.com/username/taskmanager",
  //   },
  //   {
  //     year: "2023",
  //     title: "Weather Dashboard",
  //     description: "A responsive weather dashboard with beautiful data visualizations.",
  //     technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
  //     liveUrl: "https://example.com",
  //     githubUrl: "https://github.com/username/weather",
  //   },
  //   {
  //     year: "2023",
  //     title: "Portfolio Website",
  //     description: "A personal portfolio website showcasing my projects and skills.",
  //     technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  //     liveUrl: "https://example.com",
  //     githubUrl: "https://github.com/username/portfolio",
  //   },
  //   {
  //     year: "2022",
  //     title: "Blog Platform",
  //     description: "A full-featured blog platform with markdown support and comments.",
  //     technologies: ["React", "Node.js", "MongoDB", "Express"],
  //     liveUrl: "https://example.com",
  //     githubUrl: "https://github.com/username/blog",
  //   },
  // ]

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl mb-8">
        All Projects
      </h1>
      <div className="mb-8">
        <a
          href="/"
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-600 dark:text-teal-300 transition-colors"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            ></path>
          </svg>
          Back to Home
        </a>
      </div>
      <div className="overflow-x-auto" style={{ scrollbarWidth: "thin" }}>
        <table className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/50 dark:border-slate-300/10 bg-white/75 dark:bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-900 dark:text-slate-200">Year</th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-900 dark:text-slate-200">Project</th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-900 dark:text-slate-200 lg:table-cell">
                Built with
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-900 dark:text-slate-200 sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {PROJECTS.map((project, index) => (
              <tr key={index} className="border-b border-slate-300/50 dark:border-slate-300/10 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px whitespace-nowrap text-slate-500 dark:text-slate-500">{project.duration.from} - {project.duration.to || "Present"} </div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-900 dark:text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 focus-visible:text-teal-600 dark:focus-visible:text-teal-300 sm:hidden group/link text-base transition-colors"
                        href={project.appLink || project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {project.title}
                          <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                        </span>
                      </a>
                    </div>
                    <div className="hidden sm:block">{project.title}</div>
                  </div>
                  <div className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">
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
                </td>
                <td className="hidden lg:table-cell">
                  <div className="gap-0.5 mb-2 flex flex-wrap min-w-[200px]" aria-label="Technologies used">
                    {project.techstacks.map((tech, techIndex) => (
                      <span key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-100 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-800 dark:text-teal-300">
                          {tech}
                        </div>
                      </span>
                    ))}
                  </div>
                </td>
                <td className="hidden sm:table-cell">
                  {(project.appLink || project.githubLink) && <Link
                    className="text-sm hover:text-blue-600"
                    href={project.appLink || project.githubLink!} target="_blank" rel="noreferrer">
                    {project.appLink || project.githubLink}
                  </Link>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
