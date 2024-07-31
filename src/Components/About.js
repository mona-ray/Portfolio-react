import React from 'react';
import './StyleShhet/About.css';
import ProfileImage from './Images/Mona.jpg';
import ResumePDF from './Resume/Mona-Ray-CV.pdf';

const About = () => {
    const handleResumeClick = () => {
        window.open(ResumePDF, '_blank'); // Open the PDF in a new tab
      };

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src= {ProfileImage} alt="Profile" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Mona Ray. I'm a post graduate of 2021 from Accurate Institute of Management & Technology at Greater Noida with a degree in MCA. I'm a graduate of 2019 from IP College at Bulandshahr with a degree in BCA.  I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.
          </p>
          <button className="resume-button" onClick={handleResumeClick}>Resume</button>
        </div>
      </div>
    </section>
  );
};

export default About;
