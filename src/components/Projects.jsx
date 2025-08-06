import React, { useState } from "react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";
import Modal from "./Modal"; // Pastikan file Modal.jsx tersedia

const projects = [
  {
    title: "Aplikasi Listrik Pascabayar",
    description:
      "Aplikasi berbasis web untuk memudahkan pembayaran listrik pascabayar secara online. Dibangun menggunakan Laravel dan Bootstrap.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    image: "/images/listrik.png",
  },
  {
    title: "Aplikasi Bioskop Online",
    description:
      "Platform pemesanan tiket bioskop dengan fitur jadwal tayang, pemilihan secara kursi real-time, dan juga pembayaran online.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    image: "/images/bioskop.png",
  },
  {
    title: "Portfolio Website",
    description:
      "Situs web pribadi yang menampilkan informasi tentang saya, proyek, dan pengalaman. Dibuat dengan React dan Tailwind CSS.",
    technologies: ["React", "Tailwind", "Framer Motion"],
    image: "/images/portofolio.png",
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <FadeInWhenVisible>
      <section
        id="projects"
        className="scroll-mt-24 w-full min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-6 border-b-4 border-teal-600 inline-block">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(project.image)}
                className="group bg-[#1e293b] rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-xl hover:ring-1 hover:ring-teal-500 transition-all"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out blur-md group-hover:blur-0"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm bg-teal-500 text-white px-4 py-1 rounded-full font-semibold shadow-md">
                      Klik untuk melihat
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-slate-700 text-teal-300 px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <Modal onClose={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              alt="Project Screenshot"
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
          </Modal>
        )}
      </section>
    </FadeInWhenVisible>
  );
}
