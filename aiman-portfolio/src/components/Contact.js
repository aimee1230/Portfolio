import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import f from "../assets/fiverr.svg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#212529] text-white px-6 md:px-20 py-24 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-[#0A9396] mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Contact Me
      </motion.h2>

      {/* Tagline */}
      <motion.p
        className="text-gray-300 text-base italic mb-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Let's build intelligent and meaningful solutions together.
      </motion.p>

      {/* Paragraph */}
      <motion.p
        className="text-gray-400 text-sm max-w-2xl text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        I am open for both remote and onsite opportunities in Data Science, AI/ML roles that align with my background.
        I'm also passionate about UI design and creative work. I offer freelance services on Fiverr including developing
        Machine Learning, Deep Learning, and NLP solutions—from building chatbots to complete end-to-end web applications.
        Feel free to reach out to me!
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6 text-3xl text-[#0A9396]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <a
          href="https://github.com/aimee1230"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:aimeegohar@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <MdEmail />
        </a>
        <a
          href="https://www.linkedin.com/in/aiman-gohar-ml-engineer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
        <a
            href="https://www.fiverr.com/aimee012"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            >
            <img
                src = {f}
                className="w-[2.2rem] h-[2.2rem]" // matches text-3xl (~24px)
            />
            </a>

      </motion.div>
    </section>
  );
}

  