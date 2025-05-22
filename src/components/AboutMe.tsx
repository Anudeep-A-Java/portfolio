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
          I'm Anudeep Allamsetty, a results-driven Full Stack Java Developer with over 5 years of experience building robust, scalable web applications using Java (17), Spring Boot, React, Angular, and MongoDB.
        </p>
        <p className="mt-6 text-lg text-gray-300">
          I’ve delivered enterprise-grade solutions for job portals, data tracking systems, and expense management platforms, applying microservices architecture, secure REST & GraphQL APIs, and CI/CD automation on cloud platforms like AWS and Azure.

        </p>
        <p className="mt-6 text-lg text-gray-300">
          I thrive in Agile environments, enjoy solving complex problems, and continuously explore emerging tools and frameworks to build clean, maintainable, and high-performance applications.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
