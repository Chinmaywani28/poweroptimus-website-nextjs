import React from 'react'
import KeyverticalHeader from '../components/key-verticals-page/key-vertical-hero'
import FacilitySections from '../components/key-verticals-page/facility-sections'
import KeyverticalTwo from '../components/key-verticals-page/key-vertical-two'
// import { FacilitySectionsTwo } from '../components/key-verticals-page/facility-sections-two'
import WhyPowerOptimus from '../components/key-verticals-page/whypoweroptimus'
import Integration from '../components/solution/integration'
import FeatureBtmSection from '../components/key-verticals-page/feature-btm-section'
import SolFeatureBtmSection from '../components/solution/sol-feature-btm-section'
import { WhyPowerOptimusTwo } from '../components/key-verticals-page/why-power-optimus/why-power-optimus-two'
import HeroReusable from '../components/key-verticals-page/hero-reusable'
import Hero from '../components/home-main-content/hero'


const page = () => {
  return (
    <>
    {/* <KeyverticalHeader/> */}
    {/* <KeyverticalTwo
        title="Optimizing Energy Across Industries"
        description="Explore the diverse sectors we empower with intelligent energy monitoring and management solutions. From industrial plants and data centers to hospitals and commercial buildings, discover how our tailored approaches drive efficiency, reduce costs, and promote sustainability"
        showLink={false}
      /> */}

    {/* <HeroReusable headerText={'Industries We Serve with PowerOptimus'} bodyText={'PowerOptimus is a next-generation platform designed to empower organizations across diverse industries to achieve operational efficiency, sustainability, and compliance. With deep domain integration and real-time intelligence, it helps monitor, manage, and optimize energy and environmental performance at every level.'} /> */}

      <Hero headerText={"Industries We Serve with PowerOptimus"} bodyText={
          "PowerOptimus is a next-generation platform designed to empower organizations across diverse industries to achieve operational efficiency, sustainability, and compliance. With deep domain integration and real-time intelligence, it helps monitor, manage, and optimize energy and environmental performance at every level."
      } />




    {/* sections */}
      <FacilitySections
        title="Industrial Plants & Factories"
        text="In energy-intensive plants, even small inefficiencies can quickly escalate into major cost overruns and higher carbon emissions. Advanced energy monitoring delivers granular visibility into every unit consumed across production lines, HVAC systems, and compressors, enabling facilities to identify waste, optimize workflows, and increase output. By pairing operational KPIs with compliance and safety tracking in real time, industries can move beyond reactive fixes to proactive efficiency, ensuring both profitability and sustainability."
        imageSrc="./key-vertical-one.png"
        label1="Compressor Management"
        label2="HVAC"
        label3="Boiler Optimization"
        showList={false}
        tagPath="/key-vertical/key-vertical-cap"

      />

      <FacilitySections
        title="Data Centers"
        text="Data centers operate under extreme energy and cooling demands where precision is critical. Continuous monitoring of thermal loads, energy use, cooling efficiency, and backup systems ensures balanced optimization, reducing strain on servers and lowering Power Usage Effectiveness (PUE). Real-time alerts on temperature, humidity, and AQI prevent costly outages or performance dips, protecting mission-critical infrastructure and guaranteeing uninterrupted operations with improved energy efficiency."
        imageSrc="./key-vertical-two.png"
        reverse
        label1="HVAC"
        label2="Energy Monitoring"
        label3="Compressor Management"
        showList={false}
        tagPath="/key-vertical/key-vertical-cap"

      />

            <FacilitySections
        title="Hospitals and Healthcare Facilities"
        text="Hospitals and healthcare facilities cannot afford downtime—reliability and compliance are non-negotiable. Real-time monitoring of energy, HVAC, indoor air quality, and occupancy creates safe, stable environments while reducing operating costs. Insights into power fluctuations or anomalies help avoid risks that could compromise life-saving equipment. By embedding energy intelligence into daily operations, healthcare providers enhance patient care, ensure regulatory compliance, and contribute to broader sustainability goals."
        imageSrc="./key-vertical-three.png"
        label1="Air Quality Monitoring"
        label2="HVAC"
        label3="Boiler Optimization"
        showList={false}
        tagPath="/key-vertical/key-vertical-cap"

      />

            <FacilitySections
        title="Commercial Buildings"
        text="Modern commercial spaces demand intelligent, adaptive energy management to balance comfort, costs, and compliance. By continuously tracking HVAC performance, power consumption, AQI, and occupancy patterns, facilities can make real-time adjustments that improve comfort, reduce energy bills, and extend asset life. These insights also support green building certifications and long-term sustainability initiatives, helping businesses stay competitive while reducing environmental impact and future-proofing infrastructure."
        imageSrc="./key-vertical-four.png"
        reverse
        label1="Hazardous Gas Monitoring"
        label2="Occupancy Monitoring"
        label3="HVAC"
         showList={false}
        tagPath="/key-vertical/key-vertical-cap"

      />

      <FacilitySections
        title="Pharmaceuticals and Life Sciences"
        text="In pharmaceuticals and life sciences, environmental precision is directly linked to product quality and compliance. Automated monitoring of temperature, humidity, cleanroom conditions, and lab equipment energy use helps maintain regulatory standards while safeguarding sensitive products. Real-time analytics allow teams to detect deviations instantly, minimizing risks of contamination or non-compliance. At the same time, optimization of utilities across R&D labs and production sites drives efficiency, reduces costs, and supports sustainable innovation."
        imageSrc="./key-vertical-three.png"
        // reverse
        label1="HVAC"
        label2="Hazardous Gas Monitoring"
        label3="Air Quality Monitoring"
        showList={false}
        tagPath="/key-vertical/key-vertical-cap"

      />

      <FacilitySections
        title="Food and Beverage Industry"
        text="The food and beverage sector depends on consistent quality, safety, and efficiency. Monitoring refrigeration systems, HVAC, energy use, and production KPIs ensures product integrity while minimizing energy waste and operational costs. With real-time insights, facilities can better manage distributed plants, streamline utilities, and reduce their carbon footprint. This integrated approach not only helps maintain health and safety standards but also aligns operations with growing consumer and regulatory demand for sustainable production practices."
        imageSrc="./key-vertical-one.png"
        reverse
        label1="Boiler Optimization"
        label2="Hazardous Gas Monitoring"
        label3="HVAC"
        showList={false}
        tagPath="/key-vertical/key-vertical-cap"

      />

      

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
        heading="Transform Your Energy and Environmental Oversight"
        paragraphs={[
          "PowerOptimus is more than a monitoring tool it is a strategic platform designed to help organizations gain complete control over energy and environmental performance. With integrated energy monitoring systems, smart dashboards, and real-time analytics, PowerOptimus empowers organizations to optimize operations and uphold high-performance standards."
        ]}
        buttonText="Schedule a Demo"
        imageSrc="/solutions-bottom.svg"
        imageAlt="Illustration of integration"
      />
      

    </>
    
    
  )
}

export default page