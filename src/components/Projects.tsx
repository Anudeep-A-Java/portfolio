import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-gray-800 text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-10 text-blue-400">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Job Tracker */}
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg border border-blue-500 hover:shadow-blue-500 hover-float">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Job Tracker</h3>
            <p className="text-gray-300 mb-4">
              Full-stack app to track job applications with features like search, filter, status updates and secure login.
              Built with React, Spring Boot, and MongoDB.
            </p>
            <a
              href="https://github.com/Anudeep-A-Java/job-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
            >
              GitHub Repository
            </a>
          </div>

          {/* Expense Manager */}
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg border border-green-400 hover:shadow-green-400 hover-float">
            <h3 className="text-xl font-semibold mb-2 text-green-300">Expense Manager</h3>
            <p className="text-gray-300 mb-4">
              A dynamic expense tracking dashboard with charts and user login, powered by React, MySQL, and Spring Boot.
            </p>
            <a
              href="https://github.com/Anudeep-A-Java/expense-tracker-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
