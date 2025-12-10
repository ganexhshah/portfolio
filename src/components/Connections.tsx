import { useState } from "react";
import profileImg from "@/assets/profile.jpg";
import {
    Users, Globe, Handshake, Heart, Share2,
    Facebook, Linkedin, Ghost, MessageCircle, Briefcase, Music, Phone, Github,
    ChevronDown, ChevronUp, Code, Palette, Laptop
} from "lucide-react";

const Connections = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const connections = [
        {
            name: "Developer Community",
            description: "Fellow developers and tech enthusiasts who inspire and collaborate",
            color: "from-pink-400 to-purple-400",
            icon: Code
        },
        {
            name: "Open Source Contributors",
            description: "Amazing people building the tools and libraries we use every day",
            color: "from-blue-400 to-cyan-400",
            icon: Globe
        },
        {
            name: "Design Enthusiasts",
            description: "Creative minds who push the boundaries of web design",
            color: "from-orange-400 to-red-400",
            icon: Palette
        },
        {
            name: "Tech Mentors",
            description: "Experienced professionals who guide and share their knowledge",
            color: "from-green-400 to-emerald-400",
            icon: Users
        },
        {
            name: "Project Collaborators",
            description: "Team members and partners who work together on exciting projects",
            color: "from-yellow-400 to-orange-400",
            icon: Handshake
        },
        {
            name: "Future Connections",
            description: "New people I'm excited to meet and learn from",
            color: "from-indigo-400 to-purple-400",
            icon: Heart
        },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HERO SECTION (About Page Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-start mb-16">
                    {/* Bio & Text Content - Left Side */}
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-5xl font-black font-serif italic text-gray-900 dark:text-white leading-tight mb-6">
                            Connections <span className="text-pink-600 dark:text-pink-400">🌐</span>
                        </h1>

                        <div className={`text-gray-700 dark:text-gray-300 space-y-4 text-lg leading-relaxed font-body`}>
                            <p>
                                An evolving list of <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-lg inline-block not-italic">people</span> I've met, those I wish to meet, and the <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-2 py-1 rounded-lg inline-block not-italic">communities</span> that help us grow.
                            </p>
                        </div>

                        {/* Social Icons (Kept from About layout as they fit "Connections") */}
                        <div className="flex flex-nowrap overflow-x-auto md:overflow-visible gap-4 pb-2 no-scrollbar">
                            {[
                                { icon: Facebook, color: "text-blue-600 bg-blue-50 dark:bg-blue-900/20", label: "Facebook" },
                                { icon: Music, color: "text-black dark:text-white bg-gray-100 dark:bg-gray-800", label: "TikTok" },
                                { icon: Phone, color: "text-purple-600 bg-purple-50 dark:bg-purple-900/20", label: "Viber" },
                                { icon: MessageCircle, color: "text-green-500 bg-green-50 dark:bg-green-900/20", label: "WhatsApp" },
                                { icon: Ghost, color: "text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20", label: "Snapchat" },
                                { icon: Linkedin, color: "text-blue-700 bg-blue-50 dark:bg-blue-900/20", label: "LinkedIn" },
                                { icon: Briefcase, color: "text-green-600 bg-green-50 dark:bg-green-900/20", label: "Upwork" },
                                { icon: Github, color: "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800", label: "Github" },
                            ].map((social, index) => (
                                <button key={index} className={`p-3 rounded-full ${social.color} hover:scale-110 transition-transform shadow-sm shrink-0`} title={social.label}>
                                    <social.icon size={20} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Profile Image - Right Side */}
                    <div className="flex flex-col items-center md:items-end">
                        <div className="relative group">
                            <div className="w-64 h-80 md:w-72 md:h-96 rounded-[2rem] overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl bg-gray-100 dark:bg-gray-800 relative z-10">
                                <img
                                    src={profileImg}
                                    alt="Ganesh Shah"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute -z-10 top-10 -right-4 w-full h-full rounded-[2rem] bg-gray-100 dark:bg-gray-800/50 transform rotate-6 border border-gray-200 dark:border-gray-700"></div>
                        </div>
                    </div>
                </div>

                {/* NETWORK VISUALIZATION (Replacing "Journey Story" Section) */}
                <div className="mb-24">
                    <h2 className="text-2xl md:text-4xl font-black font-heading text-center mb-12">
                        Network <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-4 py-1 rounded-xl inline-block transform -rotate-3 shadow-sm border border-pink-200 dark:border-pink-800">Visualization 🕸️</span>
                    </h2>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-4 md:p-12 border border-gray-200 dark:border-gray-800 relative overflow-hidden h-[500px] flex items-center justify-center">
                        {/* Connection Graph Logic */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Center profile node */}
                            <div className="absolute z-20 animate-pulse-slow">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-50 animate-ping-slow"></div>
                                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden transform hover:scale-110 transition-transform duration-300">
                                        <img src={profileImg} alt="Center" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* Connection lines (SVG) */}
                            <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                                    // Calculate responsive positions? SVG uses percentages which is good.
                                    // 50% 50% is center. 
                                    const rad = (angle * Math.PI) / 180;
                                    const xDoubled = 50 + 35 * Math.cos(rad); // 35% radius
                                    const yDoubled = 50 + 35 * Math.sin(rad);

                                    return (
                                        <line
                                            key={i}
                                            x1="50%"
                                            y1="50%"
                                            x2={`${xDoubled}%`}
                                            y2={`${yDoubled}%`}
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

                            {/* Surrounding Nodes */}
                            {connections.map((connection, index) => {
                                const angle = (index * 60) - 90;
                                const radius = 35; // % matching line end
                                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

                                return (
                                    <div
                                        key={index}
                                        className="absolute z-10 animate-float hidden sm:block"
                                        style={{
                                            left: `${x}%`,
                                            top: `${y}%`,
                                            transform: 'translate(-50%, -50%)',
                                            animationDelay: `${index * 0.3}s`,
                                        }}
                                    >
                                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center bg-gradient-to-br ${connection.color} hover:scale-125 transition-transform duration-300 cursor-pointer group`}>
                                            <connection.icon className="text-white w-5 h-5 md:w-7 md:h-7 opacity-80 group-hover:opacity-100" />
                                            {/* Tooltip */}
                                            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                                {connection.name}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* CONNECTIONS LIST (Replacing "Skills/Stack" Section) */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold mb-8 font-heading text-gray-900 dark:text-white text-center">
                        Community <span className="text-purple-500 italic">Categories</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {connections.map((connection, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group hover:border-pink-200 dark:hover:border-pink-900/50 transition-colors duration-300"
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${connection.color} flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <connection.icon className="text-white w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900 dark:text-white">
                                    {connection.name}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-body">
                                    {connection.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA SECTION (Replacing "Education/Back" Section) */}
                <div className="bg-gradient-to-r from-orange-50 to-rose-50 dark:from-orange-900/10 dark:to-rose-900/10 p-8 md:p-12 rounded-3xl border border-orange-100 dark:border-orange-800/50 shadow-sm text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading text-gray-900 dark:text-white">
                        Let's Connect! 🤝
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-body mb-8 max-w-2xl mx-auto">
                        I'm always excited to meet new people, collaborate on projects, and share knowledge.
                        Feel free to reach out!
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href="https://github.com/GaneshShah"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <Github size={20} /> GitHub
                        </a>
                        <a
                            href="#linkedin"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <Linkedin size={20} /> LinkedIn
                        </a>
                    </div>
                </div>

                {/* Back to Home Button */}
                <div className="flex justify-center">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Connections;
