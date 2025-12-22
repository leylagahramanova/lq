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
        const res = await fetch('/api/projects');
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
      <section className="flex justify-center items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Projects
          </h2>


          {/* Tags */}
          <div className="flex justify-center mb-8">
            <select
              value={tag}
              onChange={(e) => handleTagChange(e.target.value)}
              className="px-6 py-3 border-2 border-indigo-200 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-700 font-medium bg-white backdrop-blur-sm transition-all duration-300 hover:border-indigo-300"
            >
              <option value="All">All Projects</option>
              {uniqueTags.map((tagName) => (
                <option key={tagName} value={tagName}>
                  {tagName}
                </option>
              ))}
            </select>
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
                className="bg-white/80 backdrop-blur-sm border group border-indigo-100 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col max-w-[340px] overflow-hidden flex-shrink-0 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
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
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
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
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 text-center font-medium hover:from-indigo-600 hover:to-purple-600"
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