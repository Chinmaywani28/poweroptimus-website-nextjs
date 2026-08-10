// export const metadata = {
//   title: "key-verticals | powerJiOptimus",
//   description: "See how Construct Monitor solves real construction management problems.",
//   openGraph: {
//     title: "Solutions | Construct Monitor",
//     description: "Smart, real-time construction monitoring and project insights.",
//     url: "https://constructmonitor.online/solution",
//     images: ["/og-solution.png"],
//   },
//   twitter: {
//     card: "summary_large_image",
//   },
// };


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
import SolutionDescription from '../components/solution/solution-description'
import KeyVerticalHero from '../components/home-main-content/key-vertical-hero'
import HomeVideoTwo from '../components/home-main-content/home-video-two'
import HomeImageThree from '../components/home-main-content/home-image-three'
import KeyVerticalBanner from '../components/home-main-content/key-vertical-banner'


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

      {/* <Hero headerText={"Industries We Serve with EnvirOptimus – A Sustainable Energy Management Platform"} bodyText={
          "EnvirOptimus is a next-generation platform designed to empower organizations across diverse industries to achieve operational efficiency, sustainability, and compliance. With deep domain integration and real-time intelligence, it helps monitor, manage, and optimize energy and environmental performance at every level."
      } image='/KeyVerticals_Header-Vector-Image.svg' /> */}

        {/* start commented for new image */}
      {/* <Hero headerText={"Industries We Serve with EnvirOptimus – A Sustainable Energy Management Platform"} bodyText={
          "Empowering industries with sustainable energy optimization, environmental intelligence, and performance-driven operational efficiency through EnvirOptimus."
      } image='/KeyVerticals_Header-Vector-Image.svg' /> */}
        {/* end commented for new image */}

    {/* <KeyVerticalHero image={'/key-ver-five.png'}/> */}
    {/* <KeyVerticalHero image={'/keuy.jpg'}/> */}

    {/* <HomeImageThree/> */}

    <KeyVerticalBanner/>




    {/* sections */}

      {/* description section */}
    <SolutionDescription bodyText={'EnvirOptimus is an advanced environment and energy management platform built to support organizations across multiple industries in improving efficiency, meeting sustainability objectives, and maintaining regulatory compliance. By integrating seamlessly with operational systems, it enables comprehensive monitoring, control, and optimization of energy usage and environmental performance across facilities.'}/>

      <FacilitySections
        title="Buildings"
        subTitle='Modern Buildings such as Commercial Offices, Malls, Convention Centers & Auditoriums, Hospitals'
        text="Deliver Indoor Environmental Quality (IEQ) optimization, HVAC performance efficiency, and ESG-aligned energy management through continuous environmental and operational monitoring. ISO 45001 Certification, SDG"
        textArr={['Improved indoor air quality (AQI, CO₂, ventilation effectiveness)',
          'Enhanced occupant comfort and thermal balance',
          'Reduced HVAC energy consumption',
          'Lower peak demand and utility costs',
          'Support for green building certifications and ESG goals',
          'Ensuring the uptime of your asset'
        ]}
        subTitleTwo='Modern buildings must maintain healthy indoor environments despite fluctuating occupancy and rising energy costs. EnvirOptimus enables continuous monitoring of air quality, temperature, humidity, ventilation performance, and emissions, ensuring comfort, compliance, and efficient building operations.
        Advanced analytics further enable proactive decision-making, optimizing performance and reducing operational risks while maintaining consistent indoor environmental quality across diverse building types.'
        // imageSrc="/key-vertical-five.jpg"
        imageSrc="/Key Verticals- Buildings (1).jpg"
        
        reverse
        label1="Hazardous Gas   Monitoring"
        label2="Occupancy Monitoring"
        label3="HVAC"
         showList={false}
        tagPath1="/key-verticals/capabilities/#hazardous-gas"
        tagPath2="/key-verticals/capabilities/#occu"
        tagPath3="/key-verticals/capabilities/#advanced-hvac"
        alt='EnvirOptimus for smart buildings'
      />

      <FacilitySections
        title="Industrial Plants & Factories"
        subTitle='Automobile, Heavy Engineering, General Engineering, OEM, Chemical, Food and Beverages, Cement, Metal and Mineral, Pharma, Cold Storage'
        text="Enable emissions control through corrective actions, process-level energy optimization, and regulatory compliance, achieved through asset-level monitoring, KPI Mapping, and environmental performance analytics. We enable HAZOP study, ISO 14001 Certification, ISO 50001 Certification, ISO 45001 Certification."
        textArr={['Continuous emissions tracking and regulatory reporting',
          'Correlation of energy usage with production KPIs',
          'Reduced process energy waste',
          'Improved resource efficiency and waste reduction',
          'Lower compliance and operational risk'
        ]}
        subTitleTwo='Industrial facilities face strict environmental regulations and energy-intensive production cycles. EnvirOptimus provides asset- and process-level environmental and energy visibility, helping industries control emissions, optimize production efficiency, and maintain regulatory adherence. This evolution marked a significant shift towards digitized workflows and standardized documentation, laying the foundation for modern industrial communication and data-driven decision-making.'
        // imageSrc="/Key Verticals- Industrial Plants and Factories.jpg"
        imageSrc="/Key Verticals- Industrial Plants and Factory.jpg"
        // reverse
        label1="Compressor Management"
        label2="HVAC"
        label3="Boiler Optimization"
         showList={false}
        tagPath1="/key-verticals/capabilities/#hazardous-gas"
        tagPath2="/key-verticals/capabilities/#occu"
        tagPath3="/key-verticals/capabilities/#advanced-hvac"
        alt='EnvirOptimus For Industrial Plants & Factories'
      />


      <FacilitySections
        title="Large Critical Infrastructure"
        subTitle='Data Centers, Airports & Transport Hubs'
        text="Ensure power reliability, thermal management optimization, and environmental compliance across high-density, distributed infrastructure environments. Real-time PUE (Power Usage Effectiveness) , Peak-demand penalty avoidance."
        textArr={['Structured environmental monitoring and reporting',
          'Cooling and thermal optimization',
          'Improved power load visibility and reliability',
          'Reduced operational disruptions',
          'Controlled carbon and environmental impact'
        ]}
        subTitleTwo='Large infrastructure assets require continuous environmental oversight alongside energy management. EnvirOptimus centralizes visibility across distributed systems, enabling operators to optimize cooling, balance loads, and manage compliance without compromising stability. 
        Modern infrastructure environments generate vast volumes of operational and environmental data that must be continuously monitored, analyzed, and acted upon in real time. By integrating diverse systems into a unified platform, organizations can gain actionable insights, improve efficiency, and maintain operational resilience. This approach supports proactive decision-making, enhances system performance, and ensures long-term sustainability while adapting to evolving regulatory and operational demands.'
        // imageSrc="/Key Verticals- Large Critical Infrastructure.jpg"
        imageSrc="/Key Verticals- Large Critical Infrast.jpg"
        reverse
        label1="HVAC"
        label2="Energy Monitoring"
        label3="Compressor Management"
         showList={false}
        tagPath1="/key-verticals/capabilities/#hazardous-gas"
        tagPath2="/key-verticals/capabilities/#occu"
        tagPath3="/key-verticals/capabilities/#advanced-hvac"
        alt='EnvirOptimus For Large Infrastructure'
      />

      

      {/* <FacilitySections
        title="Buildings"
        // text="Modern Commercial spaces demand intelligent, adaptive energy management to balance comfort, costs, and compliance. By continuously tracking HVAC performance, power consumption, AQI, and occupancy patterns, facilities can make real-time adjustments that improve comfort, reduce energy bills, and extend asset life. These insights also support green building certifications and long-term sustainability initiatives, helping businesses stay competitive while reducing environmental impact and future-proofing infrastructure."
        text="Modern buildings — including commercial offices, malls, convention centers, and auditoriums demand an intelligent, adaptive environment and energy management system to balance comfort, costs, and compliance. By continuously tracking HVAC performance, power consumption, AQI, and occupancy patterns, facilities can make real-time adjustments that improve comfort, reduce energy bills, and extend asset life. These insights also support green building certifications and long-term sustainability initiatives, helping organizations stay competitive while reducing environmental impact and future-proofing infrastructure."
        imageSrc="/Commercial Buildings - Key Verticals.jpg"
        reverse
        label1="Hazardous Gas Monitoring"
        label2="Occupancy Monitoring"
        label3="HVAC"
         showList={false}
        tagPath1="/key-verticals/capabilities/#hazardous-gas"
        tagPath2="/key-verticals/capabilities/#occu"
        tagPath3="/key-verticals/capabilities/#advanced-hvac"

      />

      <FacilitySections
        title="Industrial Plants & Factories"
        text="In energy-intensive plants, even small inefficiencies can quickly escalate into major cost overruns and higher carbon emissions. Advanced energy monitoring delivers granular visibility into every unit consumed across production lines, HVAC systems, and compressors, enabling facilities to identify waste, optimize workflows, and increase output. By pairing operational KPIs with real-time compliance and safety tracking, a Sustainable Energy Management Platform enables industries to move beyond reactive fixes to proactive efficiency ensuring both profitability and sustainability."
        imageSrc="/Industrial Plants and Factories- Key Verticals1.jpg"
        label1="Compressor Management"
        label2="HVAC"
        label3="Boiler Optimization"
        showList={false}
        tagPath1="/key-verticals/capabilities/#compressor-management"
        tagPath2="/key-verticals/capabilities/#advanced-hvac"
        tagPath3="/key-verticals/capabilities/#boiler-optimization"
      />

      <FacilitySections
        title="Large Infrastructure"
        // text="Data Centers operate under extreme energy and cooling demands where precision is critical. Continuous monitoring of thermal loads, energy use, cooling efficiency, and backup systems ensures balanced optimization, reducing strain on servers and lowering Power Usage Effectiveness (PUE). Real-time alerts on temperature, humidity, and AQI prevent costly outages or performance dips, protecting mission-critical infrastructure and guaranteeing uninterrupted operations with improved energy efficiency."
        text="Facilities such as data centers, airports, and transport hubs require structured energy and environmental management to meet high-power demand and comply with regulatory requirements. Common challenges include power-quality fluctuations, cooling inefficiencies, peak-demand penalties, emissions-tracking gaps, and limited visibility across distributed assets. An Environment & Energy Management System (EEMS) addresses these issues through granular, real-time monitoring and analytics, enabling load optimization, improved cooling performance, carbon management, and compliance reporting — supporting efficient and stable operations."
        imageSrc="/Data Center - Key Verticals 1.jpg"
        reverse
        label1="HVAC"
        label2="Energy Monitoring"
        label3="Compressor Management"
        showList={false}
        tagPath1="/key-verticals/capabilities/#advanced-hvac"
        tagPath2="/key-verticals/capabilities/#air-quality"
        tagPath3="/key-verticals/capabilities/#compressor-management"

      />

            <FacilitySections
        title="Hospitals and Healthcare Facilities"
        text="Hospitals and Healthcare facilities cannot afford downtime, reliability and compliance are non-negotiable. Real-time monitoring of energy, HVAC, indoor air quality, and occupancy creates safe, stable environments while reducing operating costs. Insights into power fluctuations or anomalies help avoid risks that could compromise life-saving equipment. By embedding energy intelligence into daily operations, healthcare providers enhance patient care, ensure regulatory compliance, and contribute to broader sustainability goals."
        imageSrc="/key-vertical-hospital.jpg"
        label1="Air Quality Monitoring"
        label2="HVAC"
        label3="Boiler Optimization"
        showList={false}
        tagPath1="/key-verticals/capabilities/#air-quality"
        tagPath2="/key-verticals/capabilities/#advanced-hvac"
        tagPath3="/key-verticals/capabilities/#boiler-optimization"

      />

            

      <FacilitySections
        title="Pharmaceuticals and Life Sciences"
        text="In Pharmaceuticals and Life Sciences, environmental precision is directly linked to product quality and compliance. Automated monitoring of temperature, humidity, cleanroom conditions, and lab equipment energy use helps maintain regulatory standards while safeguarding sensitive products. Real-time analytics allow teams to detect deviations instantly, minimizing risks of contamination or non-compliance. At the same time, optimization of utilities across R&D labs and production sites drives efficiency, reduces costs, and supports sustainable innovation."
        imageSrc="/Pharmaceuticals & Life Science - Key Verticals.jpg"
        reverse
        label1="HVAC"
        label2="Hazardous Gas Monitoring"
        label3="Air Quality Monitoring"
        showList={false}
        tagPath1="/key-verticals/capabilities/#advanced-hvac"
        tagPath2="/key-verticals/capabilities/#hazardous-gas"
        tagPath3="/key-verticals/capabilities/#air-quality"

      />

      <FacilitySections
        title="Food and Beverage Industry"
        text="The Food and Beverage sector depends on consistent quality, safety, and efficiency. Monitoring refrigeration systems, HVAC, energy use, and production KPIs ensures product integrity while minimizing energy waste and operational costs. With real-time insights, facilities can better manage distributed plants, streamline utilities, and reduce their carbon footprint. This integrated approach not only helps maintain health and safety standards but also aligns operations with growing consumer and regulatory demand for sustainable production practices."
        imageSrc="/Food & Beverages - Key Verticals.jpg"
        // reverse
        label1="Boiler Optimization"
        label2="Hazardous Gas Monitoring"
        label3="HVAC"
        showList={false}
        tagPath1="/key-verticals/capabilities/#boiler-optimization"
        tagPath2="/key-verticals/capabilities/#hazardous-gas"
        tagPath3="/key-verticals/capabilities/#advanced-hvac"

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

      {/* <SolFeatureBtmSection
        heading="Transform your Environmental and Energy Oversight"
        paragraphs={[
          "EnvirOptimus is more than a sustainable energy management platform, it is a strategic platform designed to help organizations gain complete control over environmental and energy performance. With integrated energy monitoring systems, smart dashboards, and real-time analytics, EnvirOptimus empowers organizations to optimize operations and uphold high-performance standards."
        ]}
        buttonText="Schedule a Demo"
        imageSrc="/key-vertical-new.svg"
        imageAlt="Illustration of integration"
      /> */}

      <SolFeatureBtmSection
        heading="Is Your Facility Optimized for Energy and Sustainability?"
        paragraphs={[
          "From advanced analytics and air quality monitoring to performance metrics across assets, EnvirOptimus gives you the clarity to reduce waste, control costs, and strengthen compliance all within one unified platform."
        ]}
        buttonText="Schedule a Demo"
        // imageSrc="/key-vertical-new.svg"
        imageSrc="/Key Verticals Footer.jpg"
        imageAlt="Facility Optimized for Energy and Sustainability"
      />
      

    </>
    
    
  )
}

export default page