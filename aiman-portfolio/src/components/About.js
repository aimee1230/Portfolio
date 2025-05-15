import Lottie from "lottie-react";
import meAnimation from "../assets/me.json";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function About() {
  return (
    <section className="min-h-screen bg-[#212529] text-white px-6 md:px-20 py-24 flex flex-col items-center">
      {/* Container for a cohesive look */}
      <div className="w-full bg-gray-700 rounded-lg p-8 md:p-16 shadow-lg">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-[#0A9396] mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 text-base mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Bridging the gap between data and discovery with intelligent solutions
        </motion.p>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
          {/* Left - Text Section */}
          <motion.div
            className="md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0A9396]">Hello, I'm</h3>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Aiman Gohar</h1>
            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              An AI enthusiast and problem-solver driven to use intelligent systems...
            </p>

            {/* Additional Details */}
            <div className="mt-6 space-y-4 text-sm text-gray-400">
              <div>
                <h4 className="text-[#0A9396] font-semibold">Education</h4>
                <p>Bachelor’s in Artificial Intelligence from GIKI, Pakistan</p>
              </div>
              <div>
                <h4 className="text-[#0A9396] font-semibold">Creative Outlets</h4>
                <p>Technical writing, UI design, Coding, AI-powered apps, Art & Crafts</p>
              </div>
              <div>
                <h4 className="text-[#0A9396] font-semibold">My Journey</h4>
                <p className="text-justify">
                  From a young age, my thirst for knowledge has driven me. Growing up in a middle-class family with limited access to education, I moved between cities in Pakistan to find better opportunities. This journey wasn’t just about academics—it was about breaking barriers and becoming an independent woman. I hope to inspire others, especially in my village, to dream big and believe in their potential.
                  <br /><br />
                  Starting with C++, without formal computer education, every line of code felt like a mountain to climb. Yet, with each challenge, my passion grew. Transitioning to Python opened new doors, and my journey shifted from solving basic problems to creating AI-powered solutions.
                  <br /><br />
                  As an AI Engineer and Data Scientist, I’m committed to using technology to spark meaningful change. I believe AI is not just a tool but a creative force—one that can unlock possibilities and empower people. My mission is to bridge technical innovation with human creativity, pushing the boundaries of what’s possible. I also strive to represent women in tech, advocating for diversity and inspiring future generations to pursue their passions.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-slow">
              <a
                href="https://drive.google.com/drive/folders/1AWrSMFDAE9Z2XMUmK79TkgNQtWNNc0Yk?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-[#0A9396] text-white rounded-md shadow-[0_2px_8px_rgba(192,192,192,0.4)] text-xs md:text-sm"
              >
                Download CV
              </a>
              <ScrollLink
                to="Projects"
                smooth={true}
                duration={500}
                offset={-70} // Optional: offset to align with fixed navbar
                className="px-3 py-1 bg-[#0A9396] text-white rounded-md shadow-[0_2px_8px_rgba(192,192,192,0.4)] text-xs md:text-sm cursor-pointer"
              >
                View Projects
              </ScrollLink>
            </div>
          </motion.div>

          {/* Right - Animation */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Lottie animationData={meAnimation} loop={true} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
