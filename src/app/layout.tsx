"use client"; // Client-side directive

import { useRouter } from "next/navigation"; // Client-side hook

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
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
            {/* Sidebar on the left */}
            <AppSidebar />
            <SidebarTrigger />

            {/* Main content on the right */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
              <div className="flex justify-end p-4">
                <ModeToggle />
              </div>
              {/* Scrollable page content */}
              <div className="flex-1 overflow-y-auto p-6">
                
                {/* Back Button */}
                <button
                  onClick={() => router.back()} // Navigate back to the previous page
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
