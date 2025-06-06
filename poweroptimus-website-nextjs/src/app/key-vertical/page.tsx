import React from 'react'
import KeyverticalHeader from '../components/key-verticals-page/key-vertical-hero'
import FacilitySections from '../components/key-verticals-page/facility-sections'

const page = () => {
  return (
    <>
    <KeyverticalHeader/>
    {/* sections */}
      <FacilitySections
        title="Industrial Plants & Factories"
        text="PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste. PowerOptimus improves energy..."
        imageSrc="./key-vertical-one.png"
      />

      <FacilitySections
        title="Data Centers"
        text="PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste. PowerOptimus improves energy..."
        imageSrc="./key-vertical-two.png"
        reverse
      />

            <FacilitySections
        title="Hospitals"
        text="PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste. PowerOptimus improves energy..."
        imageSrc="./key-vertical-three.png"
        reverse
      />

            <FacilitySections
        title="Commercial Buildings"
        text="PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime, and minimizing waste. PowerOptimus improves energy..."
        imageSrc="./key-vertical-four.png"
        reverse
      />



    </>
    
    
  )
}

export default page