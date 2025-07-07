"use client"
import React, { useRef } from 'react'
import './data-analysis.css'; // Import HomePage specific styles


const DataAnalysis = () => {

  const cards = [
    {
      img: '/data-analysis-one.png',
      text: 'Dolorum voluptates qui doloribus fugiat aut dolores. Facilis iure molestiae. Repudiandae dolore...',
    },
    {
      img: '/data-analysis-two.png',
      text: 'Dolorum voluptates qui doloribus fugiat aut dolores. Facilis iure molestiae. Repudiandae dolore...',
    },
    {
      img: '/data-analysis-third.png',
      text: 'Dolorum voluptates qui doloribus fugiat aut dolores. Facilis iure molestiae. Repudiandae dolore...',
    },
    {
      img: '/data-analysis-four.png',
      text: 'Dolorum voluptates qui doloribus fugiat aut dolores. Facilis iure molestiae. Repudiandae dolore...',
    },
    {
      img: '/data-analysis-five.png',
      text: 'Dolorum voluptates qui doloribus fugiat aut dolores. Facilis iure molestiae. Repudiandae dolore...',
    },
    {
      img: '/data-analysis-six.png',
      text: 'Dolorum voluptates qui doloribus fugiat aut dolores. Facilis iure molestiae. Repudiandae dolore...',
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
  if (scrollRef.current) {
    const width = window.innerWidth;
    const container = scrollRef.current;
    let scrollAmount = 0;

    if (width <= 600) {
      scrollAmount = container.offsetWidth; // 1 card
    } else if (width <= 900) {
      scrollAmount = container.offsetWidth; // 2 cards (tablet full width)
    } else if (width <= 1200) {
      scrollAmount = container.offsetWidth / 3 * 2; // scroll 2 cards of 3
    }

    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
};

  const scrollRight = () => {
    if (scrollRef.current) {
      const width = window.innerWidth;
      const container = scrollRef.current;
      let scrollAmount = 0;

      if (width <= 600) {
        scrollAmount = container.offsetWidth; // 1 card
      } else if (width <= 900) {
        scrollAmount = container.offsetWidth; // 2 cards (tablet full width)
      } else if (width <= 1200) {
        scrollAmount = container.offsetWidth / 3 * 2; // scroll 2 cards of 3
      }

      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <section className="data-section">
      <h2 className="data-title Header2 TextBlue noSpace">Data Analysis and Visualization</h2>
      <div className="data-title Header2 TextBlue">(Solution Results-Placeholder)</div>
      <p className="data-subtitle body1 TextGray1">
        PowerOptimus combines advanced data analytics and visualization to enhance modern energy monitoring and management systems. It collects data from real-time energy meters and environmental sensors to deliver clear, actionable insights.
        Interactive dashboards reveal energy usage trends, peak loads, and system efficiency, while predictive analytics identify anomalies and support demand forecasting. This helps reduce operational costs, optimize performance, and minimize energy waste.
        Designed with sustainability in mind, PowerOptimus tracks emissions, air quality, and resource use, empowering organizations to lower their carbon footprint and stay compliant with environmental standards.
      </p>

      
     <section className="image-card-section">
      <div className="image-card-scroll-container" ref={scrollRef}>
        <div className="image-card-wrapper">
          {cards.map((card, index) => (
            <div className="image-card" key={index}>
              <div className="card-img-wrapper">
                <img src={card.img} alt={`card-${index}`} />
                <div className="card-overlay">
                  <p>{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-buttons">
        <button onClick={scrollLeft}>←</button>
        <button onClick={scrollRight}>→</button>
      </div>
    </section>


    </section>
  )
}

export default DataAnalysis