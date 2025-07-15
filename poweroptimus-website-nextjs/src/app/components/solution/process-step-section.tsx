// "use client";
// import React from 'react';
// import { useTranslation } from 'react-i18next'; // Import translation hook
// import './process-step-section.css'; // Import HomePage specific styles

// const ProcessStepSection = () => {
//   const { t } = useTranslation(); // Initialize translation hook
//   const steps = [
//   {
//     title: "1 Install Sensors and Gateways",
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor doloribus dicta voluptatibus omnis doloremque est neque veritatis quos velit, repellat, hic excepturi deleniti ea natus sequi culpa, repellendus et fugit obcaecati earum nostrum magni. Quaerat distinctio impedit reiciendis veritatis laborum eos architecto. Illo harum unde voluptatibus modi facilis provident velit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor doloribus dicta voluptatibus omnis doloremque est neque veritatis quos velit, repellat, hic excepturi deleniti ea natus sequi culpa, repellendus et fugit obcaecati earum nostrum magni. Quaerat distinctio impedit reiciendis veritatis laborum eos architecto. Illo harum unde voluptatibus modi facilis provident velit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor doloribus dicta voluptatibus omnis doloremque est neque veritatis quos velit, repellat, hic excepturi deleniti ea natus sequi culpa, repellendus et fugit obcaecati earum nostrum magni. Quaerat distinctio impedit reiciendis veritatis laborum eos architecto. Illo harum unde voluptatibus modi facilis provident velit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor doloribus dicta voluptatibus omnis doloremque est neque veritatis quos velit, repellat, hic excepturi deleniti ea natus sequi culpa, repellendus et fugit obcaecati earum nostrum magni.",
//     image: "process-step-img.png",
//   },
//   {
//     title: "2 Connect to the Cloud",
//     description:
//       "",
//     image: "process-step-img.png",
//   },
//   {
//     title: "3 Monitor via Dashboard",
//     description:
//       "",
//     image: "process-step-img.png",
//   },
//   {
//     title: "4 Act on Insights",
//     description:
//       "",
//     image: "process-step-img.png",
//   },
// ];
//   return (
//     <section className="process-section">
//       <div className="process-steps">
//         {steps.map((step, index) => (
//           <div
//             className={`process-step ${index % 2 !== 0 ? "reverse" : ""}`}
//             key={index}
//           >
//             <div className="step-image">
//               <img src={step.image} alt={`Step ${index + 1}`} />
//             </div>
//             <div className="step-text">
//               <h3>{step.title}</h3>
//               <p>{step.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default ProcessStepSection


import React from 'react'
import './process-step-section.css'; // Import HomePage specific styles

const ProcessStepSection = () => {
    const steps = [
    { id: 1, title: '1 Sensor & Gateway Installation', image: './process-step-img.png', description: 'PowerOptimus begins by deploying sensors and gateways across critical industrial areas. These components play a vital role in measuring and analyzing energy and environmental parameters, helping identify inefficiencies and reducing overall energy consumption.' },
    { id: 2, title: '2 Seamless Cloud Connectivity', image: './process-step-img.png', description: 'Data from the installed sensors is securely collected by gateways using advanced communication protocols. This data is then transmitted to the cloud for processing, analytics, storage, and visualization, ensuring seamless access from anywhere, anytime.' },
    { id: 3, title: '3 Real-Time Monitoring via Dashboard', image: './process-step-img.png', description: 'The cloud-processed data is presented through an intuitive dashboard, providing real-time visibility into key metrics such as air quality, temperature, oxygen levels, and CO₂ concentrations. Users can track trends, analyze patterns, and monitor critical setpoints with ease.' },
    { id: 4, title: '4 Data-Driven, Actionable Insights', image: './process-step-img.png', description: 'By comparing historical data with live sensor readings, PowerOptimus delivers meaningful, actionable insights. These insights empower organizations to reduce CO₂ emissions, optimize energy usage, and advance their sustainability goals through smarter decision-making.' }
  ];

  return (
    <section className="step-section">
      {steps.map((step, index) => (
        <div key={step.id} className={`step ${index % 2 !== 0 ? 'reverse' : ''}`}>
          <img src={step.image} alt={step.title} />
          <div className="text">
            <h2 className="step-title Header1sec">{step.title}</h2>
            <div className="step-desc body1sec">{step.description}</div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProcessStepSection
