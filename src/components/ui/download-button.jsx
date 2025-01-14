"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DownloadButton = ({ className }) => {
  return (
    <motion.a
      href="/resume.pdf"
      download="Kawsar_Ahmed_Resume.pdf"
      className={cn(
        "relative px-5 py-2.5 font-bold text-white",
        "rounded-full bg-black",
        "border-2 border-transparent",
        "bg-gradient-to-r from-[#FF007A] to-[#00D1FF]",
        "[background-clip:padding-box,border-box] [background-origin:padding-box,border-box]",
        "bg-[linear-gradient(black,black),linear-gradient(to_right,#FF007A,#00D1FF)]",
        "hover:bg-[linear-gradient(black,black),linear-gradient(to_left,#FF007A,#00D1FF)]",
        "transition-all duration-300 flex items-center gap-2",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
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
      Download Resume
    </motion.a>
  );
}; 