"use client";
import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { carouselAchievementsList } from "@/data/carouselAchievementData";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const AchievementSlide = memo(({ achievement, direction, onExitComplete }) => (
  <motion.div
    key={achievement.id}
    custom={direction}
    variants={slideVariants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{
      x: { type: "spring", stiffness: 250, damping: 25 },
      opacity: { duration: 0.15 },
      rotateY: { duration: 0.3 },
      scale: { duration: 0.2 }
    }}
    onAnimationComplete={() => onExitComplete?.()}
    className="absolute w-full px-2 xs:px-4 sm:px-6"
  >
    {/* Achievement content */}
    <div className="flex flex-col items-center justify-center p-2 xs:p-4 sm:p-6">
      <div className="relative group w-full max-w-[280px] xs:max-w-[350px] sm:max-w-[500px] md:max-w-[600px]">
        {/* IDE-style card */}
        <div className="relative bg-[#11111b] rounded-lg overflow-hidden
                       border border-[#313244] group-hover:border-[#45475a]
                       transition-all duration-500 shadow-2xl">
          {/* IDE header with deeper colors */}
          <div className="bg-[#0f0f17] px-2 xs:px-3 sm:px-4 py-1 sm:py-2 flex items-center gap-1 sm:gap-2">
            <div className="flex gap-1 sm:gap-1.5">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#e64553]"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#e5c890]"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#8ccf7e]"></div>
            </div>
            <div className="flex-1 text-center font-mono text-xs sm:text-sm text-[#585b70]">
              achievements.js
            </div>
          </div>

          {/* Content with deeper colors */}
          <div className="p-3 xs:p-4 sm:p-6 font-mono">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <div className="flex gap-1 xs:gap-2">
                <span className="px-1.5 xs:px-2 py-0.5 xs:py-1 text-[10px] xs:text-xs rounded-md bg-[#1e1e2e] text-[#89dceb]">
                  {achievement.badge}
                </span>
                <span className="px-1.5 xs:px-2 py-0.5 xs:py-1 text-[10px] xs:text-xs rounded-md bg-[#1e1e2e] text-[#89dceb]">
                  {achievement.date}
                </span>
              </div>
              <div className="text-2xl xs:text-3xl sm:text-4xl">
                {achievement.icon}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="text-[#cdd6f4] text-sm xs:text-base sm:text-xl">
                <span className="text-[#9d5cff]">const</span>
                <span className="text-[#0ea5e9]"> title</span>
                <span className="text-[#cdd6f4]"> = </span>
                <span className="text-[#f9e2af] ml-1 sm:ml-2 break-all">
                  "{achievement.title}"
                </span>
              </div>
              
              <div className="text-[#cdd6f4] text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">
                <span className="text-[#9d5cff]">const</span>
                <span className="text-[#0ea5e9]"> achievement</span>
                <span className="text-[#cdd6f4]"> = </span>
                <span className="text-[#f9e2af] ml-1 sm:ml-2 break-all">
                  "{achievement.value}"
                </span>
              </div>

              <div className="text-[#585b70] text-xs xs:text-sm leading-relaxed">
                <span className="text-[#45475a]">/**</span><br/>
                <span className="text-[#45475a] ml-2">*</span> 
                <span className="text-[#bac2de]">
                  {achievement.description}
                </span><br/>
                <span className="text-[#45475a]">*/</span>
              </div>

              {achievement.link && (
                <div className="pt-2 xs:pt-3 sm:pt-4">
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 xs:gap-2 
                             px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2
                             bg-[#1e1e2e] hover:bg-[#313244] rounded-md
                             text-[#89dceb] text-xs xs:text-sm 
                             transition-all duration-300
                             border border-[#45475a] hover:border-[#585b70]
                             hover:text-[#cdd6f4]"
                  >
                    <span className="font-mono text-[#9d5cff] hidden xs:inline">function</span>
                    <span className="text-[#0ea5e9]">viewDetails</span>
                    <span className="text-[#cdd6f4]">()</span>
                    <svg 
                      className="w-3 h-3 xs:w-4 xs:h-4 animate-pulse" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
), (prevProps, nextProps) => {
  return prevProps.achievement.id === nextProps.achievement.id;
});

AchievementSlide.displayName = 'AchievementSlide';

export const AchievementsCarousel = () => {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const paginate = useCallback((newDirection) => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
    }
    setPage(([current]) => {
      const nextIndex = current + newDirection;
      return [
        nextIndex >= carouselAchievementsList.length ? 0 : 
        nextIndex < 0 ? carouselAchievementsList.length - 1 : nextIndex,
        newDirection
      ];
    });
  }, [isAutoPlaying]);

  useEffect(() => {
    if (!isMounted || !isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setPage(([current]) => [
        current === carouselAchievementsList.length - 1 ? 0 : current + 1,
        1
      ]);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isMounted]);

  if (!isMounted) return null;

  return (
    <div className="relative w-full overflow-hidden bg-[#11111b] rounded-xl backdrop-blur-sm 
                    min-h-[450px] xs:min-h-[500px] sm:min-h-[550px] md:min-h-[600px] 
                    border border-[#313244] mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%]">
      {/* VSCode-like background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="vscode-grid"></div>
      </div>

      {/* Updated Auto-play toggle - Responsive positioning */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-2 sm:top-4 right-2 sm:right-4 z-50 
                   px-2 sm:px-4 py-1 sm:py-2 font-mono text-[10px] sm:text-xs rounded-md
                   bg-[#11111b] border border-[#313244] hover:border-[#45475a]
                   transition-all duration-300 group"
      >
        <span className="text-[#bd93f9]">function</span>
        <span className="text-[#74c7ec]">
          {isAutoPlaying ? ' stopAuto' : ' startAuto'}
        </span>
        <span className="text-[#cdd6f4]">()</span>
      </button>

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <AchievementSlide
            key={carouselAchievementsList[currentIndex].id}
            achievement={carouselAchievementsList[currentIndex]}
            direction={direction}
            onExitComplete={() => {
              // Handle exit complete
            }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Buttons - Now visible on all screens */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 xs:px-4 sm:px-8">
        <button
          className="p-1 xs:p-1.5 sm:p-2 rounded-md bg-[#11111b] border border-[#313244] 
                     hover:border-[#45475a] transition-all duration-300 
                     hover:scale-110 group backdrop-blur-sm"
          onClick={() => paginate(-1)}
          aria-label="Previous slide"
        >
          <IconChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#89b4fa] group-hover:text-[#cdd6f4]" />
        </button>
        <button
          className="p-1 xs:p-1.5 sm:p-2 rounded-md bg-[#11111b] border border-[#313244] 
                     hover:border-[#45475a] transition-all duration-300 
                     hover:scale-110 group backdrop-blur-sm"
          onClick={() => paginate(1)}
          aria-label="Next slide"
        >
          <IconChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#89b4fa] group-hover:text-[#cdd6f4]" />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 xs:gap-2">
        {carouselAchievementsList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsAutoPlaying(false);
              setPage([idx, 1]);
            }}
            className={cn(
              "w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-sm transition-all duration-300",
              idx === currentIndex 
                ? "bg-[#89b4fa] w-6 xs:w-8" 
                : "bg-[#313244] hover:bg-[#45475a]"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}; 