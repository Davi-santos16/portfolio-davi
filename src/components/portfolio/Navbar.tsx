import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Box, Book, Mail, Image as ImageIcon, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const navLinks = [
  { label: "Início", href: "#", icon: Home, isIconOnly: true },
  { label: "Sobre Mim", href: "#sobre", icon: User },
  { label: "Tecnologias", href: "#tecnologias", icon: Book },
  { label: "Projetos", href: "#projetos", icon: Box },
  { label: "Contato", href: "#contato", icon: Mail },
];

const Navbar = () => {
  const [active, setActive] = useState("#");
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash || "#");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActive(href);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
    window.history.pushState(null, "", href);
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
          className="pointer-events-auto hidden sm:flex items-center gap-2 py-1 px-1 backdrop-blur-xl border border-white/50 rounded-full shadow-2xl text-white bg-transparent"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
                  link.isIconOnly
                    ? isActive
                      ? "bg-white/10"
                      : "hover:bg-white/5"
                    : isActive
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
                {!link.isIconOnly && (
                  <span className="text-sm font-medium tracking-wide">
                    {link.label}
                  </span>
                )}
              </a>
            );
          })}
          
          <div className="w-[1px] h-6 bg-white/10 mx-2" />
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-[18px] h-[18px]" strokeWidth={2} />
            ) : (
              <Moon className="w-[18px] h-[18px]" strokeWidth={2} />
            )}
          </button>
        </motion.nav>
      </div>

      
      <div className="fixed top-4 right-4 z-50 sm:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-3 bg-[#0B0C10]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl text-white pointer-events-auto"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

     
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 sm:hidden bg-[#0B0C10]/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = active === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleScroll(e, link.href);
                      setMobileOpen(false);
                    }}
                    className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2} />
                    <span className="text-base font-medium">{link.label}</span>
                  </a>
                );
              })}
              
              <div className="h-[1px] w-full bg-white/10 my-2" />
              
              <button
                onClick={() => {  
                  toggleTheme();
                  setMobileOpen(false);
                }}
                className="flex items-center gap-4 px-4 py-4 rounded-2xl text-white/60 hover:text-white hover:bg-white/5 transition-colors w-full "
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" strokeWidth={2} />
                ) : (
                  <Moon className="w-5 h-5" strokeWidth={2} />
                )}
                <span className="text-base font-medium">
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
