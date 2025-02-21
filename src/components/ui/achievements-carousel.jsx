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
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const AchievementSlide = memo(({ achievement, direction, onExitComplete, paginate }) => (
  <motion.div
    key={achievement.id}
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
      if (swipe < -swipeConfidenceThreshold) paginate(1);
      else if (swipe > swipeConfidenceThreshold) paginate(-1);
    }}
    className="absolute inset-0 flex items-center justify-center px-2 xs:px-4 sm:px-6"
  >
    <div className="w-full max-w-[280px] xs:max-w-[350px] sm:max-w-[500px] md:max-w-[600px]">
      {/* Code Editor Style Card */}
      <div className="relative bg-[#1e1e2e] rounded-lg overflow-hidden
                     border border-[#313244] group-hover:border-[#45475a]
                     transition-all duration-500 shadow-2xl">
        {/* Editor Header */}
        <div className="bg-[#181825] px-3 py-2 flex items-center gap-2 border-b border-[#313244]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#f38ba8]"></div>
            <div className="w-3 h-3 rounded-full bg-[#f9e2af]"></div>
            <div className="w-3 h-3 rounded-full bg-[#a6e3a1]"></div>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 text-[#6c7086]">
            <span className="text-xs font-mono">achievement.tsx</span>
            <div className="h-4 w-px bg-[#313244]"></div>
            <span className="text-xs font-mono">- VS Code</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 font-mono space-y-4">
          {/* Line Numbers + Code */}
          <div className="flex gap-4">
            <div className="flex flex-col text-[#6c7086] text-sm select-none">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
            <div className="flex-1 space-y-1">
              <div className="text-[#cdd6f4]">
                <span className="text-[#bd93f9]">const</span>
                <span className="text-[#89b4fa]"> achievement</span>
                <span className="text-[#cdd6f4]"> = {`{`}</span>
              </div>
              <div className="pl-4">
                <span className="text-[#89b4fa]">title:</span>
                <span className="text-[#f9e2af]"> "{achievement.title}"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#89b4fa]">badge:</span>
                <span className="text-[#f9e2af]"> "{achievement.badge}"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#89b4fa]">value:</span>
                <span className="text-[#f9e2af]"> "{achievement.value}"</span>,
              </div>
              <div className="text-[#cdd6f4]">{`}`}</div>
            </div>
          </div>

          {/* Console Output Section */}
          <div className="mt-4 bg-[#11111b] rounded-md p-4 border border-[#313244]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#89b4fa]">❯</span>
              <span className="text-[#cdd6f4]">node achievement.js</span>
            </div>
            <div className="text-[#f5e0dc] whitespace-pre-wrap">
              {achievement.description}
            </div>
          </div>

          {/* Link as Terminal Command */}
          {achievement.link && (
            <div className="pt-4">
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 w-full
                         px-4 py-2 bg-[#11111b] rounded-md
                         border border-[#313244] hover:border-[#45475a]
                         transition-all duration-300"
              >
                <span className="text-[#89b4fa]">❯</span>
                <span className="text-[#cdd6f4] font-mono text-sm">open</span>
                <span className="text-[#f9e2af] font-mono text-sm">details.url</span>
                <motion.span
                  className="text-[#cdd6f4] ml-auto"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >→</motion.span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons - Now outside the card */}
      <div className="absolute -bottom-16 left-0 right-0 flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative p-2 rounded-md bg-[#1e1e2e] border border-[#313244] 
                     hover:border-[#45475a] transition-all duration-300"
          onClick={() => paginate(-1)}
        >
          <div className="flex items-center gap-2">
            <IconChevronLeft className="w-4 h-4 text-[#89b4fa]" />
            <span className="font-mono text-xs text-[#cdd6f4]">prev()</span>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative p-2 rounded-md bg-[#1e1e2e] border border-[#313244] 
                     hover:border-[#45475a] transition-all duration-300"
          onClick={() => paginate(1)}
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#cdd6f4]">next()</span>
            <IconChevronRight className="w-4 h-4 text-[#89b4fa]" />
          </div>
        </motion.button>
      </div>
    </div>
  </motion.div>
), (prevProps, nextProps) => prevProps.achievement.id === nextProps.achievement.id);

AchievementSlide.displayName = 'AchievementSlide';

// Add this CSS at the top of your file
const matrixBackground = {
  backgroundImage: `radial-gradient(#89b4fa 1px, transparent 1px), radial-gradient(#89b4fa 1px, transparent 1px)`,
  backgroundSize: '40px 40px',
  backgroundPosition: '0 0, 20px 20px',
  opacity: 0.05
};

export const AchievementsCarousel = () => {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const paginate = useCallback((newDirection) => {
    if (isDragging) return;
    
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
  }, [isAutoPlaying, isDragging]);

  useEffect(() => {
    if (!isMounted || !isAutoPlaying) return;
    
    const timer = setInterval(() => {
      if (!isDragging) {
        setPage(([current]) => [
          current === carouselAchievementsList.length - 1 ? 0 : current + 1,
          1
        ]);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isMounted, isDragging]);

  const handleDragStart = () => {
    setIsDragging(true);
    if (isAutoPlaying) setIsAutoPlaying(false);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  if (!isMounted) return null;

  return (
    <div 
      className="relative w-full overflow-hidden rounded-xl
                 min-h-[550px] xs:min-h-[600px] sm:min-h-[650px] md:min-h-[700px] 
                 bg-[#11111b] border border-[#313244]
                 mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%]"
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
    >
      {/* Matrix-like Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={matrixBackground}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#11111b] via-transparent to-[#11111b]"></div>
      </div>

      {/* Auto-play Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="px-4 py-2 rounded-md bg-[#1e1e2e] border border-[#313244] 
                     hover:border-[#45475a] transition-all duration-300 
                     font-mono text-sm group relative overflow-hidden"
        >
          <div className="flex items-center gap-1">
            <span className="text-[#89b4fa]">function</span>
            <span className="text-[#f38ba8]">autoPlay</span>
            <span className="text-[#cdd6f4]">()</span>
            <span className="text-[#89b4fa]">{" {"}</span>
            <span className="text-[#f9e2af]">return {isAutoPlaying ? 'false' : 'true'}</span>
            <span className="text-[#89b4fa]">{"}"}</span>
          </div>
        </button>
      </div>

      {/* Carousel Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <AchievementSlide
            key={carouselAchievementsList[currentIndex].id}
            achievement={carouselAchievementsList[currentIndex]}
            direction={direction}
            paginate={paginate}
          />
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 bg-[#1e1e2e] 
                      px-4 py-2 rounded-md border border-[#313244]">
        {carouselAchievementsList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsAutoPlaying(false);
              setPage([idx, idx > currentIndex ? 1 : -1]);
            }}
            className={cn(
              "relative font-mono text-xs transition-all duration-300 px-1.5",
              idx === currentIndex 
                ? "text-[#89b4fa]" 
                : "text-[#6c7086] hover:text-[#cdd6f4]"
            )}
          >
            {(idx + 1).toString().padStart(2, '0')}
          </button>
        ))}
      </div>
    </div>
  );
}; 