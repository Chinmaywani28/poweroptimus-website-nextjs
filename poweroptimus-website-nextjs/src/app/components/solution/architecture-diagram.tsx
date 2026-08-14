import React from 'react'
import './architecture-diagram.css'; // Import HomePage specific styles


const ArchitectureDiagram = () => {
  return (
    //  <section className="architecture-section">
    //   <img
    //     src="./system-architecture.png"
    //     alt="System Architecture Diagram"
    //     className="architecture-image"
    //   />
    // </section>

    <section className="arch-section">
      {/* <h2 className="process-title Header2">Architecture-section</h2> */}
      <div className="diagram-placeholder Header1sec marTop">

        {/* <img src="/system-arch-three.jpg" alt="System Architecture" /> */}
        {/* <img src="/System Architecture Diagram 1920x 1080.jpg" alt="System Architecture" /> */}
        <img src="/sys-two.jpg" alt="EnvirOptimus deployment landscape" />

      </div>
    </section>
  )
}

export default ArchitectureDiagram