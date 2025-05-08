"use client";
import React from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  color: string;
  bgColor: string;
}

const skills: Skill[] = [
  {
    name: "Next.js",
    color: "text-white",
    bgColor: "bg-black/40",
  },
  {
    name: "React",
    color: "text-blue-400",
    bgColor: "bg-blue-950/40",
  },
  {
    name: "Python",
    color: "text-yellow-400",
    bgColor: "bg-yellow-950/40",
  },
  {
    name: "Django",
    color: "text-green-500",
    bgColor: "bg-green-950/40",
  },
  {
    name: "TypeScript",
    color: "text-blue-500",
    bgColor: "bg-blue-950/40",
  },
  {
    name: "JavaScript",
    color: "text-yellow-400",
    bgColor: "bg-yellow-950/40",
  },
  {
    name: "Docker",
    color: "text-blue-400",
    bgColor: "bg-blue-950/40",
  },
  {
    name: "Linux",
    color: "text-yellow-500",
    bgColor: "bg-yellow-950/40",
  },
  {
    name: "Git",
    color: "text-orange-500",
    bgColor: "bg-orange-950/40",
  },
  {
    name: "PostgreSQL",
    color: "text-blue-400",
    bgColor: "bg-blue-950/40",
  },
  {
    name: "TailwindCSS",
    color: "text-cyan-400",
    bgColor: "bg-cyan-950/40",
  },
  {
    name: "MONGODB",
    color: "text-red-400",
    bgColor: "bg-red-950/40",
  },
  {
    name: "REDIS",
    color: "text-blue-400",
    bgColor: "bg-blue-950/40",
  },
  {
    name: "GOLANG",
    color: "text-cyan-400",
    bgColor: "bg-cyan-950/40",
  },
];

export const SkillsMarquee = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-slate-950 py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10" />
      
      {/* Title */}
      <h2 className="poppins text-3xl md:text-4xl font-bold text-center text-white mb-12 relative z-20">
        Skills & Tools
      </h2>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* First Row - Left to Right */}
        <div className="flex space-x-6 items-center animate-marquee">
          {[...skills, ...skills].map((skill, idx) => (
            <motion.div
              key={idx}
              className={`${skill.bgColor} px-6 py-3 rounded-xl border border-slate-700/50 backdrop-blur-sm`}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className={`text-lg font-medium ${skill.color}`}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex space-x-6 items-center animate-marquee2 mt-4">
          {[...skills.reverse(), ...skills].map((skill, idx) => (
            <motion.div
              key={idx}
              className={`${skill.bgColor} px-6 py-3 rounded-xl border border-slate-700/50 backdrop-blur-sm`}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className={`text-lg font-medium ${skill.color}`}>{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Second Row - Right to Left */}
        {/* <div className="flex space-x-12 items-center  animate-marquee2 mt-8">
          {[...skills.reverse(), ...skills].map((skill, idx) => (
            <motion.div
              key={idx}
              className={`${skill.bgColor} px-6 py-3 rounded-xl border border-slate-700/50 backdrop-blur-sm`}
              whileHover={{ scale: 1.05, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className={`text-lg font-medium ${skill.color}`}>{skill.name}</span>
            </motion.div>
          ))}
        </div> */}
      </div>
    </div>
  );
}; 