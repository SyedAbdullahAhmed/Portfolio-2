"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const ThreeDCard = ({ items }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * 20;

    setRotateX(-rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="relative h-96 w-full md:w-[450px] rounded-xl bg-gradient-to-br from-black to-neutral-900 p-8 cursor-pointer"
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX,
            rotateY,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30"
            style={{
              transform: "translateZ(0px)",
            }}
          />
          <div className="relative" style={{ transform: "translateZ(50px)" }}>
            <div className="h-40 w-full overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="h-full w-full object-cover"
                loading="lazy"
                quality={75}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{item.description}</p>
              <div className="mt-4 flex gap-3">
                {item.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}; 