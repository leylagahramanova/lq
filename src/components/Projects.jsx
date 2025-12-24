// /pages/projects/add.js
'use client'
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { BsCodeSlash } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import Image from "next/image";
import ProjectTag from './ProjectTag';

const projectsData = [];

export default function Projects() {
  const [tag, setTag] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const scrollRef = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects?' + new Date().getTime(), {
          cache: 'no-store'
        });
        const data = await res.json();
        setProjects(Array.isArray(data) ? data : []);
      } catch (e) {
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const normalizeTag = (t) => {
    if (!t) return t;
    const m = t.trim().toLowerCase();
    if (m === 'next' || m === 'nextjs' || m === 'next.js') return 'Next.js';
    if (m === 'tailwind' || m === 'tailwindcss' || m === 'tailwind css') return 'Tailwind CSS';
    if (m === 'node' || m === 'nodejs' || m === 'node.js') return 'Node.js';
    if (m === 'mysql') return 'MySQL';
    if (m === 'mongodb') return 'MongoDB';
    if (m === 'react') return 'React';
    if (m === 'figma') return 'Figma';
    if (m === 'java') return 'Java';
    if (m === 'html/css' || m === 'html, css' || m === 'html css') return 'HTML/CSS';
    return t.trim();
  };

  const normalizedProjects = useMemo(() => {
    return projects.map((p) => ({
      ...p,
      tag: Array.from(new Set((p.tag || []).map(normalizeTag))),
    }));
  }, [projects]);

  const uniqueTags = useMemo(() => {
    const tags = new Set();
    normalizedProjects.forEach((p) => (p.tag || []).forEach((t) => tags.add(t)));
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  }, [normalizedProjects]);

  const filteredProjects = tag === "All"
    ? normalizedProjects
    : normalizedProjects.filter((project) => project.tag && project.tag.includes(tag));

  return (
    <div className="flex flex-col min-h-screen" id="projects">
      <section className="flex justify-center items-center w-full py-10 sm:py-12">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 sm:mb-8">
            <h2 className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl font-bold text-slate-50">
              Projects
            </h2>
            <div className="flex justify-center md:justify-end">
            <select
              value={tag}
              onChange={(e) => handleTagChange(e.target.value)}
                className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-indigo-200 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-700 text-sm sm:text-base font-medium bg-white backdrop-blur-sm transition-all duration-300 hover:border-indigo-300"
            >
                <option value="All">All Projects</option>
              {uniqueTags.map((tagName) => (
                <option key={tagName} value={tagName}>
                  {tagName}
                </option>
              ))}
            </select>
            </div>
          </div>
          {/* Projects Horizontal Scroll */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-6 scroll-smooth scrollbar-hide px-2"
          >
            {loading && (
              <div className="text-center w-full py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                <p className="mt-4 text-slate-600 font-medium">Loading projects...</p>
              </div>
            )}
            {error && (
              <div className="text-center w-full py-20">
                <p className="text-red-500 font-medium">{error}</p>
              </div>
            )}
            {!loading && !error && filteredProjects.slice().reverse().map((project) => (
              <div
                key={project.id}
                className="bg-white border group border-slate-200 rounded-2xl cursor-pointer shadow-sm hover:shadow-md transition-all duration-200 flex flex-col max-w-[340px] overflow-hidden flex-shrink-0"
              >
                <div className="relative overflow-hidden">
                  <Image
                    className="object-cover max-w-full rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={480}
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 300px"
                    priority={false}
                    loading="lazy"
                    placeholder={undefined}
                    style={{ aspectRatio: "1 / 0.8" }}
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-blue-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                      {project.tag[0]}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow bg-white/90">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xl text-slate-800 font-bold truncate mr-2 flex-grow">
                      {project.title}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 mt-auto">
                    <a
                      href={project.previewUrl}
                      className="flex-1 px-4 py-2.5 bg-slate-900 text-white rounded-lg shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 transition-colors duration-200 text-center font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview
                    </a>
                    <a
                      href={project.gitUrl}
                      className="flex-1 px-4 py-2.5 border-2 border-indigo-300 text-indigo-600 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 text-center font-medium hover:bg-indigo-50 hover:border-indigo-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}