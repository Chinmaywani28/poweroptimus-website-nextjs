"use client";
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './process-diagram.css'; // Import HomePage specific styles

const ProcessDiagram = () => {
  const { t } = useTranslation(); // Initialize translation hook
  
  return (
    <section className="process-diagram-section">
      <h2 className="process-title">Process</h2>
      <div className="diagram-placeholder">
        &lt; Diagram &gt;
      </div>
    </section>
  )
}

export default ProcessDiagram
