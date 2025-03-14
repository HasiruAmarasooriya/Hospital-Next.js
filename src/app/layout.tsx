"use client";

import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import "./globals.css";

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
  const pathname = usePathname(); // Using usePathname from next/navigation
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Check if we're on the dashboard page
  const isDashboardPage = pathname && pathname.includes('/dashboard');

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
          {isDashboardPage ? (
            // If on the dashboard page, show sidebar layout
            <SidebarProvider>
              <AppSidebar />
              <SidebarTrigger />
              <main>
                {/* Mode Toggle */}
                <div className="ml-6">
                  <ModeToggle />
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6">{children}</div>
              </main>
            </SidebarProvider>
          ) : (
            // For other pages, show the header layout
            <main className="flex-1 flex flex-col h-screen overflow-hidden bg-white dark:bg-gray-900">
              {/* Header */}
              <div className="flex justify-between items-center bg-white dark:bg-gray-900 p-6 shadow-lg transition-all duration-500 ease-in-out">
                {/* Logo */}
                <div className="text-2xl font-semibold text-gray-800 dark:text-white">
                  <Link href="/">HOSPITAL</Link>
                </div>

                {/* Navigation */}
                <nav className="flex space-x-8 text-lg text-gray-800 dark:text-gray-300 font-medium relative">
                  <Link href="/" className="group relative">
                    HOME
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-t-md scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out" />
                  </Link>
                  <Link href="/dashboard" className="group relative">
                    DASHBOARD
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-t-md scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out" />
                  </Link>
                  <Link href="/about" className="group relative">
                    ABOUT
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-t-md scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out" />
                  </Link>
                  <Link href="/services" className="group relative">
                    SERVICES
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-t-md scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out" />
                  </Link>
                  <Link href="/blog" className="group relative">
                    BLOG
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-t-md scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out" />
                  </Link>
                  <Link href="/contact" className="group relative">
                    CONTACT
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-t-md scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out" />
                  </Link>
                </nav>

                {/* Mode Toggle */}
                <div className="ml-6">
                  <ModeToggle />
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6">
                
                {children}
              </div>
            </main>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
