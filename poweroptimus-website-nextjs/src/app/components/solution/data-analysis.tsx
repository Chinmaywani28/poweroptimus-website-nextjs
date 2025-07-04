import React from 'react'
import './data-analysis.css'; // Import HomePage specific styles


const DataAnalysis = () => {
  return (
    <section className="data-section">
      <h2 className="data-title Header2 TextBlue noSpace">Data Analysis and Visualization</h2>
      <div className="data-title Header2 TextBlue">(Solution Results-Placeholder)</div>
      <p className="data-subtitle body1 TextGray1">
        PowerOptimus combines advanced data analytics and visualization to enhance modern energy monitoring and management systems. It collects data from real-time energy meters and environmental sensors to deliver clear, actionable insights.
        Interactive dashboards reveal energy usage trends, peak loads, and system efficiency, while predictive analytics identify anomalies and support demand forecasting. This helps reduce operational costs, optimize performance, and minimize energy waste.
        Designed with sustainability in mind, PowerOptimus tracks emissions, air quality, and resource use, empowering organizations to lower their carbon footprint and stay compliant with environmental standards.
      </p>

      <div className="data-grid">
        <div className="data-card">
          <div className="image-wrapper">
            <img src="./data-analysis-one.png" alt="Label 1" className="card-image" />
            <div className="overlay-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eius, nobis aliquid ipsa fuga saepe deserunt</div>
          </div>
        </div>

        <div className="data-card">
          <div className="image-wrapper">
            <img src="./data-analysis-two.png" alt="Label 2" className="card-image" />
            <div className="overlay-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eius, nobis aliquid ipsa fuga saepe deserunt</div>
          </div>
        </div>

        <div className="data-card">
          <div className="image-wrapper">
            <img src="./data-analysis-one.png" alt="Label 3" className="card-image" />
            <div className="overlay-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eius, nobis aliquid ipsa fuga saepe deserunt</div>
          </div>
        </div>

        <div className="data-card">
          <div className="image-wrapper">
            <img src="./data-analysis-one.png" alt="Label 4" className="card-image" />
            <div className="overlay-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eius, nobis aliquid ipsa fuga saepe deserunt</div>
          </div>
        </div>

        <div className="data-card">
          <div className="image-wrapper">
            <img src="./data-analysis-one.png" alt="Label 5" className="card-image" />
            <div className="overlay-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eius, nobis aliquid ipsa fuga saepe deserunt</div>
          </div>
        </div>

        {/* <div className="data-card">
          <div className="image-wrapper">
            <img src="./data-analysis-one.png" alt="Label 6" className="card-image" />
            <div className="overlay-text">Label 6</div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default DataAnalysis