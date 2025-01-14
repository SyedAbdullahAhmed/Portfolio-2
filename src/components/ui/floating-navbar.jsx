"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({ navItems: propNavItems }) => {
  const [active, setActive] = useState(propNavItems[0]);
  const [navItems, setNavItems] = useState(propNavItems);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx) => {
    const newNavItems = [...propNavItems];
    const selectedTab = newNavItems.splice(idx, 1);
    newNavItems.unshift(selectedTab[0]);
    setNavItems(newNavItems);
    setActive(newNavItems[0]);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 0);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed top-4 inset-x-0 mx-auto max-w-fit z-[100] rounded-full border border-transparent bg-black/50 backdrop-blur-md",
            isScrolled && "border-white/[0.2] bg-black/70"
          )}
        >
          <nav className="flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full px-2 sm:px-4 py-1 sm:py-2 gap-1 sm:gap-2">
            {propNavItems.map((item, idx) => (
              <motion.a
                key={item.link}
                href={item.link}
                onClick={() => moveSelectedTabToTop(idx)}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className="relative px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-white rounded-full hover:bg-white/10 transition-colors"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {active.link === item.link && (
                  <motion.div
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className="absolute inset-0 bg-white/10 rounded-full"
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 