"use client";
import React, { useState, useEffect } from "react";
import "./feature-three.css";

const FeatureThree: React.FC = () => {
  

  return (
    <div className="marTopBot">
      <div className="Header2 featureHe TextBlue">
        From Design to Intelligence: Why EEMS Is the Core of Sustainable
        Building Performance
      </div>

      {/* <img className="featWidth" src="/Digital Twin Diagram.png" alt="" /> */}

      {/* <section className="twin-section">
        <div className="twin-container">
          
          <div className="twin-left">
            <p>Digital twin helps in real-time monitoring of assets.</p>
            <p>It enables predictive maintenance and reduces downtime.</p>
            <p>Improves operational efficiency across systems.</p>
          </div>

          
          <div className="twin-image">
            <img src="/Digital Twin Diagram.png" alt="Digital Twin" />
          </div>

          
          <div className="twin-right">
            <p>Supports smart decision making using data insights.</p>
            <p>Integrates with BIM, SCADA, and IoT systems.</p>
            <p>Provides scalable infrastructure for industries.</p>
          </div>
        </div>
      </section> */}

      <div className="body2 alignbodytext2 img-mar">
        <div>
          Modern buildings and industrial facilities operate across multiple
          digital layers — from BIM-based design and physical infrastructure to
          automation systems, monitoring platforms, and advanced intelligence
          solutions. While each layer has a defined role, true performance
          optimization happens when energy and environmental intelligence sit at
          the core. That role is fulfilled by an Environment & Energy Management
          Solution (EEMS) such as EnvirOptimus. 
           BIM provides the digital design
          foundation with 3D models, asset specifications, and lifecycle
          documentation, but it is not operational.
        </div>
        <div className="marTopGlobal">
          <b>
            The Physical Facility executes real-world operations and generates
            energy and environmental data.
          </b>
        </div>
        <div>
          BMS/BAS and MES/SCADA control building and industrial systems,
          ensuring stability and process continuity, yet they remain largely
          reactive.
        </div>
        <div>
          An Environment & Energy Monitoring Platform adds structured visibility
          through IoT-based tracking of utilities, emissions, air quality, and
          KPIs.
        </div>
        <div>Where EEMS Creates Impact</div>
        <div>
          An EEMS transforms visibility into optimization. It captures granular
          sub-metered data, integrates emissions and environmental parameters,
          and applies analytics such as benchmarking, normalization, and load
          profiling. By correlating energy intensity with operational KPIs, it
          enables:
        </div>
        <ul>
          <li>Energy cost and intensity reduction</li>
          <li>Carbon accounting and emissions management</li>
          <li>Peak demand optimization</li>
          <li>ESG and sustainability reporting</li>
          <li>Cross-facility performance benchmarking</li>
        </ul>

        <div>
          Unlike control systems that react, EEMS drives proactive, data-driven
          optimization — making it the sustainability intelligence layer within
          the digital stack.
        </div>
        <div>
          As maturity increases, Predictive Analytics enables forecasting and
          early fault detection, while Asset Maintenance systems use performance
          insights to improve reliability and lifecycle management. At the
          highest level, a Digital Twin integrates BIM, control systems, and
          EEMS data to enable simulation and adaptive optimization, but its
          intelligence depends heavily on structured energy and operational data
          from the EEMS layer.
        </div>
        <div>
          Importantly, EEMS and control systems can function independently of
          BIM, enabling even brownfield facilities to achieve measurable energy
          and environmental performance improvements.
        </div>

        {/* <ul>
          <li>BIM defines design intelligence.</li>
          <li>BMS/MES control operations.</li>
          <li>Monitoring platforms provide visibility.</li>
          <li>
            EEMS (EnvirOptimus) delivers optimization and sustainability
            intelligence.
          </li>
          <li>Digital Twin enables predictive and autonomous optimization.</li>
        </ul>

        <div>
          If BIM builds the blueprint and BMS keeps the building running,
          EnvirOptimus ensures it runs efficiently, sustainably, and
          strategically positions EEMS as the core of modern smart
          infrastructure.
        </div> */}
      </div>
    </div>
  );
};

export default FeatureThree;
