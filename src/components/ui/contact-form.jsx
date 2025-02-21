"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init('3_xuaiMKpN0OfbXYB');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Using send() instead of sendForm() with the template that worked
      const result = await emailjs.send(
        'service_lxbxrpv',
        'template_w71ooby',
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        }
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Get in Touch
        </h2>
        <p className="mt-2 text-slate-400">
          Have a project in mind? Let's work together.
        </p>
      </div>

      {submitStatus.message && (
        <div className={`mb-4 p-3 rounded-md ${
          submitStatus.type === 'success' 
            ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
            : 'bg-red-500/10 text-red-500 border border-red-500/20'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <form 
        ref={form} 
        onSubmit={handleSubmit} 
        className={`space-y-6 ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300">
            Name
          </label>
          <input
            type="text"
            name="user_name" // Important: name attribute for EmailJS
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            type="email"
            name="user_email" // Important: name attribute for EmailJS
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300">
            Message
          </label>
          <textarea
            id="message"
            name="message" // Important: name attribute for EmailJS
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-4 py-2 text-white rounded-md transition-colors ${
            isSubmitting
              ? "bg-slate-700"
              : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </form>
    </div>
  );
}; 