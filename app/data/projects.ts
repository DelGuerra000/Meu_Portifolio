export interface Project {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    learnings: string[];
    image: string;
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "task-manager",
        title: "Task Manager",
        shortDescription:
            "Aplicação web para gerenciamento de tarefas pessoais (CRUD) com persistência local.",
        fullDescription:
            "Uma aplicação completa de gerenciamento de tarefas que permite aos usuários criar, ler, atualizar e excluir tarefas. O foco principal foi a experiência do usuário e a persistência de dados sem a necessidade de um backend complexo inicial.",
        technologies: ["React", "CSS Modules", "LocalStorage"],
        githubUrl: "https://github.com/adeildocunha/task-manager",
        learnings: [
            "Gerenciamento de estado com Hooks",
            "Persistência de dados no navegador",
            "Componentização",
        ],
        image: "/projects/task-manager.png",
    },
    {
        id: "2",
        slug: "landing-page",
        title: "Landing Page Institucional",
        shortDescription:
            "Página responsiva para apresentação de serviços, focada em performance e SEO.",
        fullDescription:
            "Desenvolvimento de uma landing page de alta conversão, otimizada para motores de busca e com tempo de carregamento mínimo. Utiliza práticas modernas de HTML semântico e CSS responsivo.",
        technologies: ["HTML5", "CSS3 (Flexbox/Grid)", "JavaScript"],
        githubUrl: "https://github.com/adeildocunha/landing-page",
        learnings: [
            "Design responsivo (Mobile First)",
            "HTML Semântico",
            "Manipulação do DOM",
        ],
        image: "/projects/landing-page.png",
    },
    {
        id: "3",
        slug: "api-users",
        title: "API de Usuários",
        shortDescription: "API RESTful para cadastro e consulta de usuários.",
        fullDescription:
            "Backend robusto construído com Node.js e Express, implementando operações CRUD completas e interações com banco de dados SQL. Focado em boas práticas de arquitetura e segurança.",
        technologies: ["Node.js", "Express", "SQL (SQLite)"],
        githubUrl: "https://github.com/adeildocunha/api-users",
        learnings: [
            "Rotas e Controllers",
            "Consultas SQL básicas",
            "Versionamento de backend",
        ],
        image: "/projects/api-users.png",
    },
];
