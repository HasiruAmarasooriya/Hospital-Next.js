"use client";

import { Button } from "@/components/ui/button"; // Adjust if needed
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const slides = [
  {
    image: "/8.jpg",
    text: "Welcome to Kumudu Hospital",
    description: "Your Trusted Healthcare Partner",
  },
  {
    image: "/9.jpg",
    text: "Advanced Medical Facilities",
    description: "Delivering compassionate care with modern equipment.",
  },
  {
    image: "/5.jpg",
    text: "Expert Doctors & Care",
    description: "Our team of professionals ensures world-class healthcare.",
  },
  {
    image: "/10.jpg",
    text: "Compassionate Healthcare",
    description: "We combine compassion and technology for better outcomes.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const { theme } = useTheme(); // Optional for theme control

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-80 md:h-80 flex flex-col items-center justify-center text-center overflow-hidden bg-white dark:bg-black">
      {/* === 3D Slide Container === */}
      <div
        className="absolute inset-0 z-0 perspective-1000"
        style={{
          perspective: "1200px", // Controls the strength of the 3D perspective
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ rotateY: direction === 1 ? 90 : -90, opacity: 0.5 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: direction === 1 ? -90 : 90, opacity: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].text}
              fill
              sizes="100vw"
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* === Foreground Content === */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[currentSlide].text}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-white dark:to-gray-300 text-transparent bg-clip-text drop-shadow-lg"
          >
            {slides[currentSlide].text}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="text-base md:text-lg text-white dark:text-gray-200 mt-4 max-w-2xl drop-shadow-md"
          >
            {slides[currentSlide].description}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Button className="mt-6 px-8 py-4 text-base md:text-lg bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white shadow-lg shadow-blue-500/50 dark:shadow-cyan-500/50 rounded-xl transition-all duration-300">
            Book an Appointment
          </Button>
        </motion.div>
      </div>

      {/* === Slide Controls === */}
      <div className="absolute bottom-8 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide
                ? "bg-blue-600 dark:bg-cyan-400 scale-110"
                : "bg-white/50 dark:bg-gray-600"
            } transition-transform duration-300`}
          />
        ))}
      </div>

      {/* === Optional Previous / Next Buttons === */}
      <div className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/70 hover:bg-white text-black"
          onClick={goToPrevSlide}
        >
          ◀
        </Button>
      </div>
      <div className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/70 hover:bg-white text-black"
          onClick={goToNextSlide}
        >
          ▶
        </Button>
      </div>
    </section>
  );
}
