"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';
import './page.css'
import FAQComponent from '../components/solution/faq-component';

const Faq = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <>
   
    {/* <div>coming soon</div> */}
    <div className="topSpacing">
        <FAQComponent
      title="Frequently Asked Questions"
      description="Find answers to common questions about services, solutions & support."
      faqList={[

  {
    question: "What is EnvirOptimus?",
    answer:
      "EnvirOptimus is a Digital Twin–enabled platform that helps organizations transform facility operations by connecting design data with real-time operational data. It enables intelligent, data-driven decision-making to improve efficiency, sustainability, and asset performance.",
  },

  {
    question: "What does “Digital Twin as a Service (DTaaS)” mean?",
    answer:
      " Digital Twin as a Service (DTaaS) is a managed, end-to-end approach where EnvirOptimus creates, deploys, and maintains a dynamic digital twin of your facility. This eliminates the need for heavy upfront investment and ensures continuous updates, insights, and optimization."
  },


  {
    question: "How is EnvirOptimus different from traditional BMS or monitoring systems?",
    answer:
      "Traditional systems like BMS primarily monitor and control individual assets. EnvirOptimus goes beyond monitoring by integrating multiple systems, contextualizing data, and delivering actionable insights for optimized and intelligent operations."
  },

  {
    question: "Do I need an existing BIM model to use EnvirOptimus?",
    answer:
      "No. EnvirOptimus works with or without BIM. For existing facilities, it supports Scan-to-BIM approaches to create a digital foundation and build a digital twin."
  },


  {
    question: "Can EnvirOptimus integrate with my existing systems?",
    answer:
      " Yes. EnvirOptimus integrates seamlessly with existing systems such as BMS, SCADA, IoT devices, meters, and enterprise systems using standard protocols and APIs."
  },

  {
    question: "What types of facilities can benefit from EnvirOptimus?",
    answer:
      "EnvirOptimus is designed for a wide range of facilities, including:",
      list: [
        "Commercial buildings(offices, malls, mixed-use)",
          "Hospitals and healthcare facilities",
          "Industrial plants and manufacturing units",
          "Airports, data centers, and other critical infrastructure",
      ]
  },

  {
    question: "What are the key benefits of using EnvirOptimus?",
    answer:
      "What are the key benefits of using EnvirOptimus?",
      list: [
        "Improved energy efficiency and cost optimization",
          "Real-time visibility across systems",
          "Predictive and proactive maintenance",
          "Enhanced compliance and reporting",
          "Better occupant comfort and experience",
          "Data-driven decision-making"

      ]
  },
  {
    question: "What is a “Living Digital Twin”?",
    answer:
      "A Living Digital Twin is a continuously updated digital representation of your facility that evolves with real-time data. It not only visualizes assets but actively drives insights, predictions, and operational decisions."
  },

  {
    question: "Is EnvirOptimus scalable across multiple facilities?",
    answer:
      "Yes. The platform is designed to scale from a single building to multiple sites, enabling centralized monitoring and optimization across your entire portfolio."
  },

  {
    question: "How secure is the platform?",
    answer:
      "EnvirOptimus follows industry-standard security practices, including secure data integration, access control, and compliance with enterprise IT and cybersecurity requirements."
  },

  {
    question: "How quickly can EnvirOptimus be implemented?",
    answer:
      "Implementation timelines depend on the facility size and data availability, but the DTaaS model enables faster deployment compared to traditional approaches."
  },

   {
    question: "Does EnvirOptimus replace existing Digital Twin platforms?",
    answer:
      "No. EnvirOptimus complements existing Digital Twin platforms by adding a layer of operational intelligence, helping organizations extract more value from their current investments."
  },

   {
    question: "What kind of insights does EnvirOptimus provide?",
    answer:
      "The platform provides insights related to energy consumption, asset performance, anomalies, predictive maintenance, and operational optimization."
  },

   {
    question: "How can I get started with EnvirOptimus?",
    answer:
      "You can get started by scheduling a demo or consultation with our team to assess your current systems and identify opportunities for optimization."
  },







]}
    />
    </div>
      
    </>
  );
}

export default Faq