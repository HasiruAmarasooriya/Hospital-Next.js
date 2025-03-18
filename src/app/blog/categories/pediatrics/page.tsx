"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/sections/Footer";

export default function PediatricsPage() {
  return (
    <section>
    <div className="relative min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-8">
      {/* Background graphics */}
      <Image
        src="/blog/pediatrics.jpg"
        alt="Pediatrics Background"
        width={1900}
        height={200}
        className="absolute top-0 right-0 opacity-10 dark:opacity-30 pointer-events-none select-none"
      />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center py-12 max-w-5xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 drop-shadow-lg">
          Pediatrics
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Focused on the health and well-being of infants, children, and adolescents.
        </p>
      </motion.section>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto my-12"
      >
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center mb-6">Educational Videos</h2>
        
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/YnbcVw9Zm20"
            title="Child Development Basics"
            allowFullScreen
          ></iframe>
          
       
      </motion.div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* What is Pediatrics? */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">What is Pediatrics?</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Pediatrics is a branch of medicine dealing with the medical care of infants, children, and adolescents. Pediatricians diagnose and treat childhood illnesses, from minor health problems to serious diseases.
          </p>
        </motion.div>

        {/* Common Pediatric Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Common Pediatric Conditions</h2>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Common colds and flu</li>
            <li>• Ear infections</li>
            <li>• Asthma and allergies</li>
            <li>• Childhood obesity</li>
            <li>• Developmental disorders</li>
            <li>• Vaccination schedules</li>
          </ul>
        </motion.div>
      </div>

      {/* Prevention and Treatments */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
      >
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center mb-6">Prevention and Treatments</h2>
        <p className="text-gray-600 dark:text-gray-300">
          <strong>Preventative Measures:</strong> Proper nutrition, regular vaccinations, healthy sleep habits, and routine check-ups.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <strong>Treatments:</strong> Medications, therapy, and parental guidance in managing chronic and acute illnesses.
        </p>
      </motion.div>
    </div>
    <Footer />
    </section>
  );
}
