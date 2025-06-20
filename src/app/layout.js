
"use client"
import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

// export const metadata = {
//   title: "Mustansar Hussain Tariq",
//   description: "Personal Portfolio",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
