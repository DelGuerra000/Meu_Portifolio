import { projects } from "@/app/data/projects";
import { Project } from "@/app/types/project";

/**
 * Simulates a data fetch. Easy to swap for a database or CMS call later.
 */
export async function getProjects(): Promise<Project[]> {
    return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
    return projects.find((project) => project.slug === slug);
}
