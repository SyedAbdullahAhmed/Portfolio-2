"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import Image from "next/image";

export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateY = useSpring(
    useTransform(scrollY, [0, 1000], [0, 500]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(scrollY, [0, 1000], [0, 100]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollY, [0, 1000], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollY, [0, 1000], [1, 0.5]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollY, [0, 1000], [20, 0]),
    springConfig
  );
  const translateYFaster = useSpring(
    useTransform(scrollY, [0, 1000], [0, 800]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
            />
          ))}
        </motion.div>
        <motion.div
          style={{ translateX }}
          className="flex flex-row mb-20 space-x-20"
        >
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
            />
          ))}
        </motion.div>
        <motion.div
          style={{ translateX: translateX }}
          className="flex flex-row-reverse space-x-reverse space-x-20"
        >
          {thirdRow.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> Development Stack
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Discover my projects built with cutting-edge technologies and modern development practices.
      </p>
    </div>
  );
};

const ProductCard = ({
  title,
  link,
  thumbnail,
  description
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex-shrink-0 rounded-xl overflow-hidden group"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={400}
        className="object-cover object-center h-[400px] w-[300px]"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
        <p className="text-neutral-200 text-sm">{description}</p>
      </div>
    </motion.a>
  );
}; 