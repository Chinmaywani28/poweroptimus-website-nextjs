import React from 'react'
import './device-section.css'; // Import HomePage specific styles


const DeviceSection = () => {
  return (
   <section className="device-section">
      {/* <h2 className="device-heading Header1sec topMargin">Device (Hardware)</h2> */}
      <h2 className="Header2">Device (Hardware)</h2>
      <div className="devices-container">
        
        <div className="device-card">
          <img
            src="./node.png"
            alt="Device"
            className="device-image"
          />
          <h3 className="device-title Header2 downMargin TextBlue">Node</h3>
          <p className="device-desc body2 TextGray3">
            A node is a local data collection point that aggregates inputs from multiple sensors. Nodes often perform basic processing or filtering and send data to a central system or gateway. They act as intermediaries in energy management systems, helping streamline and structure data before cloud or edge-based analytics.
          </p>
        </div>
        
        <div className="device-card">
          <img
            src="./gateways.jpg"
            alt="Device"
            className="device-image"
          />
          <h3 className="device-title Header2 downMargin TextBlue">Gateway</h3>
          <p className="device-desc body2 TextGray3">
            Gateways act as bridges between field devices (like sensors and meters) and the cloud platform. They collect data from various nodes and devices using protocols like Modbus, BACnet, or LoRaWAN, and transmit it to the cloud or local servers for analytics and visualization. Gateways are essential for ensuring seamlessly.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DeviceSection