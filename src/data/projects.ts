export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techs: string[];
  image: string;
  gallery: string[];
  demo: string;
  code: string;
  features: string[];
  category: "Web App" | "Mobile App" | "Full-Stack";
}

export const projects: Project[] = [
  {
    slug: "hive-hub",
    title: "Hive-hub - Plataforma de Inovação aberta",
    description: "Hive Hub é uma plataforma web para centralização e gestão eficiente de informações, com interface moderna, responsiva e foco em desempenho e usabilidade.",
    longDescription: "O Hive Hub foi projetado para conectar empresas e talentos através de inovação aberta. A plataforma serve como um ponto central onde desafios de negócios podem ser resolvidos colaborativamente. O foco do desenvolvimento foi criar uma interface ultra-rápida e intuitiva, garantindo a melhor experiência tanto para os administradores quanto para os usuários finais.",
    techs: ["Next.js", "React.js", "TypeScript", "Tailwind"],
    image: "/projects/Hive-hub.png",
    gallery: ["/projects/Hive-hub.png"],
    demo: "https://plataforma-inovacao-squad02-front-e.vercel.app/landingpage",
    code: "",
    features: [
      "Autenticação segura e gestão de usuários",
      "Dashboard interativo com métricas de inovação",
      "Design responsivo otimizado para dispositivos móveis e desktop",
      "Integração com APIs REST para sincronização de dados em tempo real"
    ],
    category: "Full-Stack"
  },
  {
    slug: "mapa-interativo-amotur",
    title: "Mapa interativo - AmoTur",
    description: "Plataforma de turismo focada na visualização e gestão de pontos turísticos em mapa interativo, com integração a API e interface moderna.",
    longDescription: "Desenvolvido em parceria com a Amotur e o Sebrae, esta plataforma revoluciona a forma como turistas descobrem pontos de interesse. Utilizando Leaflet para renderização interativa de mapas de alto desempenho, o sistema permite a gestão completa do turismo local. A arquitetura foi pensada para escalar, consumindo dados geográficos de uma API REST customizada.",
    techs: ["React", "TypeScript", "Tailwind", "Next.js", "Leaflet"],
    image: "/projects/amotur.png",
    gallery: ["/projects/amotur.png"],
    demo: "https://amotur-front-end.vercel.app/",
    code: "",
    features: [
      "Renderização de mapas iterativos com Leaflet",
      "Filtros dinâmicos por categoria de turismo",
      "Painel de administração para adicionar novos pontos",
      "Integração contínua e consumo de API de terceiros"
    ],
    category: "Web App"
  },
  {
    slug: "todo-list",
    title: "Todo-List",
    description: "Sistema completo de gerenciamento de tarefas (Todo List). interface responsiva e manipulação dinâmica do DOM.",
    longDescription: "Um projeto focado em dominar os fundamentos do React e gerenciamento de estado. Este Todo List não é apenas mais um aplicativo de tarefas; ele apresenta persistência local de dados, animações fluidas nas interações (com framer-motion) e uma interface dark-mode incrivelmente polida, provando que até aplicativos simples podem ter um nível de produção premium.",
    techs: ["React", "TypeScript", "tailwindcss"],
    image: "/projects/todo-List.png",
    gallery: ["/projects/todo-List.png"],
    demo: "https://todo-two-psi-54.vercel.app",
    code: "https://github.com/Davi-santos16/todo",
    features: [
      "Operações completas de CRUD (Criar, Ler, Atualizar, Deletar)",
      "Persistência de dados utilizando LocalStorage",
      "Animações suaves nas transições de estado das tarefas",
      "Design minimalista focado na produtividade do usuário"
    ],
    category: "Web App"
  }
];
