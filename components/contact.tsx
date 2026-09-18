"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { fadeInUp, staggerContainer, hoverScale } from "@/lib/animations";
import { trackEvent } from "@/lib/analytics";

export function Contact() {
  const { ref, controls } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  console.log(
    "🚀 ~ handleSubmit ~ process.env.NEXT_PUBLIC_WEB3FORMS_KEY:",
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
  );
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("contact_form_submit");
    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Portfolio contact from ${formData.name}`,
          ...formData,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      ref={ref}
      variants={staggerContainer}
      initial="initial"
      animate={controls}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/75 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 lg:sr-only">
          Contact
        </h2>
      </div>
      <div>
        <motion.p
          className="mb-6 text-slate-700 dark:text-slate-300"
          variants={fadeInUp}
        >
          I'm always interested in hearing about new opportunities and
          interesting projects. Whether you have a question or just want to say
          hi, feel free to reach out!
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Web3Forms access key + honeypot spam trap */}
          <input
            type="hidden"
            name="access_key"
            value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
          />
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />
          <motion.div variants={fadeInUp}>
            <Label
              htmlFor="name"
              className="text-slate-900 dark:text-slate-200"
            >
              Name
            </Label>
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 focus:border-teal-500 dark:focus:border-teal-300 transition-colors"
              />
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Label
              htmlFor="email"
              className="text-slate-900 dark:text-slate-200"
            >
              Email
            </Label>
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 focus:border-teal-500 dark:focus:border-teal-300 transition-colors"
              />
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Label
              htmlFor="message"
              className="text-slate-900 dark:text-slate-200"
            >
              Message
            </Label>
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 focus:border-teal-500 dark:focus:border-teal-300 transition-colors"
              />
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <motion.div {...hoverScale}>
              <Button
                type="submit"
                disabled={status === "submitting"}
                className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700 text-white transition-colors"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>
            {status === "success" && (
              <p className="mt-3 text-sm text-teal-600 dark:text-teal-300">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-red-600 dark:text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}
