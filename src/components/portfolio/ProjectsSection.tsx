import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.article
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
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-hover rounded-xl overflow-hidden flex flex-col group"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              </div>

              <div className="p-5 flex flex-col flex-1 space-y-3">
                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
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
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <Button
            disabled
            size="lg"
            variant="neon-outline"
            onClick={() => navigate("/projects")}
          >
            Ver Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
