"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { FaHeartbeat } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

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

  const isActive = (path) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: " Services", href: "/my-services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard/overview" },
  ];

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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold transition-all duration-300 relative group ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all cursor-pointer"
            >
              {darkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
            </button>

            <Link
              href="/sign-in"
              className="bg-secondary text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition-all shadow-lg shadow-secondary/20"
            >
              Sign In
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
        className={`md:hidden absolute w-full bg-background border-t border-primary/10 transition-all duration-300 ${
          isOpen
            ? "top-20 opacity-100"
            : "-top-125 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-bold border-b border-primary/5 pb-2 ${
                isActive(link.href)
                  ? "text-primary pl-2 border-l-4 border-primary"
                  : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/sign-in"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-secondary text-white py-4 rounded-xl font-bold"
          >
            sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
