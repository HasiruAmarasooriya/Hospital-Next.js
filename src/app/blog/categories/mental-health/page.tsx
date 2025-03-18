"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/sections/Footer";

export default function MentalHealthPage() {
  return (
    <section>
    <div className="relative min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-8">
      <Image
        src="/blog/mental2-health.jpg"
        alt="Mental Health Background"
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
        <h1 className="text-5xl font-extrabold text-green-600 dark:text-green-400">Mental Health</h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Supporting emotional, psychological, and social well-being for a healthier, balanced life.
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
            src="https://www.youtube.com/embed/8P4PT0U22x0"
            title="Mental Health Video 1"
            allowFullScreen
          />
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/e__NxBJ23Dk"
            title="Mental Health Video 2"
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
          <h3 className="text-xl font-bold mb-4">Understanding Mental Health</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Mental health affects how we think, feel, and act. It also determines how we handle stress,
            relate to others, and make choices. Early intervention and treatment can significantly improve quality of life.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-bold mb-4">Available Support & Treatments</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Support may include therapy, counseling, medication, support groups, and mindfulness practices
            to manage conditions such as depression, anxiety, bipolar disorder, and PTSD.
          </p>
        </motion.div>
      </div>
    </div>
    <Footer />
    </section>
  );
}
