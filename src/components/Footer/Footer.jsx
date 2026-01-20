"use client";
import Link from "next/link";
import {
  FaHeartbeat,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-teal-500 p-2 rounded-lg">
                <FaHeartbeat className="text-white" size={24} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-teal-400">Home</span>
                <span className="text-amber-500">Care</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Dedicated to providing professional healthcare services at the
              comfort of your home. Your health and well-being are our top
              priorities.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 transition-all duration-300 text-slate-300 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-amber-500 pl-3 uppercase tracking-wider text-slate-200">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "about", "Our Services", "Caregivers", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="text-amber-500 group-hover:translate-x-1 transition-transform">
                        ›
                      </span>{" "}
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-amber-500 pl-3 uppercase tracking-wider text-slate-200">
              Services
            </h3>
            <ul className="space-y-4 text-slate-400">
              {[
                "Elderly Care",
                "Post-Surgical Care",
                "Nursing at Home",
                "Baby Sitting",
                "Physiotherapy",
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-teal-400 cursor-pointer transition-colors"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-amber-500 pl-3 uppercase tracking-wider text-slate-200">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-slate-400">
                <div className="bg-slate-800 p-2 rounded-md">
                  <FaMapMarkerAlt className="text-teal-500" size={18} />
                </div>
                <span>
                  123 Healthcare Ave,
                  <br />
                  Suite 456, New York, NY
                </span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <div className="bg-slate-800 p-2 rounded-md">
                  <FaPhoneAlt className="text-teal-500" size={16} />
                </div>
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <div className="bg-slate-800 p-2 rounded-md">
                  <FaEnvelope className="text-teal-500" size={16} />
                </div>
                <span>support@homecare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {currentYear} HomeCare Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
