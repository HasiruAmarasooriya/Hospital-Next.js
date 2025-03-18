"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/sections/Footer";

export default function CardiologyPage() {
  return (
    <section>
    <div className="relative min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-8">
      {/* Background graphics */}
      <Image
        src="/blog/heart-health.jpg"
        alt="Decorative Background"
        width={1980}
        height={1080}
        className="absolute top-0 right-0 opacity-10 dark:opacity-30 pointer-events-none select-none"
      />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center py-12 max-w-5xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-red-600 dark:text-red-400 drop-shadow-lg">
          Cardiology
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Understanding heart health, treatments, and medications to ensure a healthy cardiovascular system.
        </p>
      </motion.section>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto my-12"
      >
        <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 text-center mb-6">Educational Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/Wu18mpI_62s"
            title="Understanding Heart Disease"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/OWGXhg50EHI"
            title="How to Keep Your Heart Healthy"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* What is Cardiology? */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">What is Cardiology?</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Cardiology is the branch of medicine that deals with disorders of the heart and the circulatory system.
            It involves diagnosing and treating conditions such as heart disease, hypertension, and heart failure.
            Cardiologists use various diagnostic tests like ECG, echocardiograms, and stress tests to assess heart health.
            Treatment options include lifestyle changes, medications, and advanced procedures like angioplasty and bypass surgery.
          </p>
        </motion.div>

        {/* Common Drugs Used in Cardiology */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">Common Drugs Used</h2>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Aspirin - Used to prevent blood clots and reduce heart attack risk.</li>
            <li>• Beta-blockers - Help control blood pressure and prevent heart strain.</li>
            <li>• ACE inhibitors - Reduce strain on the heart and lower blood pressure.</li>
            <li>• Statins - Lower cholesterol levels and prevent artery blockages.</li>
            <li>• Diuretics - Help reduce fluid buildup in cases of heart failure.</li>
            <li>• Calcium Channel Blockers - Relax blood vessels and improve blood flow.</li>
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
        <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 text-center mb-6">Additional Learning</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Learn more about cardiovascular health, symptoms of heart diseases, and lifestyle changes to keep your heart healthy. 
          It is crucial to maintain a balanced diet, exercise regularly, and monitor risk factors like blood pressure and cholesterol levels.
        </p>
        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
          <li>• Symptoms of Heart Disease: Chest pain, shortness of breath, fatigue, dizziness.</li>
          <li>• Preventative Measures: Eating heart-healthy foods, exercising, reducing stress.</li>
          <li>• Surgical Procedures: Coronary bypass, stents, pacemakers, valve replacements.</li>
        </ul>
      </motion.div>
    </div>
    <Footer />
    </section>
  );
}
