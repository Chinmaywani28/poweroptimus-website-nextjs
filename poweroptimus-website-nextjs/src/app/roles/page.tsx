import React from 'react'
import KeyverticalTwo from '../components/key-verticals-page/key-vertical-two'
import FacilitySections from '../components/key-verticals-page/facility-sections'
import HeroReusable from '../components/key-verticals-page/hero-reusable'

const page = () => {
  return (
    <>
      {/* <KeyverticalTwo
        title="Energy Solutions for Every Stakeholder"
        description="Whether you're a hands-on technical manager, a strategic sustainability leader, or a service provider delivering client solutions, our comprehensive platform is designed to meet your unique needs. Gain real-time visibility, drive efficiency, and achieve measurable results with our energy monitoring and management solutions. See how we empower every stakeholder to make informed decisions and achieve their energy goals"
        showLink={false}
      /> */}

      <HeroReusable headerText={'Energy Solutions for Every Stakeholder'} bodyText={'Whether you are a hands-on technical manager a strategic sustainability leader, or a service provider delivering client solutions, our comprehensive platform is designed to meet your unique needs. Gain real-time visibility, drive efficiency, and achieve measurable results with our energy monitoring and management solutions. See how we empower every stakeholder to make informed decisions and achieve their energy goals'} />


      <FacilitySections
        title="Technical Manager/Facility Manager"
        text="Gain real-time visibility into your facility's energy consumption and identify potential issues before they escalate. Our platform provides the data and analytics you need for proactive maintenance, optimizing equipment performance and minimizing downtime. Quia ratione fuga accusamus corrupti et vitae aliquam. Ratione maxime vitae ipsum voluptate. Rerum laborum autem quaerat earum voluptas. Et porro error ut. Non explicabo excepturi minus quia quibusdam laboriosam quidem consectetur. Laboriosam fuga minima quia quibusdam. Dolores hic repellendus unde temporibus atque. Laudantium asperiores id quis. Voluptatem veniam id facilis rerum. Et ut corporis dolores aut expedita et minus blanditiis possimus. Eligendi provident delectus qui. Optio in quidem. Recusandae et nisi doloremque eaque. Voluptas optio quo blanditiis minus ab."
        imageSrc="./roles-one.png"
        label1="Real-Time Usage Insights"
        label2="Predictive Maintenance Alerts"
        label3="Environmental Impact"
      />

      <FacilitySections
        title="Sustainability Officer/Energy Manager"
        text="Track your energy usage, monitor carbon emissions, and generate comprehensive reports to demonstrate your sustainability efforts. Our solutions empower you to meet your environmental targets and achieve a greener footprint. Quia ratione fuga accusamus corrupti et vitae aliquam. Ratione maxime vitae ipsum voluptate. Rerum laborum autem quaerat earum voluptas. Et porro error ut. Non explicabo excepturi minus quia quibusdam laboriosam quidem consectetur. Laboriosam fuga minima quia quibusdam.Dolores hic repellendus unde temporibus atque. Laudantium asperiores id quis. Voluptatem veniam id facilis rerum. Et ut corporis dolores aut expedita et minus blanditiis possimus.Eligendi provident delectus qui. Optio in quidem. Recusandae et nisi doloremque eaque. Voluptas optio quo blanditiis minus ab"
        imageSrc="./roles-two.png"
        reverse
        label1="Real-Time Usage Insights"
        label2="Predictive Maintenance Alerts"
        label3="Environmental Impact"
      />

      

      <FacilitySections
        title="Maintenance/Reliability Engineers"
        text="As a Maintenance or Reliability Engineer, your focus is on maximizing equipment uptime and preventing costly breakdowns. Our energy monitoring and management system provides you with real-time data on equipment performance, energy consumption, and potential anomalies. Leverage predictive analytics to identify maintenance needs before they become critical, ensuring continuous production and minimizing downtime. Receive alerts for abnormal power consumption, temperature spikes, or other signs of impending failure, allowing for proactive intervention. Optimize energy usage during scheduled maintenance to reduce operational costs. Gain detailed reports on energy efficiency of individual machines and overall production lines, helping you to make data-driven decisions for improved reliability."
        imageSrc="./roles-three.png"
        label1="Real-Time Usage Insights"
        label2="Predictive Maintenance Alerts"
        label3="Environmental Impact"
      />

      <FacilitySections
        title="Service Providers"
        text="For service providers in facility management, energy consulting, and related fields, our solutions offer a powerful advantage. Deliver enhanced value to your clients by providing real-time energy monitoring, data-driven insights, and proactive management strategies, all through a unified platform. Quia ratione fuga accusamus corrupti et vitae aliquam. Ratione maxime vitae ipsum voluptate. Rerum laborum autem quaerat earum voluptas. Et porro error ut. Non explicabo excepturi minus quia quibusdam laboriosam quidem consectetur. Laboriosam fuga minima quia quibusdam.Dolores hic repellendus unde temporibus atque. Laudantium asperiores id quis. Voluptatem veniam id facilis rerum. Et ut corporis dolores aut expedita et minus blanditiis possimus.Eligendi provident delectus qui. Optio in quidem. Recusandae et nisi doloremque eaque. Voluptas optio quo blanditiis minus ab."
        imageSrc="./roles-four.png"
        reverse
        label1="Real-Time Usage Insights"
        label2="Predictive Maintenance Alerts"
        label3="Environmental Impact"
      />

      <FacilitySections
        title="Soluta voluptas"
        text="Quia ratione fuga accusamus corrupti et vitae aliquam. Ratione maxime vitae ipsum voluptate. Rerum laborum autem quaerat earum voluptas. Et porro error ut. Non explicabo excepturi minus quia quibusdam laboriosam quidem consectetur. Laboriosam fuga minima quia quibusdam.Dolores hic repellendus unde temporibus atque. Laudantium asperiores id quis. Voluptatem veniam id facilis rerum. Et ut corporis dolores aut expedita et minus blanditiis possimus.Eligendi provident delectus qui. Optio in quidem. Recusandae et nisi doloremque eaque. Voluptas optio quo blanditiis minus ab. Quia ratione fuga accusamus corrupti et vitae aliquam. Ratione maxime vitae ipsum voluptate. Rerum laborum autem quaerat earum voluptas. Et porro error ut. Non explicabo excepturi minus quia quibusdam laboriosam quidem consectetur. Laboriosam fuga minima quia quibusdam."
        imageSrc="./roles-five.png"
        label1="Real-Time Usage Insights"
        label2="Predictive Maintenance Alerts"
        label3="Environmental Impact"
      />


    </>
  )
}

export default page