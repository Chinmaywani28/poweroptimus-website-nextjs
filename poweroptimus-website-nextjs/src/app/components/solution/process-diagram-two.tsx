"use client"
import React, { useEffect, useState } from 'react'
import styles from "./process-diagram-two.module.css";

const ProcessDiagramTwo = () => {

   // Left section main image + icons
  const leftImage = "/implementation-diagram.jpg"; // replace with your image
  const icons = [
    { icon: "🔥", text: "Hot Feature" },
    { icon: "⚡", text: "Fast Speed" },
    { icon: "🌍", text: "Global Reach" },
  ];

  // Right section images for vertical carousel
  const images = [
    "/implementation-diagram-carousel.png",
    "/implementation-diagram-carousel.png",
    "/implementation-diagram-carousel.png",
    "/implementation-diagram-carousel.png",
    "/implementation-diagram-carousel.png",
    "/implementation-diagram-carousel.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Helper to wrap index
  const getIndex = (index: number) => {
    return (index + images.length) % images.length;
  };

  // Auto change slide every 3s
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => getIndex(prev + 1));
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return(
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <img src={leftImage} alt="Main visual" className={styles.leftImage} />

        <div className={styles.iconList}>
          {icons.map((item, i) => (
            <div key={i} className={styles.iconItem}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.iconText}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Vertical Carousel */}
      <div className={styles.rightSection}>
        <div className={styles.carousel}>
          {images.map((image, index) => {
            let position = "";
            if (index === currentIndex) {
              position = styles.current;
            } else if (index === getIndex(currentIndex - 1)) {
              position = styles.previous;
            } else if (index === getIndex(currentIndex + 1)) {
              position = styles.next;
            } else if (index === getIndex(currentIndex - 2)) {
              position = styles.farPrevious;
            } else if (index === getIndex(currentIndex + 2)) {
              position = styles.farNext;
            }

            return (
              <div key={index} className={`${styles.carouselItem} ${position}`}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
  
}

export default ProcessDiagramTwo