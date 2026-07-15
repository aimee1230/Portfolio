import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCode, 
  FaBrain, 
  FaRobot, 
  FaDatabase, 
  FaServer, 
  FaTools 
} from "react-icons/fa";

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

  // Project Index State
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

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

  const handleProjectStep = (direction) => {
    if (direction === "next") {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    } else {
      setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  // Tech Stack Data structure with modern iconography
  const skillCategories = [
    {
      title: "Programming",
      icon: <FaCode className="text-[#0A9396] text-xl" />,
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "C++", "SQL"]
    },
    {
      title: "AI / Machine Learning",
      icon: <FaBrain className="text-[#0A9396] text-xl" />,
      skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV"]
    },
    {
      title: "LLMs & Agentic AI",
      icon: <FaRobot className="text-[#0A9396] text-xl" />,
      skills: ["LangChain", "LangGraph", "Prompt Engineering", "Ollama", "RAG"]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-[#0A9396] text-xl" />,
      skills: ["PostgreSQL", "SQLite", "Neo4j", "ChromaDB", "Pinecone"]
    },
    {
      title: "Backend & Deployment",
      icon: <FaServer className="text-[#0A9396] text-xl" />,
      skills: ["Flask", "FastAPI", "REST APIs", "Docker", "AWS", "Vercel", "GitHub"]
    },
    {
      title: "Tools & Analytics",
      icon: <FaTools className="text-[#0A9396] text-xl" />,
      skills: ["Jupyter", "Google Colab", "n8n", "Excel", "Tableau", "Canva"]
    }
  ];

  return (
    <section className="min-h-screen w-full bg-[#212529] text-white px-6 md:px-20 py-24 flex flex-col items-center">
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

      {/* Sections Container */}
      <div className="w-full max-w-6xl mt-2">
        
        {/* --------------------- PROJECTS ----------------------- */}
        {activeSection === "projects" && (
          <div className="flex flex-col items-center">
            {/* Interactive Desktop Carousel Frame */}
            <div className="relative w-full bg-[#2b3035] rounded-3xl border border-[#0A9396]/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300 hover:border-[#0A9396]/50">
              <AnimatePresence mode="wait">
                {projects.map((project, index) => {
                  if (index !== currentProjectIndex) return null;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="flex flex-col md:flex-row min-h-[420px] h-auto w-full"
                    >
                      {/* Left Block (Identity & Navigation) */}
                      <div className="md:w-[35%] bg-[#1F2428] p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#0A9396]/15 relative">
                        <div>
                          <span className="text-xs font-bold tracking-widest text-[#0a9396] uppercase bg-[#0A9396]/10 px-3.5 py-1.5 rounded-full">
                            Project {index + 1} of {projects.length}
                          </span>
                          
                          <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-8 leading-tight tracking-tight">
                            {project.name}
                          </h3>
                        </div>

                        {/* Pagination Control Integration */}
                        <div className="flex items-center justify-between mt-12 md:mt-0 pt-6 border-t border-[#0A9396]/10 md:border-t-0">
                          {/* Navigation Dots */}
                          <div className="flex items-center gap-2">
                            {projects.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                onClick={() => setCurrentProjectIndex(dotIdx)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  dotIdx === currentProjectIndex 
                                    ? "w-8 bg-[#0A9396]" 
                                    : "w-2 bg-gray-600 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to project ${dotIdx + 1}`}
                              />
                            ))}
                          </div>

                          {/* Inline Navigation Arrows */}
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleProjectStep("prev")}
                              className="w-8 h-8 rounded-full border border-[#0A9396]/30 flex items-center justify-center bg-[#2b3035] text-[#0A9396] hover:bg-[#0A9396] hover:text-white transition-all duration-200"
                            >
                              &#8592;
                            </button>
                            <button
                              onClick={() => handleProjectStep("next")}
                              className="w-8 h-8 rounded-full border border-[#0A9396]/30 flex items-center justify-center bg-[#2b3035] text-[#0A9396] hover:bg-[#0A9396] hover:text-white transition-all duration-200"
                            >
                              &#8594;
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Right Block (Details, Specs, Actions) */}
                      <div className="md:w-[65%] p-8 md:p-10 flex flex-col justify-between gap-8">
                        <div>
                          <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed text-left">
                            {project.overview}
                          </p>
                        </div>

                        {/* Tech list and code link row */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#0A9396]/10">
                          <div className="flex flex-wrap gap-2 max-w-[70%]">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-full border border-[#0A9396]/30 bg-[#0A9396]/5 text-[#0A9396] text-[11px] font-semibold"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A9396] hover:bg-[#089094] transition-all duration-300 hover:scale-[1.03] shadow-md font-bold text-sm text-white shrink-0 self-start sm:self-center"
                          >
                            View Code ↗
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* --------------------- CERTIFICATES ----------------------- */}
        {activeSection === "certifications" && (
          <div className="w-full">
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

        {/* --------------------- TECH STACK ----------------------- */}
        {activeSection === "techStack" && (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 }
              }
            }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
                whileHover={{ y: -4 }}
                className="bg-[#2b3035] rounded-2xl border border-[#0A9396]/20 p-6 hover:border-[#0A9396]/60 transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Category Header (Icon + Name Alignment) */}
                  <div className="flex items-center gap-3 mb-5 border-b border-[#0A9396]/10 pb-3">
                    {category.icon}
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tag Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((item) => (
                      <span
                        key={item}
                        className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-[#0A9396]/5 border border-[#0A9396]/30 text-[#0a9396] hover:bg-[#0A9396] hover:text-white hover:shadow-[0_0_12px_rgba(10,147,150,0.3)] transition-all duration-200 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}