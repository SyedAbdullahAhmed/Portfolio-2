"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { TypewriterEffect } from "./typewriter-effect";

export const ContainerScroll = ({ projects }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="min-h-screen py-20 flex items-center justify-center relative"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          projects={projects}
        />
      </div>
    </div>
  );
};

export const Header = ({ translate }) => {
  const words = [
    {
      text: "Featured",
    },
    {
      text: "Projects",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Showcase",
    },
  ];

  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      <div className="mb-8">
        <TypewriterEffect words={words} />
      </div>
      <p className="text-slate-400 max-w-2xl mx-auto">
        Explore my latest projects showcasing innovative solutions and modern technologies.
      </p>
    </motion.div>
  );
};

export const Card = ({ rotate, scale, translate, projects }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
      }}
      className="max-w-5xl mx-auto h-[30rem] md:h-[40rem] w-full rounded-[30px] bg-[#222222] p-8 border border-slate-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800 pr-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group bg-slate-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}; 