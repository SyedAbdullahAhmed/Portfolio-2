"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { achievementsList } from "@/data/achievementData";

export const Achievements = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {achievementsList.map((achievement, index) => (
        <motion.div
          key={achievement.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity" />
          <div className="relative bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors">
            <div className="text-4xl mb-4">{achievement.icon}</div>
            <div className="text-3xl font-bold text-white mb-2">
              {achievement.value}
            </div>
            <div className="text-lg font-semibold text-blue-400 mb-1">
              {achievement.title}
            </div>
            <p className="text-sm text-slate-400">{achievement.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 