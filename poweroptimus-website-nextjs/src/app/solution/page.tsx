import React from 'react'
import './page.css'
import Hero from '../components/solution/hero'
import FeatureSection from '../components/solution/features-section'
import ProcessStepSection from '../components/solution/process-step-section'
import ProcessDiagram from '../components/solution/process-diagram'

const page = () => {
  return (
    <>
    <div>adf</div>
    <Hero/>
    {/* features */}
    <FeatureSection/>
    {/* process diagram */}
    <ProcessDiagram/>
    {/* process step */}
    <ProcessStepSection/>
    </>
    
  )
}

export default page