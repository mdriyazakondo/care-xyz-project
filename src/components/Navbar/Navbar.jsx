"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { FaHeartbeat } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <nav className="bg-nav backdrop-blur-md shadow-sm border-b border-primary/10 fixed w-full z-50 top-0">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <FaHeartbeat className="text-white" size={24} />
            </div>
            <span className="text-2xl font-extrabold">
              <span className="text-primary">Home</span>
              <span className="text-secondary">Care</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href="/"
                className="text-foreground/80 hover:text-primary font-bold transition-colors"
              >
                {item}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all cursor-pointer"
            >
              {darkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
            </button>

            <Link
              href="/book"
              className="bg-secondary text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition-all"
            >
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-primary text-2xl">
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-background border-t border-primary/10 transition-all duration-300 ${isOpen ? "top-20 opacity-100" : "-top-125 opacity-0"}`}
      >
        <div className="px-6 py-8 space-y-4">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-semibold border-b border-primary/5 pb-2"
            >
              {item}
            </Link>
          ))}
          <button className="w-full bg-secondary text-white py-4 rounded-xl font-bold">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
