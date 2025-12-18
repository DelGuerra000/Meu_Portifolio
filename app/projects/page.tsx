import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/projects";

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-24">
            <div className="max-w-6xl mx-auto space-y-16">
                <header className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Projetos</h1>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        Uma seleção dos meus trabalhos mais recentes, focados em performance,
                        experiência do usuário e código limpo.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group block space-y-6 bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-all hover:scale-[1.02]"
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-gray-400 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
