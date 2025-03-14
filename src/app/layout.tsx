"use client";

import { useRouter } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import MainHeader from "@/components/mainheader";
import { ModeToggle } from "@/components/ModeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen flex`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            {/* Sidebar */}
            <AppSidebar />
            <SidebarTrigger />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden bg-white dark:bg-gray-900">
              {/* Header */}
              <div className="flex justify-center items-center bg-white dark:bg-gray-900 p-4 shadow-md border-b border-gray-300 dark:border-gray-700">
                {/* Navigation */}
                <nav className="flex space-x-6 text-gray-800 dark:text-gray-300 font-medium">
                  <Link href="/" className="relative px-3 py-1 hover:text-blue-500 dark:hover:text-blue-400">
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-t-md" />
                    HOME
                  </Link>
                  <Link href="/dashboard" className="hover:text-blue-500 dark:hover:text-blue-400">DASHBOARD</Link>
                  <Link href="/doctors" className="hover:text-blue-500 dark:hover:text-blue-400">DOCTORS</Link>
                  <Link href="/appointments" className="hover:text-blue-500 dark:hover:text-blue-400">APPOINTMENTS</Link>
                  <Link href="/blog" className="hover:text-blue-500 dark:hover:text-blue-400">BLOG</Link>
                  <Link href="/events" className="hover:text-blue-500 dark:hover:text-blue-400">EVENTS</Link>
                  <Link href="/gallery" className="hover:text-blue-500 dark:hover:text-blue-400">GALLERY</Link>
                  <Link href="/contact" className="hover:text-blue-500 dark:hover:text-blue-400">CONTACT</Link>
                  <Link href="/shop" className="hover:text-blue-500 dark:hover:text-blue-400">SHOP</Link>
                  {/* Services Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(!isDropdownOpen)}
                      className="hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      SERVICES ▼
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
                </nav>
                {/* Mode Toggle */}
                <div className="ml-6">
                  <ModeToggle />
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Back Button */}
                <button
                  onClick={() => router.back()}
                  className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg mb-8 transition-transform transform hover:scale-105 shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  &larr; Go Back
                </button>

                {children}
              </div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}