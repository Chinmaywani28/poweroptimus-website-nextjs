"use client";

import React, { useState, useEffect } from "react";
import styles from "./sustainable-goals.module.css";


const SustainableGoals: React.FC = () => {
  
  const sdgData = [
    {
      title: "SDG 7 – Affordable and Clean Energy",
      description:
        "EnvirOptimus promotes efficient and responsible energy use through real-time monitoring of electricity, steam, refrigeration, compressed air, and water systems. By tracking specific energy consumption, detecting inefficiencies, and optimizing peak demand, organizations can reduce energy costs while supporting cleaner and renewable energy adoption.",
      impact:
        "Improved energy efficiency, optimized energy usage, and data-driven renewable integration.",
      active: false,
    },
    {
      title: "SDG 9 – Industry, Innovation, and Infrastructure",
      description:
        "Through digitalization & smart automation, EnvirOptimus strengthens industrial infrastructure. Equipment-level monitoring, predictive analytics, and intelligent dashboards enable proactive maintenance, reduced downtime, and continuous performance optimization building resilient and future-ready operations. This ensures reliable, scalable operations across facilities.",
      impact:
        "Digitally enabled infrastructure, predictive asset insights, and scalable innovation.",
      active: false,
    },
    {
      title: "SDG 12 – Responsible Consumption and Production",
      description:
        "EnvirOptimus enables responsible resource management by providing granular visibility into energy, utilities, and environmental parameters. Continuous benchmarking, loss detection, and performance tracking help organizations minimize waste, optimize processes, and improve resource efficiency.",
      impact:
        "Reduced energy and resource waste, optimized consumption, and transparent sustainability reporting.",
      active: true, // 👈 highlighted card
    },
    {
      title: "SDG 13 – Climate Action",
      description:
        "The platform empowers organizations to take measurable climate action through emissions tracking, environmental monitoring, and automated sustainability reporting. By linking operational data with carbon metrics, EnvirOptimus helps identify reduction opportunities and support long-term decarbonization strategies.",
      impact:
        "Real-time emissions visibility, early inefficiency detection, and SDG-aligned climate reporting.",
      active: false,
    },
  ];

  

  return (
    <section>
      <div className={`${styles.sectionName} body2 marTopGlobal`}>
        EnvirOptimus enables organizations to convert sustainability commitments
        into measurable, actionable outcomes. By integrating real-time energy
        intelligence, environmental monitoring, and predictive analytics, the
        platform aligns day-to-day operations with global sustainability
        frameworks, including the United Nations Sustainable Development Goals
        (UN SDGs).
      </div>

      <div className={`${styles.grid} ${styles.sdgMargin}` } >
        {sdgData.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${item.active ? styles.activeCard : ""}`}
          >
            <div className={`${styles.title} Header3`}>{item.title}</div>

            <p className={`${styles.description} body2`}>{item.description}</p>

            <p className={`${styles.impact} body2`}>
              <span>Impact:</span> {item.impact}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SustainableGoals;
