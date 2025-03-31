
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Insights = () => {
  const barData = {
    labels: ["React", "Spring Boot", "MongoDB", "MySQL", "AWS"],
    datasets: [
      {
        label: "Skill Level",
        data: [90, 85, 80, 75, 70],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderRadius: 6,
      },
    ],
  };

  const pieData = {
    labels: ["Frontend", "Backend", "DevOps", "Cloud"],
    datasets: [
      {
        label: "Project Focus",
        data: [35, 40, 10, 15],
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#8b5cf6",
        ],
      },
    ],
  };

  return (
    <section id="insights" className="py-20 px-6 md:px-12 bg-gray-950 text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="text-4xl font-bold mb-10 text-blue-400">Insights</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <Bar data={barData} />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <Pie data={pieData} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
