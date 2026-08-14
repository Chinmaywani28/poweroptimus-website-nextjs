"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';
import './page.css'
import FAQComponent from '../components/solution/faq-component';
// import SchemaMarkup from '../components/schema/schemaMarkup';
// import SchemaMarkup from '../components/schema/schemaMarkup';


const pageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need an existing BIM model to use EnvirOptimus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. EnvirOptimus works with or without BIM. For existing facilities, it supports Scan-to-BIM approaches to create a digital foundation and build a <a href=\"https://www.enviroptimus.com/solution\">digital twin</a>."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Living Digital Twin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A <a href=\"https://www.enviroptimus.com/resources/blogs-details/dont-Let-Your-Digital-Twin-Be-Just-a-Replica-Bring-It-to-Life\">Living Digital Twin</a> is a continuously updated digital representation of your facility that evolves with real-time data. Unlike a static 3D replica, it not only visualizes assets but actively drives insights, predictions, and operational decisions as conditions change."
      }
    },
    {
      "@type": "Question",
      "name": "Is EnvirOptimus scalable across multiple facilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. EnvirOptimus is designed to scale from a single building to multiple sites across various <a href=\"https://www.enviroptimus.com/key-verticals\">key verticals</a>, enabling centralized monitoring and optimization across your entire facility portfolio."
      }
    },
    {
      "@type": "Question",
      "name": "How secure is the EnvirOptimus platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EnvirOptimus follows industry-standard security practices, including secure data integration, access control, and compliance with enterprise IT and cybersecurity requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can EnvirOptimus be implemented?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Implementation timelines depend on facility size and data availability, but EnvirOptimus's <a href=\"https://www.enviroptimus.com/solution\">DTaaS (Digital Twin as a Service)</a> model enables faster deployment compared to traditional digital twin approaches."
      }
    },
    {
      "@type": "Question",
      "name": "Does EnvirOptimus replace existing Digital Twin platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. EnvirOptimus complements existing Digital Twin platforms by adding a layer of operational intelligence, helping organizations extract more value from their current digital twin investments."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of insights does EnvirOptimus provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EnvirOptimus provides <a href=\"https://www.enviroptimus.com/key-verticals/capabilities#advanced-hvac\">insights and capabilities</a> related to energy consumption, asset performance, anomalies, predictive maintenance, and operational optimization across a facility or portfolio."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get started with EnvirOptimus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can get started with EnvirOptimus by scheduling a demo or consultation with the team to assess your current systems and identify opportunities for optimization."
      }
    }
  ]

};





const Faq = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <>

    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />

    {/* <SchemaMarkup schema={pageSchema} /> */}
   
    {/* <div>coming soon</div> */}
    <div className="topSpacing">
        <FAQComponent
      title="Frequently Asked Questions"
      description="Find answers to common questions about services, solutions & support."
      faqList={[

  // {
  //   question: "What is EnvirOptimus?",
  //   answer:

  //     (
  //     <>
  //       <a href="https://www.enviroptimus.com/">EnvirOptimus </a>
  //        is a Digital Twin–enabled platform that helps organizations transform facility operations by connecting design data with real-time operational data. It enables intelligent, data-driven decision-making to improve efficiency, sustainability, and asset performance.`,
  //     </>
  //   ),

  //       // ` 
  //       // <a href="https://www.enviroptimus.com/">
  //       //       EnvirOptimus
  //       //       </a>
  //       // is a Digital Twin–enabled platform that helps organizations transform facility operations by connecting design data with real-time operational data. It enables intelligent, data-driven decision-making to improve efficiency, sustainability, and asset performance.`,
  // },

  // {
  //   question: "What does “Digital Twin as a Service (DTaaS)” mean?",
  //   answer:
  //     "Digital Twin as a Service (DTaaS) is a managed, end-to-end approach where EnvirOptimus creates, deploys, and maintains a dynamic digital twin of your facility. This enables the entire implementation process, from data integration and deployment to ongoing support and optimization, to be delivered through a single agency."
  // },


  // {
  //   question: "How is EnvirOptimus different from traditional BMS or monitoring systems?",
  //   answer:
  //     "Traditional systems like BMS primarily monitor and control individual assets. EnvirOptimus goes beyond monitoring by integrating multiple systems, contextualizing data, and delivering actionable insights for optimized and intelligent operations."
  // },

  {
    question: "Do I need an existing BIM model to use EnvirOptimus?",
    answer:
      "No. EnvirOptimus works with or without BIM. For existing facilities, it supports Scan-to-BIM approaches to create a digital foundation and build a digital twin."
  },


  // {
  //   question: "Can EnvirOptimus integrate with my existing systems?",
  //   answer:

  //     (
  //     <>
  //        Yes. EnvirOptimus integrates seamlessly with existing systems such as <a href="https://www.enviroptimus.com/resources/blogs-details/From-Building-Management-Systems-to-Intelligent-Operations-The-Next-Evolution-of-Smart-Facilities"> Building Management System</a> , SCADA, IoT devices, meters, and enterprise systems using standard protocols and APIs.

  //     </>
  //   ),


  //     // " Yes. EnvirOptimus integrates seamlessly with existing systems such as Building Management System, SCADA, IoT devices, meters, and enterprise systems using standard protocols and APIs."
  // },

  // {
  //   question: "What types of facilities can benefit from EnvirOptimus?",
  //   answer:
  //     "EnvirOptimus is designed for a wide range of facilities, including:",
  //     list: [
  //       "Commercial buildings(offices, malls, mixed-use)",
  //         "Hospitals and healthcare facilities",
  //         "Industrial plants and manufacturing units",
  //         "Airports, data centers, and other critical infrastructure",
  //     ]
  // },

  // {
  //   question: "What are the key benefits of using EnvirOptimus?",
  //   answer:
  //     "What are the key benefits of using EnvirOptimus?",
  //     list: [
  //       "Improved energy efficiency and cost optimization",
  //         "Real-time visibility across systems",
  //         "Predictive and proactive maintenance",
  //         "Enhanced compliance and reporting",
  //         "Better occupant comfort and experience",
  //         "Data-driven decision-making"

  //     ]
  // },
  {
    question: "What is a “Living Digital Twin”?",
    answer:
    (
      <>
         A <a href="https://www.enviroptimus.com/resources/blogs-details/dont-Let-Your-Digital-Twin-Be-Just-a-Replica-Bring-It-to-Life">Living Digital Twin </a>  is a continuously updated digital representation of your facility that evolves with real-time data. It not only visualizes assets but actively drives insights, predictions, and operational decisions.
      </>
    ),
      // "A Living Digital Twin is a continuously updated digital representation of your facility that evolves with real-time data. It not only visualizes assets but actively drives insights, predictions, and operational decisions."
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