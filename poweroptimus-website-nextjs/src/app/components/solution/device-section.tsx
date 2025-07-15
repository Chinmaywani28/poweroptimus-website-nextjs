import React from 'react'
import './device-section.css'; // Import HomePage specific styles


const DeviceSection = () => {
  return (
   <section className="device-section">
      <h2 className="device-heading Header1sec topMargin">Device (Hardware)</h2>
      <div className="devices-container">
        <div className="device-card">
          <img
            src="./device-one.png"
            alt="Device"
            className="device-image"
          />
          <h3 className="device-title Header3sec downMargin TextBlue">Sensor</h3>
          <p className="device-desc body3sec TextGray3">
            Sensors are devices used to measure real-time environmental and energy parameters such as temperature, humidity, CO₂ levels, air quality, and light intensity. These sensors provide the raw data necessary for energy monitoring systems to analyze consumption, detect inefficiencies, and ensure workplace environmental safety.
          </p>
        </div>
        <div className="device-card">
          <img
            src="./device-one.png"
            alt="Device"
            className="device-image"
          />
          <h3 className="device-title Header3sec downMargin TextBlue">Node</h3>
          <p className="device-desc body3sec TextGray3">
            A node is a local data collection point that aggregates inputs from multiple sensors. Nodes often perform basic processing or filtering and send data to a central system or gateway. They act as intermediaries in energy management systems, helping streamline and structure data before cloud or edge-based analytics.
          </p>
        </div>
        <div className="device-card">
          <img
            src="./device-one.png"
            alt="Device"
            className="device-image"
          />
          <h3 className="device-title Header3sec downMargin TextBlue">Energy Meter</h3>
          <p className="device-desc body3sec TextGray3">
            Energy meters are hardware devices that measure electrical consumption, including voltage, current, power factor, and energy usage over time. These meters provide the foundational data for energy monitoring systems, helping facilities track usage trends, detect high-consumption areas, and implement cost-saving strategies.
          </p>
        </div>
        <div className="device-card">
          <img
            src="./device-one.png"
            alt="Device"
            className="device-image"
          />
          <h3 className="device-title Header3sec downMargin TextBlue">Gateway</h3>
          <p className="device-desc body3sec TextGray3">
            Gateways act as bridges between field devices (like sensors and meters) and the cloud platform. They collect data from various nodes and devices using protocols like Modbus, BACnet, or LoRaWAN, and transmit it to the cloud or local servers for analytics and visualization. Gateways are essential for ensuring seamlessly.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DeviceSection