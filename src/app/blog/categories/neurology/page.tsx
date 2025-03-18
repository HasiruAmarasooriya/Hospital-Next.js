"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function NeurologyPage() {
  return (
    <div className="relative min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-8">
      {/* Background graphics */}
      <Image
        src="/blog/neurology-background.jpg"
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
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-600 dark:text-purple-400 drop-shadow-lg">
          Neurology
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the complexities of the human brain, nervous system disorders, and breakthroughs in neurological treatments.
        </p>
      </motion.section>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto my-12"
      >
        <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 text-center mb-6">
          Neurological Procedure Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/ndFKtZgGvo0"
            title="Brain Anatomy and Functions"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/qT9N_2r45pg"
            title="Stroke: Symptoms and Treatment"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/PHx9jo_YU2s"
            title="Parkinson's Disease Explained"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/7NUC5a1pKF0"
            title="Epilepsy - Causes and Treatment"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* What is Neurology? */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            What is Neurology?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Neurology is the branch of medicine that deals with the diagnosis and treatment of disorders affecting the nervous system. This includes the brain, spinal cord, and peripheral nerves. Neurologists handle conditions like epilepsy, stroke, Parkinson’s disease, Alzheimer’s, and migraines, providing both acute and long-term care.
          </p>
        </motion.div>

        {/* Common Neurological Disorders */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            Common Neurological Disorders
          </h2>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>• **Stroke** - A medical emergency where blood flow to the brain is disrupted.</li>
            <li>• **Epilepsy** - A disorder characterized by recurrent seizures due to abnormal brain activity.</li>
            <li>• **Parkinson’s Disease** - A progressive disorder affecting movement and coordination.</li>
            <li>• **Alzheimer’s Disease** - A form of dementia causing memory loss and cognitive decline.</li>
            <li>• **Multiple Sclerosis (MS)** - A disease in which the immune system attacks the protective sheath of nerves.</li>
          </ul>
        </motion.div>
      </div>



      {/* Additional Resources */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
      >
        <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 text-center mb-6">
          Additional Learning
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Learn more about cutting-edge treatments, rehabilitation, and advancements in neurology.
        </p>
        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
          <li>• **Neurorehabilitation**: Programs for recovery post-stroke or brain injury.</li>
          <li>• **Deep Brain Stimulation (DBS)**: A surgical treatment for movement disorders like Parkinson's.</li>
          <li>• **Neurogenetics**: Understanding genetic factors influencing neurological diseases.</li>
          <li>• **Tele-neurology**: Remote diagnosis and management of neurological conditions.</li>
        </ul>
      </motion.div>
    </div>
  );
}
