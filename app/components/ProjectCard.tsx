import Image from "next/image";
import Link from "next/link";
import { Project } from "../types/project";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:border-blue-500/40 transition-all duration-500 h-full flex flex-col"
        >
            <div className="relative h-64 w-full overflow-hidden shrink-0">
                <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
            </div>

            <div className="p-8 flex flex-col items-center text-center grow">
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors tracking-tight">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-base mb-6 line-clamp-3 leading-relaxed font-light">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-3 justify-center mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="text-sm px-4 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10 font-medium tracking-wide group-hover:bg-blue-500/10 group-hover:text-blue-300 group-hover:border-blue-500/20 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="text-sm px-4 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
