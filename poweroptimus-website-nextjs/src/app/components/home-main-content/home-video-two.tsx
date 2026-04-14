"use client";
import React from "react";
import "./home-video-two.css";

const HomeVideoTwo: React.FC = () => {
  

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

      {/* Overlay */}
      <div className="videoOverlay"></div>

      {/* 🔥 NEW GRID CONTENT (same like hero) */}
      <div className="videoGridContainer">
        <div className="videoGrid">

          {/* LEFT TEXT SECTION */}
          <div className="videoLeft">
            <h1 className="Header1 textWhite">
              Data-driven Environment and Energy Management Solution
            </h1>

            <div className="body1 textWhite">
              Transforms real-time operational and environmental data into actionable insights for efficiency, compliance, and sustainable performance.
            </div>

            <button className="heroBtn">
              Watch Video
            </button>
          </div>

        </div>
      </div>

    </section>


    
  );
};

export default HomeVideoTwo;
