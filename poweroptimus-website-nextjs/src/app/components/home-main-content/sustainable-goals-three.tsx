"use client";

import React, { useState, useEffect } from "react";
import styles from "./sustainable-goals-three.module.css";


const SustainableGoalsThree: React.FC = () => {

  

  return (
    <section className={styles.section}>
      <div className={styles.grid}>

        {/* Top Left Card */}
        <div className={styles.card}>
          <h3>Goal 7 – Affordable and Clean Energy</h3>
          <p>
            PowerOptimus promotes efficient and responsible energy use through
            real-time monitoring of electricity, steam, refrigeration, compressed
            air, and water systems.
          </p>
          <p className={styles.impact}>
            <strong>Impact:</strong> Improved energy efficiency and optimized
            renewable integration.
          </p>
        </div>

        {/* Top Right Card */}
        <div className={styles.card}>
          <h3>Goal 9 – Industry, Innovation, and Infrastructure</h3>
          <p>
            Through digitalization and smart automation, PowerOptimus strengthens
            industrial infrastructure with predictive analytics and intelligent
            dashboards.
          </p>
          <p className={styles.impact}>
            <strong>Impact:</strong> Digitally enabled infrastructure and scalable
            innovation.
          </p>
        </div>

        {/* Center SDG */}
        <div className={styles.center}>
          <div className={styles.circle}>SDG</div>
        </div>

        {/* Bottom Left Card */}
        <div className={styles.card}>
          <h3>Goal 12 – Responsible Consumption and Production</h3>
          <p>
            PowerOptimus enables responsible resource management through granular
            visibility into energy and environmental parameters.
          </p>
          <p className={styles.impact}>
            <strong>Impact:</strong> Reduced waste and transparent sustainability
            reporting.
          </p>
        </div>

        {/* Bottom Right Card */}
        <div className={styles.card}>
          <h3>Goal 13 – Climate Action</h3>
          <p>
            The platform empowers organizations to take measurable climate action
            through emissions tracking and environmental monitoring.
          </p>
          <p className={styles.impact}>
            <strong>Impact:</strong> Real-time emissions visibility and SDG-aligned
            reporting.
          </p>
        </div>

      </div>
    </section>

  );
};

export default SustainableGoalsThree;
