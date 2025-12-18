import { Project } from "../types/project";

export const projects: Project[] = [
    {
        slug: "task-manager",
        title: "Task Manager",
        description: "Aplicação web para gerenciamento de tarefas pessoais.",
        longDescription: "Uma aplicação completa de gerenciamento de tarefas que permite aos usuários criar, ler, atualizar e excluir tarefas. O foco principal foi a experiência do usuário e a persistência de dados.",
        technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        images: ["/projects/task-manager.png"],
        githubUrl: "https://github.com/adeildocunha/task-manager",
        liveUrl: "https://task-manager-demo.vercel.app"
    },
    {
        slug: "landing-page",
        title: "Landing Page Institucional",
        description: "Página responsiva para apresentação de serviços.",
        longDescription: "Desenvolvimento de uma landing page de alta conversão, otimizada para motores de busca e com tempo de carregamento mínimo.",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
        images: ["/projects/landing-page.png"],
        githubUrl: "https://github.com/adeildocunha/landing-page"
    },
    {
        slug: "api-users",
        title: "API de Usuários",
        description: "API RESTful para cadastro e consulta de usuários.",
        longDescription: "Backend robusto construído com Node.js e Express, implementando operações CRUD completas e interações com banco de dados SQL.",
        technologies: ["Node.js", "Express", "SQLite", "Prisma"],
        images: ["/projects/api-users.png"],
        githubUrl: "https://github.com/adeildocunha/api-users"
    }
];
