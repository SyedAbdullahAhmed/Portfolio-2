"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DownloadButton = ({ className }) => {
  return (
    <motion.a
      href="/resume/kawsar-resume.pdf"
      download="Kawsar_Ahmed_Resume.pdf"
      className={cn(
        "relative px-5 py-2.5",
        "font-['var(--font-jetbrains)'] font-medium tracking-tight",
        "rounded-full bg-black",
        "border-2 border-transparent",
        "bg-gradient-to-r from-[#FF007A] to-[#00D1FF]",
        "[background-clip:padding-box,border-box] [background-origin:padding-box,border-box]",
        "bg-[linear-gradient(black,black),linear-gradient(to_right,#FF007A,#00D1FF)]",
        "hover:bg-[linear-gradient(black,black),linear-gradient(to_left,#FF007A,#00D1FF)]",
        "transition-all duration-300 flex items-center gap-2",
        "text-white/90 hover:text-white",
        "group",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        fetch('/resume/kawsar-resume.pdf')
          .then(response => {
            if (!response.ok) {
              e.preventDefault();
              alert('Resume file is currently unavailable. Please try again later.');
            }
          })
          .catch(() => {
            e.preventDefault();
            alert('Unable to download resume. Please try again later.');
          });
      }}
    >
      <svg 
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 4v12m0 0l-4-4m4 4l4-4" 
        />
      </svg>
      <span className="inline-flex items-center gap-1">
        <span className="text-[#FF007A]">Download</span>
        <span className="text-white/80">(</span>
        <span className="text-[#00D1FF]">Resume</span>
        <span className="text-white/80">)</span>
      </span>
    </motion.a>
  );
}; 