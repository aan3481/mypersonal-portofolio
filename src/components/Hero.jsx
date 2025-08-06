import React from "react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import LanyardAnimation from "./LanyardAnimation";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const techStack = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
];

const Hero = () => {
  return (
    <FadeInSection>
      <section
        id="home"
        className="min-h-screen pt-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex items-center justify-center px-4 pb-16"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Kiri: Teks & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left px-4 sm:px-6 md:px-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Halo, saya <span className="text-teal-400">Farhan Syawaludin</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6">
              Junior Web Developer | UI/UX Enthusiast | Student at Bina Sarana Informatika
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg border border-teal-500 text-white font-semibold hover:bg-teal-600 transition duration-300"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition duration-300"
              >
                Lihat Proyek Saya
              </a>
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
              <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition duration-300 backdrop-blur-sm cursor-pointer shadow hover:shadow-md"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className="text-3xl">{tech.icon}</div>
                    <p className="text-sm mt-1 text-gray-200 text-center">{tech.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Kanan: Lanyard Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end w-full"
          >
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px]">
              <LanyardAnimation />
            </div>
          </motion.div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Hero;
