export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    images: string[];
    githubUrl: string;
    liveUrl?: string;
}
