"use client";
import React, { useState, useEffect } from "react";
import "./feature-two.css";

const FeatureTwo: React.FC = () => {
  

  return (
    // <div className="marTopBot">

    //   <div className="Header3 featureHe">
    //         From Design to Intelligence: Why EEMS Is the Core of Sustainable Building Performance
    //       </div>

    //   {/* <img className="featWidth" src="/Slide 16_9 - 56 (2).png" alt="" /> */}

    //   <img className="featWidth" src="/Slide 16_9 - 67.png" alt="" />

    //   <div className="body2 alignbodytext2 img-mar">

    //       <div>
    //         Modern buildings and industrial facilities operate across multiple digital layers — from BIM-based design and physical infrastructure to automation systems, monitoring platforms, and advanced intelligence solutions. While each layer has a defined role, true performance optimization happens when energy and environmental intelligence sit at the core. That role is fulfilled by an Environment & Energy Management Solution (EEMS) such as EnvirOptimus.
    //         BIM provides the digital design foundation with 3D models, asset specifications, and lifecycle documentation, but it is not operational.
    //       </div>
    //       <div><b>The Physical Facility executes real-world operations and generates energy and environmental data.</b></div>
    //       <div>
    //         BMS/BAS and MES/SCADA control building and industrial systems, ensuring stability and process continuity, yet they remain largely reactive.
    //       </div>
    //       <div>
    //         An Environment & Energy Monitoring Platform adds structured visibility through IoT-based tracking of utilities, emissions, air quality, and KPIs.
    //       </div>
    //       <div>Where EEMS Creates Impact</div>
    //       <div>
    //         An EEMS transforms visibility into optimization. It captures granular sub-metered data, integrates emissions and environmental parameters, and applies analytics such as benchmarking, normalization, and load profiling. By correlating energy intensity with operational KPIs, it enables:
    //       </div>
    //       <ul>
    //         <li>Energy cost and intensity reduction</li>
    //         <li>Carbon accounting and emissions management</li>
    //         <li>Peak demand optimization</li>
    //         <li>ESG and sustainability reporting</li>
    //         <li>Cross-facility performance benchmarking</li>

    //       </ul>

    //       <div>
    //         Unlike control systems that react, EEMS drives proactive, data-driven optimization — making it the sustainability intelligence layer within the digital stack.
    //       </div>
    //       <div>
    //         As maturity increases, Predictive Analytics enables forecasting and early fault detection, while Asset Maintenance systems use performance insights to improve reliability and lifecycle management. At the highest level, a Digital Twin integrates BIM, control systems, and EEMS data to enable simulation and adaptive optimization, but its intelligence depends heavily on structured energy and operational data from the EEMS layer.
    //       </div>
    //       <div>
    //         Importantly, EEMS and control systems can function independently of BIM, enabling even brownfield facilities to achieve measurable energy and environmental performance improvements.
    //         In Essence
    //       </div>

    //       <ul>
    //         <li>BIM defines design intelligence.</li>
    //         <li>BMS/MES control operations.</li>
    //         <li>Monitoring platforms provide visibility.</li>
    //         <li>EEMS (EnvirOptimus) delivers optimization and sustainability intelligence.</li>
    //         <li>Digital Twin enables predictive and autonomous optimization.</li>

    //       </ul>

    //       <div>
    //         If BIM builds the blueprint and BMS keeps the building running, EnvirOptimus ensures it runs efficiently, sustainably, and strategically positions EEMS as the core of modern smart infrastructure.
    //       </div>

    //   </div>
    // </div>

    <section className="twin-wrapper">
    <div className="twin-image-container">


       <div className="Header3 featureHe">
             From Design to Intelligence: Why EEMS Is the Core of Sustainable Building Performance
         </div>

      {/* IMAGE */}
      {/* <img src="/digi-twin-four.png" alt="Digital Twin" /> */}

      <img src="/dig-twiin.png" alt="Digital Twin" />


      {/* LEFT SIDE TEXTS */}
      <div className="text text-1">Data-driven forecasting and anomaly detection to anticipate performance issues and optimize operations.</div>
      <div className="text text-2">Structured management of equipment health, reliability, and lifecycle through preventive and predictive maintenance.</div>
      <div className="text text-3">Continuous collection and visualization of energy, utility, and environmental performance data.</div>
      <div className="text text-7">Digital modeling of building design, systems, and asset information across the lifecycle.</div>

      {/* RIGHT SIDE TEXTS */}
      <div className="text text-4">A dynamic virtual replica of physical assets or facilities that enables real-time visualization, simulation, and predictive optimization.</div>
      <div className="text text-5">Intelligence layer that optimizes energy usage, emissions, and environmental performance.</div>
      <div className="text text-6">The real-world infrastructure where operations, processes, services are executed.</div>

    </div>


    {/* text content down */}
    <div className="marTopBot"> 
        <div className="body2 alignbodytext2 img-mar">

          <div>
            Modern buildings and industrial facilities operate across multiple digital layers — from BIM-based design and physical infrastructure to automation systems, monitoring platforms, and advanced intelligence solutions. While each layer has a defined role, true performance optimization happens when energy and environmental intelligence sit at the core. That role is fulfilled by an Environment & Energy Management Solution (EEMS) such as EnvirOptimus.
            BIM provides the digital design foundation with 3D models, asset specifications, and lifecycle documentation, but it is not operational.
          </div>
          <div><b>The Physical Facility executes real-world operations and generates energy and environmental data.</b></div>
          <div>
            BMS/BAS and MES/SCADA control building and industrial systems, ensuring stability and process continuity, yet they remain largely reactive.
          </div>
          <div>
            An Environment & Energy Monitoring Platform adds structured visibility through IoT-based tracking of utilities, emissions, air quality, and KPIs.
          </div>
          <div>Where EEMS Creates Impact</div>
          <div>
            An EEMS transforms visibility into optimization. It captures granular sub-metered data, integrates emissions and environmental parameters, and applies analytics such as benchmarking, normalization, and load profiling. By correlating energy intensity with operational KPIs, it enables:
          </div>
          <ul>
            <li>Energy cost and intensity reduction</li>
            <li>Carbon accounting and emissions management</li>
            <li>Peak demand optimization</li>
            <li>ESG and sustainability reporting</li>
            <li>Cross-facility performance benchmarking</li>

          </ul>

          <div>
            Unlike control systems that react, EEMS drives proactive, data-driven optimization — making it the sustainability intelligence layer within the digital stack.
          </div>
          <div>
            As maturity increases, Predictive Analytics enables forecasting and early fault detection, while Asset Maintenance systems use performance insights to improve reliability and lifecycle management. At the highest level, a Digital Twin integrates BIM, control systems, and EEMS data to enable simulation and adaptive optimization, but its intelligence depends heavily on structured energy and operational data from the EEMS layer.
          </div>
          <div>
            Importantly, EEMS and control systems can function independently of BIM, enabling even brownfield facilities to achieve measurable energy and environmental performance improvements.
            In Essence
          </div>

          <ul>
            <li>BIM defines design intelligence.</li>
            <li>BMS/MES control operations.</li>
            <li>Monitoring platforms provide visibility.</li>
            <li>EEMS (EnvirOptimus) delivers optimization and sustainability intelligence.</li>
            <li>Digital Twin enables predictive and autonomous optimization.</li>

          </ul>

          <div>
            If BIM builds the blueprint and BMS keeps the building running, EnvirOptimus ensures it runs efficiently, sustainably, and strategically positions EEMS as the core of modern smart infrastructure.
          </div>

      </div>
    </div>
    


    </section>
  );
};

export default FeatureTwo;
