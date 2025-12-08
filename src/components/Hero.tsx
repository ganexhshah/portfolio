import profileImg from "@/assets/profile.jpg";
import { User, Wrench, Globe, Code, Sparkles, ArrowRight, Palette, Lock, Database, Github, Linkedin, Twitter, Youtube, Instagram, Mail } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

  const workExperience = [
    {
      company: "Freelancing",
      role: "Full Stack Developer",
      link: "https://github.com/GaneshShah"
    },
    {
      company: "Web Projects",
      role: "MERN Stack Developer",
      link: "#"
    },
    {
      company: "Personal Projects",
      role: "Full Stack Developer",
      link: "#"
    }
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
        <section className="mb-8 overflow-hidden">
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

        {/* Photo Gallery Section - Scattered Collage */}
        <section className="mb-8">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading flex items-center gap-3">
            Images 📸
          </h2>

          <div className="relative py-8 overflow-hidden">
            {/* Left Navigation Button */}
            <button
              onClick={() => {
                const container = document.getElementById('photo-gallery');
                if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Photo Gallery Container */}
            <div id="photo-gallery" className="flex items-center gap-4 overflow-x-auto px-12 pb-4 scroll-smooth">
              {/* Photo 1 - Tilted left */}
              <div className="relative group transform -rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-10 flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src={profileImg}
                  alt="Gallery 1"
                  className="relative w-48 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>

              {/* Photo 2 - Tilted right */}
              <div className="relative group transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-10 flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src={profileImg}
                  alt="Gallery 2"
                  className="relative w-48 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>

              {/* Photo 3 - Center, larger */}
              <div className="relative group transform rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-10 flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src={profileImg}
                  alt="Gallery 3"
                  className="relative w-48 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>

              {/* Photo 4 - Tilted left */}
              <div className="relative group transform -rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-10 flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src={profileImg}
                  alt="Gallery 4"
                  className="relative w-48 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>

              {/* Photo 5 - Tilted right */}
              <div className="relative group transform rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-10 flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src={profileImg}
                  alt="Gallery 5"
                  className="relative w-48 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>

            {/* Right Navigation Button */}
            <button
              onClick={() => {
                const container = document.getElementById('photo-gallery');
                if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-6">
            <a
              href="/gallery"
              className="custom-btn hover:scale-105"
            >
              View More Images 🖼️
            </a>
          </div>
        </section>

        {/* Two Column Section - Toolbox, Connections */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">

            {/* Toolbox - Enhanced */}
            <div className="flex flex-col h-full group bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-cyan-900/10 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm text-center items-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <h3 className="text-xl font-bold font-heading bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
                  Toolbox 🛠️
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {/* Tool 1 - React */}
                <div className="flex items-center justify-center p-3 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl hover:scale-105 transition-transform cursor-pointer group">
                  <svg className="w-8 h-8 text-cyan-500 group-hover:rotate-180 transition-transform duration-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9.53 4.54c.61-2.14.45-3.61-.31-3.96-.63-.38-2.01.2-3.6 1.7.52.59 1.03 1.23 1.51 1.9.82-.08 1.63-.2 2.4-.36m-13.14 0c.77.16 1.58.28 2.4.36.48-.67.99-1.31 1.51-1.9-1.59-1.5-2.97-2.08-3.6-1.7-.76.35-.92 1.82-.31 3.96z" />
                  </svg>
                </div>

                {/* Tool 2 - TypeScript */}
                <div className="flex items-center justify-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.244-.651-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.381v-8.876H5.257v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" />
                  </svg>
                </div>

                {/* Tool 3 - Next.js */}
                <div className="flex items-center justify-center p-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                  </svg>
                </div>

                {/* Tool 4 - Tailwind CSS */}
                <div className="flex items-center justify-center p-3 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" />
                  </svg>
                </div>

                {/* Tool 5 - Node.js */}
                <div className="flex items-center justify-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.05-.139.146-.139.242V17.07c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.952-.922-1.604V6.921c0-.65.353-1.274.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.953.924 1.603v10.15c0 .651-.354 1.276-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247zm7.100-7.509c0-1.599-1.076-2.025-3.348-2.325-2.292-.304-2.521-.459-2.521-.995 0-.444.195-.958 1.893-.958 1.519 0 2.078.327 2.307 1.35.021.094.099.162.195.162h1.142a.255.255 0 0 0 .255-.255v-.053c-.187-1.602-1.307-2.348-3.899-2.348-2.231 0-3.557.942-3.557 2.521 0 1.619 1.253 2.068 3.275 2.268 2.414.238 2.595.594 2.595 1.052 0 .819-.656 1.167-2.198 1.167-1.942 0-2.371-.486-2.514-1.452-.024-.09-.099-.162-.194-.162h-1.142a.255.255 0 0 0-.255.255v.06c0 1.114.606 2.44 4.105 2.44 2.455 0 3.861-.965 3.861-2.65z" />
                  </svg>
                </div>

                {/* Tool 6 - MongoDB */}
                <div className="flex items-center justify-center p-3 bg-gradient-to-br from-green-50 to-lime-50 dark:from-green-900/20 dark:to-lime-900/20 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-green-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                  </svg>
                </div>

                {/* Tool 7 - Firebase */}
                <div className="flex items-center justify-center p-3 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z" />
                  </svg>
                </div>

                {/* Tool 8 - VS Code */}
                <div className="flex items-center justify-center p-3 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                  </svg>
                </div>

                {/* Tool 9 - GitHub */}
                <div className="flex items-center justify-center p-3 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-900/50 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-gray-800 dark:text-gray-200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
              </div>

              {/* My Tools Button */}
              <div className="flex justify-center mt-auto pt-4">
                <a
                  href="/tools"
                  className="custom-btn hover:scale-105"
                >
                  <Wrench size={18} /> My Tools
                </a>
              </div>
            </div>

            {/* Connections - Enhanced */}
            <div className="flex flex-col h-full group bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm text-center items-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <h3 className="text-xl font-bold font-heading bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Connections 🌐
                </h3>
              </div>

              {/* Circular connections layout - Enhanced */}
              <div className="relative h-40 w-full flex items-center justify-center">
                {/* Center profile with pulse animation */}
                <div className="absolute z-10 animate-pulse-slow">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-50 animate-ping-slow"></div>
                    <div className="relative w-16 h-16 rounded-full border-3 border-white dark:border-gray-800 shadow-2xl overflow-hidden transform hover:scale-110 transition-transform duration-300">
                      <img src={profileImg} alt="Center" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Animated connection lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                  <line x1="50%" y1="50%" x2="50%" y2="0%" stroke="url(#gradient1)" strokeWidth="2" className="animate-pulse" />
                  <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="url(#gradient2)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <line x1="50%" y1="50%" x2="0%" y2="50%" stroke="url(#gradient3)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <line x1="50%" y1="50%" x2="100%" y2="50%" stroke="url(#gradient4)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                  <defs>
                    <linearGradient id="gradient1"><stop offset="0%" stopColor="#ec4899" /><stop offset="100%" stopColor="#a855f7" /></linearGradient>
                    <linearGradient id="gradient2"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient>
                    <linearGradient id="gradient3"><stop offset="0%" stopColor="#f97316" /><stop offset="100%" stopColor="#ef4444" /></linearGradient>
                    <linearGradient id="gradient4"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#14b8a6" /></linearGradient>
                  </defs>
                </svg>

                {/* Surrounding profiles */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 shadow-md flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white transform hover:scale-110 transition-transform cursor-pointer">
                    <Github size={18} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 shadow-md flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 transform hover:scale-110 transition-transform cursor-pointer">
                    <Linkedin size={18} />
                  </div>
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 shadow-md flex items-center justify-center bg-sky-100 dark:bg-sky-900 text-sky-500 dark:text-sky-300 transform hover:scale-110 transition-transform cursor-pointer">
                    <Twitter size={18} />
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 shadow-md flex items-center justify-center bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 transform hover:scale-110 transition-transform cursor-pointer">
                    <Youtube size={18} />
                  </div>
                </div>
                <div className="absolute top-2 right-6 animate-float" style={{ animationDelay: '0.8s' }}>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 shadow-md flex items-center justify-center bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 transform hover:scale-110 transition-transform cursor-pointer">
                    <Instagram size={16} />
                  </div>
                </div>
                <div className="absolute bottom-2 left-6 animate-float" style={{ animationDelay: '1.3s' }}>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 shadow-md flex items-center justify-center bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 transform hover:scale-110 transition-transform cursor-pointer">
                    <Mail size={16} />
                  </div>
                </div>
              </div>

              {/* Connections Button */}
              <div className="flex justify-center mt-auto pt-4">
                <a
                  href="/connections"
                  className="custom-btn hover:scale-105"
                >
                  <Globe size={18} /> Connections
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section - Redesigned */}
        <section className="mb-12 sm:mb-16">
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

              <a href="/work" className="custom-btn group hidden md:inline-flex min-h-[44px]">
                View All Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>

            {/* Right Side: Work Cards */}
            <div className="w-full md:w-2/3 grid grid-cols-1 gap-4 sm:gap-6">

              {/* Digital Pathshala Card */}
              <div className="group bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 active:scale-[0.98] sm:active:scale-100">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center p-2">
                    {/* Placeholder for Digital Pathshala Logo - using Code icon as fallback */}
                    <Code className="text-green-600" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white transition-all flex flex-wrap items-center gap-1 sm:gap-2 break-words word-wrap overflow-wrap leading-snug sm:leading-normal mb-1">
                      <span className="break-words">Digital Pathshala</span>
                      <ArrowRight size={14} className="hidden sm:inline opacity-0 md:group-hover:opacity-100 -translate-x-2 md:group-hover:translate-x-0 transition-all text-gray-400 flex-shrink-0" />
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm mb-2 leading-relaxed">
                      MERN Intern
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-gray-600 dark:text-gray-300 inline-block">
                      Sep. 2025 - Present
                    </div>
                  </div>
                </div>
              </div>

              {/* Swikar Codes Card */}
              <div className="group bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 active:scale-[0.98] sm:active:scale-100">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                    <img src={profileImg} alt="Swikar Codes" className="w-full h-full object-cover opacity-90" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white transition-all flex flex-wrap items-center gap-1 sm:gap-2 break-words word-wrap overflow-wrap leading-snug sm:leading-normal mb-1">
                      <span className="break-words">Swikar Codes</span>
                      <ArrowRight size={14} className="hidden sm:inline opacity-0 md:group-hover:opacity-100 -translate-x-2 md:group-hover:translate-x-0 transition-all text-gray-400 flex-shrink-0" />
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm mb-2 leading-relaxed">
                      Full Stack Developer
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-gray-600 dark:text-gray-300 inline-block">
                      Aug. 2024 - Feb. 2025
                    </div>
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

              {/* Mobile View All Button */}
              <div className="md:hidden mt-4 sm:mt-6">
                <a href="/work" className="custom-btn group w-full justify-center min-h-[44px] flex items-center">
                  View All Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-12 sm:mb-16">
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
              <a href="/projects" className="custom-btn group hidden md:inline-flex min-h-[44px]">
                View All Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>

            {/* Right Side: Project Content */}
            <div className="w-full md:w-2/3 flex flex-col gap-4 sm:gap-6">
              {/* Yeti PhotoBooth */}
              <div className="group border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors active:scale-[0.98] sm:active:scale-100">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white transition-colors cursor-pointer flex flex-wrap items-center gap-2 sm:gap-3 break-words word-wrap leading-snug sm:leading-normal">
                    <span className="break-words">Yeti PhotoBooth</span> <ArrowRight className="hidden sm:inline opacity-0 md:group-hover:opacity-100 transition-opacity transform -translate-x-2 md:group-hover:translate-x-0 flex-shrink-0" size={16} />
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm">
                  This project, "Yeti Photobooth," is an open-source web application that enables users to capture new photos with their device's camera or upload existing ones. It offers creative editing features such...
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform flex items-center gap-1">
                    <Globe size={10} className="sm:w-3 sm:h-3" /> Next.js
                  </span>
                  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform flex items-center gap-1">
                    <Palette size={10} className="sm:w-3 sm:h-3" /> Tailwind
                  </span>
                </div>
              </div>

              {/* Web Nepal */}
              <div className="group border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors active:scale-[0.98] sm:active:scale-100">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white transition-colors cursor-pointer flex flex-wrap items-center gap-2 sm:gap-3 break-words word-wrap leading-snug sm:leading-normal">
                    <span className="break-words">Web Nepal</span> <ArrowRight className="hidden sm:inline opacity-0 md:group-hover:opacity-100 transition-opacity transform -translate-x-2 md:group-hover:translate-x-0 flex-shrink-0" size={16} />
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm">
                  Web Nepal is an innovative learning platform designed to teach web development through hands-on coding exercises. Students can practice HTML, CSS, JavaScript, and other web technologies with real-time...
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform flex items-center gap-1">
                    <Globe size={10} className="sm:w-3 sm:h-3" /> Next.js
                  </span>
                  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform flex items-center gap-1">
                    <Sparkles size={10} className="sm:w-3 sm:h-3" /> Gemini API
                  </span>
                  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform flex items-center gap-1">
                    <Lock size={10} className="sm:w-3 sm:h-3" /> NextAuth
                  </span>
                  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform flex items-center gap-1">
                    <Database size={10} className="sm:w-3 sm:h-3" /> Prisma
                  </span>
                </div>
              </div>

              {/* Mobile View All Button */}
              <div className="md:hidden mt-2 sm:mt-4">
                <a href="/projects" className="custom-btn group w-full justify-center min-h-[44px] flex items-center">
                  View All Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>        {/* Featured Blogs Section */}
        <section className="mb-12 sm:mb-16">
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
              <a href="/blog" className="custom-btn group hidden md:inline-flex min-h-[44px]">
                Read All Articles <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>

            {/* Right Side: Blog Content */}
            <div className="w-full md:w-2/3 flex flex-col gap-4 sm:gap-6">
              {/* Blog Post 1 */}
              <div className="group border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors active:scale-[0.98] sm:active:scale-100">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white transition-colors cursor-pointer flex flex-wrap items-center gap-2 sm:gap-3 break-words word-wrap leading-snug sm:leading-normal">
                    <span className="break-words">Mastering React Hooks</span> <ArrowRight className="hidden sm:inline opacity-0 md:group-hover:opacity-100 transition-opacity transform -translate-x-2 md:group-hover:translate-x-0 flex-shrink-0" size={16} />
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm">
                  A deep dive into useState, useEffect, and custom hooks. Learn how to write cleaner, more reusable component logic with practical examples.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform">React</span>
                  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform">Hooks</span>
                  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform">JavaScript</span>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="group border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors active:scale-[0.98] sm:active:scale-100">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white transition-colors cursor-pointer flex flex-wrap items-center gap-2 sm:gap-3 break-words word-wrap leading-snug sm:leading-normal">
                    <span className="break-words">The Zen of Tailwind CSS</span> <ArrowRight className="hidden sm:inline opacity-0 md:group-hover:opacity-100 transition-opacity transform -translate-x-2 md:group-hover:translate-x-0 flex-shrink-0" size={16} />
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm">
                  Why utility-first CSS is the future of web styling. Discover how to build responsive, beautiful interfaces faster than ever before.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform">Tailwind</span>
                  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform">CSS</span>
                  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium hover:scale-105 transition-transform">Design</span>
                </div>
              </div>

              {/* Mobile View All Button */}
              <div className="md:hidden mt-2 sm:mt-4">
                <a href="/blog" className="custom-btn group w-full justify-center min-h-[44px] flex items-center">
                  Read All Articles <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline/About Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Timeline</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6">
              <div className="relative">
                <div className="absolute -left-[26px] w-3 h-3 rounded-full bg-pink-500"></div>
                <h3 className="font-semibold text-lg mb-1">Currently</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Web Developer & Student</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Building amazing web applications and learning new technologies every day.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6">
              <div className="relative">
                <div className="absolute -left-[26px] w-3 h-3 rounded-full bg-purple-500"></div>
                <h3 className="font-semibold text-lg mb-1">2024</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Started Full Stack Development</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
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
