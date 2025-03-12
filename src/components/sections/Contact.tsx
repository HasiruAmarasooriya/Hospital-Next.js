"use client";

import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-10">
          Contact Us
        </h2>
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
