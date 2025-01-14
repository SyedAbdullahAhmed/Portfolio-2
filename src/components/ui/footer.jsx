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

      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-400 flex items-center justify-center text-black font-bold text-2xl">
                  K
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400">
                  Kawsar
                </h3>
              </div>
              <p className="text-base text-zinc-400 max-w-xs">
                Full Stack Developer
                <br />
                Phoenix, AZ, USA
              </p>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-sm text-zinc-400">Available for hire</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-base font-medium text-zinc-200">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <FooterLink href={link.href} className="text-base">
                      {link.name}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-6">
              <Link href="https://github.com/curl-kawsar" className="text-zinc-400 hover:text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </Link>
              <Link href="https://twitter.com/yourusername" className="text-zinc-400 hover:text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Kawsar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 