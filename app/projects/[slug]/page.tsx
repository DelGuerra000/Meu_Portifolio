import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getProjects } from "@/lib/projects";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

/**
 * Generates static params for all projects at build time.
 */
export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
            {/* Header / Nav */}
            <nav className="max-w-[1400px] mx-auto px-8 md:px-16 py-12">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-4 text-gray-500 hover:text-white transition-all group"
                >
                    <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
                    </span>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">Todos os Projetos</span>
                </Link>
            </nav>

            <div className="max-w-[1400px] mx-auto px-8 md:px-16 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    {/* Left: Content */}
                    <div className="lg:col-span-7 space-y-16">
                        <header className="space-y-8">
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
                                {project.title}
                            </h1>
                            <p className="text-2xl text-gray-400 font-light leading-relaxed">
                                {project.description}
                            </p>
                        </header>

                        <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                            <Image
                                src={project.images[0]}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500">Sobre o Projeto</h2>
                            <div className="text-xl text-gray-300 leading-relaxed font-light">
                                <p className="whitespace-pre-line">{project.longDescription}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <aside className="lg:col-span-5">
                        <div className="sticky top-24 space-y-16">
                            <div className="space-y-8">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Tecnologias</h3>
                                <div className="flex flex-wrap gap-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-lg font-medium text-gray-300 hover:text-white transition-colors cursor-default"
                                        >
                                            {tech}<span className="text-blue-500/50 ml-4">/</span>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6 pt-12 border-t border-white/5">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between w-full py-8 px-10 rounded-3xl bg-blue-600 hover:bg-blue-500 text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <span className="text-xl font-bold">Ver Online</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </a>
                                )}
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between w-full py-8 px-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <span className="text-xl font-bold">GitHub</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
