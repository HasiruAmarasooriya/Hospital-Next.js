"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Contact() {
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
          className="text-4xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text"
        >
          CONTACT US
        </motion.h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="p-4 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full p-4 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          ></textarea>
          <div className="text-center">
            <Button className="px-8 py-4 text-lg">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
