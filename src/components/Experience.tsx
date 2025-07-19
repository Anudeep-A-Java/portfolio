import { motion } from "framer-motion";

const experienceData = [
  {
    company: "Zurich Insurance Group",
    logo: "/zurich.svg",
    role: "Java Full Stack Developer",
    duration: "Jan 2024 – Present",
    location: "Overland Park, Kansas, USA",
    borderColor: "border-blue-500",
    shadowColor: "hover:shadow-blue-500",
  },
  {
    company: "Seaboard Corporation",
    logo: "/seaboard.svg",
    role: "Java Full Stack Developer",
    duration: "Sep 2023 – Dec 2023",
    location: "Merriam, Kansas, USA",
    borderColor: "border-green-500",
    shadowColor: "hover:shadow-green-500",
  },
  {
    company: "Cognizant (Key Bank)",
    logo: "/cognizant.svg",
    role: "Java Full Stack Developer",
    duration: "Aug 2021 – May 2022",
    location: "Chennai, India",
    borderColor: "border-cyan-500",
    shadowColor: "hover:shadow-cyan-500",
  },
  {
    company: "Solara Active Pharma Sciences Ltd",
    logo: "/solara.svg",
    role: "Java Developer",
    duration: "Mar 2019 – Jul 2021",
    location: "Chennai, India",
    borderColor: "border-red-500",
    shadowColor: "hover:shadow-red-500",
  },
];

const bulletsMap: { [key: string]: string[] } = {
  "Zurich Insurance Group": [
    "Migrated monolithic claim modules to Spring Boot microservices, improving agility by 60%.",
    "Processed 100K+ claims/day using Kafka Streams pipeline.",
    "Built Angular 17 dashboards with NgRx and AG Grid for 1M+ row datasets.",
  ],
  "Seaboard Corporation": [
    "Built commodity pricing dashboard with React and Redux Toolkit.",
    "Configured Azure Functions and DevOps pipelines with gated approvals.",
    "Migrated UI from Angular to React and integrated Kafka + PostgreSQL stack.",
  ],
  "Cognizant (Key Bank)": [
    "Converted legacy Struts to Spring Boot with REST APIs and DAO layers.",
    "Deployed apps in Kubernetes using Helm; integrated ELK stack for monitoring.",
    "Implemented JWT authentication and CSRF protection in customer onboarding portal.",
  ],
  "Solara Active Pharma Sciences Ltd": [
    "Developed Spring Batch jobs to automate inventory restocking, reducing manual work by 70%.",
    "Created React + Spring Boot modules for clinical trial data logging with audit trail.",
    "Integrated MongoDB for unstructured clinical data and optimized Oracle queries for performance.",
  ],
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-28 py-20 px-6 md:px-12 bg-black text-white"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-blue-400 text-center">
          Professional Experience
        </h2>

        <div className="flex flex-col gap-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className={`bg-gray-800 border ${exp.borderColor} rounded-lg p-6 transition duration-300 ${exp.shadowColor} hover-float`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-lg">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}{" "}
                      <span className="text-gray-400">@ {exp.company}</span>
                    </h3>
                    <p className="text-sm text-gray-400">
                      {exp.duration} • {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 list-disc list-inside text-sm text-gray-300 space-y-1">
                  {bulletsMap[exp.company].map((point: string, pIdx: number) => (
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

export default Experience;
