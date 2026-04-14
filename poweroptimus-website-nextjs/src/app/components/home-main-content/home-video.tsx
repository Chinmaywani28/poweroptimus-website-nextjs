"use client";
import React from "react";
import "./home-video.css";

const HomeVideo: React.FC = () => {
  

  return (
   <section className="videoHero">

      {/* Background Video */}
      <video
        className="videoHeroVideo"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/EnvirOptimus_Website_Hompage_Banner_Video.mp4" type="video/mp4" />
      </video>

      {/* Overlay (optional for better text visibility) */}
      <div className="videoOverlay"></div>

      {/* Content */}
      <div className="videoContent">
        <h1 className="Header1 TextBlue">
            Data-driven Environment and Energy Management Solution
        </h1>
        <div className="body1 textWhite">
            Transforms real-time operational and environmental data into actionable insights for efficiency, compliance, and sustainable performance.
          </div>

        <button className="heroBtn">
          Watch Video
        </button>
      </div>

    </section>

    
  );
};

export default HomeVideo;
