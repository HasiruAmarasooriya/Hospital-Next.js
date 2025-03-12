"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-950 text-center py-6 text-gray-700 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} Kumudu Hospital. All rights reserved.</p>
      <div className="mt-2">
        <p>Email: contact@kumuduhospital.com | Phone: +94 77 123 4567</p>
      </div>
    </footer>
  );
}
