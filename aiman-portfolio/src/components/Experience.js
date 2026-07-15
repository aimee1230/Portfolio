import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "RevolveAI",
    role: "Machine Learning Engineer",
    duration: "June 2025 – May 2026",
    points: [
        "Engineered an end-to-end training and inference pipeline utilizing YOLO, CLIP, and the Whisper API to detect and classify brands in sports broadcasts, leveraging audio transcription alongside visual detections for automated sponsorship monetary value estimation.",
        "Fine-tuned a YOLO object detection model to extract brand-relevant frames and transitioned from zero-shot CLIP prompting to fine-tuning CLIP vision-language models to overcome fine-grained classification challenges of visually similar logos.",
        "Designed and executed a data-preparation pipeline using a fine-tuned YOLO model to extract video frames and the GPT API for initial classification, performing manual data annotation to curate the high-accuracy dataset used for CLIP fine-tuning.",
        "Pioneered a research-driven Cyber Threat Intelligence (CTI) initiative, successfully reproducing benchmark intrusion detection systems and fine-tuning a Qwen LLM using custom instruction-tuning templates to improve structured security task performance.",
        "Benchmarked open-source LLMs on specialized datasets (MITRE ATT&CK, CVE, CWE, CAPEC) and deployed PostgreSQL and Neo4j databases to map complex semantic relationships between disparate security frameworks."
     ]
  },
  {
    company: "GIK Institute × NESCOM",
    role: "Artificial Intelligence Intern",
    duration: "June 2023 – August 2023",
    points: [
      "Developed an end-to-end image enhancement application to restore low-resolution CCTV footage, successfully integrating a Real-ESRGAN deep learning model into a Flask and React web architecture.",
      "Designed and optimized highly efficient REST APIs and SQL database queries to minimize data-transfer overhead and facilitate rapid backend communication.",
      "Optimized input-image preprocessing pipelines, significantly reducing latency during deep learning enhancement processes while maintaining high-fidelity visual outputs."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#212529] text-white py-24 px-6 md:px-[8%]"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-widest text-[#0A9396] uppercase bg-[#0A9396]/10 px-3.5 py-1.5 rounded-full">
          My Journey
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A9396] mt-4 mb-3">
          Work Experience
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          My professional journey building AI-powered solutions in Computer
          Vision, Large Language Models, Multimodal AI, and Cybersecurity.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Sleek Vertical Timeline Line (Gradients add depth so it doesn't end abruptly) */}
        <div className="absolute left-6 top-0 w-[3px] h-full bg-gradient-to-b from-[#0A9396]/80 via-[#0A9396]/30 to-transparent" />

        {/* Experience Nodes */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-start relative group"
            >
              
              {/* Left Timeline Icon Container with Concentric Pulse Effect */}
              <div className="relative z-10 shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#2b3035] border-2 border-[#0A9396] flex justify-center items-center text-white shadow-[0_0_15px_rgba(10,147,150,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(10,147,150,0.7)]">
                  <FaBriefcase className="text-[#0A9396] text-sm" />
                </div>
                {/* Decorative outer pulse ring */}
                <div className="absolute top-0 left-0 w-12 h-12 rounded-full border border-[#0A9396]/30 animate-ping -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Work Details Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -6,
                  borderColor: "rgba(10, 147, 150, 0.6)",
                  boxShadow: "0 20px 40px rgba(10, 147, 150, 0.15)"
                }}
                className="ml-6 md:ml-8 flex-1 bg-[#2b3035] rounded-2xl p-6 md:p-8 border border-[#0A9396]/15 shadow-xl transition-all duration-300 ease-out"
              >
                {/* Card Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#0A9396] tracking-tight">
                      {exp.role}
                    </h2>
                    <h3 className="text-md font-semibold text-gray-200 mt-1">
                      {exp.company}
                    </h3>
                  </div>

                  <span className="text-xs md:text-sm font-semibold tracking-wider text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full self-start sm:self-center">
                    {exp.duration}
                  </span>
                </div>

                {/* Point List */}
                <ul className="space-y-3.5 text-gray-300 text-sm md:text-[15px] leading-relaxed">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-left"
                    >
                      {/* Soft custom bullets */}
                      <span className="text-[#0A9396] select-none mt-1.5 font-bold text-xs">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}