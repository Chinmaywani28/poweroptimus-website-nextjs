import React from 'react'
import './data-analysis.css'; // Import HomePage specific styles


const DataAnalysis = () => {
  return (
    <section className="data-section">
      <h2 className="data-title">Data Analysis and Visualization</h2>
      <h2 className="data-title-two">(Solution Results-Placeholder)</h2>
      <p className="data-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
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