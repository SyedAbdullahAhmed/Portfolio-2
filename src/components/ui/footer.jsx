"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = [
  {
    title: "Documentation",
    links: [
      { name: "Portfolio", href: "#portfolio" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Skills", href: "#skills" },
      { name: "Achievements", href: "#achievements" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "GitHub", href: "https://github.com/yourusername" },
      { name: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
      { name: "Twitter", href: "https://twitter.com/yourusername" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Contact", href: "mailto:knownaskawsar@gmail.com" },
    ],
  },
];

const FooterLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-[13px] text-zinc-400 hover:text-white transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-10 border-t border-zinc-800">
      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className={`${
          showBackToTop ? "flex" : "hidden"
        } absolute left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-zinc-800 px-6 py-3 text-base text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors duration-200`}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        Back to top
      </motion.button>

      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-8">
        {/* Main Footer Content */}

        {/* Bottom Section */}
        <div className="mt-2 pt-2 border-t0">
          <div className="flex flex-col md:flex-row justify-center items-center ">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Abdullah. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 