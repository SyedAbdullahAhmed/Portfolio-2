"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
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
    name: "Trello",
    color: "text-blue-500",
    bgColor: "bg-blue-950/40",
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
    name: "AWS",
    color: "text-orange-400",
    bgColor: "bg-orange-950/40",
  },
  {
    name: "Analytics",
    color: "text-blue-400",
    bgColor: "bg-blue-950/40",
  },
];

export const SkillsMarquee = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-slate-950 py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5" />
      
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center text-white mb-12 relative z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Tools
      </motion.h2>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

        {/* First Row */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-skill-marquee flex items-center">
            {skills.map((skill, idx) => (
              <motion.div
                key={`row1-${idx}`}
                className={`${skill.bgColor} px-6 py-3 rounded-xl border border-slate-700/50 
                  backdrop-blur-sm relative group cursor-pointer mx-3 shrink-0`}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <span className={`text-base sm:text-lg font-medium ${skill.color}`}>
                  {skill.name}
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
          <div className="animate-skill-marquee flex items-center" aria-hidden="true">
            {skills.map((skill, idx) => (
              <motion.div
                key={`row1-clone-${idx}`}
                className={`${skill.bgColor} px-6 py-3 rounded-xl border border-slate-700/50 
                  backdrop-blur-sm relative group cursor-pointer mx-3 shrink-0`}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <span className={`text-base sm:text-lg font-medium ${skill.color}`}>
                  {skill.name}
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="relative flex overflow-x-hidden mt-8">
          <div className="animate-skill-marquee-reverse flex items-center">
            {[...skills].reverse().map((skill, idx) => (
              <motion.div
                key={`row2-${idx}`}
                className={`${skill.bgColor} px-6 py-3 rounded-xl border border-slate-700/50 
                  backdrop-blur-sm relative group cursor-pointer mx-3 shrink-0`}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <span className={`text-base sm:text-lg font-medium ${skill.color}`}>
                  {skill.name}
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
          <div className="animate-skill-marquee-reverse flex items-center" aria-hidden="true">
            {[...skills].reverse().map((skill, idx) => (
              <motion.div
                key={`row2-clone-${idx}`}
                className={`${skill.bgColor} px-6 py-3 rounded-xl border border-slate-700/50 
                  backdrop-blur-sm relative group cursor-pointer mx-3 shrink-0`}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <span className={`text-base sm:text-lg font-medium ${skill.color}`}>
                  {skill.name}
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatParticle ${5 + Math.random() * 5}s infinite`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsMarquee; 