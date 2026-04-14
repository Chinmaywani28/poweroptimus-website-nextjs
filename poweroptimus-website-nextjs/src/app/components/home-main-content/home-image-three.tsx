"use client";
import React from "react";
import "./home-image-three.css";

const HomeImageThree: React.FC = () => {
  

  return (
   <section className="videoHero">

      {/* Background Video */}
      {/* <video
        className="videoHeroVideo"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/EnvirOptimus_Website_Hompage_Banner_Video.mp4" type="video/mp4" />
      </video> */}

      {/* ✅ IMAGE BACKGROUND (replaced video) */}
      <img
        src="/key-ver-five.png"  // 🔥 replace with your image path
        alt="Hero Background"
        className="videoHeroVideo"
      />

      {/* Overlay */}
      <div className="videoOverlay"></div>

      {/* 🔥 NEW GRID CONTENT (same like hero) */}
      {/* <div className="videoGridContainer">
        <div className="videoGrid">

          
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
      </div> */}

    </section>


    
  );
};

export default HomeImageThree;
