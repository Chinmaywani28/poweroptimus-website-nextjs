"use client";

import React, { useState, useEffect } from "react";
import "./sustainable-dev.css";

const SustainableDev: React.FC = () => {
  // Left side thumbnails
  const leftImages = [
    "/sus-dev-one.png",
    "/sus-dev-two.png",
    "/sus-dev-three.png",
    "/sus-dev-four.png"
  ];

  // Right side images
  const rightImages = [
    "/sus-dev-carousel-one.png",
    "/sus-dev-carousel-two.png",
    "/sus-dev-carousel-three.png",
    "/sus-dev-carousel-four.png"
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Auto-rotate carousel (only when not hovering)
  useEffect(() => {
    if (hoveredIndex !== null) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rightImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hoveredIndex, rightImages.length]);

  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <section>
      <div id="hero-section" className="home-container">
        <div className="susHome">
          <div className="sus-dev-header">
            <div className="section-title Header1 TextBlue">
              PowerOptimus for Sustainability Goals : Strategic Alignment
            </div>
          </div>

          {/* LEFT */}
          <div className="sus-home_sectionHeader_left">
            <div className="goals-grid">
              {leftImages.map((src, index) => (
                <div
                  key={index}
                  className="goal-card"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img src={src} alt={`thumb-${index}`} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="sus-home_sectionHeader_right">
            <div className="goal-display">
              <img
                src={rightImages[displayIndex]}
                alt={`right-${displayIndex}`}
              />

              {/* Circle dots below image */}
              <div className="dot-icons">
                {rightImages.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === displayIndex ? "active-dot" : ""}`}
                    onClick={() => setActiveIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableDev;
