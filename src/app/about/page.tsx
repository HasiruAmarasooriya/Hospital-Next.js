"use client";

import { motion } from "framer-motion";
import { FaHistory, FaHospitalAlt, FaUserMd, FaHeart } from "react-icons/fa";

export default function AboutMore() {
  return (
    <section className="relative bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Background Decorative Circles */}
      <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl top-[-50px] left-[-100px]"></div>
      <div className="absolute w-96 h-96 bg-cyan-500 rounded-full opacity-20 blur-3xl bottom-[-50px] right-[-100px]"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text"
        >
          About - Our Journey
        </motion.h2>

        {/* Story Section */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-lg md:text-xl max-w-4xl mx-auto text-gray-700 dark:text-gray-300 mb-16"
        >
          Since our inception over 20 years ago, Kumudu Hospital has been a
          leader in the healthcare industry. From humble beginnings to becoming
          one of the most respected medical institutions in the region, our
          journey is defined by a commitment to excellence, compassion, and
          innovation. We pride ourselves on integrating modern healthcare
          technologies with patient-centered care.
        </motion.p>

        {/* Timeline Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <FaHistory className="text-5xl text-blue-600 dark:text-cyan-400 mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our History
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Kumudu Hospital was founded in 2000 with a mission to provide
              world-class healthcare. Over the years, we’ve expanded our
              facilities, embraced new technologies, and built a dedicated team
              of medical professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <FaHospitalAlt className="text-5xl text-blue-600 dark:text-cyan-400 mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              State-of-the-Art Facilities
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We have equipped our hospital with state-of-the-art technology and
              world-class infrastructure to ensure the best healthcare outcomes
              for our patients.
            </p>
          </motion.div>
        </div>

        {/* 3D Animations and Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3D Medical Center Image */}
        <div className="text-center mb-20">
          <motion.img
            src="/register-bg.jpg"
            alt="Kumudu Hospital Building"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-xl shadow-lg transform transition-all duration-500"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.a
            href="/contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white rounded-lg shadow-lg transition-all duration-300"
          >
            Contact Us for More Information
          </motion.a>
        </div>
      </div>
    </section>
  );
}

// Features Data
const features = [
  {
    icon: <FaUserMd className="text-3xl" />,
    title: "Expert Medical Team",
    description:
      "Our doctors and healthcare professionals are highly trained to provide the best medical care possible.",
  },
  {
    icon: <FaHeart className="text-3xl" />,
    title: "Compassionate Care",
    description:
      "We provide compassionate care with a focus on patient well-being and comfort.",
  },
  {
    icon: <FaHospitalAlt className="text-3xl" />,
    title: "State-of-the-Art Technology",
    description:
      "We use the latest medical technologies to diagnose and treat our patients effectively.",
  },
];
