"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function RegisterPage() {
  const { theme } = useTheme();

  return (
    <div className="h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/register-bg.jpg"
          alt="Register Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20 dark:opacity-10"
        />
      </div>

      {/* 3D Glassmorphism Form */}
      <div className="relative w-full max-w-md p-8 bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-300 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          Register
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-6">
          Create your account
        </p>

        <form className="space-y-4">
          <Input
            type="text"
            placeholder="Full Name"
            required
            className="dark:bg-gray-800 dark:text-white"
          />
          <Input
            type="email"
            placeholder="Email"
            required
            className="dark:bg-gray-800 dark:text-white"
          />
          <Input
            type="password"
            placeholder="Password"
            required
            className="dark:bg-gray-800 dark:text-white"
          />
          <Button className="w-full bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-600 dark:to-blue-700 shadow-lg transform hover:scale-105 transition">
            Sign Up
          </Button>
        </form>

        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
