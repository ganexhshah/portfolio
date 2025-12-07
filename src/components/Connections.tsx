import profileImg from "@/assets/profile.jpg";

const Connections = () => {
    const connections = [
        {
            name: "Developer Community",
            description: "Fellow developers and tech enthusiasts who inspire and collaborate",
            color: "from-pink-400 to-purple-400",
        },
        {
            name: "Open Source Contributors",
            description: "Amazing people building the tools and libraries we use every day",
            color: "from-blue-400 to-cyan-400",
        },
        {
            name: "Design Enthusiasts",
            description: "Creative minds who push the boundaries of web design",
            color: "from-orange-400 to-red-400",
        },
        {
            name: "Tech Mentors",
            description: "Experienced professionals who guide and share their knowledge",
            color: "from-green-400 to-emerald-400",
        },
        {
            name: "Project Collaborators",
            description: "Team members and partners who work together on exciting projects",
            color: "from-yellow-400 to-orange-400",
        },
        {
            name: "Future Connections",
            description: "New people I'm excited to meet and learn from",
            color: "from-indigo-400 to-purple-400",
        },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                        Connections 🌐
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-body">
                        An evolving list of people I've met and those I wish to meet
                    </p>
                </div>

                {/* Central Hub Visualization */}
                <div className="mb-16">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-12 border border-gray-200 dark:border-gray-800">
                        <div className="relative h-96 flex items-center justify-center">
                            {/* Center profile */}
                            <div className="absolute z-10 animate-pulse-slow">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-50 animate-ping-slow"></div>
                                    <div className="relative w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden transform hover:scale-110 transition-transform duration-300">
                                        <img src={profileImg} alt="Center" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200 font-heading">Ganesh Shah</p>
                                    </div>
                                </div>
                            </div>

                            {/* Connection lines */}
                            <svg className="absolute inset-0 w-full h-full opacity-20">
                                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                                    const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
                                    const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);
                                    return (
                                        <line
                                            key={i}
                                            x1="50%"
                                            y1="50%"
                                            x2={`${x}%`}
                                            y2={`${y}%`}
                                            stroke={`url(#gradient${i})`}
                                            strokeWidth="2"
                                            className="animate-pulse"
                                            style={{ animationDelay: `${i * 0.3}s` }}
                                        />
                                    );
                                })}
                                <defs>
                                    <linearGradient id="gradient0"><stop offset="0%" stopColor="#ec4899" /><stop offset="100%" stopColor="#a855f7" /></linearGradient>
                                    <linearGradient id="gradient1"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient>
                                    <linearGradient id="gradient2"><stop offset="0%" stopColor="#f97316" /><stop offset="100%" stopColor="#ef4444" /></linearGradient>
                                    <linearGradient id="gradient3"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#14b8a6" /></linearGradient>
                                    <linearGradient id="gradient4"><stop offset="0%" stopColor="#f59e0b" /><stop offset="100%" stopColor="#f97316" /></linearGradient>
                                    <linearGradient id="gradient5"><stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#a855f7" /></linearGradient>
                                </defs>
                            </svg>

                            {/* Surrounding connection nodes */}
                            {connections.map((connection, index) => {
                                const angle = (index * 60) - 90; // Start from top
                                const radius = 160; // Distance from center
                                const x = 50 + (radius / 100 * 50) * Math.cos((angle * Math.PI) / 180);
                                const y = 50 + (radius / 100 * 50) * Math.sin((angle * Math.PI) / 180);

                                return (
                                    <div
                                        key={index}
                                        className="absolute animate-float"
                                        style={{
                                            left: `${x}%`,
                                            top: `${y}%`,
                                            transform: 'translate(-50%, -50%)',
                                            animationDelay: `${index * 0.3}s`,
                                        }}
                                    >
                                        <div className={`w-16 h-16 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden bg-gradient-to-br ${connection.color} hover:scale-125 transition-transform duration-300 cursor-pointer`}>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Connection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {connections.map((connection, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${connection.color} mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
                            <h3 className="text-xl font-bold mb-2 font-heading text-gray-800 dark:text-gray-200">
                                {connection.name}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-body">
                                {connection.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mb-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                    <h2 className="text-2xl font-bold mb-4 font-heading text-gray-800 dark:text-gray-200">
                        Let's Connect! 🤝
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 font-body">
                        I'm always excited to meet new people, collaborate on projects, and share knowledge.
                        Feel free to reach out and connect with me!
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href="https://github.com/GaneshShah"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            GitHub
                        </a>
                        <a
                            href="#linkedin"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Back to Home Button */}
                <div className="flex justify-center">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Connections;
