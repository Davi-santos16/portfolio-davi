import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Code2, Globe } from "lucide-react";

const highlights = [
  {
    icon: Heart,
    title: "PAIXÃO",
    desc: "Gerar valor por meio da tecnologia, explorando ideias, lendo livros, fazendo pesquisas e criando interfaces que conectam e inspiram.",
  },
  {
    icon: Code2,
    title: "METODOLOGIA",
    desc: "Prática de metodologias ágeis, como Scrum e Kanban, com foco em entregas contínuas e eficientes, priorizando código limpo e de fácil manutenção.",
  },
  {
    icon: Globe,
    title: "LOCALIZAÇÃO",
    desc: "Atualmente moro em Amontada-CE.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" } as const,
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className=" sm:py-32 relative">
      <div className="container  sm:px-10 lg:px-16" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl font-bold"
              >
                <span className="gradient-text">Olá, Me Chamo</span>
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl font-bold text-foreground mt-1"
              >
                Davi Castro
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground text-base sm:text-lg leading-relaxed"
            >
              Sou desenvolvedor Front-End movido pela curiosidade e pela vontade de criar
              experiências digitais marcantes. Do conceito à interface final, acredito que cada
              linha de código conecta inovação e propósito. Gosto de unir tecnologia e negócios
              para gerar soluções de valor real. Guiado pela fé em Deus, busco resultados com
              significado e impacto positivo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-xl px-5 py-4 border-l-2 border-primary"
            >
              <p className="text-sm italic text-muted-foreground">
                "Aproveitando a IA como uma ferramenta profissional, não como um substituto."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Code2 className="w-4 h-4" />
                Fale Comigo
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 border border-primary/50 text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Code2 className="w-4 h-4" />
                Ver Projetos
              </a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-xl">
                <img
                  src="../src/assets/imgs/Davi.jpg"
                  alt="Davi Castro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: 3 Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-3 gap-5  mx-auto"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-hover rounded-xl p-6 space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground tracking-wide text-sm">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
