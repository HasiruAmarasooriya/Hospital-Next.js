"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Blog post dummy data
const blogPosts = [
  {
    id: 1,
    title: "5 Tips for a Healthy Heart",
    excerpt:
      "Discover essential tips from our cardiologists to maintain a healthy heart and lifestyle.",
    image: "/blog/heart-health.jpg",
    category: "Cardiology",
    author: "Dr. Sarah Thompson",
    date: "March 15, 2025",
  },
  {
    id: 2,
    title: "Understanding Pediatric Care",
    excerpt:
      "Our pediatric specialists explain how to ensure your child's health and wellbeing.",
    image: "/blog/pediatrics.jpg",
    category: "Pediatrics",
    author: "Dr. Michael Lee",
    date: "March 10, 2025",
  },
  {
    id: 3,
    title: "Latest Innovations in Surgery",
    excerpt:
      "Explore cutting-edge surgical techniques and how they improve patient recovery.",
    image: "/blog/surgery-innovation.jpg",
    category: "Surgery",
    author: "Dr. Amanda Chen",
    date: "March 1, 2025",
  },
  {
    id: 4,
    title: "Neurology Advances: What’s New?",
    excerpt:
      "An in-depth look at recent breakthroughs in brain research and neurology.",
    image: "/blog/neurology.jpg",
    category: "Neurology",
    author: "Dr. Anthony Rogers",
    date: "February 22, 2025",
  },
  {
    id: 5,
    title: "Managing Diabetes Effectively",
    excerpt:
      "Tips and tricks for managing diabetes from our top endocrinologists.",
    image: "/blog/diabetes.jpg",
    category: "Endocrinology",
    author: "Dr. Emily Carter",
    date: "February 15, 2025",
  },
  {
    id: 6,
    title: "Comprehensive Women’s Health Guide",
    excerpt:
      "Learn about women’s health through different stages of life from our experts.",
    image: "/blog/womens-health.jpg",
    category: "Women’s Health",
    author: "Dr. Olivia Adams",
    date: "February 10, 2025",
  },
  {
    id: 7,
    title: "The Role of Mental Health in Healing",
    excerpt:
      "Understand how mental health directly impacts physical recovery and overall wellness.",
    image: "/blog/mental-health.jpg",
    category: "Mental Health",
    author: "Dr. Noah Bryant",
    date: "January 30, 2025",
  },
  {
    id: 8,
    title: "Emergency Room Success Stories",
    excerpt: "Hear real-life success stories from our emergency care team.",
    image: "/blog/emergency.jpg",
    category: "Emergency Care",
    author: "Dr. Sophia Bennett",
    date: "January 20, 2025",
  },
];

// Categories
const categories = [
  "Cardiology",
  "Pediatrics",
  "Surgery",
  "Neurology",
  "Endocrinology",
  "Women’s Health",
  "Mental Health",
  "Emergency Care",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter blog posts based on the search term
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-8">
      {/* Background graphics */}
      <Image
        src="/blog/hospital.jpg"
        alt="Decorative Background"
        width={1200}
        height={1200}
        className="absolute top-0 right-0 opacity-5 dark:opacity-40 pointer-events-none select-none"
      />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center py-12 max-w-5xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 drop-shadow-lg">
          Our Medical Blog
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Stay informed with expert healthcare articles, news, and patient
          stories from our dedicated medical team.
        </p>
      </motion.section>

      {/* Main Content Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Blog Posts Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex flex-col justify-between bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500 border border-gray-200 dark:border-gray-700 group relative h-full">
                {/* Image with overlay */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Post Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <Badge className="bg-blue-600 dark:bg-blue-400 text-white text-xs w-fit">
                    {post.category}
                  </Badge>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-4">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <Button
                    asChild
                    className="mt-4 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-400 w-full"
                  >
                    <Link
                      href={`/blog/categories/${post.category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Search Box */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-4">Search</h3>
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, idx) => (
                <li
                  key={idx}
                  className="text-sm hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition"
                >
                  <Link
                    href={`/blog/categories/${category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-4">Recent Posts</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              {blogPosts.slice(0, 4).map((post) => (
                <li
                  key={post.id}
                  className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition"
                >
                  {post.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 p-8 rounded-2xl text-white text-center shadow-md flex flex-col space-y-4">
            <h3 className="font-semibold text-2xl">Subscribe</h3>
            <p className="text-sm">
              Get health tips & hospital updates in your inbox.
            </p>
            <Input
              placeholder="Enter your email"
              className="text-gray-800 py-2 px-4 rounded-md w-full"
            />
            <Button className="bg-white text-blue-600 font-semibold hover:bg-gray-200 w-full py-2 rounded-md">
              Subscribe
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
