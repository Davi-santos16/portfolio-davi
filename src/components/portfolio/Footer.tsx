import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-primary" />
          <span className="font-mono">&lt;Dev /&gt;</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6">
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#projetos" className="hover:text-primary transition-colors">Projetos</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
