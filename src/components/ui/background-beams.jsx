"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  const beamsRef = useRef(null);

  useEffect(() => {
    const moveBeams = (e) => {
      if (!beamsRef.current) return;
      const { clientX, clientY } = e;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      beamsRef.current.style.transform = `translate(${x * 0.01}px, ${y * 0.01}px)`;
    };

    window.addEventListener("mousemove", moveBeams);
    return () => window.removeEventListener("mousemove", moveBeams);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        ref={beamsRef}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-transparent to-purple-500/30 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/20 blur-3xl" />
      </motion.div>
    </div>
  );
}; 