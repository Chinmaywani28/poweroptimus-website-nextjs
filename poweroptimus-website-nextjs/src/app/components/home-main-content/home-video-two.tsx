"use client";
import React, { useState } from "react";
import "./home-video-two.css";

const HomeVideoTwo: React.FC = () => {

  const NavToYoutube = () => {
    window.open("https://youtu.be/WrFonQop5QY?si=l4NMsj5KNjL-lEQ2")
  }
  const [isOpen, setIsOpen] = useState(false);
  

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
              {/* Data-driven Environment and Energy Management Solution */}
              An Unified Digital Twin solution for Environment & Energy Management.
            </h1>

            <div className="body1 textWhite">
              Transform real-time operational and environmental data into actionable insights for efficiency, compliance, and sustainable performance.
            </div>

            <button onClick={() => setIsOpen(true)} className="heroBtn">
              Watch Video
            </button>

            {/* Modal */}
            {isOpen && (
              <div className="modalOverlay">
                
                <div className="modalContent">
                  
                  {/* Close Button */}
                  <span className="closeBtn" onClick={() => setIsOpen(false)}>
                    ✖
                  </span>

                  {/* YouTube Video */}
                  {/* <iframe
                    width="100%"
                    height="100%"
                    src="https://youtu.be/WrFonQop5QY?si=l4NMsj5KNjL-lEQ2"
                    title="YouTube video"
                    allowFullScreen
                  ></iframe> */}

                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WrFonQop5QY?si=-Z4rJbDN-WZA-u0P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>

                </div>
              </div>
            )}





          </div>

        </div>
      </div>

      

    </section>


    
  );
};

export default HomeVideoTwo;
