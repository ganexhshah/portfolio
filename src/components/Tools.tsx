import { Laptop, Monitor, Keyboard, Smartphone, Tablet, Headphones, Battery, Code2, Globe, FileCode, Server, Database, Terminal, GitBranch, Package, Check, Music, Image, Video, PenTool, Cloud, MessageCircle, ArrowRight, MousePointer2, Cpu, Wifi, Github, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Tools = () => {

    const hardware = [
        {
            name: "Dell Inspiron 15",
            type: "Laptop",
            desc: "My primary development machine for coding, design, and daily work",
            specs: ["15.6\" Display", "Intel/AMD Processor", "8GB+ RAM", "SSD Storage"],
            icon: Laptop,
            color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20"
        },
        {
            name: "Hitech 24 Inch Monitor",
            type: "Monitor",
            desc: "External monitor for enhanced productivity and dual-screen setup",
            specs: ["24\" Display", "Full HD", "Multiple Ports", "Adjustable Stand"],
            icon: Monitor,
            color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20"
        },
        {
            name: "Fantech Keyboard",
            type: "Keyboard",
            desc: "Mechanical keyboard for comfortable and efficient typing",
            specs: ["Mechanical Switches", "RGB Backlight", "Gaming Grade", "Ergonomic Design"],
            icon: Keyboard,
            color: "text-pink-500 bg-pink-50 dark:bg-pink-900/20"
        },
        {
            name: "Redmi Note 9 Pro Max",
            type: "Phone",
            desc: "Android smartphone for communication and mobile development",
            specs: ["6.67\" Display", "64MP Camera", "5020mAh Battery", "Android 10+"],
            icon: Smartphone,
            color: "text-green-500 bg-green-50 dark:bg-green-900/20"
        },
        {
            name: "iPhone 15 Pro",
            type: "Phone",
            desc: "iOS device for testing and personal use",
            specs: ["6.1\" Super Retina XDR", "A17 Pro", "Pro Camera System", "iOS 17+"],
            icon: Smartphone,
            color: "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
        },
        {
            name: "Xiaomi 20kmAh Power Bank",
            type: "Accessory",
            desc: "High-capacity power bank for extended device usage",
            specs: ["20000mAh Capacity", "Fast Charging", "Multiple Ports", "LED Display"],
            icon: Battery,
            color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20"
        },
        {
            name: "iPad Pro",
            type: "Tablet",
            desc: "Professional tablet for design, note-taking, and creative work",
            specs: ["Liquid Retina Display", "M1/M2 Chip", "Apple Pencil Support", "iPadOS"],
            icon: Tablet,
            color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
        },
        {
            name: "AirPods 2nd Gen",
            type: "Audio",
            desc: "Wireless earbuds for calls, music, and focus sessions",
            specs: ["Wireless Charging", "H1 Chip", "Siri Integration", "5+ Hours Battery"],
            icon: Headphones,
            color: "text-gray-600 bg-gray-50 dark:bg-gray-800"
        }
    ];

    const codingTools = [
        { name: "Google Chrome", type: "Web Browser", icon: Globe, status: "Active" },
        { name: "Brave Browser", type: "Privacy Browser", icon: Globe, status: "Active" },
        { name: "Visual Studio Code", type: "Code Editor", icon: Code2, status: "Active" },
        { name: "Cursor", type: "AI Code Editor", icon: MousePointer2, status: "Active" },
        { name: "React.js", type: "Frontend Framework", icon: FileCode, status: "Active" },
        { name: "Next.js", type: "Full-Stack Framework", icon: Server, status: "Active" },
        { name: "TailwindCSS", type: "CSS Framework", icon: PenTool, status: "Active" },
        { name: "Vercel", type: "Hosting Platform", icon: Cloud, status: "Active" },
        { name: "Netlify", type: "Hosting Platform", icon: Cloud, status: "Active" },
        { name: "Prettier", type: "Code Formatter", icon: Code2, status: "Active" },
        { name: "Git", type: "Version Control", icon: GitBranch, status: "Active" },
        { name: "GitHub Desktop", type: "Git GUI", icon: Github, status: "Active" },
        { name: "Yarn", type: "Package Manager", icon: Package, status: "Active" },
        { name: "npm", type: "Package Manager", icon: Package, status: "Active" },
        { name: "Bun", type: "Runtime & Package Manager", icon: Package, status: "Active" },
        { name: "Notion", type: "Productivity Tool", icon: Check, status: "Active" },
        { name: "Postman", type: "API Tool", icon: Terminal, status: "Active" },
        { name: "GitHub Copilot", type: "AI Code Assistant", icon: Bot, status: "Active" },
        { name: "Claude AI", type: "AI Assistant", icon: Bot, status: "Active" },
        { name: "OpenAI ChatGPT", type: "AI Assistant", icon: Bot, status: "Active" },
        { name: "v0", type: "AI UI Generator", icon: Bot, status: "Active" },
        { name: "Google AI Studio", type: "AI Development Platform", icon: Bot, status: "Active" },
        { name: "Windows 11", type: "OS", icon: Monitor, status: "Active" }
    ];

    const softwareAndApps = [
        { name: "Spotify", type: "Music Streaming", icon: Music, color: "text-green-500" },
        { name: "Photoshop", type: "Image Editor", icon: Image, color: "text-blue-500" },
        { name: "After Effects", type: "Motion Graphics", icon: Video, color: "text-purple-500" },
        { name: "Canva", type: "Design Tool", icon: PenTool, color: "text-cyan-500" },
        { name: "Google Drive", type: "Cloud Storage", icon: Cloud, color: "text-yellow-500" },
        { name: "Telegram", type: "Messaging App", icon: MessageCircle, color: "text-blue-400" },
    ];



    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section from About.tsx Style */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-start mb-16">
                    {/* Text Content - Left Side */}
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-5xl font-black font-serif italic text-gray-900 dark:text-white leading-tight mb-6">
                            My <span className="text-pink-600 dark:text-pink-400">Tools</span> & <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded-lg inline-block not-italic">Setup</span>
                        </h1>

                        <p className="text-gray-700 dark:text-gray-300 space-y-4 text-lg leading-relaxed font-body">
                            Physical devices and equipment I use. From my primary laptop to my favorite code editor, here's a glimpse into my <span className="font-bold text-blue-600 dark:text-blue-400">digital workspace</span>.
                        </p>
                    </div>

                    {/* Right Side - Decorative */}
                    <div className="flex flex-col items-center md:items-end">
                        <div className="relative group w-full">
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-3xl border border-blue-100 dark:border-blue-800/50 shadow-sm transform rotate-2 hover:rotate-0 transition-transform duration-300">
                                <Monitor className="text-blue-500 mb-4" size={48} />
                                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900 dark:text-white">
                                    Work Station
                                </h3>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                        <Check size={14} className="text-green-500" /> Dell Inspiron 15
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                        <Check size={14} className="text-green-500" /> Dual Monitor Setup
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                        <Check size={14} className="text-green-500" /> Mechanical Keyboard
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hardware Section */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 flex items-center gap-3">
                        Hardware <span className="text-gray-400 text-lg font-normal font-body">Physical devices & equipment</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {hardware.map((item, index) => (
                            <div key={index} className="group bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className={`p-4 rounded-2xl ${item.color} flex-shrink-0`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {item.name}
                                                </h3>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                                                    {item.type}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                                            {item.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.specs.map((spec, i) => (
                                                <span key={i} className="px-2 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-md text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400">
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coding Tools Section */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 flex items-center gap-3">
                        Coding Tools <span className="text-gray-400 text-lg font-normal font-body">Frameworks, & Assistants</span>
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {codingTools.map((tool, index) => (
                            <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-pink-200 dark:hover:border-pink-900/50 hover:shadow-md transition-all group">
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl group-hover:scale-110 transition-transform text-gray-700 dark:text-gray-300">
                                        <tool.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{tool.name}</h4>
                                        <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide">{tool.type}</p>
                                    </div>
                                    <Badge variant="outline" className="text-[10px] px-2 py-0 h-5 border-green-200 text-green-700 bg-green-50 dark:border-green-900/30 dark:bg-green-900/10 dark:text-green-400">
                                        {tool.status}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Software / Apps Section */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 flex items-center gap-3">
                        Software & Apps <span className="text-gray-400 text-lg font-normal font-body">Productivity & Design</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {softwareAndApps.map((app, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all">
                                <div className={`p-3 rounded-xl bg-gray-50 dark:bg-gray-800 ${app.color}`}>
                                    <app.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">{app.name}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{app.type}</p>
                                </div>
                                <div className="ml-auto">
                                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">Active</Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Back to Home Button */}
                <div className="flex justify-center mt-12">
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

export default Tools;
