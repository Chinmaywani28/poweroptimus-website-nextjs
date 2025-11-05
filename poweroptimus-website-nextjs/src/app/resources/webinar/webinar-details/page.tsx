import Link from 'next/link'
import React from 'react'
import './page.css'
import { NewsAndEventsSubSection } from '@/app/components/news-and-events/news-and-events-subsec'
import { CaseStudySubSection } from '@/app/components/news-and-events/case-study-subsec'


const page = () => {
  return (
    <>
      <CaseStudySubSection
        title="Connecting Energy Monitoring, Predictive Maintenance, and Sustainability for Resilient Operations"
        imageSrc="/blogs-img.jpg"
        content={[
          "Consequatur molestias sequi tempore officia. Sed consequatur facilis...",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        ]}
        otherCases={[
          "Maires sit et architecto. Eos doloribus sapiente pariatur nihil reiciendis.",
          "Another case study title...",
          "Yet another case study title...",
        ]}
        showBackLink={false}
        textDesc={<div>
                  <p>
                    In a rapidly evolving operational landscape, resilience is no longer a luxury it’s a strategic imperative. This webinar brings together the transformative synergy of energy monitoring, predictive maintenance, and sustainability, showcasing how their integration can fortify your infrastructure, elevate operational efficiency, and drive measurable environmental impact.
                  </p>
                  
                  <p>
                    Energy monitoring offers real-time visibility into your system’s power usage, enabling early detection of inefficiencies that may otherwise go unnoticed. Organizations leveraging this kind of analytics often achieve at start 8 to 12 % reduction in energy bills within the first year. When combined with predictive maintenance, operations shift from reactive to proactive: maintenance is scheduled based on actual equipment condition, helping to forecast failures, reduce unplanned downtime, extend asset lifespan, and enhance sustainability by minimizing resource waste.
                  </p>

                  <p>
                    Together, these capabilities deliver a powerful triple impact - cutting energy and maintenance costs, reducing environmental footprints, and boosting infrastructure resilience, ensuring operations that are not only efficient but also robust enough to withstand disruptions.
                  </p>

                  <p>What You’ll Gain from the Webinar</p>

                  <p><b>Strategic Foundations:</b> Understand how integrating energy monitoring and predictive analytics generates operational insights that elevate both efficiency and sustainability.</p>

                  <p><b>Actionable Insights:</b> Learn how real-world organizations are reducing energy consumption, lowering maintenance costs, and extending equipment lifespan, all while minimizing environmental impacts.</p>

                  <p><b>Resilience Through Integration:</b> Discover how aligning operational technology with environmental strategy builds systems that are not only efficient but adaptable and robust in the face of unexpected challenges.</p>

                  <p><b>Expert Perspectives:</b> Hear from professionals leveraging AI, IoT, and data analytics to transform operations—making them smarter, greener, and more durable.</p>
                </div>}
      />
    </>
  );
}

export default page