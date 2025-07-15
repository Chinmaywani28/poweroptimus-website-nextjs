import React from 'react'
import KeyverticalHeader from '../components/key-verticals-page/key-vertical-hero'
import FacilitySections from '../components/key-verticals-page/facility-sections'
import KeyverticalTwo from '../components/key-verticals-page/key-vertical-two'
import { FacilitySectionsTwo } from '../components/key-verticals-page/facility-sections-two'
import WhyPowerOptimus from '../components/key-verticals-page/whypoweroptimus'
import Integration from '../components/solution/integration'
import FeatureBtmSection from '../components/key-verticals-page/feature-btm-section'
import SolFeatureBtmSection from '../components/solution/sol-feature-btm-section'
import { WhyPowerOptimusTwo } from '../components/key-verticals-page/why-power-optimus/why-power-optimus-two'


const page = () => {
  return (
    <>
    {/* <KeyverticalHeader/> */}
    <KeyverticalTwo
        title="Optimizing Energy Across Industries"
        description="Explore the diverse sectors we empower with intelligent energy monitoring and management solutions. From industrial plants and data centers to hospitals and commercial buildings, discover how our tailored approaches drive efficiency, reduce costs, and promote sustainability"
        showLink={false}
      />
    {/* sections */}
      <FacilitySections
        title="Industrial Plants & Factories"
        text="Data centers require uninterrupted performance and precise control over power usage. With PowerOptimus, you gain complete visibility into energy metrics, thermal loads, cooling efficiency, and backup systems. Our platform ensures balanced energy optimization, allowing your data center to minimize power usage effectiveness (PUE) and avoid equipment strain.The intelligent monitoring layer also supports environmental monitoring for detecting fluctuations in temperature, humidity, or AQI, keeping your critical infrastructure protected and resilient around the clock."
        imageSrc="./key-vertical-one.png"
        label1="HVAC Management "
        label2="Energy Monitoring"
        label3="Placeholder"
      />

      <FacilitySections
        title="Data Centers"
        text="Data centers require uninterrupted performance and precise control over power usage. With PowerOptimus, you gain complete visibility into energy metrics, thermal loads, cooling efficiency, and backup systems. Our platform ensures balanced energy optimization, allowing your data center to minimize power usage effectiveness (PUE) and avoid equipment strain.The intelligent monitoring layer also supports environmental monitoring for detecting fluctuations in temperature, humidity, or AQI, keeping your critical infrastructure protected and resilient around the clock."
        imageSrc="./key-vertical-two.png"
        reverse
        label1="HVAC Management "
        label2="Energy Monitoring"
        label3="Placeholder"
      />

            <FacilitySections
        title="Hospitals"
        text="Hospitals and healthcare institutions have a non-negotiable need for reliability, comfort, and compliance. PowerOptimus supports this with real-time tracking of energy, HVAC performance, indoor air quality, and occupancy, ensuring environments are both safe and efficient. In healthcare, uptime is critical. Our energy monitoring systems provide continuous insights to avoid power anomalies that could jeopardize sensitive operations. The system also contributes to improved patient care and enhanced operational outcomes while aligning with broader environmental sustainability mandates."
        imageSrc="./key-vertical-three.png"
        label1="HVAC Management "
        label2="Energy Monitoring"
        label3="Placeholder"
      />

            <FacilitySections
        title="Commercial Buildings"
        text="Modern commercial spaces demand intelligent control over energy use, air quality, and occupancy to enhance comfort, reduce operational costs, and meet green building standards. PowerOptimus delivers tailored solutions for commercial buildings by monitoring KPIs like HVAC performance, energy consumption, air quality index (AQI), and occupancy patterns.These insights allow facilities to make real-time adjustments that optimize comfort and operational efficiency. Our robust energy management systems for commercial applications are not just about reducing bills—they’re about future-proofing your infrastructure and supporting your long-term sustainability goals."
        imageSrc="./key-vertical-four.png"
        reverse
        label1="HVAC Management "
        label2="Energy Monitoring"
        label3="Placeholder"
      />

      <FacilitySections
        title="Pharmaceuticals and Life Sciences"
        text="In pharmaceutical manufacturing and lab environments, precise environmental control is critical for product quality and compliance. PowerOptimus enables this with automated environmental monitoring, covering parameters like temperature, humidity, cleanroom air changes, and energy use across lab equipment. With advanced analytics and real-time alerts, your facility can ensure regulatory alignment while also achieving energy optimization across complex lab and production systems."
        imageSrc="./key-vertical-three.png"
        // reverse
        label1="HVAC Management "
        label2="Energy Monitoring"
        label3="Placeholder"
      />

      <FacilitySections
        title="Food and Beverage Industry"
        text="The food and beverage industry requires close monitoring of process efficiency and environmental standards. PowerOptimus supports this by providing complete control over energy usage, refrigeration systems, HVAC, and production-related KPIs. By integrating intelligent energy management systems, organizations can reduce energy wastage during food processing, preserve product integrity, and streamline utilities across distributed plants. Our solution also supports sustainable production practices that reduce carbon footprint while maintaining compliance with health and safety standards."
        imageSrc="./key-vertical-one.png"
        reverse
        label1="HVAC Management "
        label2="Energy Monitoring"
        label3="Placeholder"
      />

      {/* keyvertical two */}
      {/* <KeyverticalTwo
        title="Smart Device Compatibility"
        description="Explore the wide range of devices and sensors we support for precise energy monitoring and management. From HVAC systems and temperature sensors to air quality monitors and beyond, our platform integrates with a variety of devices to provide you with comprehensive insights into your energy consumption and environmental conditions."
        subLink='All Industries'
      /> */}

      {/* hvac sections */}
      {/* <KeyverticalTwo
        title="Smart Device Compatibility"
        description="Explore the wide range of devices and sensors we support for precise energy monitoring and management. From HVAC systems and temperature sensors to air quality monitors and beyond, our platform integrates with a variety of devices to provide you with comprehensive insights into your energy consumption and environmental conditions."
        showLink={true}
        linkHref="/industries"
        linkText="All Industries"
        iconText="←"
      />

      <FacilitySectionsTwo
        title="Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium"
        subtitle="HVAC Controls and Monitoring"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam. chine operations, reducing downtime, and minimizing waste.PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime"
        imageSrc="./key-vertical-sec-one.png"
        imageLeft={false}
      />

      <FacilitySectionsTwo
        title="Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium"
        subtitle="AQI Monitoring"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam. chine operations, reducing downtime, and minimizing waste.PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime"
        imageSrc="./key-vertical-sec-two.png"
        imageLeft={true}
      />

      <FacilitySectionsTwo
        title="Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium "
        subtitle="Temperature Monitoring"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam. chine operations, reducing downtime, and minimizing waste.PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime"
        imageSrc="./key-vertical-sec-three.png"
        imageLeft={false}
      />

      <FacilitySectionsTwo
        title="Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium"
        subtitle="Early Fault Detection "
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam. chine operations, reducing downtime, and minimizing waste.PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime"
        imageSrc="./key-vertical-sec-four.png"
        imageLeft={true}
      /> */}

      {/* <WhyPowerOptimus/> */}
      <WhyPowerOptimusTwo/>

      {/* <FeatureBtmSection
        heading="Easy to integrate with existing setup "
        paragraphs={[
          "PowerOptimus is more than a monitoring tool—it is a strategic platform designed to help organizations gain complete control over energy and environmental performance. With integrated energy monitoring systems, smart dashboards, and real-time analytics, PowerOptimus empowers organizations to optimize operations and uphold high-performance standards."
        ]}
        buttonText="Download Documentation"
        imageSrc="/integration.png"
        imageAlt="Illustration of integration"
      /> */}

      <SolFeatureBtmSection
        heading="Easy to Integrate with Existing Systems"
        paragraphs={[
          "PowerOptimus is more than a monitoring tool—it is a strategic platform designed to help organizations gain complete control over energy and environmental performance. With integrated energy monitoring systems, smart dashboards, and real-time analytics, PowerOptimus empowers organizations to optimize operations and uphold high-performance standards."
        ]}
        buttonText="Download Documentation"
        imageSrc="/integration.png"
        imageAlt="Illustration of integration"
      />
      

    </>
    
    
  )
}

export default page