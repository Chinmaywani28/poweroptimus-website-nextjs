"use client";
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './process-step-section.css'; // Import HomePage specific styles

const ProcessStepSection = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const steps = [
  {
    title: "1 Install Sensors and Gateways",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor doloribus dicta voluptatibus omnis doloremque est neque veritatis quos velit, repellat, hic excepturi deleniti ea natus sequi culpa, repellendus et fugit obcaecati earum nostrum magni. Quaerat distinctio impedit reiciendis veritatis laborum eos architecto. Illo harum unde voluptatibus modi facilis provident velit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor doloribus dicta voluptatibus omnis doloremque est neque veritatis quos velit, repellat, hic excepturi deleniti ea natus sequi culpa, repellendus et fugit obcaecati earum nostrum magni. Quaerat distinctio impedit reiciendis veritatis laborum eos architecto. Illo harum unde voluptatibus modi facilis provident velit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor doloribus dicta voluptatibus omnis doloremque est neque veritatis quos velit, repellat, hic excepturi deleniti ea natus sequi culpa, repellendus et fugit obcaecati earum nostrum magni. Quaerat distinctio impedit reiciendis veritatis laborum eos architecto. Illo harum unde voluptatibus modi facilis provident velit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor doloribus dicta voluptatibus omnis doloremque est neque veritatis quos velit, repellat, hic excepturi deleniti ea natus sequi culpa, repellendus et fugit obcaecati earum nostrum magni.",
    image: "process-step-img.png",
  },
  {
    title: "2 Connect to the Cloud",
    description:
      "",
    image: "process-step-img.png",
  },
  {
    title: "3 Monitor via Dashboard",
    description:
      "",
    image: "process-step-img.png",
  },
  {
    title: "4 Act on Insights",
    description:
      "",
    image: "process-step-img.png",
  },
];
  return (
    <section className="process-section">
      <div className="process-steps">
        {steps.map((step, index) => (
          <div
            className={`process-step ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <div className="step-image">
              <img src={step.image} alt={`Step ${index + 1}`} />
            </div>
            <div className="step-text">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProcessStepSection
