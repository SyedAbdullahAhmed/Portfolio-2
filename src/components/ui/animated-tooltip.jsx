"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="relative rounded-full overflow-hidden w-24 h-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover rounded-full"
            />
          </motion.div>
          {hoveredIndex === idx && (
            <motion.div
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/80 text-white rounded-lg text-sm whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-bold">{item.name}</div>
              <div className="text-xs text-gray-300">{item.designation}</div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}; 