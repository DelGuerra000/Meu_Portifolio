import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen relative flex items-center justify-center py-20 px-4 overflow-hidden border-4 border-red-500">
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover blur-3xl opacity-30 scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container max-w-5xl mx-auto relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors group"
                >
                    <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
                    Voltar para Home
                </Link>

                <article className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                            {project.shortDescription}
                        </p>
                    </header>

                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-5 py-2 rounded-full bg-white/10 text-white border border-white/10 font-medium text-sm tracking-wide"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-[2fr,1fr] gap-12 mb-12">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <h2 className="text-2xl font-semibold mb-4 text-white">Sobre o Projeto</h2>
                            <p className="text-gray-300 leading-relaxed">
                                {project.fullDescription}
                            </p>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-8 border border-white/5 h-fit">
                            <h2 className="text-xl font-semibold mb-6 text-white flex items-center">
                                <span className="w-1 h-6 bg-blue-500 rounded-full mr-3"></span>
                                Aprendizados
                            </h2>
                            <ul className="space-y-4">
                                {project.learnings.map((learning, index) => (
                                    <li key={index} className="flex items-start text-gray-300 text-sm leading-relaxed">
                                        <span className="mr-3 text-blue-400 mt-1">•</span>
                                        {learning}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10 justify-center">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black font-bold py-4 px-8 rounded-full text-center hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
                        >
                            Ver Código no GitHub
                        </a>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-center hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
                            >
                                Ver Projeto Online
                            </a>
                        )}
                    </div>
                </article>
            </div>
        </main>
    );
}
