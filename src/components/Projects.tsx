import { ArrowRight, ExternalLink, Github, Globe, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const stats = {
    total: 13,
    completed: 11,
    inProgress: 2,
    technologies: 50
  };

  const projects = [
    {
      id: "chatmandu",
      title: "ChatMandu - Real-Time Communication Platform",
      description: "A real-time communication platform built using PHP 8.1+ and Slim Framework. Features messaging, voice/video calling, and comprehensive admin tools powered by MySQL, WebRTC, and Agora SDK.",
      tags: ["PHP", "Slim Framework", "MySQL", "WebRTC", "Agora SDK"],
      demo: "https://chatmandu.com",
      status: "completed",
      year: "2024",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "tictactoe",
      title: "Tic Tac Toe Multiplayer Game",
      description: "A fully-featured real-time multiplayer Tic Tac Toe game built with React, TypeScript, and Socket.io. Features live chat, confetti effects, and responsive design.",
      tags: ["React", "TypeScript", "Socket.io", "Tailwind CSS"],
      github: "https://github.com/GaneshShah/tictactoe",
      demo: "https://tictactoe.ganeshsahu.com.np/",
      status: "completed",
      year: "2024",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      id: "crackzone",
      title: "CrackZone - Gaming Tournament Platform",
      description: "A comprehensive gaming tournament platform for Free Fire tournaments. Features match creation, wallet management, digital store, team communication, and leaderboard.",
      tags: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      github: "https://github.com/GaneshShah/crackzone",
      status: "completed",
      year: "2024",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: "task-management",
      title: "Task Management System",
      description: "A comprehensive task management system built with PHP and MySQL. Features task categorization, status tracking, deadline management, and responsive dashboard.",
      tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/GaneshShah/task-management",
      status: "completed",
      year: "2023",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "nepali-career-guide",
      title: "Nepali Student AI Career Guide",
      description: "An intelligent AI-powered career suggestion system for Nepali students. Uses Mistral model to provide faculty suggestions, career paths, and college recommendations.",
      tags: ["PHP", "MySQL", "OpenRouter API", "Mistral AI"],
      github: "https://github.com/GaneshShah/career-guide",
      status: "completed",
      year: "2024",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: "career-guru",
      title: "Nepali Student AI Career Guru",
      description: "A sophisticated career guidance web application using Google's Gemini API. Provides personalized career advice, faculty recommendations, and career roadmaps.",
      tags: ["PHP", "MySQL", "Google Gemini API", "Bootstrap"],
      github: "https://github.com/GaneshShah/career-guru",
      status: "completed",
      year: "2024",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: "eclectica-tmsl",
      title: "Eclectica TMSL Official Website",
      description: "Complete official website for Eclectica TMSL with blog system, modern design, and 3D interactive elements. Led the entire tech team for the project.",
      tags: ["React", "Next.js", "TypeScript", "Three.js", "Framer Motion"],
      demo: "https://eclectica-tmsl.com",
      github: "https://github.com/eclectica-tmsl/website",
      status: "completed",
      year: "2023-2024",
      gradient: "from-cyan-500 to-blue-500",
      team: "Eclectica TMSL Tech Team"
    },
    {
      id: "wiperspace-games",
      title: "Wiperspace Game Development",
      description: "Collaborated with Wiperspace team to develop multiple games using Unreal Engine 5. Won Game Jam at Daydream Biratnagar.",
      tags: ["Unreal Engine 5", "C++", "Blueprints", "3D Modeling"],
      demo: "https://wiperspace.com",
      status: "completed",
      year: "2023-2024",
      gradient: "from-red-500 to-orange-500",
      team: "Wiperspace",
      award: "Game Jam Winner"
    },
    {
      id: "dialedweb",
      title: "DialedWeb Frontend Projects",
      description: "Working as Frontend Developer at DialedWeb, creating modern and responsive web applications with focus on user experience and performance optimization.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      demo: "https://dialedweb.com",
      status: "in-progress",
      year: "2024-Present",
      gradient: "from-violet-500 to-purple-500",
      team: "DialedWeb"
    },
    {
      id: "groweasy",
      title: "GrowEasy Platform Development",
      description: "Working as Full-Stack Intern at GrowEasy. Improved UI/UX, SEO optimization, and added numerous features to enhance platform functionality.",
      tags: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
      status: "in-progress",
      year: "2024-Present",
      gradient: "from-teal-500 to-green-500",
      team: "GrowEasy"
    },
    {
      id: "android-apps",
      title: "Android Mobile Applications",
      description: "Developed multiple Android applications using Java, focusing on clean architecture and user-friendly interfaces for productivity and entertainment.",
      tags: ["Java", "Android SDK", "XML", "SQLite", "Firebase"],
      github: "https://github.com/GaneshShah/android-apps",
      status: "completed",
      year: "2023-2024",
      gradient: "from-lime-500 to-green-500"
    },
    {
      id: "php-apis",
      title: "PHP Backend APIs & Web Services",
      description: "Developed robust backend APIs and web services using PHP and Laravel. Focused on scalability, security, and efficient data management.",
      tags: ["PHP", "Laravel", "MySQL", "REST APIs", "Authentication"],
      github: "https://github.com/GaneshShah/php-apis",
      status: "completed",
      year: "2023-2024",
      gradient: "from-sky-500 to-blue-500"
    },
    {
      id: "automation-bots",
      title: "Automation Tools & Chatbots",
      description: "Built automation tools and chatbots to streamline workflows. Created intelligent bots for customer queries and task automation.",
      tags: ["Python", "Node.js", "Discord.js", "Telegram Bot API", "AI/ML"],
      github: "https://github.com/GaneshShah/automation-bots",
      status: "completed",
      year: "2023-2024",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-8">
            A showcase of my development journey across web, mobile, and game development
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-pink-200 dark:border-pink-900/30">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stats.total}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-900/30">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stats.completed}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-900/30">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stats.inProgress}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">In Progress</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-900/30">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stats.technologies}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header with gradient */}
              <div className={`relative h-32 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between`}>
                <div className="flex items-start justify-between">
                  <div>
                    {project.status === "completed" && (
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        Completed
                      </span>
                    )}
                    {project.status === "in-progress" && (
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
                  {project.award && (
                    <Award size={20} className="text-white" />
                  )}
                </div>
                <div className="text-white text-sm font-medium">{project.year}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Team */}
                {project.team && (
                  <div className="flex items-center gap-2 mb-4 text-xs text-gray-500 dark:text-gray-500">
                    <Users size={14} />
                    <span>Team: {project.team}</span>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
