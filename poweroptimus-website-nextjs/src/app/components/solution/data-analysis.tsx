import React from 'react'
import './data-analysis.css'; // Import HomePage specific styles


const DataAnalysis = () => {
  return (
    <section className="data-section">
      <h2 className="data-title">Data Analysis and Visualization</h2>
      <p className="data-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="data-grid">
        {[...Array(6)].map((_, index) => (
          <div className="data-card" key={index}>
            <div className="data-card-inner">
              <span className="data-label">Result {index + 1}</span>
              <div className="data-box">
                <p>Card Content</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DataAnalysis