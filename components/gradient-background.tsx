"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function GradientBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="fixed inset-0 -z-10 bg-white dark:bg-slate-900" />
  }

  const lightGradient = "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)"
  const darkGradient = "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)"

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: theme === "light" ? lightGradient : darkGradient,
        }}
        animate={{
          background: theme === "light" ? lightGradient : darkGradient,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background:
            theme === "light"
              ? "radial-gradient(circle, #06b6d4 0%, transparent 70%)"
              : "radial-gradient(circle, #0891b2 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
        style={{
          background:
            theme === "light"
              ? "radial-gradient(circle, #8b5cf6 0%, transparent 70%)"
              : "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full opacity-10"
        style={{
          background:
            theme === "light"
              ? "radial-gradient(circle, #f59e0b 0%, transparent 70%)"
              : "radial-gradient(circle, #d97706 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -60, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
