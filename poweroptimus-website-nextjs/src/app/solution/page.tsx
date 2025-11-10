import React from 'react'
import './page.css'
// import Hero from '../components/solution/hero'
import FeatureSection from '../components/solution/features-section'
import ProcessStepSection from '../components/solution/process-step-section'
import ProcessDiagram from '../components/solution/process-diagram'
import DeviceSection from '../components/solution/device-section'
import ArchitectureDiagram from '../components/solution/architecture-diagram'
import DataAnalysis from '../components/solution/data-analysis'
import Integration from '../components/solution/integration'
import HeroTwo from '../components/solution-two/hero-two'
import SolFeatureBtmSection from '../components/solution/sol-feature-btm-section'
import SolutionHero from '../components/solution/solution-hero'
import Hero from '../components/home-main-content/hero'
import FeatureCard from '../components/solution/solution-feature-section'
import ProcessDiagramTwo from '../components/solution/process-diagram-two'
import FeatureTwo from '../components/solution/feature-two'
import ProcessDiagramThree from '../components/solution/process-diagram-new'


const page = () => {
  return (
    <>
    {/* <Hero/> */}
    {/* <HeroTwo/> */}
    {/* <SolutionHero headerText={'PowerOptimus – A Smart Solution for Energy Management and Environmental Monitoring'} bodyText={'PowerOptimus is an intelligent, scalable system designed to support industries and commercial buildings in driving efficiency, reducing operational costs, and aligning with sustainability goals through robust energy monitoring and management systems.'}/> */}


    <Hero headerText={"PowerOptimus – A Smart Solution for Energy Management and Environmental Monitoring"} bodyText={
          "PowerOptimus is an intelligent, scalable system designed to support industries and commercial buildings in driving efficiency, reducing operational costs, and aligning with sustainability goals through robust energy monitoring and management systems."
      } image={'Solution_Header_500x500px 2.svg'} />

    {/* changes done in content acc to pragya in solution hero */}
    {/* features */}
    {/* <FeatureSection/> */}

    <div className="feature-title Header2 TextBlue">Features Driving Results</div>

    {/* <FeatureCard title={'Utility Energy Monitoring'} description={'PowerOptimus enables real-time tracking of utilities such as electricity, water, and compressed air across the facility. By identifying excessive usage patterns, the system empowers organizations to take corrective actions that minimize wastage, optimize utility consumption, and enhance resource efficiency. This not only contributes to lower energy bills but also supports long-term sustainability goals and operational resilience.'}/>

    <FeatureCard title={'Power Quality Monitoring'} description={'Ensure a reliable and efficient power supply by monitoring critical parameters like power factor, harmonics & frequency. These insights help avoid penalties due to poor power quality, prevent excessive energy demand charges,& prolong the lifespan of sensitive equipment. PowerOptimus provides in-depth power quality analysis that is essential for any Energy Management System & environmental sustainability.'} titlePosition={"right"}/>

    <FeatureCard title={'Setpoints Monitoring'} description={'Monitoring utility setpoints is vital for maintaining optimal operational parameters across facilities. This software continuously tracks performance and immediately alerts teams when setpoints exceed defined thresholds, helping prevent unnecessary energy use, equipment stress, and avoidable operational costs. By ensuring systems operate within ideal ranges, organizations can improve efficiency, extend asset life, and strengthen sustainability initiatives.'}/>

    <FeatureCard title={'Idle Equipment Detection'} description={'One of the most overlooked energy drains in industrial environments is equipment running idle. Our solution continuously monitors machine energy consumption versus output and flags idle equipment. It prompts automated actions such as turning off equipment during inactivity, a key feature of next-gen energy management systems. With this data, organizations can act quickly to shut down non-productive equipment, thereby reducing energy waste.'} titlePosition={"right"}/>

    <FeatureCard title={'Industrial Carbon Footprint'} description={'With growing emphasis on environmental compliance, this solution aids in tracking and reducing Scope 1, 2, and 3 emissions. By analyzing energy efficiency data and carbon outputs, the platform supports your carbon footprint reduction strategy and helps meet corporate sustainability targets. This is where energy management systems meet environmental sustainability.'}/>

    <FeatureCard title={'Air Quality Monitoring'} description={'Indoor air quality has a direct impact on employee health and productivity. PowerOptimus integrates with air and humidity sensors to monitor environmental conditions within industrial and healthcare facilities. It provides actionable insights to align indoor air quality with outdoor conditions, reduce risks from pollutants, and maintain a healthier, more sustainable workplace environment.'} titlePosition={"right"}/>

    <FeatureCard title={'CO₂ Percentage Monitoring'} description={'PowerOptimus measures indoor CO₂ concentrations and dynamically adjusts HVAC operations through Demand-Controlled Ventilation (DCV). By regulating airflow based on occupancy and air quality levels, it ensures energy savings, reduced operational costs, and a healthier indoor environment. This intelligent approach highlights how comprehensive energy monitoring systems not only optimize performance but also contribute to smarter, more sustainable infrastructure.'}/>

    <FeatureCard title={'Hazardous Gas Monitoring'} description={'In chemical handling and processing environments, hazardous gas emissions pose serious health and safety risks. PowerOptimus integrates advanced gas detection sensors to continuously monitor air quality, identify leaks, and provide instant alerts. This real-time visibility enables rapid response, minimizes exposure risks for workers, and ensures compliance with strict occupational health and safety standards while supporting a safer, more sustainable workplace.'} titlePosition={"right"}/> */}

    <FeatureTwo/>

    
    {/* process diagram */}
    {/* <ProcessDiagram/> */}


    {/* <ProcessDiagramTwo/> */}
    <ProcessDiagramThree/>

    {/* process step */}
    {/* <ProcessStepSection/> */}


    
    {/* DeviceSection */}
    <DeviceSection/>
    {/* system architecture */}


    <ArchitectureDiagram/>

    {/* data visulization */}
    <DataAnalysis/>
    {/* integration */}
    {/* <Integration/> */}
    <SolFeatureBtmSection
        heading="Easy to Integrate with Existing Systems"
        paragraphs={[
          "PowerOptimus is designed with interoperability and flexibility at its core, making it simple to integrate with your existing infrastructure whether it’s legacy systems, Building Management Systems(BMS), SCADA, or industrial automation setups. Our solution supports widely-used communication protocols such as Modbus, BACnet, MQTT, and OPC-UA, ensuring seamless data flow from your current energy meters, environmental sensors, and control systems."
        ]}
        buttonText="Schedule a Demo"
        imageSrc="/Solution_Footer_500x500px.svg"
        imageAlt="Illustration of integration"
      />

    </>
    
  )
}

export default page