import React from 'react'
import './device-section.css'; // Import HomePage specific styles


const DeviceSection = () => {
  return (
   <section className="device-section">
      <h2 className="device-heading">Device (Hardware)</h2>
      <div className="devices-container">
        <div className="device-card">
          <img
            src="./device-one.png"
            alt="Device"
            className="device-image"
          />
          <h3 className="device-title">Device Name</h3>
          <p className="device-desc">
            Eos voluptatum reprehenderit voluptas ducimus saepe aut exercitationem vel.
          </p>
        </div>
        <div className="device-card">
          <img
            src="./device-two.png"
            alt="Device"
            className="device-image"
          />
          <h3 className="device-title">Device Name</h3>
          <p className="device-desc">
            Eos voluptatum reprehenderit voluptas ducimus saepe aut exercitationem vel.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DeviceSection