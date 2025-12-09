import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Github, ExternalLink, Code2, ArrowRight, FolderGit2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { projectsData } from "@/data/projects";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = Object.values(projectsData);

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

  const stats = {
    total: projects.length,
    completed: projects.filter((p) => p.status === "completed").length,
    inProgress: projects.filter((p) => p.status === "in-progress").length,
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold font-heading mb-4 flex items-center gap-2"
            >
              <span className="text-gray-900 dark:text-white">All</span>
              <div className="relative inline-block">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text font-name inline-block">
                  Projects
                </span>
                <div className="absolute -top-4 -right-6 text-yellow-500 animate-pulse">
                  <Sparkles size={20} />
                </div>
              </div>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-body"
            >
              Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 flex items-center gap-3">
               <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                 <FolderGit2 size={20} />
               </div>
               <div>
                 <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Total</p>
                 <p className="text-xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
               </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 flex items-center gap-3">
               <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                 <Sparkles size={20} />
               </div>
               <div>
                 <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Completed</p>
                 <p className="text-xl font-bold text-gray-900 dark:text-white">{stats.completed}</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="relative py-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm font-medium"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
              {['all', 'completed', 'in-progress'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md transform scale-105'
                      : 'bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
          
          <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 px-1">
          <p>
            Showing <span className="font-bold text-gray-900 dark:text-white">{filteredProjects.length}</span> projects
            {searchQuery && <span> for "<span className="text-gray-900 dark:text-white">{searchQuery}</span>"</span>}
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={item}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group flex flex-col h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:shadow-primary/5 dark:hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
              >
                <Link to={`/projects/${project.id}`} className="block h-full cursor-pointer">
                  {/* Visual Header */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    
                    <div className="absolute top-4 right-4 z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full hover:bg-white/20 transition-colors">
                          <ArrowRight className="text-white transform -rotate-45" size={18} />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div>
                          <div className="text-white/80 text-xs font-mono mb-1">{project.year}</div>
                          <h3 className="text-white font-bold text-2xl tracking-tight leading-none group-hover:scale-105 transition-transform origin-left">{project.title}</h3>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                        {project.category?.toUpperCase() || 'DEV'}
                      </div>
                    </div>
                    
                    {/* Decorative Icon Background */}
                    <Code2 className="absolute -right-6 -bottom-6 text-white/5 rotate-12" size={160} />
                  </div>

                  <div className="flex-1 p-6 flex flex-col h-[calc(100%-12rem)]">
                    {/* Status & Team */}
                    <div className="flex items-center gap-2 mb-4">
                      {project.status === 'completed' ? (
                        <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 border-transparent">
                          Completed
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-200 border-transparent">
                          In Progress
                        </Badge>
                      )}
                      {project.award && (
                        <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-900/10 dark:text-amber-400">
                          🏆 {project.award}
                        </Badge>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-md border border-gray-100 dark:border-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                        {project.github && (
                          <div
                            role="button"
                            className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group/link cursor-pointer"
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.github, '_blank'); }}
                          >
                            <Github size={16} />
                            <span className="group-hover/link:underline">Source Code</span>
                          </div>
                        )}
                        {project.demo && (
                          <div
                            role="button"
                            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-auto group/link cursor-pointer"
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.demo, '_blank'); }}
                          >
                            <span>Live Demo</span>
                            <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
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
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
