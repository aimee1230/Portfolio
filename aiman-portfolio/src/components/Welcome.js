import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Welcome() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen animate-fade-in"
      style={{ backgroundColor: "#212529", color: "#0A9396" }}
    >
      <h1 className="text-4xl font-bold mb-4 text-center px-4 md:px-0">
        Welcome to My Creative Universe
      </h1>
      <div className="flex space-x-6 text-3xl md:text-4xl">
        <a
          href="https://github.com/aimee1230"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/aiman-gohar-ml-engineer"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:aimeegohar@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}
