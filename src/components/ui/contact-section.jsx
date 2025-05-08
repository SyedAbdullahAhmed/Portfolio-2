"use client";
import { ContactForm } from "./contact-form";
import { Globe } from "./globe";

export const ContactSection = () => {
  return (
    <div className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 w-[80vw]">
        <div className="ml-10 flex flex-col md:grid md:grid-cols-2 gap-12 items-center ">
          {/* Contact Form - Always First */}
          <div className="w-full">
            <ContactForm />
          </div>

          {/* Globe - Always Second */}
          <div className="w-full max-w-[300px] md:max-w-none">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
}; 