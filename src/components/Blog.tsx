import { useState } from "react";
import { ArrowRight, Calendar, Clock, Tag, Search, TrendingUp, Sparkles, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

import { posts, featuredPost } from "@/data/blogPosts";

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const allCategories = ["All", "Technology", "React", "Game Dev", "Backend", "Design", "Career"];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-black font-serif italic text-gray-900 dark:text-white leading-tight mb-6">
                        Insights, <span className="text-pink-600 dark:text-pink-400">Stories</span> & <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded-lg inline-block not-italic">Ideas</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-body leading-relaxed">
                        Sharing my journey through code, design, and everything in between. Exploring the latest tech, game dev adventures, and personal learnings.
                    </p>
                </div>

                {/* Search & Categories */}
                <div className="mb-16 space-y-6">
                    <div className="relative max-w-lg">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {allCategories.map((cat) => (
                            <button
                                key={cat}
                                className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Post */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <Sparkles className="text-yellow-500" size={20} />
                        <h2 className="text-xl font-bold font-heading uppercase tracking-wider text-gray-500 dark:text-gray-400">Featured Article</h2>
                    </div>

                    <div className="group relative rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="aspect-[21/9] w-full overflow-hidden">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                        </div>

                        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                            <div className="flex flex-wrap items-center gap-3 mb-4 text-white/80 text-sm">
                                <Badge className="bg-pink-500 hover:bg-pink-600 border-none text-white">{featuredPost.category}</Badge>
                                <span className="flex items-center gap-1"><Calendar size={14} /> {featuredPost.date}</span>
                                <span className="flex items-center gap-1"><Clock size={14} /> {featuredPost.readTime}</span>
                            </div>

                            <h2 className="text-2xl md:text-4xl font-bold font-serif text-white mb-4 group-hover:text-pink-200 transition-colors">
                                {featuredPost.title}
                            </h2>

                            <p className="text-white/80 text-lg mb-6 line-clamp-2 max-w-3xl font-body">
                                {featuredPost.excerpt}
                            </p>

                            <Link
                                to={`/blog/${featuredPost.slug}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold hover:bg-white hover:text-gray-900 transition-all group-hover:pl-8"
                            >
                                Read Article <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Recent Posts Grid */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg text-pink-600 dark:text-pink-400">
                            <BookOpen size={20} />
                        </div>
                        <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white">Recent Posts</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post, index) => (
                            <div key={index} className="group flex flex-col h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-white/90 dark:bg-gray-900/90 backdrop-blur text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 border-none shadow-sm">
                                            {post.category}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-body mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 group-hover:gap-3 transition-all"
                                        >
                                            Read More <ArrowRight size={16} className="text-pink-500" />
                                        </Link>
                                        <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                            <TrendingUp size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter / CTA */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Sparkles size={120} />
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <Badge className="mb-4 bg-white dark:bg-gray-800 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-900 hover:bg-white">Newsletter</Badge>
                        <h2 className="text-3xl md:text-4xl font-black font-heading text-gray-900 dark:text-white mb-4">
                            Stay in the loop! 🚀
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 font-body">
                            Get the latest articles, tutorials, and tech updates delivered straight to your inbox. No spam, just good vibes and code.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                            />
                            <button className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;
