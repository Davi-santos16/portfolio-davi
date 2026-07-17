import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/hooks/use-theme";
import { 
  SiTypescript, SiJavascript, SiHtml5, SiMysql,
  SiNextdotjs, SiReact, SiTailwindcss, SiExpo,
  SiJquery, SiFramer, SiKnexdotjs, SiReactquery, SiShadcnui, SiLeaflet,
  SiNodedotjs, SiGit, SiGithub, SiDocker, SiLinux, SiFigma,
  SiWebpack, SiVite, SiBabel, SiSwc
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaFlask, FaAws, FaCss3 } from "react-icons/fa";

const categories = [
  {
    title: "Linguagens",
    items: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3, color: "#1572B6" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Expo", icon: SiExpo, color: "#ffffff" },
    ],
  },
  {
    title: "Bibliotecas",
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "jQuery", icon: SiJquery, color: "#0769AD" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Knex", icon: SiKnexdotjs, color: "#E16426" },
      { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
      { name: "Shadcn/UI", icon: SiShadcnui, color: "#ffffff" },
      { name: "Leaflet", icon: SiLeaflet, color: "#199900" },
    ],
  },
  {
    title: "Ferramentas & Infraestrutura",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "REST APIs", icon: TbApi, color: "#ffffff" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Babel", icon: SiBabel, color: "#F9DC3E" },
      { name: "SWC", icon: SiSwc, color: "#ffffff" },
      { name: "Playwright", icon: "", color: "#2EAD33" },
      { name: "TDD", icon: FaFlask, color: "#ffffff" },
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
                      className="bg-card/60 border border-border/50 rounded-full px-4 py-2 flex items-center gap-2 transition-colors duration-300 hover:bg-white/5 hover:border-primary/30 group"
                      style={{ "--hover-color": tech.color } as React.CSSProperties}
                    >
                      {tech.icon ? (
                        <tech.icon className="w-4 h-4 transition-all duration-300 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 text-foreground group-hover:!text-[var(--hover-color)]" />
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
