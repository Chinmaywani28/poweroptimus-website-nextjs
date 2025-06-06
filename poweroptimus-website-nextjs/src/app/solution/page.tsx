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

const page = () => {
  return (
    <>
    <Hero/>
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
    <Integration/>

    </>
    
  )
}

export default page