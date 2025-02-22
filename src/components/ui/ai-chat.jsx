"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconRobot, IconX, IconSend, IconMessageCircle } from "@tabler/icons-react";

const ChatMessage = ({ message, isBot }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={cn(
      "flex items-start gap-3 mb-4",
      isBot ? "flex-row" : "flex-row-reverse"
    )}
  >
    {isBot && (
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        <IconRobot className="w-5 h-5 text-white" />
      </div>
    )}
    <div className={cn(
      "flex flex-col gap-1",
      isBot ? "items-start" : "items-end"
    )}>
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className={cn(
          "rounded-2xl px-4 py-2 max-w-[280px] sm:max-w-[320px] text-sm backdrop-blur-sm",
          isBot 
            ? "bg-slate-800/50 text-slate-100 rounded-bl-none border border-slate-700" 
            : "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-none"
        )}
      >
        {message}
        <div className={cn(
          "text-[10px] mt-1 opacity-50",
          isBot ? "text-left" : "text-right"
        )}>
          {isBot ? "AI Assistant" : "You"}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Kawsar's AI Assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch('https://kawsar-assistant-b9a8473899bc.herokuapp.com/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: input
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('API Response:', data);
      
      setMessages(prev => [...prev, {
        text: data.response || data.message || data.text || "Sorry, I couldn't process your request.",
        isBot: true
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        text: "Sorry, I encountered an error. Please try again later.",
        isBot: true
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 rounded-full p-4 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <IconMessageCircle className="w-6 h-6 text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-20 right-4 z-50 w-[320px] sm:w-[380px] h-[500px] bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-slate-800/50 overflow-hidden"
          >
            {/* Chat header */}
            <div className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-slate-700/50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <h3 className="font-['var(--font-orbitron)'] text-white font-medium">
                  Kawsar's AI Assistant
                </h3>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <IconX className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Chat messages */}
            <div 
              id="message-container"
              className="p-4 h-[380px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
            >
              {messages.map((msg, idx) => (
                <ChatMessage key={idx} message={msg.text} isBot={msg.isBot} />
              ))}
              {isTyping && (
                <div className="flex gap-2 text-slate-400 text-sm">
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Chat input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-slate-800/50 bg-slate-900/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-800/50 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-700/50 placeholder-slate-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg px-4 py-2 transition-all duration-300"
                  type="submit"
                >
                  <IconSend className="w-5 h-5" />
                </motion.button>
              </div>
            </form>

            {/* Background glow effect */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 
