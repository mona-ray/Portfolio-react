import React from 'react';
import './StyleShhet/Project.css';

const Projects = ({ isDarkMode }) => {
  const projects = [
     {
    title: 'Keep Master Notes',
    description: 'The "Keep Notes" project is a React.js application designed for managing personal notes efficiently. It features functionalities for creating, editing, and organizing notes, with a user-friendly interface and responsive design.',
    gitLink: 'https://github.com/mona-ray/keep-notes',
    demoLink: ' https://keep-notes-master.web.app/'
  },
  {
    title: 'Weather App',
    description: 'The weather app built with React.js provides real-time weather updates, forecasts, and interactive features. Users can search for locations, view detailed conditions, and enjoy a clean, responsive interface.',
    gitLink: 'https://github.com/mona-ray/WeatherApp',
    demoLink: 'https://weather-app-eight-gray-56.vercel.app/'
  },
  {
    title: 'Todo App',
    description: 'The todo app, developed with React.js, allows users to manage tasks with features like adding, editing, and deleting items. It offers a simple interface for organizing and tracking daily activities.',
    gitLink: 'https://github.com/mona-ray/todo_list',
    demoLink: 'https://github.com/Mona105/Todo_List'
  },
  {
    title: 'Women Beyond Pink',
    description: 'Women Beyond Pink" is a book featuring a website created with Bootstrap 5. The site highlights womens achievements and stories, offering a modern, responsive design that enhances user engagement and accessibility.',
    
    demoLink: 'http://shilpiprasad.com/'
  },
  {
    title: 'Portfolio',
    description: 'The portfolio website uses Bootstrap, JavaScript, HTML, and CSS to showcase personal projects and skills. It features a responsive layout, interactive elements, and a clean design for a professional online presence.',
    gitLink: 'https://github.com/mona-ray/portfolio',
    demoLink: 'https://portfolio-26cd3.web.app'
  }
  ];

  return (
    <section id="project" className={`projects-section ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.gitLink && (
                <a href={project.gitLink} className="repo-link">
                  <i className="fa-brands fa-github"></i>
                </a>
              )}
              {project.demoLink && (
                <a href={project.demoLink} className="demo-link">
                  <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
