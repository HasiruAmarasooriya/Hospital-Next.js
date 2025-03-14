"use client";

import {
  FaHeartbeat,
  FaBrain,
  FaBaby,
  FaBone,
  FaAmbulance,
  FaXRay,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Cardiology",
      description:
        "Advanced cardiac care and surgery. From heart screenings to life-saving treatments. Our team of expert cardiologists ensures you get the best heart care.",
      icon: <FaHeartbeat className="text-4xl text-blue-600" />,
      url: "/services/cardiology", // Direct URL
    },
    {
      title: "Neurology",
      description:
        "Comprehensive neurological treatments, including brain and spinal cord care. We specialize in treating conditions like stroke, epilepsy, and neurodegenerative diseases.",
      icon: <FaBrain className="text-4xl text-green-600" />,
      url: "/services/neurology", // Direct URL
    },
    {
      title: "Pediatrics",
      description:
        "Caring for children's health from infancy to adolescence. We provide specialized pediatric care for routine check-ups and complex health concerns.",
      icon: <FaBaby className="text-4xl text-yellow-600" />,
      url: "/services/pediatrics", // Direct URL
    },
    {
      title: "Radiology",
      description:
        "High-precision imaging and diagnostics, ensuring accurate diagnosis and treatment plans. We offer MRI, CT scans, X-rays, and more.",
      icon: <FaXRay className="text-4xl text-purple-600" />,
      url: "/services/radiology", // Direct URL
    },
    {
      title: "Orthopedics",
      description:
        "Bone and joint care, surgeries, and therapies for pain relief and mobility improvement. Our orthopedic surgeons specialize in treating fractures, arthritis, and more.",
      icon: <FaBone className="text-4xl text-orange-600" />,
      url: "/services/orthopedics", // Direct URL
    },
    {
      title: "Emergency",
      description:
        "24/7 emergency and trauma services, providing immediate care for urgent health needs. Our emergency department is equipped to handle all types of emergencies.",
      icon: <FaAmbulance className="text-4xl text-red-600" />,
      url: "/services/emergency", // Direct URL
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center items-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {service.description.slice(0, 100)}...
              </p>

              <Link href={service.url} passHref>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white dark:text-black py-2 rounded-lg mt-4"
                >
                  Read More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
