"use client";
import { SparklesCore } from "../components/ui/sparkles";
import { TracingBeam } from "../components/ui/tracing-beam";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { BackgroundBeams } from "../components/ui/background-beams";
import Image from "next/image";
import { Globe } from "../components/ui/globe";
import { ProfilePin } from "../components/ui/3d-pin";
import { Footer } from "../components/ui/footer";
import { ContactSection } from "../components/ui/contact-section";
import { motion } from "framer-motion";
import { Timeline } from "../components/ui/timeline";
import { Achievements } from "../components/ui/achievements";
import { AIChatbot } from "../components/ui/ai-chat";
import { AchievementsCarousel } from "../components/ui/achievements-carousel";
import { FloatingNav } from "../components/ui/floating-navbar";
import { DownloadButton } from "../components/ui/download-button";
import { SkillsMarquee } from "../components/ui/skills-marquee";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      value: "home",
    },
    {
      name: "About",
      link: "#about",
      value: "about",
    },
    {
      name: "Projects",
      link: "#projects",
      value: "projects",
    },
    {
      name: "Experience",
      link: "#experience",
      value: "experience",
    },
    {
      name: "Contact",
      link: "#contact",
      value: "contact",
    },
  ];

  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "ease.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Code Battelion 1.0",
      description: "A cutting-edge Website for Intra University CSE Fest Segment Registration(eg. Hackathon, IUPC, Project Showcasing).",
      image: "/code-battelion.png",
      techStack: ["Next.js", "Django", "DRF", "Webmail Integration"],
      liveLink: "https://cse-fest-ebon.vercel.app/",
      codeLink: "https://github.com/yourusername/project-repo",
    },
    {
      id: 2,
      title: "Image to Text Converter AI",
      description: "A web application that converts images to text using OCR technology.",
      image: "/imgtotext.png",
      techStack: ["Next.js", "Django", "DRF", "OCR"],
      liveLink: "https://img-to-text-zeta.vercel.app/",
      codeLink: "https://github.com/yourusername/project-repo",
    },
    {
      id: 3,
      title: "Motivator AI",
      description: "A web application that motivates users via Quran to achieve their goals.",
      image: "/motive.png",
      techStack: ["Next.js", "Django", "DRF", "OCR"],
      liveLink: "https://motivator-ai.vercel.app/",
      codeLink: "https://github.com/yourusername/project-repo",
    },
    {
      id: 4,
      title: "Exclusive Private Tutoring",
      description: "A Website for Private Tutoring, It Was Built When i was working on College Master Mind.",
      image: "/ept.png",
      techStack: ["Next.js", "Django", "DRF", "OCR"],
      liveLink: "https://dev-phase.vercel.app/",
      codeLink: "https://github.com/yourusername/project-repo",
    },
    
  ];

  const educationData = [
    {
      title: "Bachelor of Science in Computer Science",
      date: "2019 - 2023",
      institution: "Bangladesh Army International University of Science and Technology",
      description: "CSE, CGPA: 2.96",
      skills: ["Data Structures", "Operating System", "Software Engineering", "AI & ML"],
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      date: "2017 - 2019",
      institution: "Cumilla Collectorate School and College",
      description: "Group: Science, GPA: 5.00",
      skills: ["Physics", "Mathematics", "Chemistry", "Biology"],
    },
    {
      title: "Secondary School Certificate (SSC)",
      date: "2015 - 2017",
      institution: "Chauddagram HJ Model Pilot Govt. High School",
      description: "Group: Science, GPA: 4.50",
      skills: ["Mathematics", "Science", "Programming Basics"],
    },
  ];

  const experienceData = [
    {
      title: "Wa-Mac (Remote)",
      date: "2021 - Present",
      company: "Property Management System",
      role: "Full Stack Developer",
      location: "Phoenix, AZ, USA",
      description: "Developed a Property Management System for a real estate company. The system allows property owners to manage their properties and tenants.",
      skills: ["Next.js","TypeScript","TailwindCSS","Shadcn/UI", "Django", "DRF"],
    },
    {
      title: "College Master Mind (Remote)",  
      date: "2021 - Present",
      company: "College Management System",
      role: "Full Stack Developer",
      location: "Phoenix, AZ, USA",
      description: "Developed a College Management System for the company. The system allows students to manage their courses and assignments.",
      skills: ["Next.js","TypeScript","TailwindCSS","Shadcn/UI", "Django", "DRF"],
    },
    {
      title: "Digital Marketer (Remote)",
      date: "2023 - 2024",
      company: "NexTech Fusion",
      role: "Digital Marketing Specialist",
      location: "Dhaka, Bangladesh",
      description: "I worked as a digital marketer for the company. I was responsible for the company's social media presence and marketing campaigns.",
      skills: ["SEO", "Content Writing", "Social Media Marketing", "Email Marketing"],
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <FloatingNav navItems={navItems} />
      {/* Hero Section - Make it more responsive */}
      <div id="home" className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md px-4 sm:px-6">
        {/* Background Sparkles */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-50 flex flex-col items-center gap-8 w-full max-w-7xl mx-auto">
          <div className="relative w-full max-w-[200px] sm:max-w-xs">
            <ProfilePin />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <TracingBeam className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto antialiased pt-4 relative">
          {/* About Section */}
          <div id="about" className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
            I'm Kawsar, a passionate software engineer with a love for problem-solving and exploring new technologies. My expertise lies in web development, particularly with Django and Python. I'm always eager to learn and take on new challenges in the field.
            </p>
            <div className="flex justify-start">
              <DownloadButton />
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <SkillsMarquee />
          </div>

          {/* Experience Section */}
          <div id="experience" className="mb-20">
            <div className="text-center mb-12">
              <TypewriterEffect
                words={[
                  { text: "Professional" },
                  { text: "Experience", className: "text-blue-500" },
                ]}
              />
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
                My professional journey and work experience in the tech industry.
              </p>
            </div>
            <Timeline data={experienceData} type="experience" />
          </div>

          {/* Education Section */}
          <div id="education" className="mb-20">
            <div className="text-center mb-12">
              <TypewriterEffect
                words={[
                  { text: "Education" },
                  { text: "&", className: "text-blue-500" },
                  { text: "Qualifications" },
                ]}
              />
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
                My academic journey and qualifications that shaped my career.
              </p>
            </div>
            <Timeline 
              data={educationData} 
              type="education"
            />
          </div>

          {/* Projects Section */}
          <div id="projects" className="mb-20">
            <div className="text-center mb-12">
              <TypewriterEffect
                words={[
                  { text: "Featured" },
                  { text: "Projects", className: "text-blue-500" },
                  { text: "Showcase" },
                ]}
              />
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Explore my latest projects showcasing innovative solutions and modern technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="relative bg-slate-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 sm:h-56 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative px-4 py-1.5 text-sm font-medium text-white rounded-full
                                   bg-[linear-gradient(black,black),linear-gradient(to_right,#FF007A,#00D1FF)]
                                   [background-clip:padding-box,border-box] [background-origin:padding-box,border-box]
                                   border-2 border-transparent hover:scale-105 transition-transform duration-200
                                   flex items-center gap-2"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          Live
                        </a>
                      )}
                      
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative px-4 py-1.5 text-sm font-medium text-white rounded-full
                                   bg-[linear-gradient(black,black),linear-gradient(to_right,#FF007A,#00D1FF)]
                                   [background-clip:padding-box,border-box] [background-origin:padding-box,border-box]
                                   border-2 border-transparent hover:scale-105 transition-transform duration-200
                                   flex items-center gap-2"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <TypewriterEffect
                words={[
                  { text: "My" },
                  { text: "Achievements", className: "text-blue-500" },
                ]}
              />
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Milestones and accomplishments throughout my journey.
              </p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AchievementsCarousel />
            </div>
          </div>
        </div>
      </TracingBeam>
      
      <div id="contact" className="relative z-10">
        <ContactSection />
        <Footer />
      </div>

      <BackgroundBeams />

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
