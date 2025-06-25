"use client"

import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function About() {
  const { ref, controls } = useScrollReveal()

  return (
    <motion.section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      ref={ref}
      variants={staggerContainer}
      initial="initial"
      animate={controls}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/75 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <motion.p className="mb-4 text-slate-700 dark:text-slate-300" variants={fadeInUp}>
          I am a Software Engineer with over five years of experience developing efficient, user-focused applications.
        </motion.p>
        <motion.p className="mb-4 text-slate-700 dark:text-slate-300" variants={fadeInUp}>
          My expertise lies in modern frontend technologies such as React.js, Next.js, and TypeScript, complemented by backend skills in Node.js and GraphQL. I have successfully led impactful projects, optimized application performance, and built scalable solutions that drive strong user engagement. 
        </motion.p>
        <motion.p className="text-slate-700 dark:text-slate-300" variants={fadeInUp}>
          Passionate about enhancing user experiences, I am dedicated to crafting innovative, reliable systems. Currently based in Indonesia, I am open to relocation for the right opportunity.
        </motion.p>
      </div>
    </motion.section>
  )
}
