"use client";
import React from "react";
import { motion } from "framer-motion";

export const Timeline = ({ data, type }) => {
  return (
    <div className="relative container mx-auto px-6 flex flex-col space-y-8">
      {/* Vertical line */}
      <div className="absolute z-0 w-2 h-full bg-white/10 shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>

      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="timeline-container">
            <div className="flex flex-col md:flex-row items-center md:justify-between">
              <div className="flex justify-start w-full md:w-1/2 items-center">
                <div className="w-full md:w-1/2">
                  {/* Content */}
                  <div className="bg-slate-900 p-6 rounded-lg shadow-md border border-slate-800">
                    <div className="flex flex-col">
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      
                      {/* Company/Institution */}
                      <div className="text-sm text-slate-400">
                        {type === "experience" ? item.company : item.institution}
                      </div>

                      {/* Location - Only show for experience */}
                      {type === "experience" && item.location && (
                        <div className="flex items-center gap-2 text-sm mt-1">
                          <svg 
                            className="w-4 h-4 text-blue-400" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-blue-400">{item.location}</span>
                        </div>
                      )}

                      {/* Date */}
                      <span className="text-sm text-blue-400 mt-1 mb-3">{item.date}</span>
                      
                      {/* Description */}
                      <p className="text-slate-300 mb-4">{item.description}</p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 