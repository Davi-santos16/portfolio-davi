import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";
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

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="projetos" className="py-24 sm:py-14 relative">
      <div className="container " ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3 mb-16"
        >
          
          <h2 className="text-3xl sm:text-4xl mt-6 font-bold text-foreground">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Alguns dos meus projetos que desenvolvi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={
                isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-12 mb-4">
          <Button
            size="lg"
            variant="neon"
            className="text-base px-8 py-6 rounded-full group font-semibold shadow-[0_0_15px_-3px_hsl(var(--primary)/0.4)]"
            onClick={() => navigate("/projects")}
          >
            Ver Todos os Projetos
            <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
