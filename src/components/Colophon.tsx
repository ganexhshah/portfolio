import { useState } from "react";
import { 
    Code, 
    Palette, 
    Zap, 
    Globe, 
    Smartphone, 
    Monitor, 
    ChevronDown, 
    ChevronUp, 
    Github, 
    ExternalLink,
    Cpu,
    Database,
    FileCode,
    Layers,
    Sparkles,
    Coffee,
    Heart,
    Rocket,
    Shield,
    Gauge
} from "lucide-react";

const Colophon = () => {
    const [isTechExpanded, setIsTechExpanded] = useState(false);
    const [isDesignExpanded, setIsDesignExpanded] = useState(false);

    const techStack = [
        { name: "React 19", description: "Latest React with concurrent features", icon: Code, color: "text-blue-500" },
        { name: "TypeScript", description: "Type-safe JavaScript development", icon: FileCode, color: "text-blue-600" },
        { name: "Vite", description: "Lightning-fast build tool", icon: Zap, color: "text-yellow-500" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: Palette, color: "text-cyan-500" },
        { name: "React Router", description: "Client-side routing", icon: Globe, color: "text-red-500" },
        { name: "Lucide Icons", description: "Beautiful & consistent icons", icon: Sparkles, color: "text-purple-500" },
        { name: "GSAP", description: "High-performance animations", icon: Rocket, color: "text-green-500" },
        { name: "Lenis", description: "Smooth scrolling library", icon: Gauge, color: "text-orange-500" }
    ];

    const designPrinciples = [
        { title: "Mobile-First", description: "Responsive design that works on all devices", icon: Smartphone },
        { title: "Dark Mode", description: "Seamless light/dark theme switching", icon: Monitor },
        { title: "Performance", description: "Optimized for speed and efficiency", icon: Zap },
        { title: "Accessibility", description: "Inclusive design for everyone", icon: Heart },
        { title: "Modern UI", description: "Clean, contemporary interface", icon: Layers },
        { title: "Security", description: "Built with security best practices", icon: Shield }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-black font-serif italic text-gray-900 dark:text-white leading-tight mb-6">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Colophon</span> — 
                        <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded-lg inline-block not-italic ml-2">How This Site</span> 
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-lg inline-block not-italic ml-2">Was Built</span>
                    </h1>
                    
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A deep dive into the technologies, design decisions, and creative process behind this digital experience.
                    </p>
                </div>

                {/* Website Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {[
                        { label: "Built with", value: "React 19", icon: Code },
                        { label: "Lines of Code", value: "~5,000+", icon: FileCode },
                        { label: "Components", value: "15+", icon: Layers },
                        { label: "Load Time", value: "<2s", icon: Zap }
                    ].map((stat, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl text-center border border-gray-100 dark:border-gray-800 hover:scale-105 transition-transform">
                            <stat.icon className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Tech Stack Section */}
                <div className="mb-16">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 p-6 md:p-8 rounded-3xl border border-purple-100 dark:border-purple-800/50 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
                                <Cpu className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-heading">
                                    Technology Stack
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400">Modern tools for a modern web</p>
                            </div>
                        </div>

                        {/* Tech Icons Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {techStack.slice(0, 4).map((tech, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform">
                                    <tech.icon className={`w-8 h-8 ${tech.color} mb-2`} />
                                    <h3 className="font-bold text-sm text-gray-900 dark:text-white">{tech.name}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{tech.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Expanded Tech Details */}
                        <div className={`space-y-4 transition-all duration-500 overflow-hidden ${isTechExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {techStack.slice(4).map((tech, index) => (
                                    <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-3">
                                            <tech.icon className={`w-6 h-6 ${tech.color}`} />
                                            <div>
                                                <h3 className="font-bold text-sm text-gray-900 dark:text-white">{tech.name}</h3>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{tech.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => setIsTechExpanded(!isTechExpanded)}
                            className="flex items-center gap-2 mx-auto mt-4 text-purple-600 dark:text-purple-400 font-bold hover:underline focus:outline-none"
                        >
                            {isTechExpanded ? (
                                <>Show Less <ChevronUp size={20} /></>
                            ) : (
                                <>Show More Technologies <ChevronDown size={20} /></>
                            )}
                        </button>
                    </div>
                </div>

                {/* Design Philosophy */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-4xl font-black font-heading text-center mb-12">
                        Design <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-4 py-1 rounded-xl inline-block transform -rotate-3 shadow-sm border border-pink-200 dark:border-pink-800">Philosophy 🎨</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {designPrinciples.map((principle, index) => (
                            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:scale-105 transition-transform shadow-sm">
                                <principle.icon className="w-8 h-8 text-pink-500 mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{principle.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Development Process */}
                <div className="mb-16">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 p-6 md:p-8 rounded-3xl border border-green-100 dark:border-green-800/50 shadow-sm">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-heading mb-6 text-center">
                            Development Journey ⚡
                        </h2>
                        
                        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                            <p>
                                This website represents countless hours of <span className="font-bold text-green-600 dark:text-green-400">passionate development</span>, 
                                built from the ground up with modern web technologies and a focus on user experience.
                            </p>
                            
                            <div className={`space-y-4 transition-all duration-500 overflow-hidden ${isDesignExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p>
                                    Every component was carefully crafted with <span className="font-semibold text-purple-600 dark:text-purple-400">accessibility</span> in mind, 
                                    ensuring that the site works beautifully for everyone, regardless of their device or abilities.
                                </p>
                                
                                <p>
                                    The design system follows modern principles with consistent spacing, typography, and color schemes that adapt seamlessly between light and dark modes.
                                </p>
                                
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• Fully responsive design that works on all screen sizes</li>
                                        <li>• Smooth animations and micro-interactions</li>
                                        <li>• Optimized images and lazy loading</li>
                                        <li>• SEO-friendly structure and meta tags</li>
                                        <li>• Fast loading times with code splitting</li>
                                    </ul>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsDesignExpanded(!isDesignExpanded)}
                                className="flex items-center gap-2 mx-auto text-green-600 dark:text-green-400 font-bold hover:underline focus:outline-none"
                            >
                                {isDesignExpanded ? (
                                    <>Read Less <ChevronUp size={20} /></>
                                ) : (
                                    <>Read More <ChevronDown size={20} /></>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Credits & Links */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-heading mb-8 text-center">
                        Credits & Resources 🙏
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <Github className="w-5 h-5" />
                                Open Source
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                This website is built with love using open-source technologies and libraries.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>React</span>
                                    <ExternalLink className="w-4 h-4 text-gray-400" />
                                </div>
                                <div className="flex justify-between">
                                    <span>Tailwind CSS</span>
                                    <ExternalLink className="w-4 h-4 text-gray-400" />
                                </div>
                                <div className="flex justify-between">
                                    <span>Lucide Icons</span>
                                    <ExternalLink className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <Coffee className="w-5 h-5" />
                                Inspiration
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                Inspired by modern web design trends and the amazing developer community.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div>• Modern portfolio designs</div>
                                <div>• Minimalist UI principles</div>
                                <div>• Accessibility guidelines</div>
                                <div>• Performance best practices</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Website Info */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 text-center mb-16">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Website Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div>
                            <strong>Version:</strong> 1.0.0
                        </div>
                        <div>
                            <strong>Last Updated:</strong> December 2024
                        </div>
                        <div>
                            <strong>Hosted on:</strong> Vercel
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
                        Built with ❤️ by Ganesh Shah • © 2024 All rights reserved
                    </p>
                </div>

                {/* Back to Home */}
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

export default Colophon;