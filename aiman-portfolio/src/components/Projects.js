import { useState } from "react";
import cert1 from "../assets/data.png";
import cert2 from "../assets/cyber.png";
import cert3 from "../assets/m1.png";
import cert4 from "../assets/m2.png";
import cert5 from "../assets/m3.png";
import projects from "./ProjectData";


export default function Projects() {
  const [activeSection, setActiveSection] = useState("projects");
  const [mobileIndex, setMobileIndex] = useState(0);
  const certificateImages = [cert1, cert2, cert3, cert4, cert5];

  const sections = ["projects", "certifications", "techStack"];
  const labels = {
    projects: "Projects",
    certifications: "Certifications",
    techStack: "Tech Stack",
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileIndex(sections.indexOf(section));
  };

  const handleArrowClick = (direction) => {
    let newIndex =
      direction === "left"
        ? (mobileIndex - 1 + sections.length) % sections.length
        : (mobileIndex + 1) % sections.length;
    setActiveSection(sections[newIndex]);
    setMobileIndex(newIndex);
  };

  return (
    <section className="min-h-screen bg-[#212529] text-white px-6 md:px-20 py-24 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-[#0A9396] mb-2">
        Portfolio Showcase
      </h2>
      <p className="text-center text-gray-400 text-base mb-12">
        Explore my journey through projects, certifications, and technical expertise. <br />
        Each section represents a milestone in my continuous learning path.
      </p>

      {/* Desktop Glass Navbar */}
      <div className="hidden md:flex bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[#0A9396] rounded-xl overflow-hidden mb-12">
        {sections.map((section) => (
          <div
            key={section}
            className={`px-28 py-3 cursor-pointer transition-all duration-300 text-sm md:text-base font-semibold ${
              activeSection === section
                ? "bg-[#0A9396] text-white"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => handleNavClick(section)}
          >
            {labels[section]}
          </div>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between w-full max-w-xs mb-8">
        <button
          className="text-3xl text-[#0A9396] hover:text-white"
          onClick={() => handleArrowClick("left")}
        >
          &#8592;
        </button>
        <div
          className="px-6 py-3 rounded-lg bg-[rgba(255,255,255,0.15)] backdrop-blur-md border border-[#0A9396] text-center text-sm font-semibold text-white w-full mx-4 flex justify-center items-center"
        >
          {labels[sections[mobileIndex]]}
        </div>
        <button
          className="text-3xl text-[#0A9396] hover:text-white"
          onClick={() => handleArrowClick("right")}
        >
          &#8594;
        </button>
      </div>

      {/* Sections */}
      {/* --------------------- PROJECTS ----------------------- */}
      <div className="w-full mt-8">
        {activeSection === "projects" && (
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full md:w-[48%] bg-[#212529] border border-[#0A9396] rounded-lg p-6 text-white shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-[#0A9396] mb-4">{project.name}</h3>
                <p className="text-gray-400 mb-4 text-justify text-sm">{project.overview}</p>
                <p className="text-sm text-gray-400 mb-4">
                  <strong>Technologies:</strong> {project.tech.join(", ")}
                </p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#0A9396] text-white rounded-md shadow-[0_2px_8px_rgba(192,192,192,0.4)] text-xs md:text-sm"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* --------------------- CERTIFICATES ----------------------- */}
      {activeSection === "certifications" && (
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {certificateImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className="w-full max-w-[260px] rounded-lg shadow-[0_4px_12px_rgba(192,192,192,0.5)] transition-transform hover:scale-105"
              />
            ))}
          </div>
        </div>
      )}

          {/* --------------------- TECH ----------------------- */}
          {activeSection === "techStack" && (
          <div className="text-center px-12">
            {/* Programming Languages & Frameworks */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#0A9396] mb-4">Programming Languages & Frameworks</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-4 justify-items-center">
                {[
                  "Python", "C++", "R", "SQL", "Django", "Flask", "Scikit-learn", "Tensorflow"
                ].map((language, index) => (
                  <div
                    key={index}
                    className="w-28 h-14 bg-gray-700 text-white flex justify-center items-center rounded-md shadow-md"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>

            {/* Softwares */}
            <div>
              <h3 className="text-2xl font-semibold text-[#0A9396] mb-4">Softwares</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-4 justify-items-center">
                {[
                  "Canva", "Google Colab", "Tableau", "Excel", "Powerpoint", "Google Sheets", "Github", "Jupyter", "Azure"
                ].map((software, index) => (
                  <div
                    key={index}
                    className="w-28 h-14 bg-gray-700 border-[#0A9396] text-white flex justify-center items-center rounded-md shadow-md"
                  >
                    {software}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}