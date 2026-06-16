"use client";
import React from "react";
import "./key-vertical-banner.css";

const KeyVerticalBanner: React.FC = () => {
  

  return (
   <section className="videoHero">

      {/* ✅ IMAGE BACKGROUND (replaced video) */}
      <img
        src="/Key Verticals Header Image.jpg"  // 🔥 replace with your image path
        alt="Hero Background"
        className="videoHeroVideo"
      />

      <div className="videoGridContainer">
        <div className="keyverticaldiv">

          
          <div className="content">
            <h1 className="Header1 TextWhite">
              Industries We Serve with EnvirOptimus – A Sustainable Energy Management Platform
            </h1>

            <div className="Header3 subheader">
              Empowering industries with sustainable energy optimization, environmental intelligence, and performance-driven operational efficiency through EnvirOptimus.
            </div>

          </div>

        </div>
      </div>

    </section>


    
  );
};

export default KeyVerticalBanner;
