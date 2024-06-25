import React from 'react';
import "./home.css";
import Social from './Social';
import Data from "./Data";
// import ScrollDown from './ScrollDown';

const Home = ({ isDarkMode, toggleMode }) => {
  return (
    <section className='home section'>
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social isDarkMode={isDarkMode} toggleMode={toggleMode} />
          <div className="home__img"></div>
          <Data isDarkMode={isDarkMode} />
        </div>
        {/* <ScrollDown /> */}
      </div>
    </section>
  );
}

export default Home;
