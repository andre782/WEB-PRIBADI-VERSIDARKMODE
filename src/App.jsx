import React, { useState } from 'react';
import Heeader from './component/header/Heeader';
import Home from "./component/home/Home";
import About from './component/about/About';
import Skill from "./component/Skill/Skill";
import Service from "./component/service/Service";
import Quaalification from './component/qualification/Quaalification';
import Work from "./component/work/Work";
import Contact from './component/contact/Contact';
import Footer from "./component/footer/Footer";
import './App.css';
import './modedark.css'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`allkonten ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Heeader isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <main className='main'>
        <Home isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <About isDarkMode={isDarkMode} />
        <Skill />
        <Service />
        <Quaalification />
        <Work />
        <Contact />
      </main>
      <Footer className={`footer ${isDarkMode ? 'dark-mode' : 'light-mode'}`} />
    </div>
  );
}

export default App;
