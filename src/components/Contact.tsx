import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Contact Me</h2>
        <p className="mb-10 text-lg">
          I'm actively seeking full-time Java/Full Stack roles where I can contribute to impactful products. Reach out for opportunities, tech collaboration, or just to connect!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="mailto:allamsettyanudeep.dev@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-lg text-white font-semibold transition hover-float"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/anudeep-allamsetty-5137a1162/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-3 px-6 rounded-lg font-semibold transition hover-float"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Anudeep-A-Java"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-6 rounded-lg font-semibold transition hover-float"
          >
            GitHub
          </a>
          <a
            href="tel:(913)298-0164"
            className="border border-green-500 text-green-400 hover:bg-green-600 hover:text-white py-3 px-6 rounded-lg font-semibold transition hover-float"
          >
            Call: (913)298-0164
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
