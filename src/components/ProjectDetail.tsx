import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projects = {
    "tictactoe": {
      title: "Tic Tac Toe Game",
      tagline: "Classic Game with Modern Design",
      description: "A classic Tic Tac Toe game built with modern web technologies. This project showcases clean code architecture, smooth animations, and an intuitive user interface that makes the timeless game enjoyable for all ages.",
      longDescription: `This Tic Tac Toe game was created to demonstrate proficiency in React state management and game logic implementation. The project focuses on creating a smooth, responsive user experience with attention to detail in animations and visual feedback.

The game features a clean, modern design with smooth transitions and animations that enhance the playing experience. Built with React, it showcases component-based architecture and efficient state management for tracking game progress and determining winners.`,
      features: [
        "Two-player local gameplay",
        "Smooth animations and transitions",
        "Win detection algorithm",
        "Score tracking system",
        "Reset and new game functionality",
        "Responsive design for all devices",
        "Clean and intuitive UI",
        "Visual feedback for moves",
        "Game state management"
      ],
      techStack: [
        { name: "React", description: "UI library for building components" },
        { name: "JavaScript", description: "Core game logic" },
        { name: "CSS", description: "Styling and animations" },
        { name: "HTML5", description: "Semantic markup" }
      ],
      challenges: [
        {
          title: "Win Detection Logic",
          solution: "Implemented efficient algorithm to check all possible winning combinations after each move without performance overhead."
        },
        {
          title: "State Management",
          solution: "Used React hooks effectively to manage game state, player turns, and score tracking in a clean and maintainable way."
        },
        {
          title: "Smooth Animations",
          solution: "Leveraged CSS transitions and React's rendering cycle to create smooth, performant animations for game interactions."
        }
      ],
      github: "https://github.com/GaneshShah/tictactoe",
      demo: "https://tictactoe.ganeshsahu.com.np/",
      date: "2024",
      status: "Active",
      gradient: "from-pink-500 to-purple-500",
      screenshots: [
        { url: "/projects/tictactoe/screenshot-1.jpg", caption: "Gameplay View" },
        { url: "/projects/tictactoe/screenshot-2.jpg", caption: "Win Detection" },
        { url: "/projects/tictactoe/screenshot-3.jpg", caption: "Mobile Responsive" }
      ]
    },
    "web-nepal": {
      title: "Web Nepal",
      tagline: "Learn Web Development Through Practice",
      description: "Web Nepal is an innovative learning platform designed to teach web development through hands-on coding exercises. The platform provides an interactive environment where students can practice HTML, CSS, and JavaScript with real-time feedback.",
      longDescription: `Web Nepal was created to address the gap in practical, hands-on web development education. The platform combines traditional learning with modern AI assistance, providing students with instant feedback and personalized guidance.

The application uses the Gemini API to provide intelligent code suggestions and explanations, making it easier for beginners to understand complex concepts. With a focus on practical learning, students build real projects while receiving guidance every step of the way.`,
      features: [
        "Interactive code editor with syntax highlighting",
        "Real-time preview of HTML, CSS, and JavaScript",
        "AI-powered code assistance using Gemini API",
        "Structured learning paths for beginners",
        "Project-based learning approach",
        "Progress tracking and achievements",
        "User authentication with NextAuth",
        "Save and share your projects",
        "Community features for collaboration"
      ],
      techStack: [
        { name: "Next.js 14", description: "Full-stack React framework" },
        { name: "Gemini API", description: "AI-powered assistance" },
        { name: "NextAuth", description: "Authentication solution" },
        { name: "Prisma", description: "Database ORM" },
        { name: "PostgreSQL", description: "Relational database" },
        { name: "Tailwind CSS", description: "Styling framework" }
      ],
      challenges: [
        {
          title: "Real-time Code Execution",
          solution: "Implemented sandboxed iframe execution with proper security measures to safely run user code."
        },
        {
          title: "AI Integration",
          solution: "Optimized Gemini API calls with caching and rate limiting to provide fast responses while managing costs."
        },
        {
          title: "User Progress Tracking",
          solution: "Designed efficient database schema with Prisma to track user progress across multiple learning paths."
        }
      ],
      github: "https://github.com/GaneshShah/web-nepal",
      demo: "https://web-nepal.vercel.app",
      date: "2024",
      status: "Active",
      gradient: "from-blue-500 to-cyan-500",
      screenshots: [
        { url: "/projects/web-nepal/screenshot-1.jpg", caption: "Dashboard Overview" },
        { url: "/projects/web-nepal/screenshot-2.jpg", caption: "Code Editor" },
        { url: "/projects/web-nepal/screenshot-3.jpg", caption: "Learning Path" }
      ]
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-pink-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r ${project.gradient} text-transparent bg-clip-text`}>
              {project.title}
            </h1>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full">
              {project.status}
            </span>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            {project.tagline}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={16} />
              <span>{project.techStack.length} Technologies</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              <ExternalLink size={18} />
              <span>View Live Demo</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            >
              <Github size={18} />
              <span>View Source</span>
            </a>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            {project.description}
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                  ✓
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.techStack.map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                    <img
                      src={screenshot.url}
                      alt={screenshot.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EScreenshot ${index + 1}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium text-center">
                      {screenshot.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-900/30">
              <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
                💡 <strong>Note:</strong> Add your project screenshots to <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded">public/projects/{projectId}/</code> folder to display them here.
              </p>
            </div>
          </section>
        )}

        {/* Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Challenges & Solutions</h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  <span className="font-semibold">Solution:</span> {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
