import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
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

const categoryStyles: Record<string, string> = {
  "Web App": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Mobile App": "bg-rose-500/10 text-rose-500 border-rose-500/20",
  "Full-Stack": "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass-hover rounded-xl overflow-hidden flex flex-col group h-full"
    >
      <div className="relative overflow-hidden aspect-[16/10] border-b border-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="block w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-5 flex flex-col flex-1 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.category && (
            <span className={`shrink-0 mt-0.5 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${categoryStyles[project.category] || "bg-white/10 text-white"}`}>
              {project.category}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.techs.map((tech) => {
            const Icon = techIcons[tech];
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground transition-colors hover:text-foreground hover:bg-white/10"
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {tech === "tailwindcss" ? "Tailwind CSS" : tech === "React.js" ? "React" : tech}
              </span>
            );
          })}
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            variant="neon" 
            className="w-full gap-2 text-xs" 
            onClick={() => navigate(`/project/${project.slug}`)}
          >
            Ver Mais Detalhes
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
};
