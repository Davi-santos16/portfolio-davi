import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/hooks/use-theme";
import { 
  SiTypescript, SiJavascript, SiHtml5,  SiMysql,
  SiNextdotjs, SiReact, SiTailwindcss, SiExpo,
  SiJquery, SiFramer, SiKnexdotjs, SiReactquery, SiShadcnui, SiLeaflet,
  SiNodedotjs, SiGit, SiGithub, SiDocker, SiLinux,  SiFigma,
  SiWebpack, SiVite, SiBabel, SiSwc, 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaFlask } from "react-icons/fa";

const categories = [
  {
    title: "Linguagens",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: "" },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: SiReact },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Expo", icon: SiExpo },
    ],
  },
  {
    title: "Bibliotecas",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "jQuery", icon: SiJquery },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Knex", icon: SiKnexdotjs },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "Shadcn/UI", icon: SiShadcnui },
      { name: "Leaflet", icon: SiLeaflet },
    ],
  },
  {
    title: "Ferramentas & Infraestrutura",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "AWS", icon: "" },
      { name: "Figma", icon: SiFigma },
      { name: "REST APIs", icon: TbApi },
      { name: "Webpack", icon: SiWebpack },
      { name: "Vite", icon: SiVite },
      { name: "Babel", icon: SiBabel },
      { name: "SWC", icon: SiSwc },
      { name: "Playwright", icon: "" },
      { name: "TDD", icon: FaFlask },
    ],
  },
];

const TechSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const iconTheme = theme === "dark" ? "dark" : "light";

  return (
    <section id="tecnologias" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 radial-fade opacity-30" />
      <div className="container px-4 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-xs font-mono text-primary tracking-widest uppercase mt-[2px]">
                Tech Stack
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              As <span className="animated-gradient-text">ferramentas certas</span> para cada projeto.
            </h2>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Uma seleção de tecnologias premium, perfeitamente adaptada para entregar máxima performance, escalabilidade e design nas necessidades técnicas de cada aplicação.
            </p>
          </div>

          {/* Right Column: Categories */}
          <div className="lg:col-span-7 space-y-6">
            {categories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: catIdx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-foreground/80 border-b border-border/30 pb-3">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.items.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.03, ease: "easeOut" }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="glass rounded-full px-4 py-2 flex items-center gap-2 transition-all duration-300 hover:bg-white/5 hover:border-primary/30 group"
                    >
                      {tech.icon ? (
                        <tech.icon className="w-4 h-4 transition-all duration-300 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 text-foreground" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                      )}
                      <span className="text-sm sm:text-base font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechSection;
