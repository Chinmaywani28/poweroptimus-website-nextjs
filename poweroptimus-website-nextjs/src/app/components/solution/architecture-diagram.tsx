import React from 'react'
import './architecture-diagram.css'; // Import HomePage specific styles


const ArchitectureDiagram = () => {
  return (
     <section className="architecture-section">
      <img
        src="./system-architecture.png"
        alt="System Architecture Diagram"
        className="architecture-image"
      />
    </section>
  )
}

export default ArchitectureDiagram