import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Layers, Trophy, Database, Server, Globe, Smartphone, Code2, Cpu, Zap, Radio, Layout, Box, Terminal } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "@/data/projects";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Helper function to map tech names to icons
const getTechIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("react") || n.includes("next") || n.includes("ui") || n.includes("css") || n.includes("bootstrap") || n.includes("tailwind")) return <Layout size={18} />;
  if (n.includes("php") || n.includes("node") || n.includes("laravel") || n.includes("backend") || n.includes("express")) return <Server size={18} />;
  if (n.includes("sql") || n.includes("mongo") || n.includes("db") || n.includes("firebase") || n.includes("storage")) return <Database size={18} />;
  if (n.includes("android") || n.includes("mobile") || n.includes("app") || n.includes("kotlin")) return <Smartphone size={18} />;
  if (n.includes("webrtc") || n.includes("socket") || n.includes("real-time") || n.includes("agora") || n.includes("communication")) return <Radio size={18} />;
  if (n.includes("ai") || n.includes("model") || n.includes("gemini") || n.includes("mistral") || n.includes("bot") || n.includes("openai")) return <Cpu size={18} />;
  if (n.includes("slim") || n.includes("fast") || n.includes("optimization") || n.includes("performance")) return <Zap size={18} />;
  if (n.includes("java") || n.includes("python") || n.includes("c++") || n.includes("typescript") || n.includes("javascript")) return <Code2 size={18} />;
  if (n.includes("web") || n.includes("site") || n.includes("http")) return <Globe size={18} />;
  if (n.includes("terminal") || n.includes("bash") || n.includes("shell")) return <Terminal size={18} />;

  return <Box size={18} />;
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  // Using 'as any' to bypass strict type checking for optional fields in this rapid iteration
  const project = projectsData[projectId as keyof typeof projectsData] as any;

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-gray-500 mb-8">The project you are looking for doesn't exist or has been removed.</p>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Navigation */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors group"
        >
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
            <ArrowLeft size={16} />
          </div>
          <span className="font-medium">Back to Projects</span>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold font-name bg-gradient-to-r ${project.gradient} text-transparent bg-clip-text mb-4 leading-tight`}>
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-heading font-medium p-1">
                {project.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {project.status === 'completed' ? (
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 border-none px-3 py-1 font-heading">
                  Completed
                </Badge>
              ) : (
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-200 border-none px-3 py-1 font-heading">
                  In Progress
                </Badge>
              )}
              {project.award && (
                <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-900/10 dark:text-amber-400 px-3 py-1 gap-1 font-heading">
                  <Trophy size={14} /> {project.award}
                </Badge>
              )}
              <Badge variant="outline" className="border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 gap-1 font-heading">
                <Calendar size={14} /> {project.date || project.year}
              </Badge>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-body"
            >
              {project.longDescription || project.description}
            </motion.p>

            <div className="flex flex-wrap gap-4 pt-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={18} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <Github size={18} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 font-heading">
                <Tag size={20} className="text-primary" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-body">
                    {tag}
                  </Badge>
                ))}
              </div>

              {project.techStack && project.techStack.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider font-heading">Stack Details</h4>
                  <div className="space-y-3">
                    {project.techStack.map((tech: any, i: number) => (
                      <div key={i} className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700 text-xs font-bold text-gray-500 font-mono transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                          {getTechIcon(tech.name)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white font-heading">{tech.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-body">{tech.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        {project.features && project.features.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3 font-heading">
              <Layers className="text-primary" /> Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/30 border border-gray-100 dark:border-gray-800 hover:border-primary/20 transition-colors">
                  <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-xs font-bold font-mono`}>
                    {i + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium font-body">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Challenges Section */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-heading">Technical Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.challenges.map((challenge: any, i: number) => (
                <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${project.gradient}`}></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors font-heading">{challenge.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-body">
                    {challenge.solution || challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Screenshots Gallery - Only if screenshots exist */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-heading">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.screenshots.map((shot: any, i: number) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 group">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                    <img
                      src={shot.url}
                      alt={shot.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EScreenshot ${i + 1}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                  {shot.caption && (
                    <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                      <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400 font-heading">{shot.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default ProjectDetail;
