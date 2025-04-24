import { motion } from "framer-motion";
import { Footer } from "../components/commons/Footer";
import { Header } from "../components/commons/Header";
import Navbar from "../components/commons/Navbar";
import { Experiences } from "../components/sections/Experiences";
import Profile from "../components/sections/Profile";
import { Projects } from "../components/sections/Projects";
import Image from "next/image";
import Link from "next/link";

const AnimateVariants = {
  hidden: {
    opacity: 0,
    // x: '-100vw',
  },
  visible: {
    opacity: 1,
    // x: '0',
    transition: {
      staggerChildren: 0.2,
      duration: 2,
      type: "spring",
      when: "beforeChildren",
    },
  },
  exit: {
    // x: "-100vh",
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

import MyCSS from "./index.module.css";
import { GITHUB, LINKEDIN, RESUME } from "../config";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HomePage(): JSX.Element {
  return (
    <>
      {/* <head>
        <title>Portofolio | Muhammad Fadhilah Mulyana</title>
      </head> */}
      <div className={MyCSS.container}>
        <div className={MyCSS.imageProfile}>
          <div style={{ textAlign: "center" }}>
            <Image
              className="image-profile__img"
              src={`/assets/images/new-profile-photo.jpg`}
              alt="me - fadilnatakusumah"
              width="300"
              height="300"
              // sizes="contain"
            />
          </div>
          <div>
            <div style={{ fontSize: "32px" }}>Muhammad Fadhilah Mulyana</div>
            <div style={{ fontSize: "20px" }}>
              Software Engineer -{" "}
              <a
                style={{ color: "#14768a", fontWeight: "bold" }}
                href={RESUME}
                target="_blank"
              >
                View My Resume
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "#14768a",
              }}
            >
              <a
                href={LINKEDIN}
                target="_blank"
                style={{
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>
                  <FaLinkedin />
                </span>
                <span>Linkedin</span>
              </a>

              <a
                href={GITHUB}
                target="_blank"
                style={{
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>
                  <FaGithub />
                </span>
                <span>Github</span>
              </a>
            </div>
            <p style={{ maxWidth: "400px", marginTop: "12px" }}>
              I am a Software Engineer with over five years of experience
              developing efficient, user-focused applications. My expertise lies
              in modern frontend technologies such as React.js, Next.js, and
              TypeScript, complemented by backend skills in Node.js and GraphQL.
              I have successfully led impactful projects, optimized application
              performance, and built scalable solutions that drive strong user
              engagement. Passionate about enhancing user experiences, I am
              dedicated to crafting innovative, reliable systems. Currently
              based in Indonesia, I am open to relocation for the right
              opportunity.
            </p>
          </div>
        </div>
      </div>
      {/* <Header />
      <motion.div
        variants={AnimateVariants}
        animate="visible"
        initial="hidden"
        exit="exit"
      >
        <Navbar />
        <Profile />
        <Experiences />
        <Projects />
        <Footer />
      </motion.div> */}
    </>
  );
}
