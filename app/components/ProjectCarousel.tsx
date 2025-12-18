"use client";

import { useRef } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 400;
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <div className="relative w-full py-4">
            <div className="flex justify-end gap-3 mb-6">
                <button
                    onClick={() => scroll("left")}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white hover:scale-110 active:scale-95"
                    aria-label="Scroll left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white hover:scale-110 active:scale-95"
                    aria-label="Scroll right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide px-4 -mx-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {projects.map((project) => (
                    <div
                        key={project.slug}
                        className="flex-none w-[85vw] md:w-[450px] snap-center"
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}
