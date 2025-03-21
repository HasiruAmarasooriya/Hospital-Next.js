"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/sections/Footer";

export default function EmergencyCarePage() {
  return (
    <section>
    <div className="relative min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-8">
      <Image
        src="/blog/emergency-care.jpg"
        alt="Emergency Care Background"
        width={1980}
        height={1080}
        className="absolute top-0 right-0 opacity-10 dark:opacity-30 pointer-events-none"
      />

      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center py-12 max-w-5xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-red-600 dark:text-red-400">Emergency Care</h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Fast, life-saving medical attention when every second counts.
        </p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto my-12"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Educational Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/9PjWLStxWCc"
            title="Emergency Care Video 1"
            allowFullScreen
          />
          
        </div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-bold mb-4">What is Emergency Care?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Emergency care provides immediate treatment for acute illnesses and injuries.
            It involves trauma care, cardiac emergencies, stroke management, and other critical conditions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-bold mb-4">Life-Saving Procedures</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Emergency services include CPR, defibrillation, trauma surgery, and critical monitoring
            to stabilize patients before they are transferred for further care.
          </p>
        </motion.div>
      </div>
    </div>

    <Footer />
    </section>
  );
}
