import Lottie from "lottie-react";
import meAnimation from "../assets/me.json";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function About() {
  return (
    <section
      id="About"
      className="min-h-screen lg:h-screen w-full bg-[#212529] text-white px-4 sm:px-6 md:px-16 flex items-center justify-center py-24 lg:py-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto flex flex-col justify-center h-full"
      >
        {/* Main Card */}
        <div className="bg-[#2b3035] rounded-3xl border border-[#0A9396]/20 shadow-[0_20px_50px_rgba(0,0,0,.3)] w-full h-auto lg:max-h-[85vh] overflow-visible lg:overflow-hidden flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 md:p-12">
            
            {/* LEFT - CONTENT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-4 justify-center"
            >
              <div>
                <span className="text-xs font-bold tracking-widest text-[#0a9396] uppercase bg-[#0A9396]/10 px-3 py-1.5 rounded-full">
                  About Me
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 tracking-tight">
                  Aiman Gohar
                </h1>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-300 mt-1">
                  Machine Learning Engineer
                </h3>
              </div>

              {/* Core Professional Bio */}
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed text-left">
                I am passionate about designing AI systems that bridge research and real-world applications. My work focuses on Computer Vision, Large Language Models, Retrieval-Augmented Generation (RAG), Agentic AI, and MLOps, with the goal of building intelligent, scalable, and impactful solutions.
              </p>

              {/* Condensed Story Snippet */}
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed border-l-2 border-[#0A9396]/40 pl-4 text-left italic">
                My journey began with a curiosity for transitioning logic into machine intelligence. Today, I enjoy transforming research into applications while aiming to inspire more young minds, especially women, to confidently pursue careers in AI.
              </p>

              {/* Clean Quick-Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
                <div className="bg-[#343a40]/60 p-3 rounded-xl border border-[#0A9396]/10">
                  <span className="text-[#0A9396] text-xs font-bold block mb-0.5">Education</span>
                  <span className="text-[11px] sm:text-xs text-gray-300 font-semibold block leading-tight">B.S. in AI</span>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 block">GIK Institute, PK</span>
                </div>

                <div className="bg-[#343a40]/60 p-3 rounded-xl border border-[#0A9396]/10">
                  <span className="text-[#0A9396] text-xs font-bold block mb-0.5">Open To</span>
                  <span className="text-[11px] sm:text-xs text-gray-300 font-semibold block leading-tight">Remote Roles</span>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 block">ML / AI Engineer</span>
                </div>

                <div className="bg-[#343a40]/60 p-3 rounded-xl border border-[#0A9396]/10">
                  <span className="text-[#0A9396] text-xs font-bold block mb-0.5">Beyond AI</span>
                  <span className="text-[11px] sm:text-xs text-gray-300 font-semibold block leading-tight">Writing & Art</span>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 block">UI Design & Crafts</span>
                </div>

                <div className="bg-[#343a40]/60 p-3 rounded-xl border border-[#0A9396]/10">
                  <span className="text-[#0A9396] text-xs font-bold block mb-0.5">Mission</span>
                  <span className="text-[11px] sm:text-xs text-gray-300 font-semibold block leading-tight">Practical Impact</span>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 block">Measurable Solutions</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-2">
                <a
                  href="https://drive.google.com/file/d/1Pnj3ZBlb-QqAz8EwdSbzw4iFxGSiS-2G/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#0A9396] hover:bg-[#089094] transition-all duration-300 hover:scale-105 shadow-md font-semibold text-sm text-center"
                >
                  Download CV
                </a>

                <ScrollLink
                  to="Projects"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="px-6 py-2.5 rounded-full border border-[#0A9396] text-[#0A9396] hover:bg-[#0A9396] hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer font-semibold text-sm text-center"
                >
                  View Projects
                </ScrollLink>
              </div>
            </motion.div>

            {/* RIGHT - ANIMATION COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center items-center min-h-[220px] sm:min-h-[280px] lg:min-h-0"
            >
              {/* Cyan Glow */}
              <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#0A9396]/15 blur-3xl"></div>

              {/* Decorative Blinking Circles */}
              <div className="absolute top-4 left-8 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#0A9396]/60 animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-cyan-300 animate-bounce"></div>
              <div className="absolute top-1/2 right-0 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/45 animate-ping"></div>

              {/* Robot Animation Container */}
              <div className="relative z-10 w-full max-w-[240px] sm:max-w-[320px] lg:max-w-[420px] hover:scale-105 transition-all duration-500">
                <Lottie
                  animationData={meAnimation}
                  loop={true}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}