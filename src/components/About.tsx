import { useState } from "react";
import profileImg from "@/assets/profile.jpg";
import schoolImg from "@/assets/school.png";
import { Gamepad2, Code, Smartphone, Palette, Bot, Database, PenTool, Monitor, FileCode, Server, Leaf, FileJson, Coffee, Globe, ChevronDown, ChevronUp, Facebook, Linkedin, Ghost, MessageCircle, Briefcase, Music, Phone, Github } from "lucide-react";

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isStoryExpanded, setIsStoryExpanded] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-start mb-16">
                    {/* Bio & Text Content - Left Side */}
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-5xl font-black font-serif italic text-gray-900 dark:text-white leading-tight mb-6">
                            Hi, I’m <span className="text-pink-600 dark:text-pink-400">Ganesh Shah</span> from <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded-lg inline-block not-italic">Itahari</span> — shaping the <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-lg inline-block not-italic">digital world</span>, shattering its limits, and forging it anew, one line of <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-2 py-1 rounded-lg inline-block not-italic">code</span> at a time.
                        </h1>

                        <div className="flex flex-nowrap overflow-x-auto md:overflow-visible gap-4 mb-8 pb-2 no-scrollbar">
                            {[
                                { icon: Facebook, color: "text-blue-600 bg-blue-50 dark:bg-blue-900/20", label: "Facebook" },
                                { icon: Music, color: "text-black dark:text-white bg-gray-100 dark:bg-gray-800", label: "TikTok" }, // Proxy for TikTok
                                { icon: Phone, color: "text-purple-600 bg-purple-50 dark:bg-purple-900/20", label: "Viber" }, // Proxy for Viber
                                { icon: MessageCircle, color: "text-green-500 bg-green-50 dark:bg-green-900/20", label: "WhatsApp" }, // Proxy for WhatsApp
                                { icon: Ghost, color: "text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20", label: "Snapchat" },
                                { icon: Linkedin, color: "text-blue-700 bg-blue-50 dark:bg-blue-900/20", label: "LinkedIn" },
                                { icon: Briefcase, color: "text-green-600 bg-green-50 dark:bg-green-900/20", label: "Upwork" }, // Proxy for Upwork
                                { icon: Github, color: "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800", label: "Github" },
                            ].map((social, index) => (
                                <button key={index} className={`p-3 rounded-full ${social.color} hover:scale-110 transition-transform shadow-sm shrink-0`} title={social.label}>
                                    <social.icon size={20} />
                                </button>
                            ))}
                        </div>

                        <div className={`text-gray-700 dark:text-gray-300 space-y-4 text-lg leading-relaxed font-body transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p>
                                Driven by a love for technology, I'm a passionate <span className="text-green-600 dark:text-green-400 font-bold">full stack & game developer</span> from Itahari, Nepal. My journey involves everything from building immersive worlds in Unreal Engine 5 to crafting scalable web apps with React and PHP.
                            </p>
                            <p>
                                I am a proud member of <span className="font-bold text-pink-600 dark:text-pink-400">Wiperspace</span>, where we push creative boundaries in game development. Beyond games, I obsess over UI/UX, ensuring every pixel serves a purpose—making digital experiences not just functional, but memorable.
                            </p>
                        </div>

                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-2 text-pink-600 dark:text-pink-400 font-bold hover:underline focus:outline-none"
                        >
                            {isExpanded ? (
                                <>Read Less <ChevronUp size={20} /></>
                            ) : (
                                <>Read More <ChevronDown size={20} /></>
                            )}
                        </button>
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

                            {/* Decorative Elements behind image */}
                            <div className="absolute -z-10 top-10 -right-4 w-full h-full rounded-[2rem] bg-gray-100 dark:bg-gray-800/50 transform rotate-6 border border-gray-200 dark:border-gray-700"></div>
                        </div>

                        <div className="mt-6 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-6 py-2 rounded-full text-sm font-bold shadow-sm transform transition hover:scale-105 cursor-default">
                            Hover here
                        </div>
                    </div>
                </div>

                {/* Journey Story Time */}
                <div className="mb-24">
                    <h2 className="text-2xl md:text-4xl font-black font-heading text-center mb-12">
                        Journey Story <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-4 py-1 rounded-xl inline-block transform -rotate-3 shadow-sm border border-pink-200 dark:border-pink-800">Time 📖</span>
                    </h2>

                    <div>
                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden mb-10 h-64 md:h-96 w-full relative group">
                            <img
                                src={schoolImg}
                                alt="My School Journey"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <h3 className="text-3xl text-white font-bold font-serif italic">My School Journey</h3>
                            </div>
                        </div>

                        {/* Story Content */}
                        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-body">
                            <p>
                                My story begins at <span className="font-bold text-blue-600 dark:text-blue-400">Standard School</span>, where I studied from <span className="font-semibold">Grade 6 to 10</span>. Those years weren’t perfect, but they were <span className="font-serif italic text-xl text-pink-600 dark:text-pink-400 inline-block rotate-2">real</span>. I wasn’t a topper, I wasn’t the loudest, and I wasn’t the most confident—but I had <span className="bg-yellow-100 dark:bg-yellow-900/30 px-2 rounded-md font-medium text-yellow-800 dark:text-yellow-200 inline-block transform -rotate-1">friends, teachers, and moments</span> that shaped me in ways I didn’t understand back then.
                            </p>

                            <div className="font-serif italic text-xl text-gray-500 dark:text-gray-400 border-l-4 border-pink-500 pl-6 my-8">
                                Then the lockdown happened. Everything suddenly stopped.<br />
                                Life became quiet.<br />
                                And so did I.
                            </div>

                            <p>
                                But in that silence, <span className="font-semibold text-pink-600 dark:text-pink-400">something new started inside me.</span>
                            </p>

                            <div className={`space-y-6 transition-all duration-500 overflow-hidden ${isStoryExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p>
                                    I began making small YouTube videos, just experimenting with whatever I could. In Grade 9, I received my first laptop, and that single moment changed my entire direction. With that laptop, a normal student who used to pass or fail suddenly found a dream.
                                </p>

                                <p>
                                    I taught myself coding—slowly, painfully, but passionately. No fancy courses, no coaching, no one to guide me. Just me, my laptop, and the belief that I could be more than my grades.
                                </p>

                                <p>
                                    Along the way, I tried freelancing—video editing, graphic design, Canva designs—anything I could do to earn a little and learn a lot. And from that hard work, I earned my own bike, phone, gadgets, and most importantly, my confidence.
                                </p>

                                <p>
                                    Now I’m in Grade 12 at <span className="font-bold text-blue-600 dark:text-blue-400">Sushma Godawari</span>, still learning, still improving, still chasing the best version of myself. I may not be the top student academically, but I am someone who never stopped learning outside the classroom.
                                </p>

                                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 my-8">
                                    <p className="mb-4">My journey is not about marks—<br /><span className="font-bold text-gray-900 dark:text-white">it’s about growth.</span></p>
                                    <p>It’s about fighting quietly, improving slowly, and proving to myself that dreams can start anywhere, even from a small room, during lockdown, with a simple laptop.</p>
                                </div>

                                <p className="font-bold text-center text-xl font-heading">
                                    And my story is still being written. ✍️
                                </p>
                            </div>

                            <button
                                onClick={() => setIsStoryExpanded(!isStoryExpanded)}
                                className="flex items-center gap-2 mx-auto mt-4 text-pink-600 dark:text-pink-400 font-bold hover:underline focus:outline-none"
                            >
                                {isStoryExpanded ? (
                                    <>Read Less <ChevronUp size={20} /></>
                                ) : (
                                    <>Read More <ChevronDown size={20} /></>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Skills & Roles - Redesigned */}
                <div className="mb-16">
                    <div className="bg-gradient-to-r from-orange-50 to-rose-50 dark:from-orange-900/10 dark:to-rose-900/10 p-6 rounded-3xl border border-orange-100 dark:border-orange-800/50 shadow-sm text-center overflow-hidden">

                        {/* Icons Row */}
                        <div className="flex flex-nowrap overflow-x-auto md:overflow-visible justify-start md:justify-center items-center gap-4 md:gap-4 mb-6 pb-4 md:pb-0 no-scrollbar px-2">
                            {[
                                { icon: Gamepad2, title: "Game Dev", desc: "Unreal Engine 5", color: "text-purple-500", delay: "delay-0" },
                                { icon: Code, title: "Web Dev", desc: "PHP & APIs", color: "text-blue-500", delay: "delay-100" },
                                { icon: Smartphone, title: "Android", desc: "Java", color: "text-green-500", delay: "delay-200" },
                                { icon: Palette, title: "UI/UX", desc: "Prototyping", color: "text-pink-500", delay: "delay-300" },
                                { icon: Bot, title: "Automation", desc: "Chatbots", color: "text-orange-500", delay: "delay-500" },
                            ].map((item, index, arr) => (
                                <div key={index} className="flex items-center shrink-0">
                                    <div className="flex flex-col items-center gap-2 group min-w-[80px]">
                                        <div className={`w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700 hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className={`w-6 h-6 md:w-8 md:h-8 ${item.color}`} />
                                        </div>
                                        <div className="text-center">
                                            <h4 className="font-bold text-xs md:text-sm text-gray-900 dark:text-white whitespace-nowrap">{item.title}</h4>
                                            <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-code whitespace-nowrap">{item.desc}</p>
                                        </div>
                                    </div>
                                    {/* Connection Line (except for last item) */}
                                    {index !== arr.length - 1 && (
                                        <div className="hidden md:block w-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-2"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <h3 className="text-3xl font-bold mb-3 font-heading text-gray-900 dark:text-white">
                            Core Competencies 🌟
                        </h3>
                        <p className="text-xl font-bold italic font-heading bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                            “Dev. Dream. Dominate.” 🚀
                        </p>
                    </div>
                </div>

                {/* Tech & Design Cards - Stacked Layout */}
                <div className="flex flex-col gap-8 mb-16">
                    {/* Multiple Tech Stack Card */}
                    <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
                        {/* Floating Icons Background - Hidden on mobile for cleaner look */}
                        <div className="hidden md:flex absolute top-0 right-0 p-8 gap-8 opacity-50">
                            <div className="text-green-500 animate-bounce delay-100"><FileCode size={24} /></div> {/* React/Vue placeholder */}
                            <div className="text-blue-500 animate-bounce delay-300"><FileJson size={20} /></div> {/* TS placeholder */}
                            <div className="text-yellow-500 animate-bounce delay-500"><Coffee size={24} /></div> {/* JS placeholder */}
                            <div className="text-cyan-500 animate-bounce delay-700"><Globe size={20} /></div> {/* Tailwind placeholder */}
                            <div className="text-green-400 animate-bounce delay-200"><Leaf size={24} /></div> {/* Node/Mongo placeholder */}
                        </div>

                        <div className="relative z-10">
                            <span className="inline-block bg-lime-400/20 text-lime-700 dark:text-lime-400 px-4 py-1.5 rounded-lg text-sm font-semibold italic mb-4">
                                Multiple Tech Stack
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 font-heading text-gray-900 dark:text-white">
                                I work across modern stacks
                            </h3>
                            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-body max-w-2xl">
                                I have worked with multiple technologies and frameworks to build scalable and efficient applications.
                            </p>
                            {/* Bottom Icons Row */}
                            <div className="flex gap-4 md:gap-6 mt-6 md:mt-8 opacity-60 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                                <div className="text-cyan-400 shrink-0"><Globe size={24} /></div>
                                <div className="text-green-500 shrink-0"><Smartphone size={24} /></div>
                                <div className="text-indigo-400 shrink-0"><FileCode size={24} /></div>
                                <div className="text-red-400 shrink-0"><Server size={24} /></div>
                            </div>
                        </div>
                    </div>

                    {/* Dev & Design Card */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-3xl border border-purple-100 dark:border-purple-800/50 shadow-sm">
                        <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700 animate-bounce delay-100">
                                <Database size={20} className="w-5 h-5 md:w-7 md:h-7 text-gray-600 dark:text-gray-400" />
                            </div>
                            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                            <div className="w-14 h-14 md:w-20 md:h-20 bg-lime-400 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 hover:scale-110">
                                <Monitor size={24} className="w-6 h-6 md:w-9 md:h-9 text-black" />
                            </div>
                            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700 animate-bounce delay-300">
                                <PenTool size={20} className="w-5 h-5 md:w-7 md:h-7 text-gray-600 dark:text-gray-400" />
                            </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold mb-3 font-heading text-gray-900 dark:text-white">
                            Dev & <span className="text-lime-500 italic">Design</span>
                        </h3>
                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-body max-w-2xl">
                            Excels in both development and design to create a seamless and intuitive user experience.
                        </p>
                    </div>
                </div>

                {/* Education Journey */}
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

export default About;
