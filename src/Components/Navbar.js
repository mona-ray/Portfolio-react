import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const NavBar = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
     
      <div className="hamburger" onClick={handleMenuToggle}>
        ☰
      </div>
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? <i className="fa-solid fa-moon icon"></i> :  <i className="fa-solid fa-moon icon"></i>}
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
             Skills
          </Link>
        </li>
       
        <li>
          <Link to="project" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            Project
          </Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default NavBar;
