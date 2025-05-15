import Lottie from "lottie-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import aiAnimation from "../assets/ai-animation.json";

export default function Home() {
  return (
    <section className="min-h-screen pt-20 px-6 md:px-20 flex flex-col items-center justify-center bg-[#212529] text-white">
      {/* Main layout */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 animate-fade-in">
        {/* Left section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-3xl font-bold text-[#0A9396] mb-4">
            AI Engineer & Data Scientist
          </h1>
          <p className="text-justify mb-6">
            Imagine a world where a curious mind and an AI-powered heart work together to solve real-world problems — that’s my world. I'm Aiman — an AI explorer, tech storyteller, and problem-solver on a mission to shape a smarter, safer, and more meaningful future.
          </p>

          {/* Tags under text */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-slow">
            {[
              "Artificial Intelligence",
              "Machine Learning",
              "Deep Learning",
              "Natural Language Processing",
              "Data Science",
            ].map((tag, idx) => (
              <span
                  key={idx}
                  className="px-3 py-1 bg-[#0A9396] text-white rounded-md shadow-[0_2px_8px_rgba(192,192,192,0.4)] text-xs md:text-sm"
                >
                  {tag}
                </span>

            ))}
          </div>

          {/* Social icons under tags */}
          <div className="mt-6 flex space-x-6 text-xl animate-fade-in-slow justify-center md:justify-start">
            <a
              href="https://github.com/aimee1230"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-[0_2px_10px_rgba(192,192,192,0.4)] p-2 rounded-full bg-[#0A9396] transition duration-300 hover:opacity-80"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/aiman-gohar-ml-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-[0_2px_10px_rgba(192,192,192,0.4)] p-2 rounded-full bg-[#0A9396] transition duration-300 hover:opacity-80"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:aimeegohar@gmail.com"
              className="shadow-[0_2px_10px_rgba(192,192,192,0.4)] p-2 rounded-full bg-[#0A9396] transition duration-300 hover:opacity-80"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right section: Lottie */}
        <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
            <Lottie animationData={aiAnimation} loop={true} />
        </div>

      </div>
    </section>
  );
}
