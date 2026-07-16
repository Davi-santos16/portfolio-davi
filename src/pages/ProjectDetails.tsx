import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import Footer from "@/components/portfolio/Footer";
import Aurora from "@/components/portfolio/Aurora";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiLeaflet 
} from "react-icons/si";

const techIcons: Record<string, React.ElementType> = {
  "React": SiReact,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Tailwind": SiTailwindcss,
  "tailwindcss": SiTailwindcss,
  "Leaflet": SiLeaflet,
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground space-y-4">
        <h1 className="text-4xl font-bold">Projeto não encontrado</h1>
        <Button onClick={() => navigate("/")} variant="neon">Voltar ao Início</Button>
      </div>
    );
  }

  const handleGoBack = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("projetos");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-clip relative">
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40 dark:opacity-70">
        <Aurora colorStops={["#3b82f6", "#8b5cf6", "#ec4899"]} blend={0.5} amplitude={1.2} speed={0.5} />
      </div>
      
      <div className="relative z-10">
        <main className="container pt-20 pb-24 px-4 min-h-screen">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="ghost" onClick={handleGoBack} className="gap-2 hover:bg-white/5">
              <ArrowLeft className="w-4 h-4" />
              Voltar aos Projetos
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side: Image and Links */}
            <div className="lg:sticky lg:top-20 h-max">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="glass rounded-2xl p-2 overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {project.demo && (
                    <Button asChild variant="neon" size="lg" className="flex-1 gap-2">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Acessar Projeto
                      </a>
                    </Button>
                  )}
                  {project.code && (
                    <Button asChild variant="neon-outline" size="lg" className="flex-1 gap-2">
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Ver Código
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Right side: Details */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b border-white/10 pb-2">Stack Utilizada</h3>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.techs.map((tech) => {
                    const Icon = techIcons[tech];
                    const displayName = tech === "tailwindcss" ? "Tailwind CSS" : tech === "React.js" ? "React" : tech;
                    return (
                      <div key={tech} className="glass rounded-full px-4 py-2 flex items-center gap-2 border border-white/5">
                        {Icon && <Icon className="w-4 h-4 text-primary" />}
                        <span className="text-sm font-medium">{displayName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b border-white/10 pb-2">Principais Funcionalidades</h3>
                <ul className="space-y-3 pt-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetails;
