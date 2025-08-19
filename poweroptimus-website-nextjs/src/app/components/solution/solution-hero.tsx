"use client";
import { useTranslation } from 'react-i18next';
import './solution-hero.css'

type HeroProps = {
 headerText: string,
 bodyText: string
}

const SolutionHero = ({headerText,bodyText}: HeroProps) => {


  const { t } = useTranslation(); // Initialize translation hook

  

  return (
   <>
      <div id="hero-section" className="home-container">
        <div className="home">
          {/* === Section 1.1 === */}
          <div className="hero-left-content">
            <div className="Header1sec TextWhite">
              {headerText}
              {/* Building a Sustainable Future with Smart Energy Solution */}
            </div>
            <div className="body1 TextWhite">
              {bodyText}
              {/* Introducing our state-of-the-art solution... */}
            </div>
          </div>

          {/* === Section 1.2 === */}
          <div className="home_sectionHeader_right">
            {/* <img src="/HeaderSVG.svg" alt="Logo" className="header-image" /> */}
          </div>
        </div>
      </div>
    </>
    
    
  ); 
}

export default SolutionHero;

