"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { fadeInUp, hoverLift, hoverScale, slideInLeft } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiEdit3,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import ShinyText from "./reactbits/ShinyText/ShinyText";

export function Navigation() {
  const router = useRouter();
  // Empty on routes that don't render the home page sections, so nothing is
  // highlighted as "current" there.
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sections = ["about", "experience", "projects", "contact"];

    // /blog, /projects, /resume and /blog/[slug] reuse this header but have no
    // in-page sections to track.
    if (!sections.some((id) => document.getElementById(id))) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // These sections only exist on "/", so fall back to navigating home to the
  // anchor when the current route doesn't render them.
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  type NavLink = {
    href: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  };

  const socialLinks: NavLink[] = [
    {
      href: "https://github.com/fadilnatakusumah",
      icon: FiGithub,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/muhammad-fadhilah-mulyana",
      icon: FiLinkedin,
      label: "LinkedIn",
    },
    { href: "mailto:fadil.ntksmh@gmail.com", icon: FiMail, label: "Email" },
    { href: "/blog", icon: FiEdit3, label: "Blog" },
    { href: "/resume", icon: FiFileText, label: "Resume" },
  ];

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <motion.div {...slideInLeft}>
        <div className="flex items-center justify-between mb-4 lg:mb-0">
          <div className="flex-1">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/">
                <ShinyText text={`Muhammad Fadhilah Mulyana`} />
              </Link>
            </motion.h1>
            <motion.h2
              className="mt-3 text-lg font-medium tracking-tight text-slate-500 dark:text-slate-200 sm:text-xl"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Software Engineer
            </motion.h2>
          </div>
          <div className="lg:hidden">
            <motion.div {...hoverScale}>
              <ThemeToggle />
            </motion.div>
          </div>
        </div>

        <motion.div {...fadeInUp} className="mt-6">
          <Image
            className="rounded-full shadow-xl"
            src={`/assets/images/profile-pict.jpg`}
            alt=""
            width={200}
            height={200}
          />
        </motion.div>

        <motion.p
          className="mt-4 max-w-xs leading-normal text-slate-600 dark:text-slate-400"
          {...fadeInUp}
          transition={{ delay: 0.3 }}
        >
          I build accessible, pixel-perfect digital experiences for the web.
        </motion.p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <motion.ul
            className="mt-16 w-max"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center py-3 ${activeSection === item.id ? "active" : ""}`}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.span
                    className={`nav-indicator mr-4 h-px transition-all ${
                      activeSection === item.id
                        ? "w-16 bg-slate-900 dark:bg-slate-200"
                        : "w-8 bg-slate-400 dark:bg-slate-600 group-hover:w-16 group-hover:bg-slate-700 dark:group-hover:bg-slate-300"
                    }`}
                    animate={{
                      width: activeSection === item.id ? 64 : 32,
                      backgroundColor:
                        activeSection === item.id
                          ? "var(--foreground)"
                          : "var(--muted-foreground)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                      activeSection === item.id
                        ? "text-slate-900 dark:text-slate-200"
                        : "text-slate-500 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-200"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.button>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </motion.div>

      <motion.div
        className="flex items-center justify-between"
        {...fadeInUp}
        transition={{ delay: 0.8 }}
      >
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          {socialLinks.map((link, index) => (
            <motion.li
              key={link.label}
              className="mr-5 text-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <motion.a
                className="block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                onClick={() =>
                  trackEvent("social_click", { label: link.label })
                }
                {...hoverLift}
              >
                <link.icon className="h-6 w-6" />
              </motion.a>
            </motion.li>
          ))}
        </ul>
        <motion.div className="hidden lg:block mt-8" {...hoverScale}>
          <ThemeToggle />
        </motion.div>
      </motion.div>
    </header>
  );
}
