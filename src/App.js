import React,{ useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Project';


import Skills from './Components/Skills';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="main-content">
        <Home />
        <About />
        <Skills />
        <Projects />
       
      </main>
    </div>
  );
}

export default App;
