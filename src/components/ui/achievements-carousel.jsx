"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const achievementsList = [
  {
    title: "DevFest Hackathon Winner",
    value: "1st",
    description: "Won the DevFest Hackathon sponsored by Google Developers Group in 2023",
    icon: "🏆",
    color: "from-blue-500 to-cyan-500",
    badge: "GDG",
    date: "2023",
  },
  {
    title: "SUST CSE Carnival",
    value: "Top 9",
    description: "Top 9 Finalist in SUST CSE Carnival Hackathon 2024",
    icon: "🎯",
    color: "from-purple-500 to-pink-500",
    badge: "SUST",
    date: "2024",
  },
];

export const AchievementsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + achievementsList.length) % achievementsList.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black/50 rounded-lg backdrop-blur-sm min-h-[300px] sm:min-h-[400px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full px-4 sm:px-0"
          >
            <div className="flex flex-col items-center justify-center p-4 sm:p-10">
              <div className="relative group w-full max-w-[300px] sm:max-w-[500px]">
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r opacity-75 group-hover:opacity-100 transition duration-500 blur-sm group-hover:blur"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${achievementsList[currentIndex].color.split(" ")[1]}, ${achievementsList[currentIndex].color.split(" ")[3]})`,
                  }}
                />
                <div className="relative flex flex-col items-center bg-black rounded-lg p-4 sm:p-8 min-w-[250px] sm:min-w-[300px] md:min-w-[500px] hover:bg-black/80 transition duration-500">
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-white/10 text-white">
                      {achievementsList[currentIndex].badge}
                    </span>
                    {achievementsList[currentIndex].date && (
                      <span className="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-white/10 text-white">
                        {achievementsList[currentIndex].date}
                      </span>
                    )}
                  </div>
                  <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">{achievementsList[currentIndex].icon}</div>
                  <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-2 sm:mb-4"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${achievementsList[currentIndex].color.split(" ")[1]}, ${achievementsList[currentIndex].color.split(" ")[3]})`,
                    }}
                  >
                    {achievementsList[currentIndex].value}
                  </div>
                  <div className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-4 text-center">
                    {achievementsList[currentIndex].title}
                  </div>
                  <p className="text-gray-400 text-center text-sm sm:text-lg max-w-md">
                    {achievementsList[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons - Hide on small screens */}
      <div className="hidden sm:block">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          onClick={() => paginate(-1)}
        >
          <IconChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          onClick={() => paginate(1)}
        >
          <IconChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {achievementsList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              idx === currentIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"
            )}
          />
        ))}
      </div>

      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute -inset-x-40 -top-40 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl transform rotate-12" />
        <div className="absolute -inset-x-40 -bottom-40 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl transform -rotate-12" />
      </div>
    </div>
  );
}; 