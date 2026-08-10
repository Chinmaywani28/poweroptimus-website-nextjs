"use client"
import React, { useRef } from 'react'
import './data-analysis.css'; // Import HomePage specific styles


const DataAnalysis = () => {

  const cards = [
    { img: '/data-analysis-two-one.png', text: 'Dolorum voluptates qui doloribus fugiat aut dolores...',alt:'noise' },
    { img: '/data-analysis-two-two.png', text: 'Dolorum voluptates qui doloribus fugiat aut dolores...',alt:'energy monitoring' },
    { img: '/data-analysis-two-three.png', text: 'Dolorum voluptates qui doloribus fugiat aut dolores...',alt:'electricity comsumption' },
    { img: '/data-analysis-two-four.png', text: 'Dolorum voluptates qui doloribus fugiat aut dolores...',alt:'energy flow' },
    { img: '/data-analysis-two-five.png', text: 'Dolorum voluptates qui doloribus fugiat aut dolores...',alt:'proximity' },
    { img: '/data-analysis-two-six.png', text: 'Dolorum voluptates qui doloribus fugiat aut dolores...',alt:'EnvirOptimus dashboard' }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const width = window.innerWidth;
      const container = scrollRef.current;
      let scrollAmount = 0;

      if (width <= 600) scrollAmount = container.offsetWidth;
      else if (width <= 900) scrollAmount = container.offsetWidth;
      else if (width <= 1200) scrollAmount = (container.offsetWidth / 3) * 2;

      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const width = window.innerWidth;
      const container = scrollRef.current;
      let scrollAmount = 0;

      if (width <= 600) scrollAmount = container.offsetWidth;
      else if (width <= 900) scrollAmount = container.offsetWidth;
      else if (width <= 1200) scrollAmount = (container.offsetWidth / 3) * 2;

      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <section className="data-section">
      <h2 className="data-title Header2 TextBlue noSpace">Data Analysis and Visualization</h2>
      {/* <div className="data-title Header1sec TextBlue">(Solution Results-Placeholder)</div> */}
      <p className="data-subtitle body2 TextGray1">
        {/* EnvirOptimus combines advanced data analytics and visualization to enhance modern energy management solution.
       It collects data from real-time energy meters and environmental sensors to deliver clear, actionable insights.
        Interactive dashboards reveal energy usage trends, peak loads, and system efficiency, while predictive analytics identify anomalies and support demand forecasting. This helps reduce operational costs, optimize performance, and minimize energy waste.
        Designed with sustainability in mind, EnvirOptimus – an environmental monitoring solution tracks emissions, air quality, and resource use, empowering organizations to lower their carbon footprint and stay compliant with environmental standards. */}
        EnvirOptimus integrates seamlessly with Digital Twin platforms to transform real-time energy and environmental data into immersive 3D visual intelligence. By synchronizing data from meters, sensors, and building systems with a digital replica of the facility, it enables interactive visualization, heat mapping, and contextual performance monitoring across assets and zones. <br />
        This integration supports advanced simulations and “what-if” scenario analysis, allowing organizations to predict demand, identify inefficiencies, assess carbon impact, and optimize operations before implementing changes in the physical environment turning monitoring into proactive performance management.
      </p>

      <div className="image-card-section">
        <div className="image-card-scroll-container" ref={scrollRef}>
          <div className="image-card-wrapper">
            {cards.map((card, index) => (
              <div className="image-card" key={index}>
                <div className="card-img-wrapper">
                  {/* <img src={card.img} alt={`card-${index}`} /> */}

                  <img src={card.img} alt={card.alt} />

                  {/* <div className="card-overlay">
                    <p className="body3sec">{card.text}</p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-buttonss">
          <button onClick={scrollLeft}>
            <i className="ri-arrow-left-s-line"></i>
          </button>
          <button onClick={scrollRight}>
          <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
      

    </section>
  )
}

export default DataAnalysis