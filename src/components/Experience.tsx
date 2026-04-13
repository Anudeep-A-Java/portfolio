import { motion } from "framer-motion";

type Experience = {
  company: string;
  logo: string;
  role: string;
  duration: string;
  location?: string;
  borderColor: string;
  shadowColor: string;
};

const experienceData: Experience[] = [
  {
    company: "Insmed Incorporated",
    logo: "/insmed.svg",
    role: "Software Engineer",
    duration: "NOV 2025 – Present",
    location: "Missouri, USA",
    borderColor: "border-blue-500",
    shadowColor: "hover:shadow-blue-500",
  },
  {
    company: "Bank of New York Mellon",
    logo: "/bny.svg",
    role: "Java Full Stack Developer",
    duration: "JUN 2024 – OCT 2025",
    location: "New York City, NY, USA",
    borderColor: "border-green-500",
    shadowColor: "hover:shadow-green-500",
  },
  
  {
    company: "Cognizant",
    logo: "/cognizant.svg",
    role: "Software Engineer",
    duration: "AUG 2021 – MAY 2022",
    location: "Chennai, India",
    borderColor: "border-cyan-500",
    shadowColor: "hover:shadow-cyan-500",
  },
  {
    company: "Birlasoft India",
    logo: "/birlasoft.svg",
    role: "Java Developer",
    duration: "MAY 2020 – JUL 2021",
    location: "Andhra Pradesh, India",
    borderColor: "border-red-500",
    shadowColor: "hover:shadow-red-500",
  },
];

const bulletsMap: Record<string, string[]> = {
  "Insmed Incorporated": [
    "Built healthcare patient services platform supporting onboarding, workflow tracking, and clinical data processing using Java 17, Spring Boot, and Microservices architecture",
    "Engineered 10+ microservices integrated with Apache Kafka for asynchronous event processing of patient workflows and system notifications",
    "Optimized PostgreSQL queries and implemented Redis caching, improving API response time by 25–30% and reducing database load",
    "Developed React-based dashboards for internal users to monitor patient workflows and real-time healthcare data",
    "Deployed applications on AWS (EKS, EC2, RDS) with Docker and Kubernetes, ensuring high availability and scalable infrastructure"
  ],

  "Bank of New York Mellon": [
    "Developed banking transaction processing platform handling high-volume financial data using Java 11, Spring Boot, and Microservices architecture",
    "Built and enhanced 30+ RESTful APIs for transaction processing, reporting, and integration with internal banking systems",
    "Implemented Apache Kafka for event-driven processing, enabling asynchronous handling of financial transactions",
    "Developed Angular 12 dashboards for transaction monitoring and reporting with real-time data updates",
    "Improved database performance (Oracle, PostgreSQL) through indexing and query optimization, reducing latency by 20–25%"
  ],

  "Cognizant": [
    "Developed customer account and transaction management system using Java 8, Spring Boot, and RESTful APIs",
    "Built backend services supporting account operations, transaction processing, and reporting workflows",
    "Designed Angular 10 UI components for account dashboards and transaction views",
    "Improved database performance using MySQL query optimization and indexing techniques",
    "Implemented batch processing using Spring Batch for scheduled data processing and reporting"
  ],

  "Birlasoft India": [
    "Developed internal business process management application using Core Java, JSP, Servlets, and Spring Framework",
    "Built basic REST APIs for data exchange between frontend and backend modules",
    "Developed AngularJS-based UI components for workflow forms and internal dashboards",
    "Worked with MySQL database for CRUD operations and data handling",
    "Assisted in debugging, testing, and deployment activities across environments"
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

                    {/* ✅ SAFE LOCATION HANDLING */}
                    <p className="text-sm text-gray-400">
                      {exp.duration}
                      {exp.location ? ` • ${exp.location}` : ""}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 list-disc list-inside text-sm text-gray-300 space-y-1">
                  {(bulletsMap[exp.company] || []).map((point, pIdx) => (
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
