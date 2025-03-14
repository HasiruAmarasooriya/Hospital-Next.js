"use client";

import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "@/components/ModeToggle";

export default function MainHeader() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          HospitalLogo
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-400">
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="hover:text-blue-500 dark:hover:text-blue-400"
            >
              Services ▼
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <Link href="/services/general" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  General
                </Link>
                <Link href="/services/surgery" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Surgery
                </Link>
                <Link href="/services/diagnostics" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Diagnostics
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="hover:text-blue-500 dark:hover:text-blue-400">
            Blog
          </Link>
          <Link href="/gallery" className="hover:text-blue-500 dark:hover:text-blue-400">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-blue-500 dark:hover:text-blue-400">
            Contact Us
          </Link>
        </nav>

        {/* Right-side options */}
        <div className="flex items-center space-x-4">
          <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Login
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
