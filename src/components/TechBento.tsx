import { Database, Monitor, Palette, Code, Layers, Smartphone, Github, Figma, Cpu, Globe } from "lucide-react";
import { motion } from "motion/react";

const TechBento = () => {
    return (
        <section className="py-24 px-4 bg-black text-white">
            <div className="max-w-6xl mx-auto container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">

                    {/* Multiple Tech Stack - Large Left Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="md:col-span-2 h-full bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
                    >
                        {/* Floating Icons Background */}
                        <div className="absolute inset-0 opacity-50">
                            <Code className="absolute top-10 left-10 text-blue-500 w-12 h-12 rotate-[-12deg]" />
                            <Layers className="absolute top-20 right-20 text-yellow-500 w-10 h-10 rotate-[12deg]" />
                            <Smartphone className="absolute bottom-32 left-20 text-green-500 w-14 h-14 rotate-[-6deg]" />
                            <Github className="absolute top-1/2 left-1/2 text-white w-16 h-16 -translate-x-1/2 -translate-y-1/2 opacity-20" />
                            <Figma className="absolute bottom-20 right-10 text-purple-500 w-12 h-12 rotate-[12deg]" />
                            <Cpu className="absolute top-10 right-1/2 text-red-500 w-8 h-8" />
                            <Globe className="absolute bottom-10 left-10 text-cyan-500 w-10 h-10" />
                        </div>

                        <div className="absolute bottom-8 left-8 z-10">
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <div className="md:col-span-1 flex flex-col gap-6 h-full">

                        {/* Dev & Design - Top Right */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative flex flex-col justify-center"
                        >
                            <div className="flex items-center justify-center gap-6 mb-8">
                                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                                    <Database className="w-6 h-6 text-gray-400" />
                                </div>
                                <div className="h-px flex-1 bg-white/10"></div>
                                <div className="p-4 bg-[#a3e635]/20 rounded-2xl border border-[#a3e635]/50 shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                                    <Monitor className="w-8 h-8 text-[#a3e635]" />
                                </div>
                                <div className="h-px flex-1 bg-white/10"></div>
                                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                                    <Palette className="w-6 h-6 text-gray-400" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-2">
                                    Dev & <span className="text-[#a3e635] font-serif italic">Design</span>
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Excels in both development and design to create a seamless and intuitive user experience.
                                </p>
                            </div>
                        </motion.div>

                        {/* Open to Collaborations - Bottom Right */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-end"
                        >

                            <div className="absolute inset-0 opacity-40">
                                {/* Placeholder for Macbook Image - using a gradient/abstract representation effectively if no image asset */}
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-white/5"></div>
                                <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=1000" alt="Macbook" className="absolute top-[-50px] right-[-50px] w-[120%] opacity-50 rotate-[-12deg]" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">
                                    Open to <span className="text-[#a3e635] font-serif italic">Collaborations</span>
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Whether a small minor project or your next big SaaS, I am always open to collaborations and new projects.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechBento;
