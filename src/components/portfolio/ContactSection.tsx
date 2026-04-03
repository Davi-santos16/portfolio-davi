import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MessageSquare,
  User,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    sub: "Vamos conectar",
    href: "https://www.linkedin.com/in/davicastro213/",
  },
  {
    icon: Github,
    label: "GitHub",
    sub: "Davi-santos16",
    href: "https://github.com/Davi-santos16",
  },
  {
    icon: Youtube,
    label: "",
    sub: "@Dandan.tutori...",
    href: "https://youtube.com",
  },
  {
    icon: Mail,
    label: "Email",
    sub: "davicastro213@gmail.com",
    href: "mailto:davicastro213@gmail.com",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 radial-fade opacity-40" />
      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center space-y-3 mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase">
            Contato
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Vamos <span className="gradient-text">conversar?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tem alguma pergunta? Envie uma mensagem e responderei o mais breve
            possível.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <h3 className="text-xl font-bold gradient-text">
                Envie uma mensagem!
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Me conte mais como posso te ajudar!
              </p>
            </div>

            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full bg-secondary/50 border border-border rounded-lg pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="Seu email"
                className="w-full bg-secondary/50 border border-border rounded-lg pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-muted-foreground" />
              <textarea
                placeholder="Sua mensagem"
                rows={4}
                className="w-full bg-secondary/50 border border-border rounded-lg pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>
            <Button variant="neon" className="w-full gap-2">
              <Send className="w-4 h-4" />
              Enviar Mensagem
            </Button>
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold gradient-text">
                  Acesse minhas redes:
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Entre em contato e vamos criar algo juntos!
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-primary rounded-full" />
                <p className="text-sm font-semibold text-foreground tracking-wide">
                  Conecte-se Comigo
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="glass-hover rounded-xl p-4 flex items-center gap-4 cursor-pointer group"
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm">
                        {link.label}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {link.sub}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-xs text-muted-foreground text-center mt-6 pt-4 border-t border-border/50"
            >
              Disponível para freelance
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
