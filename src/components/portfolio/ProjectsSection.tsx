import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Todo-List",
    description: "Sistema completo de gerenciamento de tarefas (Todo List). interface responsiva e manipulação dinâmica do DOM, proporcionando uma experiência fluida e intuitiva ao usuário.",
    techs: ["React", "TypeScript", "tailwindcss"],
    image: "src/assets/todo-List.png",
    demo: "https://todo-two-psi-54.vercel.app",
    code: "https://github.com/Davi-santos16/todo",
  },
  {
    title: "Task Manager App",
    description: "Aplicativo de gerenciamento de tarefas com drag & drop, filtros avançados e colaboração em tempo real.",
    techs: ["React", "TypeScript", "Tailwind", "Firebase"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
    demo: "",
    code: "#",
  },
  {
    title: "Portfolio Dashboard",
    description: "Dashboard interativo para visualização de dados com gráficos dinâmicos e relatórios.",
    techs: ["Next.js", "Chart.js", "API REST", "Vercel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    demo: "#",
    code: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-24 sm:py-32 relative">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3 mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase">Portfólio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Alguns dos projetos que desenvolvi recentemente
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-hover rounded-xl overflow-hidden flex flex-col group"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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

                <div className="flex flex-wrap gap-1.5">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               <div className="flex gap-2 pt-1">
                  {project.demo && project.code ? (
                      <>
                        <Button
                          variant="neon-outline"
                          size="sm"
                          className="flex-1 gap-1.5 text-xs h-8"
                          asChild
                        >
                          <a href={project.code} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3.5 h-3.5" />
                            Código
                          </a>
                        </Button>

                        <Button
                          variant="neon"
                          size="sm"
                          className="flex-1 gap-1.5 text-xs h-8"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3.5 h-3.5" />
                            Demo
                          </a>
                        </Button>
                      </>
                    ) : (
                      <Button
                          variant="neon-outline"
                          size="sm"
                          className="flex-1 gap-1.5 text-xs h-8"
                          asChild
                        >
                          <a href={project.code} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3.5 h-3.5" />
                            Código
                          </a>
                        </Button>
                    )}
                  </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
