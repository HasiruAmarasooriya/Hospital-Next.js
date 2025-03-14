"use client";

import { motion } from "framer-motion";
import { FaHospitalAlt, FaUserMd, FaAmbulance, FaHeartbeat } from "react-icons/fa";

export default function About() {
  return (
    <section className="relative bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 overflow-hidden">

      {/* Background Decorative Circles */}
      <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl top-[-50px] left-[-100px]"></div>
      <div className="absolute w-96 h-96 bg-cyan-500 rounded-full opacity-20 blur-3xl bottom-[-50px] right-[-100px]"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text"
        >
          About Kumudu Hospital
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-16"
        >
          Serving the community for over <strong className="text-blue-600 dark:text-cyan-400">20 years</strong>, Kumudu Hospital is committed to delivering compassionate and professional healthcare. We combine <strong>state-of-the-art technology</strong> with highly skilled medical professionals to provide world-class service.
        </motion.p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <item.icon className="text-5xl text-blue-600 dark:text-cyan-400 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{item.value}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <img
              src="/5.jpg"
              alt="Kumudu Hospital Team"
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            {features.map((feature, idx) => (
              <div key={idx} className="flex space-x-4 items-start">
                <div className="p-4 bg-blue-600 dark:bg-cyan-500 text-white rounded-xl shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <a href="/about" className="inline-block px-6 py-2 text-lg font-semibold bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white rounded-lg shadow-lg transition-all duration-300">
            Learn More
          </a>
        </motion.div>

      </div>
    </section>
  );
}

// Stats Data
const stats = [
  {
    icon: FaHospitalAlt,
    value: "500+",
    label: "Beds Available",
  },
  {
    icon: FaUserMd,
    value: "120+",
    label: "Expert Doctors",
  },
  {
    icon: FaAmbulance,
    value: "24/7",
    label: "Emergency Care",
  },
  {
    icon: FaHeartbeat,
    value: "50K+",
    label: "Patients Treated",
  },
];

// Features Data
const features = [
  {
    icon: <FaUserMd className="text-2xl" />,
    title: "Highly Qualified Doctors",
    description:
      "Our team consists of experienced professionals specializing in various fields to ensure the best treatment.",
  },
  {
    icon: <FaHeartbeat className="text-2xl" />,
    title: "Cutting-Edge Technology",
    description:
      "We use the latest medical equipment and technologies to provide accurate diagnosis and effective treatment.",
  },
  {
    icon: <FaAmbulance className="text-2xl" />,
    title: "24/7 Emergency Service",
    description:
      "Our emergency department operates round the clock to provide immediate care for urgent medical needs.",
  },
  {
    icon: <FaHospitalAlt className="text-2xl" />,
    title: "Comfortable Facilities",
    description:
      "From private rooms to patient lounges, we ensure a comfortable environment for both patients and visitors.",
  },
];
