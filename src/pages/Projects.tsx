import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import Footer from "@/components/portfolio/Footer";
import Aurora from "@/components/portfolio/Aurora";

const categories = ["Todos", "Web App", "Mobile App", "Full-Stack"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const navigate = useNavigate();

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("projetos");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const filteredProjects = projects.filter(
    (project) => activeCategory === "Todos" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40 dark:opacity-70">
        <Aurora colorStops={["#3b82f6", "#8b5cf6", "#ec4899"]} blend={0.5} amplitude={1.2} speed={0.5} />
      </div>

      <div className="relative z-10">
        <main className="container pt-20 pb-24 px-4 min-h-screen">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Button variant="ghost" onClick={handleGoBack} className="gap-2 hover:bg-white/5 mb-4">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            </motion.div>

            {/* Header section matching the design */}
            <div className="space-y-4 max-w-2xl">
              <p className="text-blue-500 font-bold tracking-widest uppercase text-sm">
                WORK
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight">
                Projetos
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                Aplicações web, mobile e full-stack construídas para resolver problemas reais.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 glass rounded-full w-max border border-white/5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-blue-500 text-white shadow-md shadow-blue-500/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
