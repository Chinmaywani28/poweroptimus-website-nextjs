import React from 'react'
import KeyverticalHeader from '../components/key-verticals-page/key-vertical-hero'
import FacilitySections from '../components/key-verticals-page/facility-sections'
import KeyverticalTwo from '../components/key-verticals-page/key-vertical-two'
import { FacilitySectionsTwo } from '../components/key-verticals-page/facility-sections-two'


const page = () => {
  return (
    <>
    <KeyverticalHeader/>
    {/* sections */}
      <FacilitySections
        title="Industrial Plants & Factories"
        text="PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste. PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste. PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste."
        imageSrc="./key-vertical-one.png"
        label1="HVAC Management "
        label2="Energy Monitoring"
        label3="Placeholder"
      />

      <FacilitySections
        title="Data Centers"
        text="PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste. PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste. PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste."
        imageSrc="./key-vertical-two.png"
        // reverse
        label1="HVAC Management "
        label2="Energy Monitoring"
        label3="Placeholder"
      />

            <FacilitySections
        title="Hospitals"
        text="PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste. PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste. PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste."
        imageSrc="./key-vertical-three.png"
        label1="HVAC Management "
        label2="Energy Monitoring"
        label3="Placeholder"
      />

            <FacilitySections
        title="Commercial Buildings"
        text="PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste. PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste. PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste."
        imageSrc="./key-vertical-four.png"
        // reverse
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

      <KeyverticalTwo
        title="Smart Device Compatibility"
        description="Explore the wide range of devices and sensors we support for precise energy monitoring and management. From HVAC systems and temperature sensors to air quality monitors and beyond, our platform integrates with a variety of devices to provide you with comprehensive insights into your energy consumption and environmental conditions."
        showLink={true}
        linkHref="/industries"
        linkText="All Industries"
        iconText="←"
      />




      {/*  */}
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
      />




    </>
    
    
  )
}

export default page