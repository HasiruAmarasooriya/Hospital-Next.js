"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Stethoscope, BadgeCheck, PhoneCall } from "lucide-react"; // Icons from lucide-react

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  contact: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Olivia Carter",
    specialty: "Cardiologist",
    experience: 14,
    contact: "555-101-2020",
    image: "/doctor/1.jpg",
  },
  {
    id: 2,
    name: "Dr. Ethan Williams",
    specialty: "Neurologist",
    experience: 11,
    contact: "555-303-4040",
    image: "/doctor/2.jpg",
  },
  {
    id: 3,
    name: "Dr. Sophia Patel",
    specialty: "Orthopedic Surgeon",
    experience: 9,
    contact: "555-505-6060",
    image: "/doctor/3.jpg",
  },
  {
    id: 4,
    name: "Dr. Liam Johnson",
    specialty: "Pediatrician",
    experience: 16,
    contact: "555-707-8080",
    image: "/doctor/4.jpg",
  },
  {
    id: 5,
    name: "Dr. Ava Martinez",
    specialty: "Dermatologist",
    experience: 10,
    contact: "555-909-0101",
    image: "/doctor/5.jpg",
  },
  {
    id: 6,
    name: "Dr. Noah Kim",
    specialty: "Oncologist",
    experience: 13,
    contact: "555-111-2222",
    image: "/doctor/6.jpg",
  },
  {
    id: 7,
    name: "Dr. Mia Chen",
    specialty: "Radiologist",
    experience: 8,
    contact: "555-333-4444",
    image: "/doctor/7.jpg",
  },
  {
    id: 8,
    name: "Dr. Lucas Brown",
    specialty: "General Surgeon",
    experience: 12,
    contact: "555-555-6666",
    image: "/doctor/8.jpg",
  },
  {
    id: 9,
    name: "Dr. Emma Davis",
    specialty: "Endocrinologist",
    experience: 15,
    contact: "555-121-2323",
    image: "/doctor/9.jpg",
  },
  {
    id: 10,
    name: "Dr. William Lee",
    specialty: "Pulmonologist",
    experience: 10,
    contact: "555-343-4545",
    image: "/doctor/10.jpg",
  },
  {
    id: 11,
    name: "Dr. Harper Wilson",
    specialty: "Gastroenterologist",
    experience: 11,
    contact: "555-565-6767",
    image: "/doctor/11.jpg",
  },
  {
    id: 12,
    name: "Dr. Benjamin Hall",
    specialty: "Nephrologist",
    experience: 9,
    contact: "555-787-8989",
    image: "/doctor/12.jpg",
  },
  {
    id: 13,
    name: "Dr. Evelyn Scott",
    specialty: "Ophthalmologist",
    experience: 14,
    contact: "555-909-1111",
    image: "/doctor/13.jpg",
  },
  {
    id: 14,
    name: "Dr. Jack King",
    specialty: "Rheumatologist",
    experience: 12,
    contact: "555-212-3232",
    image: "/doctor/14.jpg",
  },
  {
    id: 15,
    name: "Dr. Abigail Green",
    specialty: "Psychiatrist",
    experience: 10,
    contact: "555-434-5454",
    image: "/doctor/15.jpg",
  },
  {
    id: 16,
    name: "Dr. Henry Adams",
    specialty: "Urologist",
    experience: 13,
    contact: "555-656-7676",
    image: "/doctor/16.jpg",
  },
];

const DoctorSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 250;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="relative py-20 px-4">
      {/* Decorative Background */}
      <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl top-[-50px] left-[-100px] z-0"></div>
      <div className="absolute w-96 h-96 bg-cyan-500 rounded-full opacity-20 blur-3xl bottom-[-50px] right-[-100px] z-0"></div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text relative z-10">
        Meet Our Expert Doctors
      </h2>

      <div className="overflow-hidden relative z-10">
        <div
          ref={scrollRef}
          className="flex space-x-10 overflow-x-auto scroll-smooth no-scrollbar pb-6"
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`min-w-[300px] max-w-sm rounded-3xl border border-gray-700 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
                    : "bg-gradient-to-br from-gray-700 to-gray-800 text-white"
                }`}
                style={{
                  perspective: "1000px",
                }}
              >
                <CardContent className="flex flex-col items-center p-6 transform transition-transform duration-300">
                  <div
                    className="w-36 h-36 mb-4 rounded-full overflow-hidden border-4 border-primary shadow-xl"
                    style={{
                      borderColor: theme === "dark" ? "#ffffff" : "#ffffff",
                    }}
                  >
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-1 text-center">
                    {doctor.name}
                  </h3>

                  {/* Specialty */}
                  <div className="flex items-center text-sm mb-2 text-blue-400 dark:text-blue-300">
                    <Stethoscope className="w-4 h-4 mr-2" />
                    <span>{doctor.specialty}</span>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center text-xs mb-4 text-white dark:text-white">
                    <BadgeCheck className="w-4 h-4 mr-2 text-green-500" />
                    <span>{doctor.experience} years of experience</span>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center text-sm font-semibold text-cyan-500 dark:text-cyan-400">
                    <PhoneCall className="w-4 h-4 mr-2" />
                    <span>{doctor.contact}</span>
                  </div>

                  {/* Button */}
                  <Button className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full px-6 py-2 shadow-lg hover:brightness-110 transition-all">
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorSection;
