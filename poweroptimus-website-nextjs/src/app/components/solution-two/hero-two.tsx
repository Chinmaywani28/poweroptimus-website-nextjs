"use client";
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './hero-two.css'; // Import HomePage specific styles

const HeroTwo = () => {
  const { t } = useTranslation(); // Initialize translation hook
  
  return (
    
    <section className="overview-section">
      <div className="image-container">
        <img src="/solution-hero-bg.png" alt="Overview" className="bg-image" />
        <div className="text-content">
          <div className="Header1sec TextWhite heroTitle">PowerOptimus – A Smart Solution for Energy Management and Environmental Monitoring</div>
          <div className="body1sec TextWhite heroDesc">
            PowerOptimus is an intelligent, scalable building management system (BMS) designed to support industries and commercial buildings in driving efficiency, reducing operational costs, and aligning with sustainability goals through robust energy monitoring and management systems.
          </div>
        </div>
      </div>
    </section>




    
  )
}

export default HeroTwo
