import React from 'react';
import './StyleShhet/Skills.css';
import gifImage from './Images/web dev.gif';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-content">
        <div className="skills-columns">
          <div className="skills-column">
            <div className="skill">
              <span>React Js</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
              <span className="percentage">70%</span>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
              <span className="percentage">70%</span>
            </div>
            <div className="skill">
              <span>HTML/HTML5</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
              </div>
              <span className="percentage">90%</span>
            </div>
            <div className="skill">
              <span>CSS/CSS3</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
              <span className="percentage">80%</span>
            </div>
          </div>
          <div className="skills-column">
            <div className="skill">
              <span>Bootstrap</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
              <span className="percentage">80%</span>
            </div>
            <div className="skill">
              <span>Git</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
              <span className="percentage">70%</span>
            </div>
            <div className="skill">
              <span>Shopify</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
              <span className="percentage">70%</span>
            </div>
            <div className="skill">
              <span>AEM</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '50%' }}></div>
              </div>
              <span className="percentage">50%</span>
            </div>
          </div>
        </div>
        <div className="skills-image">
          <img src={gifImage} alt="Skills GIF" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
