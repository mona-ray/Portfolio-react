import React from 'react';
import './StyleShhet/Home.css';
import { Link } from 'react-router-dom';

const Home = ({ isDarkMode }) => {
  return (
    <section id="home" className="content-section" style={{ paddingTop: '250px', textAlign: 'center' }}>
      <h1 className="titleStyle">Mona Ray</h1>
      <p className="paraStyle">Passionate Frontend Developer crafting dynamic, user-centric web experiences.</p>
      <div className="iconLink">
        <a href="https://github.com/mona-ray" target="_blank" rel="noopener noreferrer">
          <i className={`fa-brands fa-github icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`}></i>
        </a>
        <a href="https://www.linkedin.com/in/mona-ray-a849b8200" target="_blank" rel="noopener noreferrer">
          <i className={`fa-brands fa-linkedin icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`}></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
