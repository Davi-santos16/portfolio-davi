import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/hooks/use-theme";

const techs = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Git", icon: "git" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Figma", icon: "figma" },
];

const TechSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const iconTheme = theme === "dark" ? "dark" : "light";

  return (
    <section id="tecnologias" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 radial-fade opacity-50" />
      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase">Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Tecnologias & <span className="gradient-text">Ferramentas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 max-w-4xl mx-auto">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.1, y: -6 }}
              whileTap={{ scale: 0.95 }}
              className="glass-hover rounded-2xl p-6 sm:p-7 flex flex-col items-center gap-4 cursor-default group"
            >
              <img
                src={`https://skillicons.dev/icons?i=${tech.icon}&theme=${iconTheme}`}
                alt={tech.name}
                className="w-14 h-14 sm:w-16 sm:h-16"
                loading="lazy"
              />
              <span className="text-sm sm:text-base font-medium text-foreground">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
