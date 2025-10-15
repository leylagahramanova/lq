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
    <div className="flex flex-col  min-h-screen " id="projects"  >
      <section className="flex justify-center items-center w-full  ">
        <div className="w-full ">
          <h2 className="text-center text-3xl mb-4">Projects</h2>


          {/* Tags */}
          <div className="flex  mb-8">
            <select
              value={tag}
              onChange={(e) => handleTagChange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            >
              <option value="All">All</option>
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
            className="flex space-x-4 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
          >
            {loading && (<div className="text-center w-full">Loading...</div>)}
            {error && (<div className="text-center w-full text-red-500">{error}</div>)}
            {!loading && !error && filteredProjects.slice().reverse().map((project) => (
              <div
                key={project.id}
                className="bg-white border group border-gray-200 rounded-xl cursor-pointer shadow-sm hover:shadow-md transition duration-200 flex flex-col max-w-[320px]  overflow-hidden flex-shrink-0"
              >
                <div className="relative" >
                  <Image
                    className="object-cover max-w-full rounded-t-xl"
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
                  <div className="absolute top-2 right-2">
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {project.tag[0]}
                    </span>
                  </div>
                </div>

                <div className="p-3 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-lg text-gray-800 font-semibold truncate mr-2 flex-grow">
                      {project.title}
                    </p>
                  </div>

                  <p className="text-base text-gray-600 mb-3 ">
                    {project.description}
                  </p>

                  <div className="flex items-center  gap-4 mt-auto">
                    <a
                      href={project.previewUrl}
                      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-gray-600 hover:text-blue-500 transition-colors"
                      target="_blank"
                    >
                      Preview
                    </a>
                    <a
                      href={project.gitUrl}
                      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-gray-600 hover:text-blue-500 transition-colors"
                      target="_blank"
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