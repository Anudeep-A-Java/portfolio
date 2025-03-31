import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="px-4 py-20 bg-gray-700 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300">
          I'm Anudeep A, a passionate Full Stack Java Developer with 4+ years of
          experience in building robust web applications using technologies like
          React, Spring Boot, MongoDB, and REST APIs.
        </p>
        <p className="mt-6 text-lg text-gray-300">
          I’ve worked on enterprise projects involving job portals, data tracking,
          and expense management systems. I love problem-solving, exploring new
          tools, and collaborating in cross-functional agile teams.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
