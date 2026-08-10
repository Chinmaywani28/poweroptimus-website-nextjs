"use client";
import { useTranslation } from 'react-i18next';
import './hero.css'

type HeroProps = {
 headerText: string,
 bodyText: string,
 image?: string,
 alt?: string
}

const Hero = ({headerText,bodyText,image,alt}: HeroProps) => {


  const { t } = useTranslation(); // Initialize translation hook

  

  return (
    <>
    {/* <h1>
      this is hero 
    </h1> */}
    <div id="hero-section" className="home-container">
        <div className="home"> 
                    {/* sectin 1.1  */}
                <div className='home_sectionHeader_left'>
                <h1 className='Header1 TextBlue'>
                        {headerText}

                        {/* Building a Sustainable Future with Smart Energy Solution */}
                </h1>
                <div className='body1 TextGray1'>
                        {bodyText}
                        {/* Introducing our state-of-the-art solution designed to monitor, manage, analyze, and optimize energy consumption. With cutting-edge technology, our solution provides real-time insights and predictive analytics, enabling businesses to achieve unparalleled energy efficiency and operational excellence. */}
                </div>
                </div>

                {/* section 1.2 */}
                <div className="home_sectionHeader_right"> 
                  {/* <img src="/Solutions_Header_Vector_Img 1.svg" alt="Logo" className="header-image" /> */}
                  <img src={image} alt={alt} className="header-image" />
                  
                </div>
        </div>
        </div>
    </>
    
    
  ); 
}

export default Hero;

