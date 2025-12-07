// Enhanced Three-Column Section Component
// This goes in Hero.tsx after the photo gallery section

{/* Three Column Section - Learn More, Toolbox, Connections */ }
<section className="mb-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Learn More About Me - Enhanced */}
        <div className="group bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 dark:from-gray-900 dark:via-pink-900/10 dark:to-purple-900/10 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse"></div>
                <h3 className="text-2xl font-bold font-heading bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
                    Learn more about me
                </h3>
            </div>

            <div className="space-y-3 mb-8">
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 font-body animate-fade-in">
                    Good evening! ✨
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-base font-body leading-relaxed">
                    I'm <span className="font-bold text-pink-600 dark:text-pink-400">Ganesh</span>, an experienced web developer passionate about creating beautiful digital experiences.
                </p>
            </div>

            <div className="flex justify-center">
                <div className="relative group/img">
                    {/* Animated gradient rings */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-40 group-hover/img:opacity-100 animate-pulse transition duration-500"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-sm opacity-30 group-hover/img:opacity-80 animate-spin-slow transition duration-500"></div>

                    {/* Profile image */}
                    <div className="relative">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="relative w-36 h-44 object-cover rounded-3xl shadow-2xl transform group-hover/img:scale-105 transition-transform duration-500 border-4 border-white dark:border-gray-800"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Toolbox - Enhanced */}
        <div className="group bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-cyan-900/10 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"></div>
                <h3 className="text-2xl font-bold font-heading bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
                    Toolbox 🛠️
                </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-base mb-8 font-body leading-relaxed">
                Check out my favorite tools and spots around the web.
            </p>

            <div className="grid grid-cols-3 gap-4">
                {/* Tool 1 - React */}
                <div className="group/tool relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl blur opacity-0 group-hover/tool:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center p-5 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-pink-300">
                        <svg className="w-12 h-12 text-cyan-500 group-hover/tool:rotate-180 transition-transform duration-700" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95z" />
                        </svg>
                    </div>
                </div>

                {/* Tool 2 - VS Code */}
                <div className="group/tool relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur opacity-0 group-hover/tool:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center p-5 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-300">
                        <svg className="w-12 h-12 text-blue-600 group-hover/tool:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                        </svg>
                    </div>
                </div>

                {/* Tool 3 - GitHub */}
                <div className="group/tool relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl blur opacity-0 group-hover/tool:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center p-5 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-orange-300">
                        <svg className="w-12 h-12 text-gray-800 dark:text-gray-200 group-hover/tool:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        {/* Connections - Enhanced */}
        <div className="group bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                <h3 className="text-2xl font-bold font-heading bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    Connections 🌐
                </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-base mb-8 font-body leading-relaxed">
                An evolving list of people I've met and those I wish to meet.
            </p>

            {/* Circular connections layout - Enhanced */}
            <div className="relative h-52 flex items-center justify-center">
                {/* Center profile with pulse animation */}
                <div className="absolute z-10 animate-pulse-slow">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-50 animate-ping-slow"></div>
                        <div className="relative w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden transform hover:scale-110 transition-transform duration-300">
                            <img src={profileImg} alt="Center" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Animated connection lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
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

                {/* Surrounding profiles with staggered animations */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0s' }}>
                    <div className="w-14 h-14 rounded-full border-3 border-white dark:border-gray-800 shadow-lg overflow-hidden bg-gradient-to-br from-pink-400 to-purple-400 hover:scale-125 transition-transform duration-300 cursor-pointer">
                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="w-14 h-14 rounded-full border-3 border-white dark:border-gray-800 shadow-lg overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-400 hover:scale-125 transition-transform duration-300 cursor-pointer">
                    </div>
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="w-14 h-14 rounded-full border-3 border-white dark:border-gray-800 shadow-lg overflow-hidden bg-gradient-to-br from-orange-400 to-red-400 hover:scale-125 transition-transform duration-300 cursor-pointer">
                    </div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="w-14 h-14 rounded-full border-3 border-white dark:border-gray-800 shadow-lg overflow-hidden bg-gradient-to-br from-green-400 to-emerald-400 hover:scale-125 transition-transform duration-300 cursor-pointer">
                    </div>
                </div>
                <div className="absolute top-6 right-10 animate-float" style={{ animationDelay: '0.8s' }}>
                    <div className="w-11 h-11 rounded-full border-3 border-white dark:border-gray-800 shadow-lg overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-400 hover:scale-125 transition-transform duration-300 cursor-pointer">
                    </div>
                </div>
                <div className="absolute bottom-6 left-10 animate-float" style={{ animationDelay: '1.3s' }}>
                    <div className="w-11 h-11 rounded-full border-3 border-white dark:border-gray-800 shadow-lg overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-400 hover:scale-125 transition-transform duration-300 cursor-pointer">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
