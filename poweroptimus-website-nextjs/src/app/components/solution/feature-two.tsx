// components/FeatureCard.tsx
"use client";
import React from "react";
import styles from "./feature-two.module.css";

interface FeatureCardProps {
  // title: string;
  // description: string;
  // titlePosition?: "left" | "right"; // controls blue tab position
}

const cards = [
    { title: "Utility Energy Monitoring", text: "PowerOptimus enables real-time tracking of utilities such as electricity, water, and compressed air across the facility. By identifying excessive usage patterns, the system empowers organizations to take corrective actions that minimize wastage, optimize utility consumption, and enhance resource efficiency. This not only contributes to lower energy bills but also supports long-term sustainability goals and operational resilience.", titleLeft: true },
    { title: "Power Quality Monitoring", text: "Ensure a reliable and efficient power supply by monitoring critical parameters like power factor, harmonics & frequency. These insights help avoid penalties due to poor power quality, prevent excessive energy demand charges,& prolong the lifespan of sensitive equipment. PowerOptimus provides in-depth power quality analysis that is essential for any energy management solution & environmental sustainability.", titleLeft: false },
    { title: "Setpoints Monitoring", text: "Monitoring utility setpoints is vital for maintaining optimal operational parameters across facilities. This software continuously tracks performance and immediately alerts teams when setpoints exceed defined thresholds, helping prevent unnecessary energy use, equipment stress, and avoidable operational costs. By ensuring systems operate within ideal ranges, organizations can improve efficiency, extend asset life, and strengthen sustainability initiatives.",titleLeft: true},
    { title: "Idle Equipment Detection", text: "One of the most overlooked energy drains in industrial environments is equipment running idle. Our solution continuously monitors machine energy consumption versus output and flags idle equipment. It prompts automated actions such as turning off equipment during inactivity, a key feature of next-gen energy management systems. With this data, organizations can act quickly to shut down non-productive equipment, thereby reducing energy waste.", titleLeft: false },
    
    { title: "Industrial Carbon Footprint", text: "With growing emphasis on environmental compliance, this solution aids in tracking and reducing Scope 1, 2, and 3 emissions. By analyzing energy efficiency data and carbon outputs, the platform supports your carbon footprint reduction strategy and helps meet corporate sustainability targets. This is where energy management and environmental monitoring solution come together to drive sustainability.",titleLeft: true },

    { title: "Air Quality Monitoring", text: "Indoor air quality has a direct impact on employee health and productivity. PowerOptimus integrates with air and humidity sensors to monitor environmental conditions within industrial and healthcare facilities. It provides actionable insights to align indoor air quality with outdoor conditions, reduce risks from pollutants, and maintain a healthier, more sustainable workplace environment.",titleLeft: false },

    { title: "CO₂ Percentage Monitoring", text: "PowerOptimus measures indoor CO₂ concentrations and dynamically adjusts HVAC operations through Demand-Controlled Ventilation (DCV). By regulating airflow based on occupancy and air quality levels, it ensures energy savings, reduced operational costs, and a healthier indoor environment. This intelligent approach highlights how comprehensive energy monitoring systems not only optimize performance but also contribute to smarter, more sustainable infrastructure.",titleLeft: true },

    { title: "Hazardous Gas Monitoring", text: "In chemical handling and processing environments, hazardous gas emissions pose serious health and safety risks. PowerOptimus integrates advanced gas detection sensors to continuously monitor air quality, identify leaks, and provide instant alerts. This real-time visibility enables rapid response, minimizes exposure risks for workers, and ensures compliance with strict occupational health and safety standards while supporting a safer, more sustainable workplace.",titleLeft: false }

  ];

const FeatureTwo: React.FC<FeatureCardProps> = ({
  // title,
  // description,
  // titlePosition = "left", // default is left
}) => {
  return (
    <div className={styles.wrapper}>
      {cards.map((item, i) => (
        <div className={`${styles.card}`} key={i}>
          {/* <div className={`${styles.title} Header2 TextBlue`}>{item.title}</div> */}


          {/* Conditionally apply titleLeft or titleRight class */}
          <div
            className={`${styles.title} ${
              item.titleLeft ? styles.titleLeft : styles.titleRight
            } Header2 TextBlue`}
          >
            {item.title}
          </div>

          <div className="body2">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default FeatureTwo;
