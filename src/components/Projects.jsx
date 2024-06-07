// /pages/projects/add.js
'use client'
import React, {  useState } from 'react';
import { BsCodeSlash } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import Image from "next/image";
import ProjectTag from './ProjectTag';
const projectsData = [
    {
      id: 1,
      title: "News Site",
      description: "User can choose category of news",
      image: "/image/news.PNG",
      tag: ["All", "React"],
      gitUrl: "https://github.com/leylagahramanova/News",
      previewUrl: "https://www.linkedin.com/posts/leyla-gahramanova-124918262_frontenddevelopers-intern-development-activity-7102018446904766464-RAo-?utm_source=share&utm_medium=member_desktop",
    },
    {
        id: 2,
        title: "Burger Site",
        description: "User can choose burger",
        image: "/image/burger.PNG",
        tag: ["All", "Next"],
        gitUrl: "https://github.com/leylagahramanova/burgers",
        previewUrl: "https://burgers-yammy.vercel.app/",
      },
    {
      id: 3,
      title: "Avia Flights",
      description: "Site for the maintenance of flight simulators",
      image: "/image/Login-COLLAGE.jpg",
      tag: ["All", "React"],
      gitUrl: "https://github.com/leylagahramanova/aviaflights",
      previewUrl: "https://www.linkedin.com/posts/leyla-gahramanova-124918262_the-web-application-created-for-the-maintenance-activity-7104358830758592512-hOsB?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 4,
      title: "Movie Site",
      description: "User can wath trailers. Made on java",
      image: "/image/movie.PNG",
      tag: ["All", "React"],
      gitUrl: "https://github.com/leylagahramanova/movie-gold-v1",
      previewUrl: "https://www.linkedin.com/posts/leyla-gahramanova-124918262_java-react-opentowork-activity-7117184789509517314-Cr7w?utm_source=share&utm_medium=member_desktop",
    },
    {
        id: 5,
        title: "Happy New Year",
        description: "Greeting card",
        image:  "/image/Card.PNG",
        tag: ["All", "React"],
        gitUrl: "https://github.com/leylagahramanova/holiday",
        previewUrl: "https://leylagahramanova.github.io/holiday/",
      },
      {
        id: 6,
        title: "Quiz Site",
        description: "Questions about React",
        image: "/image/quiz.jpg",
        tag: ["All", "React"],
        gitUrl: "https://github.com/leylagahramanova/front",
        previewUrl: "https://leylagahramanova.github.io/front/",
      },
    {
      id: 7,
      title: "Cassiopeia",
      description: "Information about satellites",
      image: "/image/space.jpeg",
      tag: ["All", "HTML/CSS"],
      gitUrl: "https://github.com/leylagahramanova/space_site",
      previewUrl: "https://leylagahramanova.github.io/space_site/",
    },
    {
      id: 8,
      title: "Flora site",
      description: "'About' page and 'Products' page",
      image: "/image/web.jpg",
      tag: ["All", "HTML/CSS"],
      gitUrl: "https://github.com/leylagahramanova/leylagardendshop",
      previewUrl: "https://leylagahramanova.github.io/leylagardendshop/",
    },
    {
      id: 9,
      title: "Tea Cafe",
      description: "Site about tea",
      image: "/image/tea_cafe.jpeg",
      tag: ["All", "HTML/CSS"],
      gitUrl: "https://github.com/leylagahramanova/leylateahouse-main/",
      previewUrl: " https://leylagahramanova.github.io/leylateahouse-main/",
    },
    {
        id: 10,
        title: "Enjoy LIFE with a cake",
        description: "",
        image: "/image/Cakes.PNG",
        tag: ["All", "Figma"],
        gitUrl: "/",
        previewUrl: "/https://www.linkedin.com/posts/leyla-gahramanova-124918262_figma-frontenddeveloper-webdeveloper-activity-7091827307278942209-GJz2?utm_source=share&utm_medium=member_desktop",
      },
      {
        id: 11,
        title: "JavaJolt Roasters",
        description: "Freshly roasted beans make the best cup of coffee.",
        image: "/image/Coffee.PNG",
        tag: ["All", "Next"],
        gitUrl: "https://github.com/leylagahramanova/coffee-coffee",
        previewUrl: "https://coffee-coffee.vercel.app/",
      },
      {
        id: 12,
        title: "Scoot",
        description: "Pick your scooter",
        image: "/image/Scooter.PNG",
        tag: ["All", "Next"],
        gitUrl: "https://github.com/leylagahramanova/scooter-scoot-scoot",
        previewUrl: "https://scooter-scoot-scoot.vercel.app/",
      },  {
        id: 13,
        title: "Interno",
        description: "Let Your Home Be Unique",
        image: "/image/Interno.PNG",
        tag: ["All", "Next"],
        gitUrl: "https://github.com/leylagahramanova/style-style-style",
        previewUrl: "https://style-style-style.vercel.app/",
      },  {
        id: 14,
        title: "BookStore",
        description: "Buy books online. Support local bookstores.",
        image: "/image/BookTable.PNG",
        tag: ["All", "Java"],
        gitUrl: "https://github.com/leylagahramanova/BookShop",
        previewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7202314644311449600/",
      },{
        id: 15,
        title: "Calculator",
        description: "Calculator on Java",
        image: "/image/jcalc.PNG",
        tag: ["All", "Java"],
        gitUrl: "https://github.com/leylagahramanova/Java/edit/master/src/com/codewithmosh/Calculator.java",
        previewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7204768450051801090/",
      }
  ];
  
export default function Projects() {
    const [tag, setTag] = useState("All");
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
    const sortedProjects = projectsData.sort((a, b) => b.id - a.id);

    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
 
  const shouldHideScrollbar = filteredProjects.length < 3;
    return (
      <div className="sector" id="projects">
      <section className="container">
          <div>
              <h2 style={{ textAlign: "center" }}>Projects</h2>
              <br />
              <h4 style={{ textAlign: "center", color: '#e6e6e6' }}>
                  <small>Click on Card to see the info.</small>
              </h4>
              <br />
              <div className={`tag ${shouldHideScrollbar ? 'hide-scrollbar' : ''}`}>
                  <ProjectTag
                      onClick={handleTagChange}
                      name="All"
                      isSelected={tag === "All"}
                  />
                  <ProjectTag
                      onClick={handleTagChange}
                      name="HTML/CSS"
                      isSelected={tag === "HTML/CSS"}
                  />
                  <ProjectTag
                      onClick={handleTagChange}
                      name="Next"
                      isSelected={tag === "Next"}
                  />
                  <ProjectTag
                      onClick={handleTagChange}
                      name="React"
                      isSelected={tag === "React"}
                  />
                  <ProjectTag
                      onClick={handleTagChange}
                      name="Java"
                      isSelected={tag === "Java"}
                  />
                  <ProjectTag
                      onClick={handleTagChange}
                      name="Figma"
                      isSelected={tag === "Figma"}
                  />
              </div>
              <br />
              <div className={`App scrollbar force-overflow ${shouldHideScrollbar ? 'hide-scrollbar' : ''}`} id='style-13'>
                  {filteredProjects.map((project) => (
                      <div className="card" key={project.id}>
                          <img src={project.image} alt={project.title} />
                          <div className="overlay">
                              <div style={{ textAlign: 'center', fontSize: '1.6rem' }}>
                                  {project.title}
                              </div>
                              <div className="description" style={{ maxHeight: '5rem', lineHeight: '1.5rem', flex: 1, fontSize: '1.5rem' }}>
                                  &nbsp;{project.description}
                              </div>
                              <div className="buttons">
                                  <a href={project.previewUrl}>
                                      <AiFillEye />
                                  </a>
                                  <a href={project.gitUrl}>
                                      <BsCodeSlash />
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
