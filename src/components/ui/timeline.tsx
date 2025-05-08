"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Add type for timeline data
interface TimelineData {
  title: string;
  date: string;
  institution?: string;
  company?: string;
  location?: string;
  year?: string;
  role?: string;
  description: string;
  skills: string[];
}

interface TimelineProps {
  data: TimelineData[];
  type: 'education' | 'experience';
}

export const Timeline = ({ data, type }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-transparent font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-slate-900 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-blue-500 border border-blue-600 p-2" />
              </div>
              <h3 className="poppins hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-blue-500/80">
                {item.year}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="poppins md:hidden block text-2xl mb-4 text-left font-bold text-blue-500/80">
                {item.date}
              </h3>
              <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-lg border border-slate-800">
                <h4 className="poppins text-xl font-bold text-white mb-2">{item.title}</h4>
                
                {/* Company/Institution */}
                <div className="poppins text-blue-400 font-medium">
                  {/* {type === 'education' ? item.institution : item.company} */}
                  {item.date}
                </div>

                {/* Role - Only show for experience */}
                {type === 'experience' && item.role && (
                  <div className="poppins text-sm text-slate-300 mt-1">
                    {item.role}
                  </div>
                )}

                {/* Location - Only show for experience */}
                {type === 'experience' && item.location && (
                  <div className="poppins flex items-center gap-2 text-sm mt-1">
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
                    <span className="poppins text-blue-400">{item.location}</span>
                  </div>
                )}

                <p className="poppins text-slate-400 my-4">{item.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="poppins px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}; 