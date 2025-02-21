import { motion } from "framer-motion";
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

const skills = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#000000" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "Django", icon: "🎯", color: "#092E20" },
  { name: "Node.js", icon: "📦", color: "#339933" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  // Add more skills as needed
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
    <div className="relative px-4 py-3 bg-black rounded-xl flex items-center gap-3 animate-skill-float hover:animate-skill-glow">
      <span className="text-2xl">{skill.icon}</span>
      <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
        {skill.name}
      </span>
    </div>
  </motion.div>
);

export function SkillsSection() {
  const parentRef = useRef();
  
  const virtualizer = useVirtualizer({
    count: skills.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div ref={parentRef} className="h-[300px] overflow-auto">
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <SkillCard skill={skills[virtualItem.index]} index={virtualItem.index} />
          </div>
        ))}
      </div>
    </div>
  );
} 