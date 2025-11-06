"use client"
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './whypoweroptimus.css'; // Import HomePage specific styles

const WhyPowerOptimus = () => {

  const { t } = useTranslation(); // Initialize translation hook

  return (
    <>
    {/* <section className="WhyEnergy_home_container">
      <div className="WhyEnergyhome">
        <div className="HeaderWhyEnergy">
          <div className="Header2 TextBlue">
             Why PowerOptimus?
          </div>
          <div className="body2 alignbodytext2">
            PowerOptimus delivers more than just monitoring; it empowers your teams to optimize energy use, safeguard the environment, and drive operational excellence. Here’s how:
          </div>
          <div className="body2 alignbodytext2">
            <ul>
              <li>Customizable to Industry Needs: Whether it's a factory, hospital, or high-rise, PowerOptimus adapts to the unique KPIs that matter most to your operation</li>
              <li>Scalable and Future-Ready: Designed to grow with your business, our platform integrates effortlessly with existing systems, including BIM, IoT devices, and SCADA.</li>
              <li>Actionable Insights, Always-On Monitoring: Continuous data visibility across energy, environment, and operations helps you make informed decisions faster.</li>
              <li>Driving Environmental Responsibility: From toxic gas emission monitoring in factories to AQI tracking in hospitals, PowerOptimus is built to support environmentally conscious operations.</li>
            </ul>
          </div>
        </div>




      </div>
    </section> */}

    {/* <section className="why-container">
      <h2 className="Header1 TextBlue" style={{ textAlign: 'center' }}>Why PowerOptimus?</h2>

      <p className="body3" style={{ textAlign: 'center' }}>
        PowerOptimus delivers more than just monitoring; it empowers your teams
        to optimize energy use, safeguard the environment, and drive operational
        excellence. Here’s how:
      </p>

      <ul className="why-list">
        <li className="body3">
          <strong>Customizable to Industry Needs:</strong> Whether it's a
          factory, hospital, or high-rise, PowerOptimus adapts to the unique
          KPIs that matter most to your operation
        </li>
        <li className="body3">
          <strong>Scalable and Future-Ready:</strong> Designed to grow with
          your business, our platform integrates effortlessly with existing
          systems, including BIM, IoT devices, and SCADA.
        </li>
        <li className="body3">
          <strong>Actionable Insights, Always-On Monitoring:</strong> Continuous
          data visibility across energy, environment, and operations helps you
          make informed decisions faster.
        </li>
        <li className="body3">
          <strong>Driving Environmental Responsibility:</strong> From toxic gas
          emission monitoring in factories to AQI tracking in hospitals,
          PowerOptimus is built to support environmentally conscious operations.
        </li>
      </ul>
    </section> */}

    
      {/* <section className="why-section">
        <h2 className="Header2 TextBlue">Why PowerOptimus?</h2>
        <p className="intro body2 alignbodytext2">
          PowerOptimus delivers more than just monitoring; it empowers your teams to optimize energy use, safeguard the environment, and drive operational excellence. Here’s how:
        </p>
        <ul className="why-list body2 alignbodytext2">
          <li><strong>Customizable to Industry Needs:</strong> Whether it's a factory, hospital, or high-rise, PowerOptimus adapts to the unique KPIs that matter most to your operation</li>
          <li><strong>Scalable and Future-Ready:</strong> Designed to grow with your business, our platform integrates effortlessly with existing systems, including BIM, IoT devices, and SCADA.</li>
          <li><strong>Actionable Insights, Always-On Monitoring:</strong> Continuous data visibility across energy, environment, and operations helps you make informed decisions faster.</li>
          <li><strong>Driving Environmental Responsibility:</strong> From toxic gas emission monitoring in factories to AQI tracking in hospitals, PowerOptimus is built to support environmentally conscious operations.</li>
        </ul>
      </section> */}


        
      <section className="why-section">
        <div className="container">
          <h2 className="Header2 TextBlue">Why PowerOptimus?</h2>
          <p className="intro body2 alignbodytext2">
            PowerOptimus delivers more than just monitoring; it empowers your teams to optimize energy use, safeguard the environment, and drive operational excellence. Here’s how:
          </p>
          <ul className="why-list body2 alignbodytext2">
            <li><strong>Customizable to Industry Needs:</strong> Whether it's a factory, hospital, or high-rise, PowerOptimus adapts to the unique KPIs that matter most to your operation</li>
            <li><strong>Scalable and Future-Ready:</strong> Designed to grow with your business, our platform integrates effortlessly with existing systems, including BIM, IoT devices, and SCADA.</li>
            <li><strong>Data-Driven Visibility for Smarter Operations:</strong> Continuous data visibility across energy, environment, and operations helps you make informed decisions faster.</li>
            <li><strong>Driving Environmental Responsibility:</strong> From toxic gas emission monitoring in factories to AQI tracking in hospitals, PowerOptimus is built to support environmentally conscious operations.</li>
          </ul>
        </div>
      </section>

    </>
    
  )
}

export default WhyPowerOptimus
