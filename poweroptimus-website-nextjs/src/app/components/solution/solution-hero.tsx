"use client";
import styles from './solution-hero.module.css';
import { useTranslation } from 'react-i18next';

type HeroProps = {
 headerText: string,
 bodyText: string
}

const SolutionHero = ({headerText,bodyText}: HeroProps) => {


  const { t } = useTranslation(); // Initialize translation hook

  

  return (
   <>
      <div id="hero-section" className={styles.homecontainer}>
        <div className={styles.home}>
          {/* === Section 1.1 === */}
          <div className={styles.heroleftcontent}>
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
          <div className={styles.homesectionHeaderright}>
            {/* <img src="/HeaderSVG.svg" alt="Logo" className="header-image" /> */}
          </div>
        </div>
      </div>
    </>
    
    
  ); 
}

export default SolutionHero;

