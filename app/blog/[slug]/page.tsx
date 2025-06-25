"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { BlogPost } from "@/components/blog-post"
import { GradientBackground } from "@/components/gradient-background"
import { pageTransition } from "@/lib/animations"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <GradientBackground />
      <motion.div
        className="min-h-screen bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-900 dark:text-slate-300 transition-colors"
        {...pageTransition}
      >
        <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Navigation />
            <main className="pt-24 lg:w-1/2 lg:py-24">
              <BlogPost slug={params.slug} />
            </main>
          </div>
        </div>
      </motion.div>
    </>
  )
}
