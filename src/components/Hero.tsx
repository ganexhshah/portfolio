import profileImg from "@/assets/profile.jpg";
import galleryImg1 from "@/assets/gallery/1.png";
import galleryImg2 from "@/assets/gallery/2.png";
import galleryImg3 from "@/assets/gallery/3.png";
import galleryImg4 from "@/assets/gallery/4.png";
import galleryImg5 from "@/assets/gallery/5.png";
// Demo Gallery Imports
import demoVideo from "@/assets/gallery/demo/video.mp4";
import ganu1 from "@/assets/gallery/demo/ganu1.jpg";
import ganu2 from "@/assets/gallery/demo/ganu2.jpg";
import ganu3 from "@/assets/gallery/demo/ganu3.jpg";
import ganu4 from "@/assets/gallery/demo/ganu4.jpg";

import { User, Wrench, Globe, Code, Sparkles, ArrowRight, Palette, Lock, Database, Github, Linkedin, Twitter, Youtube, Instagram, Mail } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/data/projects";
import { posts as blogPosts } from "@/data/blogPosts";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const techStack = [
    { name: "React", category: "UI Library", color: "#61DAFB", icon: "⚛️" },
    { name: "TypeScript", category: "Typed JavaScript", color: "#3178C6", icon: "TS" },
    { name: "JavaScript", category: "Web Language", color: "#F7DF1E", icon: "JS" },
    { name: "Next.js", category: "React Framework", color: "#000000", icon: "▲" },
    { name: "Tailwind CSS", category: "Utility-first CSS", color: "#06B6D4", icon: "🎨" },
    { name: "Sanity", category: "Headless CMS", color: "#F03E2F", icon: "S" },
    { name: "Git", category: "Version Control", color: "#F05032", icon: "git" },
    { name: "Firebase", category: "Backend Services", color: "#FFCA28", icon: "🔥" },
    { name: "Supabase", category: "Open-source DB", color: "#3ECF8E", icon: "S" },
    { name: "PostgreSQL", category: "Relational DB", color: "#336791", icon: "P" },
    { name: "Prisma", category: "ORM for DB", color: "#2D3748", icon: "P" },
    { name: "Node.js", category: "Runtime", color: "#339933", icon: "N" },
  ];

  const roles = [
    "Web Developer 💻",
    "MERN Stack Dev 🚀",
    "Full Stack Dev 🌐",
    "UI/UX Enthusiast 🎨"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const container = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate "Hi, I'm"
    tl.from(".hero-text-start", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out"
    })
      // Animate Name with a pop effect
      .from(nameRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.3")
      // Floating icons around name
      .from(".tech-icon", {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.5");

    // Continuous floating animation for icons
    gsap.to(".tech-icon", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.2,
        from: "random"
      }
    });

    // Unique animation for "Web Developer And A Student"
    // Scramble effect simulation using opacity and blur
    const letters = subtitleRef.current?.querySelectorAll("span");
    if (letters) {
      gsap.fromTo(letters,
        {
          opacity: 0,
          filter: "blur(10px)",
          y: 20
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power4.out",
          delay: 0.5
        }
      );
    }

    // SCROLL REVEAL ANIMATIONS
    // Select all sections with class 'reveal-section'
    const sections = gsap.utils.toArray('.reveal-section');

    sections.forEach((section: any) => {
      gsap.fromTo(section,
        {
          y: 50,
          opacity: 0,
          scale: 0.98
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%", // Triggers when top of section hits 85% of viewport height
            toggleActions: "play none none reverse"
          }
        }
      );
    });

  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-white dark:bg-gray-950 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:grid md:grid-cols-[1fr,auto] gap-8 items-start">
            {/* Profile Picture - Shows first on mobile, right side on desktop */}
            <div className="order-1 md:order-2 w-full flex justify-center md:justify-end">
              <div className="relative group">
                {/* Animated gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                {/* Profile image */}
                <div className="relative">
                  <img
                    src={profileImg}
                    alt="Ganesh Shah"
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white dark:border-gray-950 shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Text content - Shows second on mobile, left side on desktop */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight flex flex-wrap items-center gap-2">
                  <span className="hero-text-start">Hi, I'm</span>
                  <div className="relative inline-block">
                    <span ref={nameRef} className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text font-name inline-block">
                      Ganesh
                    </span>

                    {/* Floating Tech Logos */}
                    <div className="absolute -top-6 -right-6 tech-icon text-yellow-500">
                      <Sparkles size={24} />
                    </div>
                  </div>
                </h1>
              </div>

              <h2 ref={subtitleRef} className="text-sm md:text-lg text-gray-800 dark:text-gray-200 font-medium mb-4 font-heading flex flex-wrap gap-2 items-center">
                <span className="bg-yellow-300 dark:bg-yellow-500 text-black px-2 py-1 rounded-md transform rotate-1 inline-flex items-center gap-2">
                  <span className="role-text">{roles[currentRoleIndex]}</span>
                </span>
                <span className="bg-yellow-300 dark:bg-yellow-500 text-black px-2 py-1 rounded-md transform -rotate-1 inline-flex items-center gap-2">
                  And A Student 🎓
                </span>
              </h2>

              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed font-body hero-text-start">
                A wizard of code, weaving stories through projects and applications. I'm passionate about web development and an enthusiast for technology, constantly crafting web experiences and building tools that make an impact.
              </p>


            </div>
          </div>
        </section>

        {/* Tech Stack Section - Infinite Scroll Animation */}
        <section className="mb-8 overflow-hidden reveal-section">
          <div className="relative">
            {/* First Row - Scrolling Right */}
            <div className="flex gap-3 mb-3 animate-scroll-right">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-800 min-w-[140px]"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-lg">{tech.icon}</div>
                    <div>
                      <h3 className="font-semibold text-xs text-gray-900 dark:text-gray-100">
                        {tech.name}
                      </h3>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">
                        {tech.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - Scrolling Left */}
            <div className="flex gap-3 animate-scroll-left">
              {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-800 min-w-[140px]"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-lg">{tech.icon}</div>
                    <div>
                      <h3 className="font-semibold text-xs text-gray-900 dark:text-gray-100">
                        {tech.name}
                      </h3>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">
                        {tech.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section - Redesigned */}
        <section className="mb-12 sm:mb-16 reveal-section">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
            {/* Left Side: Title & Description */}
            <div className="w-full md:w-1/3 md:sticky md:top-24">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-black dark:text-white flex items-center gap-2 sm:gap-3 break-words">
                  Work <span className="text-3xl sm:text-4xl transform rotate-12 inline-block flex-shrink-0">🌻</span>
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed sm:leading-relaxed font-body mb-6 sm:mb-8 px-1">
                I craft high-performance, future-ready solutions where speed meets precision. Every line of code I write is a blend of efficiency and structure, designed for scalability and long-term maintainability.
                For me, great development is about delivering fast without compromising on a solid, lasting foundation.
              </p>

              <div className="hidden md:block">
                <a href="/work" className="custom-btn group min-h-[44px]">
                  View All Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>

            </div>

            {/* Right Side: Work Cards */}
            <div className="w-full md:w-2/3 grid grid-cols-1 gap-4 sm:gap-6">

              {/* Wiperspace Card */}
              <div className="group bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 active:scale-[0.98] sm:active:scale-100">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center p-2">
                    <Globe className="text-blue-500" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white transition-all flex flex-wrap items-center gap-1 sm:gap-2 break-words word-wrap overflow-wrap leading-snug sm:leading-normal mb-1">
                      <span className="break-words">Wiperspace</span>
                      <ArrowRight size={14} className="hidden sm:inline opacity-0 md:group-hover:opacity-100 -translate-x-2 md:group-hover:translate-x-0 transition-all text-gray-400 flex-shrink-0" />
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm mb-2 leading-relaxed">
                      Game Developer (Remote)
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-gray-600 dark:text-gray-300 inline-block mb-3">
                      Currently
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                      Working remotely as a Game Developer at Wiperspace, developing games using Unreal Engine 5 and contributing to various game development projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* HubNepal Card */}
              <div className="group bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 active:scale-[0.98] sm:active:scale-100">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center p-2">
                    <Palette className="text-purple-500" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white transition-all flex flex-wrap items-center gap-1 sm:gap-2 break-words word-wrap overflow-wrap leading-snug sm:leading-normal mb-1">
                      <span className="break-words">HubNepal</span>
                      <ArrowRight size={14} className="hidden sm:inline opacity-0 md:group-hover:opacity-100 -translate-x-2 md:group-hover:translate-x-0 transition-all text-gray-400 flex-shrink-0" />
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm mb-2 leading-relaxed">
                      UX/UI Designer Intern
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-gray-600 dark:text-gray-300 inline-block mb-3">
                      2024
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                      Worked as a UX/UI Designer Intern, contributing to user interface design and user experience improvements for various projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* CodeIt Card */}
              <div className="group bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 active:scale-[0.98] sm:active:scale-100">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center p-2">
                    <Code className="text-green-500" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white transition-all flex flex-wrap items-center gap-1 sm:gap-2 break-words word-wrap overflow-wrap leading-snug sm:leading-normal mb-1">
                      <span className="break-words">CodeIt</span>
                      <ArrowRight size={14} className="hidden sm:inline opacity-0 md:group-hover:opacity-100 -translate-x-2 md:group-hover:translate-x-0 transition-all text-gray-400 flex-shrink-0" />
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm mb-2 leading-relaxed">
                      Intern
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-gray-600 dark:text-gray-300 inline-block mb-3">
                      2024
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                      Gained practical experience in software development, working on real-world projects and enhancing coding skills as an intern.
                    </p>
                  </div>
                </div>
              </div>

              {/* Freelancing Card */}
              <div className="group bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 active:scale-[0.98] sm:active:scale-100">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center p-2">
                    <User className="text-orange-500" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white transition-all flex flex-wrap items-center gap-1 sm:gap-2 break-words word-wrap overflow-wrap leading-snug sm:leading-normal mb-1">
                      <span className="break-words">Freelancing</span>
                      <ArrowRight size={14} className="hidden sm:inline opacity-0 md:group-hover:opacity-100 -translate-x-2 md:group-hover:translate-x-0 transition-all text-gray-400 flex-shrink-0" />
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm mb-2 leading-relaxed">
                      Full Stack Developer
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-gray-600 dark:text-gray-300 inline-block">
                      Aug. 2024 - Present
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* View All Button */}
            <div className="mt-4 sm:mt-6 md:hidden">
              <a href="/work" className="custom-btn group w-full justify-center min-h-[44px] flex items-center">
                View All Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section - Modern Expandable */}
        <section className="mb-12 sm:mb-16 reveal-section">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif text-black dark:text-white flex items-center gap-3">
              Images <span className="text-2xl sm:text-3xl md:text-4xl transform -rotate-12 inline-block">📸</span>
            </h2>
            <a href="/gallery" className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-bold text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
              View Gallery <ArrowRight size={16} />
            </a>
          </div>

          <div className="relative w-full">
            {/* Desktop: Expandable Flex Gallery */}
            <div className="hidden md:flex gap-3 h-96 w-full">
              {[
                { type: 'video', src: demoVideo, label: 'Demo', desc: 'Watch this' },
                { type: 'image', src: ganu1, label: 'Moment 1', desc: 'Life' },
                { type: 'image', src: ganu2, label: 'Moment 2', desc: 'Style' },
                { type: 'image', src: ganu3, label: 'Moment 3', desc: 'Vibe' },
                { type: 'image', src: ganu4, label: 'Moment 4', desc: 'Chill' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)] rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />

                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  )}

                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0">
                    <span className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">{item.desc}</span>
                    <h3 className="text-white text-3xl font-bold font-serif italic">{item.label}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: Scrollable Cards */}
            <div className="md:hidden flex gap-4 overflow-x-auto pb-6 scroll-smooth px-1 no-scrollbar -mx-4 px-4">
              {[
                { type: 'video', src: demoVideo, label: 'Wauuu' },
                { type: 'image', src: ganu1, label: 'Moment 1' },
                { type: 'image', src: ganu2, label: 'Moment 2' },
                { type: 'image', src: ganu3, label: 'Moment 3' },
                { type: 'image', src: ganu4, label: 'Moment 4' }
              ].map((item, i) => (
                <div key={i} className="flex-shrink-0 w-72 h-96 rounded-[2rem] overflow-hidden relative shadow-lg transform rotate-0 odd:rotate-1 even:-rotate-1">
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img src={item.src} className="w-full h-full object-cover" alt={item.label} />
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-2xl font-bold font-serif italic">{item.label}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View All Button */}
            <div className="flex justify-center mt-4 md:hidden">
              <a href="/gallery" className="custom-btn group w-full justify-center min-h-[44px] flex items-center">
                View More Images <span className="ml-2">🖼️</span>
              </a>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-12 sm:mb-16 reveal-section">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
            {/* Left Side: Title & Description */}
            <div className="w-full md:w-1/3 md:sticky md:top-24">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-black dark:text-white flex flex-wrap items-center gap-2 sm:gap-3 break-words word-wrap">
                  <span className="break-words">Featured Projects</span> <span className="transform rotate-12 inline-block text-2xl sm:text-3xl flex-shrink-0">🌺</span>
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed sm:leading-relaxed font-body mb-6 sm:mb-8 px-1">
                I love building things that solve real problems. Here are a few open-source projects and platforms I've crafted using the latest web technologies.
              </p>
              <div className="hidden md:block">
                <a href="/projects" className="custom-btn group min-h-[44px]">
                  View All Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>

            {/* Right Side: Project Content */}
            <div className="w-full md:w-2/3 flex flex-col gap-4 sm:gap-6">
              {[projectsData['tictactoe'], projectsData['career-guru']].map((project) => ( // Using career-guru as Web Nepal for now based on tech stack similarity
                <a
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors active:scale-[0.98] sm:active:scale-100 block"
                >
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white transition-colors cursor-pointer flex flex-wrap items-center gap-2 sm:gap-3 break-words word-wrap leading-snug sm:leading-normal">
                      <span className="break-words">{project.title}</span> <ArrowRight className="hidden sm:inline opacity-0 md:group-hover:opacity-100 transition-opacity transform -translate-x-2 md:group-hover:translate-x-0 flex-shrink-0" size={16} />
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform flex items-center gap-1">
                        <Globe size={10} className="sm:w-3 sm:h-3" /> {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}

              {/* Mobile View All Button */}
              <div className="md:hidden mt-2 sm:mt-4">
                <a href="/projects" className="custom-btn group w-full justify-center min-h-[44px] flex items-center">
                  View All Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>        {/* Featured Blogs Section */}
        <section className="mb-12 sm:mb-16 reveal-section">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
            {/* Left Side: Title & Description */}
            <div className="w-full md:w-1/3 md:sticky md:top-24">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-black dark:text-white flex flex-wrap items-center gap-2 sm:gap-3 break-words word-wrap">
                  <span className="break-words">Featured Blogs</span> <span className="transform rotate-12 inline-block text-xl sm:text-2xl flex-shrink-0">✍️</span>
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed sm:leading-relaxed font-body mb-6 sm:mb-8 px-1">
                Thoughts, tutorials, and insights about web development, design, and my learning journey.
              </p>
              <div className="hidden md:block">
                <a href="/blog" className="custom-btn group min-h-[44px]">
                  Read All Articles <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>

            {/* Right Side: Blog Content */}
            <div className="w-full md:w-2/3 flex flex-col gap-4 sm:gap-6">
              {blogPosts.slice(0, 2).map((post, index) => (
                <div key={index} className="group border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors active:scale-[0.98] sm:active:scale-100">
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white transition-colors cursor-pointer flex flex-wrap items-center gap-2 sm:gap-3 break-words word-wrap leading-snug sm:leading-normal">
                      <span className="break-words">{post.title}</span> <ArrowRight className="hidden sm:inline opacity-0 md:group-hover:opacity-100 transition-opacity transform -translate-x-2 md:group-hover:translate-x-0 flex-shrink-0" size={16} />
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {post.tags?.map((tag, i) => (
                      <span key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile View All Button */}
              <div className="md:hidden mt-2 sm:mt-4">
                <a href="/blog" className="custom-btn group w-full justify-center min-h-[44px] flex items-center">
                  Read All Articles <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section - Redesigned to match Featured Blogs */}
        <section className="mb-0 reveal-section">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
            {/* Left Side: Title & Description */}
            <div className="w-full md:w-1/3 md:sticky md:top-24">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-black dark:text-white flex flex-wrap items-center gap-2 sm:gap-3 break-words word-wrap">
                  <span className="break-words">Timeline</span> <span className="transform rotate-12 inline-block text-xl sm:text-2xl flex-shrink-0">⏳</span>
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed sm:leading-relaxed font-body mb-6 sm:mb-8 px-1">
                Building amazing web applications and learning new technologies every day.
              </p>
            </div>

            {/* Right Side: Timeline Content */}
            <div className="w-full md:w-2/3 flex flex-col gap-4 sm:gap-6">

              {/* Currently */}
              <div className="group border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors active:scale-[0.98] sm:active:scale-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">✨</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Currently</span>
                  <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-wide rounded-full">
                    Active
                  </span>
                </div>
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white transition-colors cursor-pointer flex flex-wrap items-center gap-2 sm:gap-3 break-words word-wrap leading-snug sm:leading-normal">
                    <span className="break-words">Web Developer & Student</span> <ArrowRight className="hidden sm:inline opacity-0 md:group-hover:opacity-100 transition-opacity transform -translate-x-2 md:group-hover:translate-x-0 flex-shrink-0" size={16} />
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs sm:text-sm">
                  Building amazing web applications and learning new technologies every day.
                </p>
              </div>

              {/* 2024 */}
              <div className="group border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors active:scale-[0.98] sm:active:scale-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🚀</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">2024</span>
                </div>
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white transition-colors cursor-pointer flex flex-wrap items-center gap-2 sm:gap-3 break-words word-wrap leading-snug sm:leading-normal">
                    <span className="break-words">Started Full Stack Development</span> <ArrowRight className="hidden sm:inline opacity-0 md:group-hover:opacity-100 transition-opacity transform -translate-x-2 md:group-hover:translate-x-0 flex-shrink-0" size={16} />
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs sm:text-sm">
                  Mastered MERN stack and modern web technologies.
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
