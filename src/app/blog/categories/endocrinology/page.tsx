"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function EndocrinologyPage() {
  return (
    <div className="relative min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-8">
      {/* Background Image */}
      <Image
        src="/blog/endocrinology.jpg"
        alt="Endocrinology Background"
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
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-600 dark:text-yellow-400 drop-shadow-lg">
          Endocrinology
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore the science of hormones, endocrine glands, and their crucial role in regulating the body's metabolism, growth, and reproduction.
        </p>
      </motion.section>

      {/* Educational Videos */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto my-12"
      >
        <h2 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 text-center mb-6">
          Endocrinology in Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/l5O6ukmYiIc"
            title="Introduction to Endocrine System"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/q0LeUC7uMHM"
            title="Diabetes Explained"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/NXhGkL0WZpM"
            title="Hormonal Imbalance Overview"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/kxdjRHDL4do"
            title="Thyroid Gland Functions"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* What is Endocrinology? */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
            What is Endocrinology?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Endocrinology is a branch of medicine focused on hormones and the glands that produce them. Hormones regulate critical body functions, including metabolism, growth and development, tissue function, sexual function, reproduction, sleep, and mood. Endocrinologists diagnose and treat hormone imbalances and endocrine disorders.
          </p>
        </motion.div>

        {/* Common Endocrine Disorders */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
            Common Endocrine Disorders
          </h2>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>• **Diabetes Mellitus** - A chronic condition affecting blood sugar regulation.</li>
            <li>• **Hypothyroidism / Hyperthyroidism** - Under or overproduction of thyroid hormones.</li>
            <li>• **Polycystic Ovary Syndrome (PCOS)** - Hormonal imbalance in women affecting ovaries.</li>
            <li>• **Cushing’s Syndrome** - Excess cortisol production leading to weight gain and skin changes.</li>
            <li>• **Adrenal Insufficiency** - Inadequate production of hormones by the adrenal glands.</li>
          </ul>
        </motion.div>
      </div>

      {/* Diagnostic Tests & Tools */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
      >
        <h2 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 text-center mb-6">
          Diagnostic Tools in Endocrinology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-50 dark:bg-gray-900 p-4 shadow-lg hover:scale-105 transition-transform duration-300">
            <CardContent className="flex flex-col items-center">
              <Image
                src="/blog/hba1c-test.jpg"
                alt="HbA1c Test"
                width={300}
                height={200}
                className="rounded-xl mb-4"
              />
              <h3 className="font-semibold text-yellow-500">HbA1c Test</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                Measures average blood sugar levels over the past 2-3 months.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 dark:bg-gray-900 p-4 shadow-lg hover:scale-105 transition-transform duration-300">
            <CardContent className="flex flex-col items-center">
              <Image
                src="/blog/thyroid-ultrasound.jpg"
                alt="Thyroid Ultrasound"
                width={300}
                height={200}
                className="rounded-xl mb-4"
              />
              <h3 className="font-semibold text-yellow-500">Thyroid Ultrasound</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                Imaging tool used to examine the thyroid gland for nodules or abnormalities.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 dark:bg-gray-900 p-4 shadow-lg hover:scale-105 transition-transform duration-300">
            <CardContent className="flex flex-col items-center">
              <Image
                src="/blog/bone-density.jpg"
                alt="Bone Density Scan"
                width={300}
                height={200}
                className="rounded-xl mb-4"
              />
              <h3 className="font-semibold text-yellow-500">Bone Density Scan</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                Assesses bone strength and risk for osteoporosis.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Additional Resources */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
      >
        <h2 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 text-center mb-6">
          Endocrinology Advancements
        </h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li>• **Insulin Pumps & CGMs** - Modern tools for managing diabetes effectively.</li>
          <li>• **Hormone Replacement Therapy (HRT)** - Treatments for hormonal imbalances in menopause and other conditions.</li>
          <li>• **Biologic Drugs** - New medications targeting autoimmune endocrine disorders.</li>
          <li>• **Tele-Endocrinology** - Remote care and management of chronic endocrine diseases.</li>
        </ul>
      </motion.div>
    </div>
  );
}
