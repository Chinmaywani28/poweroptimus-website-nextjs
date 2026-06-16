import React from 'react'
import './faq-component.css'; // Import HomePage specific styles


const FAQComponent = () => {
  return (
   <section className="faq-section">
  <div className="faq-container">

    <div className="faq-header">
      <h2>Frequently Asked Questions</h2>
      <p>
        Find answers to common questions about services,
        solutions & support.
      </p>
    </div>

    <div className="faq-list">

      <details className="faq-item">
        <summary>What is EnvirOptimus?</summary>
        <p>
          EnvirOptimus is a Digital Twin–enabled platform that helps organizations transform facility operations by connecting design data with real-time operational data. It enables intelligent, data-driven decision-making to improve efficiency, sustainability, and asset performance.
        </p>
      </details>

      <details className="faq-item">
        <summary>What does “Digital Twin as a Service (DTaaS)” mean?</summary>
        <p>
          Digital Twin as a Service (DTaaS) is a managed, end-to-end approach where EnvirOptimus creates, deploys, and maintains a dynamic digital twin of your facility. This eliminates the need for heavy upfront investment and ensures continuous updates, insights, and optimization.
        </p>
      </details>

      <details className="faq-item">
        <summary>How is EnvirOptimus different from traditional BMS or monitoring systems?</summary>
        <p>
          Traditional systems like BMS primarily monitor and control individual assets. EnvirOptimus goes beyond monitoring by integrating multiple systems, contextualizing data, and delivering actionable insights for optimized and intelligent operations.
        </p>
      </details>

      <details className="faq-item">
        <summary>Do I need an existing BIM model to use EnvirOptimus?</summary>
        <p>
          No. EnvirOptimus works with or without BIM. For existing facilities, it supports Scan-to-BIM approaches to create a digital foundation and build a digital twin. 
        </p>
      </details>

      <details className="faq-item">
        <summary>Can EnvirOptimus integrate with my existing systems?</summary>
        <p>
          Yes. EnvirOptimus integrates seamlessly with existing systems such as BMS, SCADA, IoT devices, meters, and enterprise systems using standard protocols and APIs.
        </p>
      </details>

      <details className="faq-item">
        <summary>What types of facilities can benefit from EnvirOptimus?</summary>
        <p>
          EnvirOptimus is designed for a wide range of facilities, including: 
        </p>
        <ul>
          <li>Commercial buildings(offices, malls, mixed-use)</li>
          <li>Hospitals and healthcare facilities</li>
          <li>Industrial plants and manufacturing units</li>
          <li>Airports, data centers, and other critical infrastructure</li>
        </ul>

      </details>

      <details className="faq-item">
        <summary>What are the key benefits of using EnvirOptimus?</summary>
        
        <ul>
          <li>Improved energy efficiency and cost optimization</li>
          <li>Real-time visibility across systems</li>
          <li>Predictive and proactive maintenance</li>
          <li>Enhanced compliance and reporting</li>
          <li>Better occupant comfort and experience </li>
          <li>Data-driven decision-making </li>
        </ul>

      </details>

      <details className="faq-item">
        <summary>What is a “Living Digital Twin”?</summary>
        
        <p>
          A Living Digital Twin is a continuously updated digital representation of your facility that evolves with real-time data. It not only visualizes assets but actively drives insights, predictions, and operational decisions. 
        </p>

      </details>

      <details className="faq-item">
        <summary>Is EnvirOptimus scalable across multiple facilities?</summary>
        <p>
          Yes. The platform is designed to scale from a single building to multiple sites, enabling centralized monitoring and optimization across your entire portfolio.
        </p>

      </details>

      <details className="faq-item">
        <summary>How secure is the platform?</summary>
        <p>
         EnvirOptimus follows industry-standard security practices, including secure data integration, access control, and compliance with enterprise IT and cybersecurity requirements.
        </p>

      </details>

      <details className="faq-item">
        <summary>How quickly can EnvirOptimus be implemented?</summary>
        <p>
          Implementation timelines depend on the facility size and data availability, but the DTaaS model enables faster deployment compared to traditional approaches.
        </p>

      </details>

      <details className="faq-item">
        <summary>Does EnvirOptimus replace existing Digital Twin platforms?</summary>
        <p>
          No. EnvirOptimus complements existing Digital Twin platforms by adding a layer of operational intelligence, helping organizations extract more value from their current investments.
        </p>

      </details>

      <details className="faq-item">
        <summary>What kind of insights does EnvirOptimus provide?</summary>
        <p>
          The platform provides insights related to energy consumption, asset performance, anomalies, predictive maintenance, and operational optimization.
        </p>

      </details>

      <details className="faq-item">
        <summary>How can I get started with EnvirOptimus?</summary>
        <p>
          You can get started by scheduling a demo or consultation with our team to assess your current systems and identify opportunities for optimization.
        </p>

      </details>
    </div>

  </div>
</section>
  )
}

export default FAQComponent