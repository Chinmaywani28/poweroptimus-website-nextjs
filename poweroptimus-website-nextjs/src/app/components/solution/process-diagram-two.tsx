"use client"
import React, { useEffect, useState } from 'react'
import styles from "./process-diagram-two.module.css";

const ProcessDiagramTwo = () => {

   // Left section main image + icons
  const leftImage = "/implementation-diagram.jpg"; // replace with your image
  const icons = [
    { icon: "/imple-icon-five.png", text: "IOT Node" },
    { icon: "/imple-icon-two.png", text: "IOT Gateway" },
    { icon: "/imple-icon-three.png", text: "Measuring Device" },
    { icon: "/imple-icon-six.png", text: "Sensor" },
    { icon: "/imple-icon-one.png", text: "Energy Meter" },
    { icon: "/imple-icon-four.png", text: "Data Fabric" },
  ];

  // Right section images for vertical carousel
  const images = [
    "/implementation-diagram-carousel-one.png",
    "/implementation-diagram-carousel-two.png",
    "/implementation-diagram-carousel-three.png",
    "/implementation-diagram-carousel-four.png",
    "/implementation-diagram-carousel-five.png",
    "/implementation-diagram-carousel-six.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Helper to wrap index
  const getIndex = (index: number) => {
    return (index + images.length) % images.length;
  };

  // Auto change slide every 3s
  useEffect(() => {
    if(isPaused){
      return
    }
    const interval = setInterval(() => {
      setCurrentIndex((prev) => getIndex(prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return(

    <section>

      <div className={styles.title}>
        <div className="Header2 TextBlue">Implementation Process</div>
      </div>

      <div className={styles.container}>
      {/* Left Section */}

      <div className={styles.leftSection}>
        <img src={leftImage} alt="Main visual" className={styles.leftImage} />

        <div className={styles.iconList}>
          {icons.map((item, i) => (
            <div key={i} className={styles.iconItem}>
              <span className={styles.icon}>
                  <img src={item.icon} />
              </span>
              <span className={styles.iconText}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Vertical Carousel */}
      <div className={styles.rightSection}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
      >
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
    </section>

    
  )
  
}

export default ProcessDiagramTwo