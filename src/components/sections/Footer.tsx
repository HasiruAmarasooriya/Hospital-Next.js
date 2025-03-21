"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { MdLocalHospital } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import { FloatingDock } from "@/components/ui/floating-dock"; // Import FloatingDock
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const dockItems = [
    {
      title: "Home",
      icon: <FaHome size={24} />,
      href: "/",
    },
    {
      title: "Facebook",
      icon: <FaFacebook size={20} />,
      href: "https://www.facebook.com/profile.php?id=61553716451286",
    },
    {
      title: "Linkedin",
      icon: <FaLinkedin size={20} />,
      href: "/services",
    },
    {
      title: "Twiter",
      icon: <FaTwitter size={20} />,
      href: "/doctors",
    },
    {
      title: "Instergram",
      icon: <FaInstagram size={20} />,
      href: "/doctors",
    },
    {
      title: "Contact Us",
      icon: <FaPhone size={20} />,
      href: "/contact",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-100/20 to-blue-300/20 dark:from-blue-600/10 dark:to-blue-800/10 text-gray-900 dark:text-gray-200 rounded-t-3xl shadow-inner overflow-hidden">
      {/* Main Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-30 max-w-8xl mx-auto p-6 md:p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-t-3xl shadow-2xl border-t-4 border-blue-500 dark:border-blue-400"
      >
        {/* Floating Hospital Icon */}
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          }}
          className="absolute top-4 left-4 z-0 opacity-20"
        >
          <MdLocalHospital
            size={200}
            className="text-blue-600 dark:text-blue-300"
          />
        </motion.div>

        {/* Footer Content */}
        <div className="relative z-10 px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Hospital Logo / Name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-4"
          >
            <div className="flex items-center space-x-2">
              <MdLocalHospital
                size={40}
                className="text-blue-600 dark:text-gray-100 drop-shadow-xl"
              />
              <h2 className="text-2xl font-bold text-blue-900 dark:text-gray-100">
                Kumudu Hospital
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              Committed to compassionate care and cutting-edge healthcare
              services in Sri Lanka since 1995.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                <a href="/about">About Us</a>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                <a href="/services">Our Services</a>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                <a href="/doctors">Doctors</a>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                <a href="/patient-portal">Patient Portal</a>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400">
              Contact Us
            </h3>
            <div className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
              <MapPin size={20} className="mt-1" />
              <p className="text-sm">48, A9, Matale Road Sri Lanka</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Phone size={18} />
              <p className="text-sm">+94 066 2222 244</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Mail size={18} />
              <p className="text-sm">kumuduhospitalmatale@gmail.com</p>
            </div>
          </motion.div>
        </div>

        {/* Separator */}
        <Separator className="border-gray-200 opacity-20 dark:border-gray-600 my-4" />

        <div className="flex flex-col items-center justify-center relative z-10 py-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold text-blue-900 dark:text-blue-400 mb-2"
          >
            Follow Us
          </motion.span>

          <FloatingDock
            items={dockItems}
            desktopClassName="bottom-4"
            mobileClassName="fixed bottom-4 right-4"
          />
        </div>

        {/* Footer Bottom */}
        <div className="relative z-10 py-6 text-center text-xs md:text-sm text-gray-700 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Kumudu Hospital. All rights
          reserved. | Designed with ❤️ in Techwire Lanka
        </div>

        {/* Floating Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 3 }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-blue-200 to-blue-600 rounded-full blur-3xl dark:from-blue-600 dark:to-blue-800"
        />
      </motion.div>
    </footer>
  );
}
