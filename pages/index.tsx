import { motion } from "framer-motion";
import { Footer } from "../components/commons/Footer";
import { Header } from "../components/commons/Header";
import Navbar from "../components/commons/Navbar";
import { Experiences } from "../components/sections/Experiences";
import Profile from "../components/sections/Profile";
import { Projects } from "../components/sections/Projects";

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

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
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
      </motion.div>
    </>
  );
}
