import { motion } from "framer-motion";

const educationData = [
  {
    institution: "University of Central Missouri",
    logo: "/ucm.svg",
    url: "https://www.ucmo.edu",
    degree: "Master’s in Computer Science",
    location: "Missouri, USA",
    borderColor: "border-purple-500",
    shadowColor: "hover:shadow-purple-500",
    details: [
      "Specialized in Algorithms, Cloud Computing, and Software Engineering.",
      "Gained hands-on experience with GenAI, OpenAI APIs, and LangChain.",
      "Completed academic projects using Spring Boot, React, and MongoDB.",
    ],
  },
  {
    institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
    logo: "/jntu.svg",
    url: "https://www.vrsiddhartha.ac.in/",
    degree: "Bachelor’s in Technology",
    location: "Vijayawada, India",
    borderColor: "border-yellow-400",
    shadowColor: "hover:shadow-yellow-400",
    details: [
      "Studied core engineering with a focus on digital systems and microprocessors.",
      "Developed interest in full-stack development through self-learning.",
      "Participated in hackathons and technical paper presentations.",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="scroll-mt-28 py-20 px-6 md:px-12 bg-gray-900 text-white">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-purple-400 text-center">Education</h2>

        <div className="flex flex-col gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className={`group bg-gray-800 border ${edu.borderColor} rounded-lg p-6 transition duration-300 ${edu.shadowColor} hover-float cursor-pointer`}
              >
                <div className="flex items-start gap-4">
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-lg"
                  >
                    <img src={edu.logo} alt={edu.institution} className="w-12 h-12 object-contain" />
                  </a>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                      <span className="text-gray-400"> @ {edu.institution}</span>
                    </h3>
                    <p className="text-sm text-gray-400">{edu.location}</p>
                  </div>
                </div>

                {/* Hover to reveal details */}
                <ul className="mt-4 list-disc list-inside text-sm text-gray-300 space-y-1 overflow-hidden max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {edu.details.map((point: string, pIdx: number) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
