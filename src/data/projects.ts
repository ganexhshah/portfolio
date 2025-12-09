export const projectsData = {
    "chatmandu": {
        id: "chatmandu",
        title: "ChatMandu",
        tagline: "Real-time Communication Platform",
        description: "A real-time communication platform built using PHP 8.1+ and Slim Framework. Features messaging, voice/video calling, and comprehensive admin tools powered by MySQL, WebRTC, and Agora SDK.",
        longDescription: `ChatMandu is a robust communication platform designed to facilitate seamless interaction through text, audio, and video channels. Built with performance and scalability in mind, it leverages modern web technologies to deliver a smooth user experience.

The platform includes a powerful admin dashboard for user management, real-time analytics, and system monitoring. The integration of WebRTC and Agora SDK ensures high-quality voice and video calls with low latency.`,
        tags: ["PHP", "Slim Framework", "MySQL", "WebRTC", "Agora SDK"],
        features: [
            "Real-time messaging with WebSocket integration",
            "High-quality voice and video calling via Agora SDK",
            "Comprehensive admin dashboard",
            "User authentication and role management",
            "File sharing capabilities",
            "Responsive design for mobile and desktop"
        ],
        techStack: [
            { name: "PHP 8.1+", description: "Backend logic" },
            { name: "Slim Framework", description: "REST API structure" },
            { name: "MySQL", description: "Database management" },
            { name: "WebRTC", description: "Real-time communication" },
            { name: "Agora SDK", description: "Voice/Video calling infrastructure" }
        ],
        challenges: [
            {
                title: "Real-time Latency",
                solution: "Optimized WebSocket connections and implemented Agora SDK for reliable low-latency media streaming."
            },
            {
                title: "Scalability",
                description: "Designed a modular architecture with PHP/Slim to handle increasing concurrent user connections efficiently."
            }
        ],
        demo: "https://chatmandu.com",
        status: "completed",
        year: "2024",
        date: "2024",
        gradient: "from-purple-500 to-pink-500",
        category: "web",
        screenshots: []
    },
    "tictactoe": {
        id: "tictactoe",
        title: "Tic Tac Toe Multiplayer",
        tagline: "Classic Game with Modern Design",
        description: "A fully-featured real-time multiplayer Tic Tac Toe game built with React, TypeScript, and Socket.io. Features live chat, confetti effects, and responsive design.",
        longDescription: `This Tic Tac Toe game was created to demonstrate proficiency in React state management and game logic implementation. The project focuses on creating a smooth, responsive user experience with attention to detail in animations and visual feedback.

The game features a clean, modern design with smooth transitions and animations that enhance the playing experience. Built with React, it showcases component-based architecture and efficient state management for tracking game progress and determining winners.`,
        tags: ["React", "TypeScript", "Socket.io", "Tailwind CSS"],
        features: [
            "Two-player local gameplay",
            "Real-time multiplayer with Socket.io",
            "In-game chat functionality",
            "Win detection algorithm",
            "Score tracking system",
            "Confetti effects on win"
        ],
        techStack: [
            { name: "React", description: "UI library" },
            { name: "TypeScript", description: "Type safety" },
            { name: "Socket.io", description: "Real-time events" },
            { name: "Tailwind CSS", description: "Styling" }
        ],
        challenges: [
            {
                title: "State Synchronization",
                solution: "Implemented robust socket event handling to ensure both players see the exact same game state in real-time."
            }
        ],
        github: "https://github.com/GaneshShah/tictactoe",
        demo: "https://tictactoe.ganeshsahu.com.np/",
        status: "completed",
        year: "2024",
        date: "2024",
        gradient: "from-pink-500 to-purple-500",
        category: "game",
        screenshots: [
            { url: "/projects/tictactoe/screenshot-1.jpg", caption: "Gameplay View" },
            { url: "/projects/tictactoe/screenshot-2.jpg", caption: "Win Detection" },
            { url: "/projects/tictactoe/screenshot-3.jpg", caption: "Mobile Responsive" }
        ]
    },
    "crackzone": {
        id: "crackzone",
        title: "CrackZone Tournament",
        tagline: "Esports Tournament Platform",
        description: "A comprehensive gaming tournament platform for Free Fire tournaments. Features match creation, wallet management, digital store, team communication, and leaderboard.",
        longDescription: "CrackZone is a specialized platform for organizing and managing esports tournaments, specifically tailored for Free Fire. It handles the entire tournament lifecycle from registration to prize distribution.",
        tags: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
        features: [
            "Automated tournament bracket generation",
            "Wallet system for entry fees and prizes",
            "Digital store for in-game items",
            "Team management and communication tools",
            "Live leaderboards"
        ],
        techStack: [
            { name: "Next.js", description: "Full-stack framework" },
            { name: "MongoDB", description: "Data storage" },
            { name: "Socket.io", description: "Live updates" }
        ],
        challenges: [
            { title: "Wallet Security", solution: "Implemented secure transaction logging and verification for all wallet operations." }
        ],
        github: "https://github.com/GaneshShah/crackzone",
        status: "completed",
        year: "2024",
        date: "2024",
        gradient: "from-orange-500 to-red-500",
        category: "web",
        screenshots: []
    },
    "task-management": {
        id: "task-management",
        title: "Task Management System",
        tagline: "Efficient Project Tracking",
        description: "A comprehensive task management system built with PHP and MySQL. Features task categorization, status tracking, deadline management, and responsive dashboard.",
        longDescription: "A streamlined tool for teams to track their projects and tasks. It provides a clear overview of progress and helps prioritize work effectively.",
        tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        features: ["Task categorization", "Status tracking", "Deadline alerts", "Team dashboard"],
        techStack: [
            { name: "PHP", description: "Backend" },
            { name: "MySQL", description: "Database" },
            { name: "Bootstrap", description: "Responsive UI" }
        ],
        challenges: [],
        github: "https://github.com/GaneshShah/task-management",
        status: "completed",
        year: "2023",
        date: "2023",
        gradient: "from-blue-500 to-cyan-500",
        category: "web",
        screenshots: []
    },
    "nepali-career-guide": {
        id: "nepali-career-guide",
        title: "Nepali Student AI Guide",
        tagline: "AI-Powered Career Counseling",
        description: "An intelligent AI-powered career suggestion system for Nepali students. Uses Mistral model to provide faculty suggestions, career paths, and college recommendations.",
        longDescription: "Leveraging the power of Mistral AI, this tool helps students navigate the complex landscape of education and career choices in Nepal, offering personalized advice based on their interests and academic performance.",
        tags: ["PHP", "MySQL", "OpenRouter API", "Mistral AI"],
        features: ["AI Career Assessment", "College Recommendation Engine", "Career Path Visualization"],
        techStack: [
            { name: "PHP", description: "Backend" },
            { name: "OpenRouter API", description: "AI Interface" },
            { name: "Mistral AI", description: "LLM Model" }
        ],
        challenges: [{ title: "Prompt Engineering", solution: "Fine-tuned system prompts to ensure AI advice is culturally relevant to the Nepali education context." }],
        github: "https://github.com/GaneshShah/career-guide",
        status: "completed",
        year: "2024",
        date: "2024",
        gradient: "from-green-500 to-emerald-500",
        category: "ai",
        screenshots: []
    },
    "career-guru": {
        id: "career-guru",
        title: "Career Guru AI",
        tagline: "Your Personal Career Mentor",
        description: "A sophisticated career guidance web application using Google's Gemini API. Provides personalized career advice, faculty recommendations, and career roadmaps.",
        longDescription: "Career Guru AI acts as a 24/7 career counselor, helping users identify their strengths and map out a successful career trajectory using advanced AI analysis.",
        tags: ["PHP", "MySQL", "Google Gemini API", "Bootstrap"],
        features: ["Personalized Roadmap Generation", "Faculty Recommendations", "Skill Gap Analysis"],
        techStack: [
            { name: "Google Gemini API", description: "AI Intelligence" },
            { name: "PHP", description: "Backend" }
        ],
        challenges: [],
        github: "https://github.com/GaneshShah/career-guru",
        status: "completed",
        year: "2024",
        date: "2024",
        gradient: "from-indigo-500 to-purple-500",
        category: "ai",
        screenshots: []
    },
    "eclectica-tmsl": {
        id: "eclectica-tmsl",
        title: "Eclectica TMSL Website",
        tagline: "Official Event Website",
        description: "Complete official website for Eclectica TMSL with blog system, modern design, and 3D interactive elements. Led the entire tech team for the project.",
        longDescription: "The digital face of Eclectica TMSL, featuring a dynamic 3D experience, event scheduling, and a content management system for updates. Built to withstand high traffic during the event.",
        tags: ["React", "Next.js", "TypeScript", "Three.js", "Framer Motion"],
        features: ["3D Hero Section", "Dynamic Blog System", "Event Schedule", "Interactive Animations"],
        techStack: [
            { name: "Next.js", description: "Framework" },
            { name: "Three.js", description: "3D Graphics" },
            { name: "Framer Motion", description: "Animations" }
        ],
        challenges: [{ title: "Performance", solution: "Optimized 3D assets and used lazy loading to ensure fast load times despite heavy visual effects." }],
        github: "https://github.com/eclectica-tmsl/website",
        demo: "https://eclectica-tmsl.com",
        status: "completed",
        year: "2023-2024",
        date: "2023-2024",
        gradient: "from-cyan-500 to-blue-500",
        category: "web",
        screenshots: []
    },
    "wiperspace-games": {
        id: "wiperspace-games",
        title: "Wiperspace Games",
        tagline: "Indie Game Development",
        description: "Collaborated with Wiperspace team to develop multiple games using Unreal Engine 5. Won Game Jam at Daydream Biratnagar.",
        longDescription: "A collection of game projects developed under the Wiperspace banner. Includes award-winning titles featuring immersive mechanics and stunning visuals powered by UE5.",
        tags: ["Unreal Engine 5", "C++", "Blueprints", "3D Modeling"],
        features: ["Advanced Physics", "High-Fidelity Graphics", "Custom Game Mechanics"],
        techStack: [
            { name: "Unreal Engine 5", description: "Game Engine" },
            { name: "C++", description: "Game Logic" },
            { name: "Blueprints", description: "Scripting" }
        ],
        challenges: [],
        demo: "https://wiperspace.com",
        status: "completed",
        year: "2023-2024",
        date: "2023-2024",
        gradient: "from-red-500 to-orange-500",
        award: "Game Jam Winner",
        category: "game",
        screenshots: []
    },
    "dialedweb": {
        id: "dialedweb",
        title: "DialedWeb Projects",
        tagline: "Professional Frontend Development",
        description: "Working as Frontend Developer at DialedWeb, creating modern and responsive web applications with focus on user experience and performance optimization.",
        longDescription: "Contributing to various client projects at DialedWeb, ensuring high-quality frontend deliverables that meet modern web standards and client expectations.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        features: ["Responsive Layouts", "Performance Optimization", "Component Libraries"],
        techStack: [
            { name: "Next.js", description: "Framework" },
            { name: "Tailwind CSS", description: "Styling" }
        ],
        challenges: [],
        demo: "https://dialedweb.com",
        status: "in-progress",
        year: "2024-Present",
        date: "2024-Present",
        gradient: "from-violet-500 to-purple-500",
        category: "web",
        screenshots: []
    },
    "groweasy": {
        id: "groweasy",
        title: "GrowEasy Platform",
        tagline: "SaaS Platform Development",
        description: "Working as Full-Stack Intern at GrowEasy. Improved UI/UX, SEO optimization, and added numerous features to enhance platform functionality.",
        longDescription: "Enhancing the GrowEasy platform through full-stack contributions, focusing on user retention features, search engine visibility, and backend efficiency.",
        tags: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
        features: ["SEO Optimization", "User Dashboard Improvements", "Backend API Enhancements"],
        techStack: [
            { name: "React", description: "Frontend" },
            { name: "Node.js", description: "Backend" },
            { name: "MongoDB", description: "Database" }
        ],
        challenges: [],
        status: "in-progress",
        year: "2024-Present",
        date: "2024-Present",
        gradient: "from-teal-500 to-green-500",
        category: "web",
        screenshots: []
    },
    "android-apps": {
        id: "android-apps",
        title: "Android Applications",
        tagline: "Native Mobile Development",
        description: "Developed multiple Android applications using Java, focusing on clean architecture and user-friendly interfaces for productivity and entertainment.",
        longDescription: "A portfolio of native Android applications built with Java and XML. Focuses on material design principles and efficient resource management on mobile devices.",
        tags: ["Java", "Android SDK", "XML", "SQLite", "Firebase"],
        features: ["Native UI/UX", "Offline Data Storage", "Firebase Integration"],
        techStack: [
            { name: "Java", description: "Language" },
            { name: "Android SDK", description: "Framework" },
            { name: "Firebase", description: "Backend Services" }
        ],
        challenges: [],
        github: "https://github.com/GaneshShah/android-apps",
        status: "completed",
        year: "2023-2024",
        date: "2023-2024",
        gradient: "from-lime-500 to-green-500",
        category: "mobile",
        screenshots: []
    },
    "php-apis": {
        id: "php-apis",
        title: "PHP Backend APIs",
        tagline: "Restful Services",
        description: "Developed robust backend APIs and web services using PHP and Laravel. Focused on scalability, security, and efficient data management.",
        longDescription: "A collection of secure and scalable APIs designed to power modern web applications. Implements best practices for RESTful design and data security.",
        tags: ["PHP", "Laravel", "MySQL", "REST APIs", "Authentication"],
        features: ["JWT Authentication", "Rate Limiting", "Data Validation"],
        techStack: [
            { name: "Laravel", description: "Framework" },
            { name: "MySQL", description: "Database" }
        ],
        challenges: [],
        github: "https://github.com/GaneshShah/php-apis",
        status: "completed",
        year: "2023-2024",
        date: "2023-2024",
        gradient: "from-sky-500 to-blue-500",
        category: "backend",
        screenshots: []
    },
    "automation-bots": {
        id: "automation-bots",
        title: "Automation Tools",
        tagline: "Workflow Automation",
        description: "Built automation tools and chatbots to streamline workflows. Created intelligent bots for customer queries and task automation.",
        longDescription: "A suite of automated tools and bots designed to reduce manual workload. Operates on platforms like Discord and Telegram to provide instant utility and responses.",
        tags: ["Python", "Node.js", "Discord.js", "Telegram Bot API", "AI/ML"],
        features: ["Auto-response systems", "Task Scheduling", "API Integrations"],
        techStack: [
            { name: "Python", description: "Scripting" },
            { name: "Discord.js", description: "Bot Framework" }
        ],
        challenges: [],
        github: "https://github.com/GaneshShah/automation-bots",
        status: "completed",
        year: "2023-2024",
        date: "2023-2024",
        gradient: "from-amber-500 to-orange-500",
        category: "automation",
        screenshots: []
    }
};
