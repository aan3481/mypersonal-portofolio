import React, { useState } from "react";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Modal from "../components/Modal"; // Pastikan kamu punya file Modal.jsx

const certificates = [
  {
    title: "Introduction to Cyberseurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    image: "/sertifikat/cybersecurity.jpg",
  },
  {
    title: "Sistem Basis Data",
    issuer: "Zahir",
    year: "2024",
    image: "/sertifikat/sbd.jpg",
  },
  {
    title: "Programming Essentials in Python",
    issuer: "Python Institute",
    year: "2023",
    image: "/sertifikat/python.jpg",
  },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <FadeInWhenVisible>
      <section
        id="certificates"
        className="scroll-mt-24 w-full min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-6 inline-block border-b-4 border-teal-500">
            Certificates
          </h2>

          <div className="grid gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3">
            {certificates.map((cert, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.2}>
                <div
                  className="relative group bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                  />

                  {/* Overlay saat hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm bg-teal-500 text-white px-4 py-1 rounded-full font-semibold shadow-md">
                      Klik untuk melihat
                    </span>
                  </div>

                  {/* Konten bawah */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-1 text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-300">{cert.issuer}</p>
                    <span className="text-xs text-slate-400 italic">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <Modal onClose={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              alt="Sertifikat"
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
          </Modal>
        )}
      </section>
    </FadeInWhenVisible>
  );
};

export default Certificates;
