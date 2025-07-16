"use client";
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './features-section.css'; // Import feature-section specific styles

// const FeatureSection = () => {
//   const { t } = useTranslation(); // Initialize translation hook
  
//   return (
//     <>
//       <section className="features-section">
//       <h2 className="features-title">Features</h2>
//       <div className="features-grid">
//         {Array.from({ length: 8 }).map((_, index) => (
//           <div className="feature-card" key={index}>
//             <h3>Corporis delectus eveniet molestias qui in aut rem.</h3>
//             <p>
//               Eius molestias consequatur pariatur quae iure culpa ullam quo. Non tempora est.
//               Et provident voluptatem doloremque. Et totam dolor voluptatibus eos dolorem ratione.
//               Minus nisi blanditiis facilis a ab non voluptate qui sed. Sint ut ex odio est ratione.
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//     </>
//   )
// }

// export default FeatureSection

// const FeatureSection = () => {

//   let features: any = [
//       {
//         title: 'Utility Energy Monitoring',
//         desc: 'PowerOptimus enables real-time tracking of utilities such as electricity, water, and compressed air across the facility. By identifying excessive usage patterns, this energy monitoring systems help organizations take corrective actions to reduce wastage and optimize utility consumption, contributing to lower energy bills and improved sustainability.'
//       },
//       {
//         title: 'Power Quality Monitoring',
//         desc: 'Ensure a reliable and efficient power supply by monitoring critical parameters like power factor, harmonics, and frequency. These insights help avoid penalties due to poor power quality, prevent excessive energy demand charges, and prolong the lifespan of sensitive equipment. PowerOptimus provides in-depth power quality analysis that is essential for any Energy Management System and environmental sustainability.'
//       },
//       {
//         title: 'Setpoints Monitoring',
//         desc: 'Monitoring utility setpoints is vital for maintaining optimal operational parameters. This software alerts teams when setpoints exceed defined thresholds, helping prevent unnecessary energy use and avoidable operational costs.'
//       },
//       {
//         title: 'Idle Equipment Detection',
//         desc: 'One of the most overlooked energy drains in industrial environments is equipment running idle. Our solution continuously monitors machine energy consumption versus output and flags idle equipment. It prompts automated actions such as turning off equipment during inactivity, a key feature of next-gen energy management systems. With this data, organizations can act quickly to shut down non-productive equipment, thereby reducing energy waste.'
//       },
//       {
//         title: 'Industrial Carbon Footprint Management',
//         desc: 'With growing emphasis on environmental compliance, this solution aids in tracking and reducing Scope 1, 2, and 3 emissions. By analyzing energy efficiency data and carbon outputs, the platform supports your carbon footprint reduction strategy and helps meet corporate sustainability targets. This is where energy management systems meet environmental sustainability.'
//       },
//       {
//         title: 'Air Quality Monitoring',
//         desc: 'Indoor air quality has a direct impact on employee health and productivity. PowerOptimus integrates with air and humidity sensors to monitor environmental conditions within industrial and healthcare facilities. It provides actionable insights to align indoor air quality with outdoor conditions and maintain a healthy workplace.'
//       },
//       {
//         title: 'CO₂ Percentage Monitoring',
//         desc: 'PowerOptimus measures indoor CO₂ concentrations and dynamically adjusts HVAC operations through Demand-Controlled Ventilation (DCV). This ensures both energy savings and a healthier working environment, demonstrating how comprehensive energy monitoring systems contribute to smarter infrastructure.'
//       },
//       {
//         title: 'Hazardous Gas Monitoring',
//         desc: 'In chemical handling and processing environments, hazardous gas emissions pose serious health risks. PowerOptimus integrates gas detection sensors to monitor and alert in real time, ensuring a safer work environment and compliance with occupational health and safety norms.'
//       },
//       {
//         title: 'Predictive Analytics for Energy & Environmental Management',
//         desc: 'our tailored energy monitoring system combines historical energy data with real-time sensor inputs to detect trends and anomalies. Acting as a predictive energy management system, it helps prevent unplanned downtime, optimize maintenance, and extend equipment lifespan.'
//       },
//       {
//         title: 'Actionable Environmental Insights',
//         desc: 'PowerOptimus also uses environmental sensors to track air quality, hazardous gases, and temperature. By analyzing real-time and historical data, it delivers actionable insights that help reduce the carbon footprint and support compliance. This blend of energy monitoring systems and environmental intelligence makes it ideal for sustainable, efficient operations.'
//       }
      
//   ]
  

//   return (
//     <section className="features-section">
//       <h2 className="features-title Header2">Features</h2>
//       <div className="features-grid">
//         {features.map((item: any, index: any) => (
//           <div className="feature-card" key={index}>
//             <h3 className="Header3 alignbodytextwidth" style={{ marginTop: '0', marginBottom: '0' }}>{item.title}</h3>
//             <p className="body3 alignbodytext TextGray3">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default FeatureSection


const FeatureSection = () => {
    let features: any = [
      {
        title: 'Utility Energy Monitoring lorem lorem lorem',
        desc: 'PowerOptimus enables real-time tracking of utilities such as electricity, water, and compressed air across the facility. By identifying excessive usage patterns, this energy monitoring systems help organizations take corrective actions to reduce wastage and optimize utility consumption, contributing to lower energy bills and improved sustainability. lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '
      },
      {
        title: 'Power Quality Monitoring lorem lorem',
        desc: 'Ensure a reliable and efficient power supply by monitoring critical parameters like power factor, harmonics, and frequency. These insights help avoid penalties due to poor power quality, prevent excessive energy demand charges, and prolong the lifespan of sensitive equipment. PowerOptimus provides in-depth power quality analysis that is essential for any Energy Management System and environmental sustainability.'
      },
      {
        title: 'Setpoints Monitoring lorem lorem lorem',
        desc: 'Monitoring utility setpoints is vital for maintaining optimal operational parameters. This software alerts teams when setpoints exceed defined thresholds, helping prevent unnecessary energy use and avoidable operational costs. lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
      },
      {
        title: 'Idle Equipment Detection lorem lorem',
        desc: 'One of the most overlooked energy drains in industrial environments is equipment running idle. Our solution continuously monitors machine energy consumption versus output and flags idle equipment. It prompts automated actions such as turning off equipment during inactivity, a key feature of next-gen energy management systems. With this data, organizations can act quickly to shut down non-productive equipment, thereby reducing energy waste.'
      },
      {
        title: 'Industrial Carbon Footprint Management',
        desc: 'With growing emphasis on environmental compliance, this solution aids in tracking and reducing Scope 1, 2, and 3 emissions. By analyzing energy efficiency data and carbon outputs, the platform supports your carbon footprint reduction strategy and helps meet corporate sustainability targets. This is where energy management systems meet environmental sustainability.'
      },
      {
        title: 'Air Quality Monitoring lorem lorem lorem',
        desc: 'Indoor air quality has a direct impact on employee health and productivity. PowerOptimus integrates with air and humidity sensors to monitor environmental conditions within industrial and healthcare facilities. It provides actionable insights to align indoor air quality with outdoor conditions and maintain a healthy workplace.lorem lorem lorem lorem lorem lorem lorem lorem lorem'
      },
      {
        title: 'CO₂ Percentage Monitoring lorem lorem',
        desc: 'PowerOptimus measures indoor CO₂ concentrations and dynamically adjusts HVAC operations through Demand-Controlled Ventilation (DCV). This ensures both energy savings and a healthier working environment, demonstrating how comprehensive energy monitoring systems contribute to smarter infrastructure.lorem lorem lorem lorem lorem lorem lorem lorem lorem'
      },
      {
        title: 'Hazardous Gas Monitoring',
        desc: 'In chemical handling and processing environments, hazardous gas emissions pose serious health risks. PowerOptimus integrates gas detection sensors to monitor and alert in real time, ensuring a safer work environment and compliance with occupational health and safety norms lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.'
      },
      // {
      //   title: 'Predictive Analytics for Energy & Environmental Management',
      //   desc: 'our tailored energy monitoring system combines historical energy data with real-time sensor inputs to detect trends and anomalies. Acting as a predictive energy management system, it helps prevent unplanned downtime, optimize maintenance, and extend equipment lifespan.'
      // },
      // {
      //   title: 'Actionable Environmental Insights',
      //   desc: 'PowerOptimus also uses environmental sensors to track air quality, hazardous gases, and temperature. By analyzing real-time and historical data, it delivers actionable insights that help reduce the carbon footprint and support compliance. This blend of energy monitoring systems and environmental intelligence makes it ideal for sustainable, efficient operations.'
      // }
      
  ]

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const width = window.innerWidth;
      const container = scrollRef.current;

      let scrollAmount = 0;
      if (width <= 600) {
        scrollAmount = container.offsetWidth; // 1 card on mobile
      } else if (width <= 900) {
        scrollAmount = container.offsetWidth; // 3 cards on tablet
      }

      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const width = window.innerWidth;
      const container = scrollRef.current;

      let scrollAmount = 0;
      if (width <= 600) {
        scrollAmount = container.offsetWidth; // 1 card
      } else if (width <= 900) {
        scrollAmount = container.offsetWidth; // 3 cards
      }

      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="features-section">
      <h2 className="features-title Header2sec">Features</h2>

      <div className="features-scroll-container" ref={scrollRef}>
        <div className="features-grid">
          {features.map((item: any, index: any) => (
            <div className="feature-card" key={index}>
              <div>
              <h3 className="Header3sec alignbodytextwidth" style={{ marginTop: '0px', marginBottom: '0px' }}>{item.title}</h3>
              </div>
              <p className="body3sec TextGray3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-buttons">
        <button onClick={scrollLeft}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button onClick={scrollRight}>
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;



