import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const Home = () => {
  console.log("Home component is rendering ✅");
  return (
    <section
      id="Home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 text-white overflow-hidden bg-transparent"
    >
      <ParticlesBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col md:flex-row items-center gap-10 text-left"
      >
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/me.jpg"
            alt="Anudeep"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-left">
            Hi, I'm{" "}
            <span className="text-blue-400 drop-shadow-md">Anudeep Allamsetty</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center md:text-left">
            Full Stack Java Developer
          </h2>

          <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300 text-center md:text-left">
            Engineering robust, scalable, and secure web applications using Java (17), Spring Boot, React, Angular, and MongoDB.
            Skilled in designing microservices, building REST & GraphQL APIs, and deploying cloud-native solutions with AWS,
            Docker, and Kubernetes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg hover-float"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white py-2 px-6 rounded-lg hover-float"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
