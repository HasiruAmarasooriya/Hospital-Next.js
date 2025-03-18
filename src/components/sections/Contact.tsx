"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "tween" } },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex items-center justify-center p-6 transition-colors duration-500 ease-in-out">

      {/* Optional Subtle Background Graphic */}
      <Image
        src="/contact.jpg"
        alt="Hospital Background"
        width={1000}
        height={1000}
        className="absolute top-0 right-0 opacity-10 dark:opacity-40 z-0 pointer-events-none"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl grid md:grid-cols-2 gap-12 relative z-10"
      >
        {/* Contact Info Section */}
        <motion.div variants={item} className="flex flex-col justify-center space-y-8">
          <h1 className="text-4xl font-bold leading-tight text-gray-800 dark:text-gray-100">
            Contact <span className="text-blue-600 dark:text-blue-400">Our Hospital</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            We are here to assist you. Reach out for appointments, inquiries, or any support.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Phone className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              <div>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Emergency Hotline</p>
                <p className="text-gray-600 dark:text-gray-300">+94 0662222244</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              <div>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Email</p>
                <p className="text-gray-600 dark:text-gray-300">kumuduhospitalmatale@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              <div>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Location</p>
                <p className="text-gray-600 dark:text-gray-300">48, A9, Matale Road Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-5 pt-4">
            <a href="#" className="hover:scale-105 transition-transform">
              <Linkedin className="w-5 h-5 text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
            </a>
            <a href="https://www.facebook.com/Kumudu.Hospital.Matale" className="hover:scale-105 transition-transform">
              <Facebook className="w-5 h-5 text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
            </a>
            <a href="#" className="hover:scale-105 transition-transform">
              <Twitter className="w-5 h-5 text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div variants={item}>
          <Card className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 shadow-lg rounded-3xl p-1 hover:shadow-2xl transition-shadow">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Send Us a Message</h2>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-600 dark:focus:ring-blue-400"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-600 dark:focus:ring-blue-400"
                  />
                </div>

                <Input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-600 dark:focus:ring-blue-400"
                />

                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  className="rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-600 dark:focus:ring-blue-400 resize-none"
                />

                <Button
                  type="submit"
                  className="bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg w-full py-2 hover:bg-blue-700 dark:hover:bg-blue-400 transition"
                >
                  Submit Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
