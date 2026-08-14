
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// const Homepage = () => {

//   return (
//     <div className='container'>
//     <div className="App">

//         <h1>asdf</h1>
       
//       </Navbar>
//       {/* <HomePage /> */}
//       {/* <Footer /> */}
//     </div>
//     </div>
//   )
// }

// export default Homepage;


"use client"
import Navbar from '../components/navbar/Navbar';
import HomeMainContent from '../components/home-main-content/home-main-content'
// import SchemaMarkup from '../components/schema/schemaMarkup';
// import SchemaMarkup from '../components/schema/schemaMarkup';

export default function Home() {

  const pageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does “Digital Twin as a Service (DTaaS)” mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Digital Twin as a Service (DTaaS) is a managed, end-to-end approach where <a href=\"https://www.enviroptimus.com/solution\">EnvirOptimus</a> creates, deploys, and maintains a dynamic digital twin of your facility. This eliminates the need for heavy upfront investment and ensures continuous updates, insights, and optimization."
      }
    },
    {
      "@type": "Question",
      "name": "How is EnvirOptimus different from traditional BMS or monitoring systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional systems like BMS primarily monitor and control individual assets. EnvirOptimus goes beyond monitoring by integrating multiple systems, contextualizing data, and delivering actionable insights through its <a href=\"https://www.enviroptimus.com/key-verticals/capabilities#advanced-hvac\">advanced capabilities</a> for optimized and intelligent operations."
      }
    },
    {
      "@type": "Question",
      "name": "What types of facilities can benefit from EnvirOptimus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EnvirOptimus is designed for a wide range of <a href=\"https://www.enviroptimus.com/key-verticals\">key verticals</a>, including commercial buildings (offices, malls, mixed-use), hospitals and healthcare facilities, industrial plants and manufacturing units, and airports, data centers, and other critical infrastructure."
      }
    }
  ]
}


  return (
    
    
    <div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />


      {/* <SchemaMarkup schema={pageSchema} /> */}
      <Navbar />
      <HomeMainContent />
      
    </div>
  );
}
