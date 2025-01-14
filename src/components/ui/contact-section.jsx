"use client";
import { ContactForm } from "./contact-form";
import { Globe } from "./globe";

export const ContactSection = () => {
  return (
    <div className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Globe */}
          <div className="hidden md:block">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
}; 