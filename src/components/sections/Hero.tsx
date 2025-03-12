"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-blue-300 mb-4">
        Welcome to Kumudu Hospital
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        Delivering compassionate care with advanced technology and expert doctors.
      </p>
      <Button className="px-8 py-4 text-lg">Book an Appointment</Button>
    </section>
  );
}
