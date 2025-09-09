import React from 'react'
import './page.css'
import Hero from '../components/solution/hero'
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

const page = () => {
  return (
    <>
    {/* <Hero/> */}
    {/* <HeroTwo/> */}
    <SolutionHero headerText={'PowerOptimus – A Smart Solution for Energy Management and Environmental Monitoring'} bodyText={'PowerOptimus is an intelligent, scalable building management system (BMS) designed to support industries and commercial buildings in driving efficiency, reducing operational costs, and aligning with sustainability goals through robust energy monitoring and management systems.'}/>
    {/* features */}
    <FeatureSection/>

    
    {/* process diagram */}
    <ProcessDiagram/>
    {/* process step */}
    <ProcessStepSection/>
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
        buttonText="Schedule Demo"
        imageSrc="/integration.png"
        imageAlt="Illustration of integration"
      />

    </>
    
  )
}

export default page