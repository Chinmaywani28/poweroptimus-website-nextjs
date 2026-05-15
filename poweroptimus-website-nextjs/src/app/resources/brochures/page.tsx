import Hero from '@/app/components/home-main-content/hero';
import HeroReusable from '@/app/components/key-verticals-page/hero-reusable';
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two'
import { BrochureCardSection } from '@/app/components/resources/brochure-card-section';
import { CardGridSection } from '@/app/components/resources/card-grid-section'
import SolFeatureBtmSection from '@/app/components/solution/sol-feature-btm-section';

import React from 'react'


const page = () => {
  
  return (
    <>
      {/* <KeyverticalTwo
        title="Brochure"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam."
        showLink={false}
      /> */}

      {/* <HeroReusable headerText={'Discover Smarter Solutions with Us'} bodyText={'Explore how our innovative products and services help businesses optimize operations, improve efficiency, and drive sustainable growth. The brochure provides a comprehensive overview of our solutions, including key features, benefits, and real-world applications. Learn how we empower organizations to make data-driven decisions, reduce costs, and achieve operational excellence whether it’s energy management, digital transformation, or asset optimization.'} /> */}

      <Hero headerText={"Discover Smarter Solutions with Us"} bodyText={
          "Explore how our solutions optimize operations, improve efficiency, and drive sustainable growth, featuring key benefits, use cases, and insights to enable data-driven decisions and operational excellence."
      } image='/Resource_Brouchure_Header_Vector_Image.svg' />

      <BrochureCardSection
        cards={[
          {
            id: 1,
            title: 'Solar Optimization',
            content: 'Track energy usage in real time.',
            image: '/Brochure_Image.jpg',
            link: 'https://poweroptimus.com/EnvirOptimus Brochure for Sydney build 2026_v6_justified-AMD.pdf'
          },
          // {
          //   id: 2,
          //   title: 'Wind Turbines',
          //   content: 'Automated alerts and analysis.',
          //   image: '../resources-brochure.png',
          // },
          // {
          //   id: 3,
          //   title: 'Solar Optimization',
          //   content: 'Track energy usage in real time.',
          //   image: '../resources-brochure.png',
          // },
          // {
          //   id: 4,
          //   title: 'Wind Turbines',
          //   content: 'Automated alerts and analysis.',
          //   image: '../resources-brochure.png',
          // }
        ]}
      />

      {/* <SolFeatureBtmSection
        heading="The Smarter Way to Drive Efficiency and Sustainability"
        paragraphs={[
          "Gain more than data gain actionable intelligence. Our platform helps you optimize energy use, reduce downtime, and align with global net-zero goals. Transform utility tracking into a strategic advantage for your business and the environment."
        ]}
        buttonText="Schedule Demo"
        imageSrc="/integration.png"
        imageAlt="Illustration of integration"
      /> */}
      
      
    </>
  )
}

export default page