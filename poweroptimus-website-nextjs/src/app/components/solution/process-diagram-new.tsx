"use client";
import React, { useEffect, useState } from "react";
import styles from "./process-diagram-new.module.css";

const ProcessDiagramTwo = () => {
  // Center section main image + icons
  const leftImage = "/imple-four.svg";
  const icons = [
    { icon: "/imple-icon-five.png", text: "IOT Node" },
    { icon: "/imple-icon-two.png", text: "IOT Gateway" },
    { icon: "/imple-icon-three.png", text: "Measuring Device" },
    { icon: "/imple-icon-six.png", text: "Sensor" },
    { icon: "/imple-icon-one.png", text: "Energy Meter" },
    { icon: "/imple-icon-four.png", text: "Data Fabric" },
  ];

  // Right section images for vertical carousel
  // const images = [
  //   "/imple-carousel-sample.jpg",
  //   "/imple-carousel-sample.jpg",
  //   "/imple-carousel-sample.jpg",
  //   "/imple-carousel-sample.jpg",
  //   "/imple-carousel-sample.jpg",
  //   "/imple-carousel-sample.jpg",
  // ];

  // const images = [
  //   "/imple-header.png",
  //   "/imple-header.png",
  //   "/imple-header.png",
  //   "/imple-header.png",
  //   "/imple-header.png",
  //   "/imple-header.png",
  // ];

  const images = [
    "Implementation Process-1.png",
    "Implementation Process-2.png",
    "Implementation Process-3.png",
    "Implementation Process-4.png",
    "Implementation Process-5.png",
    "Implementation Process-6.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const getIndex = (index: number) => (index + images.length) % images.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => getIndex(prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section>
      <div className={styles.title}>
        <div className="Header2 TextBlue">Implementation Process</div>
      </div>

      <div className={styles.container}>
        {/* ===== Left Column (3 placeholder boxes) ===== */}
        <div className={styles.boxColumn}>
          {/* <div className={styles.placeholderBox}>Box 1</div>
          <div className={styles.placeholderBox}>Box 2</div>
          <div className={styles.placeholderBox}>Box 3</div> */}

          {/*  */}
          <div className={styles.containerStart}>
            {/* Box 1 */}
            <div >
              {/* <div className={styles.text}>
                <h3>Building Information Modeling (BIM) and Design Data</h3>
              </div>
              
              <div>
                <img src="/im-one.svg" alt="" />
              </div> */}
              <div>
                <img src="/Implementation Process- BIM.png" alt="" />
              </div>
            </div>

            {/* Box 2 */}
            <div >
              {/* <div className={styles.text}>
                <h3>Equipment and Asset Specifications</h3>
              </div>
              <div>
                <img src="/im-two.svg" alt="" />
              </div> */}
              <div>
                <img src="/Implementation Process- Equipment & Asset.png" alt="" />
              </div>
            </div>

            {/* Box 3 */}
            <div >
              {/* <div className={styles.text}>
                <h3>Environmental & Sustainability Goals (ESG)</h3>
              </div>
              <div>
                <img src="/im-three.svg" alt="" />
              </div> */}
              <div>
                <img src="/Implementation Process- ESG.png" alt="" />
              </div>
            </div>
          </div>

          {/*  */}
        </div>

        {/* ===== Center Section (Image + Icons) ===== */}
        <div className={styles.leftSection}>
          <img src={leftImage} alt="Main visual" className={styles.leftImage} />

          {/* <div className={styles.iconList}>
            {icons.map((item, i) => (
              <div key={i} className={styles.iconItem}>
                <span className={styles.icon}>
                  <img src={item.icon} />
                </span>
                <span className={styles.iconText}>{item.text}</span>
              </div>
            ))}
          </div> */}
        </div>

        {/* ===== Right Section (Vertical Carousel) ===== */}
        <div
          className={styles.rightSection}
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
                <div
                  key={index}
                  className={`${styles.carouselItem} ${position}`}
                >
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              );
            })}
          </div>
        </div>

       
      </div>

       <div>
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
    </section>
  );
};

export default ProcessDiagramTwo;
