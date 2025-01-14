"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const TypewriterEffect = ({ words, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 150; // Speed of typing
    const deletingSpeed = 100; // Speed of deleting
    const delayBetweenWords = 1000; // Delay between words

    const type = () => {
      const currentWord = words[currentWordIndex].text;

      if (!isDeleting) {
        // Typing
        if (currentText !== currentWord) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Finished typing
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting
        if (currentText !== "") {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        } else {
          // Finished deleting
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className="flex items-center gap-2 text-4xl font-bold text-white">
        {words.map((word, idx) => (
          <motion.div
            key={word.text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: idx === currentWordIndex ? 1 : 0.3, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn("text-center", word.className)}
          >
            {idx === currentWordIndex ? currentText : word.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 