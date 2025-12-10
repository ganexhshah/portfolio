import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Github, ExternalLink, Code2, ArrowRight, FolderGit2, Sparkles, BookOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { projectsData } from "@/data/projects";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = Object.values(projectsData);
  const featuredProject = projects[0]; // First project as featured

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesFilter =
        activeFilter === "all" || project.status === activeFilter || project.category === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const allCategories = ["all", "completed", "in-progress", "web", "mobile", "game"];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-black font-serif italic text-gray-900 dark:text-white leading-tight mb-6">
            Creative <span className="text-pink-600 dark:text-pink-400">Projects</span> & <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded-lg inline-block not-italic">Builds</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-body leading-relaxed">
            Showcasing my journey through code, design, and innovation. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="mb-16 space-y-6">
          <div className="relative max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? 'bg-pink-500 text-white border-pink-500'
                    : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-yellow-500" size={20} />
              <h2 className="text-xl font-bold font-heading uppercase tracking-wider text-gray-500 dark:text-gray-400">Featured Project</h2>
            </div>

            <div className="group relative rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className={`aspect-[21/9] w-full overflow-hidden bg-gradient-to-br ${featuredProject.gradient} relative`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <Code2 className="absolute -right-6 -bottom-6 text-white/5 rotate-12" size={160} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                <div className="flex flex-wrap items-center gap-3 mb-4 text-white/80 text-sm">
                  <Badge className="bg-pink-500 hover:bg-pink-600 border-none text-white">{featuredProject.category || 'Development'}</Badge>
                  <span>{featuredProject.year}</span>
                  <span>•</span>
                  <span className="capitalize">{featuredProject.status}</span>
                </div>

                <h2 className="text-2xl md:text-4xl font-bold font-serif text-white mb-4 group-hover:text-pink-200 transition-colors">
                  {featuredProject.title}
                </h2>

                <p className="text-white/80 text-lg mb-6 line-clamp-2 max-w-3xl font-body">
                  {featuredProject.description}
                </p>

                <Link
                  to={`/projects/${featuredProject.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold hover:bg-white hover:text-gray-900 transition-all group-hover:pl-8"
                >
                  View Project <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Recent Projects Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg text-pink-600 dark:text-pink-400">
              <BookOpen size={20} />
            </div>
            <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white">All Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.slice(1).map((project, index) => (
              <div key={project.id} className="group flex flex-col h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`aspect-video relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <Code2 className="absolute -right-6 -bottom-6 text-white/5 rotate-12" size={120} />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 dark:bg-gray-900/90 backdrop-blur text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 border-none shadow-sm">
                      {project.category || 'Development'}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white/80 text-xs font-mono mb-1">{project.year}</div>
                    <h3 className="text-white font-bold text-xl tracking-tight leading-none">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                    <span className="capitalize">{project.status}</span>
                    <span>•</span>
                    <span>{project.tags.length} Technologies</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-body mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-md border border-gray-100 dark:border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-md border border-gray-100 dark:border-gray-700">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      View Project <ArrowRight size={16} className="text-pink-500" />
                    </Link>
                    <div className="flex items-center gap-2">
                      {(project as any).github && (
                        <button
                          onClick={(e) => { e.preventDefault(); window.open((project as any).github, '_blank'); }}
                          className="p-2 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        >
                          <Github size={16} />
                        </button>
                      )}
                      {(project as any).demo && (
                        <button
                          onClick={(e) => { e.preventDefault(); window.open((project as any).demo, '_blank'); }}
                          className="p-2 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              We couldn't find any projects matching your search. Try different keywords or check your spelling.
            </p>
            <Button 
              variant="outline" 
              className="mt-6"
              onClick={() => { setSearchQuery(""); setActiveFilter("all"); }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Newsletter / CTA */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Sparkles size={120} />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <Badge className="mb-4 bg-white dark:bg-gray-800 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-900 hover:bg-white">Collaboration</Badge>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-gray-900 dark:text-white mb-4">
              Let's build something amazing! 🚀
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 font-body">
              Have an exciting project in mind? I'm always open to collaborating on innovative ideas and challenging builds.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Link
                to="/contact"
                className="flex-1 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all text-center"
              >
                Get In Touch
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-center"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
