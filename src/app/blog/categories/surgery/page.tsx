"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function SurgeryPage() {
  return (
    <div className="relative min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-8">
      {/* Background graphics */}
      <Image
        src="/blog/surgery-background.jpg"
        alt="Decorative Background"
        width={1980}
        height={1080}
        className="absolute top-0 left-0 opacity-10 dark:opacity-30 pointer-events-none select-none"
      />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center py-12 max-w-5xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 drop-shadow-lg">
          Surgery
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore surgical techniques, advancements, and procedures that save lives and improve health outcomes.
        </p>
      </motion.section>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto my-12"
      >
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center mb-6">
          Surgical Procedure Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/fELn4Fe9Ccc"
            title="Appendectomy - Step by Step Procedure"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/9MFAnrOFXbg"
            title="Laparoscopic Surgery Techniques"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/4CcBKY1eCTM"
            title="Robotic Surgery Innovations"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/5WqLXRcpIrk"
            title="Heart Bypass Surgery Animation"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* What is Surgery? */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            What is Surgery?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Surgery is a branch of medicine that treats diseases, injuries, and deformities by manual or instrumental operations. Surgeons use cutting-edge techniques and tools to perform procedures ranging from minor outpatient surgeries to complex life-saving operations. Surgical care plays a crucial role in modern healthcare by improving quality of life and survival rates.
          </p>
        </motion.div>

        {/* Types of Surgeries */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Common Types of Surgeries
          </h2>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>• **General Surgery** - Appendectomy, hernia repairs, and gallbladder removal.</li>
            <li>• **Orthopedic Surgery** - Joint replacements, fracture repairs, and spine surgery.</li>
            <li>• **Cardiothoracic Surgery** - Heart bypass, valve replacements, and lung surgery.</li>
            <li>• **Neurosurgery** - Brain tumor removals, spinal surgeries, and nerve decompressions.</li>
            <li>• **Plastic Surgery** - Reconstructive procedures, burn treatments, and cosmetic surgeries.</li>
          </ul>
        </motion.div>
      </div>

     

      {/* Additional Learning Resources */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
      >
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center mb-6">
          Additional Learning
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Expand your knowledge of surgical practices, preoperative and postoperative care, and the latest technological advancements in surgery.
        </p>
        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
          <li>• **Preoperative Care**: Patient assessment, consent, fasting, and infection prevention.</li>
          <li>• **Postoperative Care**: Pain management, wound care, monitoring for complications.</li>
          <li>• **Minimally Invasive Surgery**: Laparoscopy, robotic surgery, and reduced recovery times.</li>
          <li>• **Emerging Technologies**: AI in surgery, 3D printing of surgical instruments, and virtual reality training.</li>
        </ul>
      </motion.div>
    </div>
  );
}
