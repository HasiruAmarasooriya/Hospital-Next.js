// components/Charts.tsx
"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Monthly Revenue",
      data: [120, 140, 200, 250, 320, 400, 500],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export const Charts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4">Revenue Overview</h3>
      <Line data={data} />
    </motion.div>
  );
};
