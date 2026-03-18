import { motion } from "framer-motion";

// ✅ TYPE SAFETY (prevents Vercel build errors)
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
    duration: "JUN 2025 – Present",
    borderColor: "border-blue-500",
    shadowColor: "hover:shadow-blue-500",
  },
  {
    company: "Bank of New York Mellon",
    logo: "/bny.svg",
    role: "Java Full Stack Developer",
    duration: "JUN 2024 – JUN 2025",
    borderColor: "border-green-500",
    shadowColor: "hover:shadow-green-500",
  },
  {
    company: "Regal Rexnord Corporation",
    logo: "/rr.svg",
    role: "Backend Java Developer",
    duration: "JAN 2024 – JUN 2024",
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
    logo: "/solara.svg",
    role: "Java Developer",
    duration: "JAN 2021 – JUL 2021",
    location: "Chennai, India",
    borderColor: "border-red-500",
    shadowColor: "hover:shadow-red-500",
  },
  {
    company: "Sonata Software Solutions",
    logo: "/solara.svg",
    role: "Software Development Intern",
    duration: "MAY 2020 – DEC 2020",
    location: "Chennai, India",
    borderColor: "border-red-500",
    shadowColor: "hover:shadow-red-500",
  },
];

const bulletsMap: Record<string, string[]> = {
  "Insmed Incorporated": [
    "Led migration of 15+ healthcare applications to AWS EKS, reducing infrastructure cost by 35% and achieving 99.95% uptime.",
    "Built 12+ Java 17 Spring Boot microservices with Kafka processing 500K+ healthcare events daily.",
    "Optimized PostgreSQL queries and Redis caching, reducing API latency by 40% and database load by 60%.",
    "Developed React dashboards for clinical trials enabling real-time tracking for 50K+ users.",
    "Implemented CI/CD pipelines using Jenkins + GitHub Actions, reducing release cycles from 2 weeks to 3 days."
  ],

  "Bank of New York Mellon": [
    "Developed 8 microservices handling $2.3M+ daily transactions with 99.97% uptime.",
    "Designed 40+ REST APIs with OpenAPI standards for banking and payment integrations.",
    "Implemented Kafka-based event-driven architecture processing 1.2M+ events/day.",
    "Built React dashboards with WebSocket real-time updates for trade monitoring.",
    "Improved database performance by 35% using indexing and query optimization."
  ],

  "Regal Rexnord Corporation": [
    "Built IoT microservices processing 100K+ sensor events per minute across 25K+ machines.",
    "Designed AWS IoT + Lambda pipelines for anomaly detection reducing downtime by 30%.",
    "Created Angular dashboards for real-time machine monitoring and predictive maintenance.",
    "Optimized TimescaleDB schemas improving analytics query performance by 25%.",
    "Scaled ECS workloads from 4 to 20 instances using auto-scaling during peak loads."
  ],

  // ✅ FIXED KEY
  "Cognizant": [
    "Developed banking platform serving 2M+ users with account, payment, and transfer modules.",
    "Built REST APIs using JAX-RS enabling seamless mobile and third-party integrations.",
    "Implemented scheduled batch jobs for payments and statements using Quartz Scheduler.",
    "Improved MySQL query performance by 20% for transaction history features.",
    "Enhanced security with OWASP practices preventing SQL injection, XSS, and CSRF."
  ],

  "Birlasoft India": [
    "Developed Spring Boot APIs handling 50K+ daily telecom transactions.",
    "Built ETL pipelines using Spring Batch processing 200K+ customer billing records.",
    "Implemented JWT authentication and RBAC for secure API access.",
    "Designed PostgreSQL and MongoDB schemas for scalable telecom operations.",
    "Developed Angular dashboards for CRM workflows and reporting."
  ],

  "Sonata Software Solutions": [
    "Developed backend modules for travel booking platform using Java and Spring MVC.",
    "Built REST APIs integrating airline systems for real-time flight availability.",
    "Designed MySQL schemas for booking and payment workflows.",
    "Developed responsive UI using HTML, CSS, and JavaScript.",
    "Wrote unit tests and participated in code reviews to improve code quality."
  ]
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
