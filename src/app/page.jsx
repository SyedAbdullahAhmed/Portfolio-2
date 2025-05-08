"use client";
import dynamic from 'next/dynamic';
import { SparklesCore } from "../components/ui/sparkles";
import { TracingBeam } from "../components/ui/tracing-beam";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { BackgroundBeams } from "../components/ui/background-beams";
import Image from "next/image";
import { Footer } from "../components/ui/footer";
import { motion } from "framer-motion";
import { Timeline } from "../components/ui/timeline";
import { FloatingNav } from "../components/ui/floating-navbar";
import { DownloadButton } from "../components/ui/download-button";
import { SkillsMarquee } from "../components/ui/skills-marquee";
import { educationData } from "../data/educationData";
import { experienceData } from "../data/experienceData";
import { projects } from "../data/projectData";
import { useEffect, useState } from "react";
import CodeEditor from "../components/ui/codeEditor";
// Dynamically import non-critical components with ssr: false
const Globe = dynamic(() => import('../components/ui/globe').then(mod => mod.Globe), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-slate-900/50 rounded-lg animate-pulse">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
});

const ProfilePin = dynamic(() => import('../components/ui/3d-pin').then(mod => mod.ProfilePin), {
  ssr: false,
  loading: () => <div className="poppins w-[320px] h-[320px] bg-slate-900/50 rounded-lg animate-pulse" />
});

const ContactSection = dynamic(() => import('../components/ui/contact-section').then(mod => mod.ContactSection), {
  ssr: false
});

const Achievements = dynamic(() => import('../components/ui/achievements').then(mod => mod.Achievements), {
  ssr: false
});

const AIChatbot = dynamic(() => import('../components/ui/ai-chat').then(mod => mod.AIChatbot), {
  ssr: false
});

const AchievementsCarousel = dynamic(() => import('../components/ui/achievements-carousel').then(mod => mod.AchievementsCarousel), {
  ssr: false
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

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
      name: "Experience",
      link: "#experience",
      value: "experience",
    },
    {
      name: "Projects",
      link: "#projects",
      value: "projects",
    },
    {
      name: "Contact",
      link: "#contact",
      value: "contact",
    },
  ];

  const words = [
    {
      text: "Building",
      className: "text-blue-500"
    },
    {
      text: "the",
    },
    {
      text: "future",
      className: "text-purple-500"
    },
    {
      text: "with",
    },
    {
      text: "code.",
      className: "text-cyan-400"
    },
  ];

  return (
    <div className="poppins min-h-screen bg-black overflow-hidden">
      <FloatingNav navItems={navItems} />
      {/* Hero Section */}
      <div id="home" className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center 
                           overflow-hidden px-4 sm:px-6 py-12 md:py-0">
        {/* Background Sparkles */}
        <div className="absolute inset-0 w-full h-full opacity-50 md:opacity-100">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-20 flex flex-col-reverse md:flex-row items-center 
                        justify-center w-full md:w-[80vw] max-w-7xl mx-auto gap-2 md:gap-8">




          {/* Left Column - Text Content */}
          <div className="flex-1 text-center md:text-left space-y-3 md:space-y-8 ">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="poppins text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white"
            >
              Hello, I'm Abdullah
            </motion.h1>
            <div className="space-y-2 md:space-y-4 w-[39vw] ">
              <div className="hidden md:block">
                <TypewriterEffect words={words} />
              </div>
              <div className="md:hidden">
                <h2 className="poppins text-xl sm:text-2xl font-semibold  ">
                  <span className="text-blue-500">Building</span> the 
                  <span className="text-purple-500"> future</span> with
                  <span className="text-cyan-400"> code.</span>
                </h2>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto md:mx-0"
              >
                Full Stack Developer | Problem Solver | Tech Enthusiast
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center md:justify-start"
              >
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium text-white 
                           bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                           hover:from-blue-600 hover:via-purple-600 hover:to-pink-600
                           transition-all duration-300 transform hover:scale-105
                           shadow-[0_0_20px_rgba(96,165,250,0.5)]"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium
                           border border-gray-700 text-gray-300
                           hover:border-gray-500 hover:text-white
                           transition-all duration-300 transform hover:scale-105
                           bg-black/50 backdrop-blur-sm"
                >
                  View Projects
                </a>
              </motion.div>
            </div>
          </div>






          {/* Right Column - Profile Pin */}
          <div className="flex-1 flex justify-center items-center w-full md:w-auto mb-4 md:mb-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="w-[160px] sm:w-[200px] md:w-[280px] lg:w-[320px]"
            >
              <div className="relative">
                <div>
                  <ProfilePin />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>






      {/* Content Section */}
      <TracingBeam className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto antialiased pt-8 md:pt-4 relative">



          {/* About Section */}
          <div id="about" className="mb-10 md:mb-20">
            <h2 className="poppins text-2xl sm:text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="poppins text-gray-300 text-sm sm:text-base mb-6">
            I'm Abdullah, a passionate software engineer with a love for problem-solving and exploring new technologies. My expertise lies in web development, particularly with Django and Python. I'm always eager to learn and take on new challenges in the field.
            </p>
            <div className="flex justify-center sm:justify-start">
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
                  { text: "Experience", className: "text-blue-500 poppins " },
                ]}
              />
              <p className="poppins text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
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
                  { text: "&", className: "poppins text-blue-500" },
                  { text: "Qualifications" },
                ]}
              />
              <p className="poppins text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
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
                  { text: "Projects", className: "poppins text-blue-500" },
                  { text: "Showcase" },
                ]}
              />
              <p className="poppins text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Explore my latest projects showcasing innovative solutions and modern technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="relative bg-slate-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 sm:h-56 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={index === 0}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                      loading={index === 0 ? "eager" : "lazy"}
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="poppins text-lg sm:text-xl  text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="poppins text-xs sm:text-sm text-slate-400 mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="poppins px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center gap-3">
                      {project.liveLink && (
                        <a
                          // href={project.liveLink}
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="poppins relative px-4 py-1.5 text-sm font-medium text-white rounded-full
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
                          // href={project.codeLink}
                          href="#"
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





        </div>
      </TracingBeam>
      
      <div id="contact" className="relative z-10">
        <ContactSection />
        <Footer />
      </div>

      <BackgroundBeams />

      {/* AI Chatbot */}
      {/* <AIChatbot /> */}
    </div>
  );
}
