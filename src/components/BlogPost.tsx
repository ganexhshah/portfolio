import { ArrowLeft, Calendar, Share2, MessageCircle, Clock, User, Facebook, Linkedin, Twitter, Eye, CheckCircle2, Box, Server, Database, Layers, Layout, Zap, ArrowRight, Table } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import profileImg from "@/assets/profile.jpg";
import SEO from "@/components/SEO";

const BlogPost = () => {
    const { slug } = useParams();

    // Blog post data focusing on rich content
    const blogPosts: Record<string, any> = {
        "future-of-web-development-2025": {
            title: "The Future of Web Development: What to Expect in 2025",
            subtitle: "Emerging trends shaping the digital landscape",
            date: "December 8, 2024",
            readTime: "8 min read",
            author: "Ganesh Shah",
            category: "Technology",
            views: "1.2k",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            renderContent: () => (
                <>
                    <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                        As we move further into the decade, the landscape of web development is shifting beneath our feet. From AI-driven coding assistants to the rise of WebAssembly and edge computing, here's what to expect in 2025.
                    </p>

                    <div className="my-10 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5" /> Key Trends Overview
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5" />
                                <span><strong>AI-Driven Development:</strong> Copilot and ChatGPT becoming pair programmers.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5" />
                                <span><strong>WebAssembly (Wasm):</strong> Near-native performance in the browser.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5" />
                                <span><strong>Edge Computing:</strong> Moving computation closer to the user.</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 font-heading">1. AI-Driven Development</h2>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        The integration of Artificial Intelligence into the development workflow is no longer a novelty—it's a necessity. Tools like GitHub Copilot and ChatGPT have evolved from simple code completion assistants to full-fledged pair programmers.
                    </p>

                    <blockquote className="border-l-4 border-pink-500 pl-6 py-2 my-8 italic text-lg text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-r-xl">
                        "The developer of 2025 will be an architect of logic, while AI will be the mason laying the bricks."
                    </blockquote>

                    <h2 className="text-2xl font-bold mb-4 font-heading">WebAssembly & The Edge</h2>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        WebAssembly has been promising near-native performance for web applications for years, but 2025 is poised to be the year of mass adoption.
                    </p>

                    <h2 className="text-2xl font-bold mb-4 font-heading">Conclusion</h2>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        The future is exciting, fast, and incredibly intelligent. For developers like us, adapting to these changes isn't just about survival; it's about seizing the opportunity to build things we never thought possible.
                    </p>
                </>
            )
        },
        "mastering-react-server-components": {
            title: "Mastering React Server Components",
            subtitle: "A deep dive into how RSCs are changing the way we build React applications.",
            date: "November 25, 2024",
            readTime: "6 min read",
            author: "Ganesh Shah",
            category: "React",
            views: "2.4k",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            renderContent: () => (
                <>
                    <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                        React Server Components (RCS) are reshaping the React ecosystem, offering a paradigm shift in how we think about rendering and data fetching. By moving logic to the server, we can build faster, more efficient applications.
                    </p>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 font-heading">
                        <Box className="text-pink-500" /> What are React Server Components?
                    </h2>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        At their core, Server Components allow developers to render components exclusively on the server. This means the JavaScript code for these components never needs to be sent to the client, significantly reducing the bundle size and improving initial load times.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                                <Server size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Wait on Server</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Data fetching happens close to the datasource, reducing latency waterfalls.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                                <Database size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Direct DB Access</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Query your database directly inside your component without API layers.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 font-heading">
                        <Layers className="text-purple-500" /> Benefits of RSCs
                    </h2>

                    <div className="space-y-4 mb-10">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30">
                            <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg text-purple-600 dark:text-purple-400">
                                <Box size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Zero Bundle Size</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Server components code stays on the server. It is NOT downloaded by the client.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-800/30">
                            <div className="mt-1 bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg text-orange-600 dark:text-orange-400">
                                <Layout size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Automatic Code Splitting</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Frameworks can intelligently split code bundles based on what Client Components are actually rendered.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 font-heading">
                        <Table className="text-cyan-500" /> When to Use What?
                    </h2>

                    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 mb-10">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-heading">
                                <tr>
                                    <th className="p-4 border-b border-gray-200 dark:border-gray-800">Feature / Use Case</th>
                                    <th className="p-4 border-b border-gray-200 dark:border-gray-800 w-1/3">Server Component</th>
                                    <th className="p-4 border-b border-gray-200 dark:border-gray-800 w-1/3">Client Component</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-950">
                                <tr>
                                    <td className="p-4 font-medium">Data Fetching</td>
                                    <td className="p-4 text-green-600 font-bold">✅ Preferred</td>
                                    <td className="p-4 text-gray-500">Can do (useEffect)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Access Backend Resources</td>
                                    <td className="p-4 text-green-600 font-bold">✅ Yes (Direct)</td>
                                    <td className="p-4 text-red-500 font-bold">❌ No</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Interactivity (onClick, onChange)</td>
                                    <td className="p-4 text-red-500 font-bold">❌ No</td>
                                    <td className="p-4 text-green-600 font-bold">✅ Yes</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">State & Lifecycle (useState, useEffect)</td>
                                    <td className="p-4 text-red-500 font-bold">❌ No</td>
                                    <td className="p-4 text-green-600 font-bold">✅ Yes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-gray-900 text-white p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 font-heading">Summary</h3>
                        <p className="leading-relaxed text-gray-300">
                            Use <strong className="text-white">Server Components</strong> for non-interactive UI elements like data dashboards, content pages, and layout wrappers. <br /><br />
                            Use <strong className="text-white">Client Components</strong> for interactive elements like buttons, forms, and animations.
                        </p>
                    </div>
                </>
            )
        },
        "why-unreal-engine-5": {
            title: "Why I Switched to Unreal Engine 5",
            subtitle: "My journey from Unity to Unreal Engine 5 and the power of Nanite and Lumen.",
            date: "November 12, 2024",
            readTime: "10 min read",
            author: "Ganesh Shah",
            category: "Game Dev",
            views: "5.1k",
            image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            renderContent: () => (
                <>
                    <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                        For years, I was a dedicated Unity developer. But with the release of Unreal Engine 5, the promise of true next-gen graphics was too enticing to ignore. Here's why I made the switch.
                    </p>

                    <h2 className="text-2xl font-bold mb-4 font-heading">Nanite: Infinite Detail</h2>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        Nanite is a virtualized micropolygon geometry system. In plain English? It means you can import film-quality 3D assets with millions of polygons directly into the engine without worrying about performance or manually creating LODs (Level of Detail). It just works.
                    </p>

                    <h2 className="text-2xl font-bold mb-4 font-heading">Lumen: Real-Time Global Illumination</h2>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        Lighting has always been the hardest part of game dev. Baking lightmaps takes hours. Lumen changes everything by providing fully dynamic global illumination that reacts in real-time. Move a light source, and the shadows and bounce lighting update instantly.
                    </p>

                    <blockquote className="border-l-4 border-pink-500 pl-6 py-2 my-8 italic text-lg text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-r-xl">
                        "UE5 isn't just an engine; it's a window into the future of interactive storytelling."
                    </blockquote>

                    <h2 className="text-2xl font-bold mb-4 font-heading">Blueprints vs. C#</h2>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        Moving from C# to Blueprints (Visual Scripting) was a mental shift, but I found it incredibly powerful for rapid prototyping. And for heavy lifting, C++ is always there, offering raw performance that C# sometimes struggles to match.
                    </p>
                </>
            )
        },
        "scalable-apis-php-slim": {
            title: "Building Scalable APIs with PHP & Slim",
            subtitle: "Architecting robust RESTful services with modern PHP.",
            date: "October 30, 2024",
            readTime: "7 min read",
            author: "Ganesh Shah",
            category: "Backend",
            views: "980",
            image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97663?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            renderContent: () => (
                <>
                    <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                        PHP is far from dead. In fact, with modern frameworks like Slim and features introduced in PHP 8+, it's faster and more efficient than ever for building microservices and APIs.
                    </p>
                    <h2 className="text-2xl font-bold mb-4 font-heading">Why Slim Framework?</h2>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        Slim is a micro-framework that helps you write simple yet powerful web applications and APIs. It's minimal, fast, and doesn't force a specific architecture on you, giving you the freedom to structure your app as you see fit.
                    </p>
                </>
            )
        },
        "minimalist-ui-design": {
            title: "The Art of Minimalist UI Design",
            subtitle: "Creating stunning, user-friendly interfaces that breathe.",
            date: "October 15, 2024",
            readTime: "5 min read",
            author: "Ganesh Shah",
            category: "Design",
            views: "3.5k",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            renderContent: () => (
                <>
                    <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Minimalism isn't about removing things; it's about adding the right things. It's the art of prioritization.
                    </p>
                    <h2 className="text-2xl font-bold mb-4 font-heading">The Power of Negative Space</h2>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        White space (or negative space) is not empty space; it's an active design element. It guides the user's eye, improves readability, and creates a sense of elegance and sophistication.
                    </p>
                </>
            )
        }
    };

    let post = blogPosts[slug || ""];

    if (!post) {
        // Fallback
        post = {
            title: slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Blog Post",
            subtitle: "Exploring new ideas in tech",
            date: "Recent",
            readTime: "5 min read",
            author: "Ganesh Shah",
            category: "General",
            views: "500",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            renderContent: () => <p>Content coming soon...</p>
        };
    }

    return (
        <>
            <SEO
                title={post.title}
                description={post.subtitle}
                image={post.image}
                type="article"
                keywords={[post.category, "Blog", "Tech", "Development"]}
            />
            <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16">

                {/* Hero Image */}
                <div className="w-full h-[40vh] md:h-[60vh] relative">
                    <div className="absolute inset-0 bg-gray-900/40 w-full h-full z-10"></div>
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white dark:from-gray-950 to-transparent h-32 z-20"></div>
                </div>

                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30">

                    {/* Back Button */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 mb-8 text-white/90 hover:text-white font-medium bg-black/20 backdrop-blur-md px-4 py-2 rounded-full hover:bg-black/40 transition-all font-heading"
                    >
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>

                    {/* Article Header */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800 mb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                            <Badge className="bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400 hover:bg-pink-200 border-none px-3 py-1 font-heading">
                                {post.category}
                            </Badge>
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-code text-xs">
                                <Calendar size={14} /> {post.date}
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-code text-xs">
                                <Clock size={14} /> {post.readTime}
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-code text-xs">
                                <Eye size={14} /> {post.views} views
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-serif text-gray-900 dark:text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium font-heading">
                            {post.subtitle}
                        </p>

                        <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full ring-2 ring-pink-100 dark:ring-pink-900/30 p-0.5 bg-white dark:bg-gray-800">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img src={profileImg} alt={post.author} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white font-heading">{post.author}</p>
                                    <p className="text-xs text-gray-500 font-body">Author</p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-blue-600 transition-colors">
                                    <Facebook size={18} />
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-blue-400 transition-colors">
                                    <Twitter size={18} />
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-blue-700 transition-colors">
                                    <Linkedin size={18} />
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    <Share2 size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Article Content */}
                    <article className="prose prose-lg dark:prose-invert max-w-none font-body mb-16">
                        {post.renderContent ? post.renderContent() : <div dangerouslySetInnerHTML={{ __html: post.content }} />}
                    </article>

                    {/* Newsletter / CTA */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden mb-16 shadow-none">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <Badge className="mb-4 bg-white dark:bg-gray-800 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-900 hover:bg-white font-heading">Newsletter</Badge>
                            <h2 className="text-3xl md:text-3xl font-black font-heading text-gray-900 dark:text-white mb-4">
                                Enjoyed this article? 🚀
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 font-body">
                                Subscribe to my newsletter to get more in-depth tutorials, tech insights, and early access to new content.
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

                    {/* Comments Section (Placeholder) */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                            <MessageCircle size={24} className="text-pink-500" /> Comments (0)
                        </h3>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center text-gray-400">
                                <User size={20} />
                            </div>
                            <div className="flex-1">
                                <textarea
                                    placeholder="Join the discussion..."
                                    className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all min-h-[100px]"
                                ></textarea>
                                <button className="mt-3 px-6 py-2 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors">
                                    Post Comment
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BlogPost;
