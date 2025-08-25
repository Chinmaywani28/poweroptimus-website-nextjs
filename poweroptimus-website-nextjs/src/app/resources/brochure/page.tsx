import HeroReusable from '@/app/components/key-verticals-page/hero-reusable';
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two'
import { BrochureCardSection } from '@/app/components/resources/brochure-card-section';
import { CardGridSection } from '@/app/components/resources/card-grid-section'

import React from 'react'


const page = () => {
  
  return (
    <>
      {/* <KeyverticalTwo
        title="Brochure"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam."
        showLink={false}
      /> */}

      <HeroReusable headerText={'Brochure'} bodyText={'From facility managers ensuring day-to-day reliability to CXOs shaping long-term ESG strategies, PowerOptimus delivers tailored insights and tools for every stakeholder. Whether your focus is cutting costs, enhancing operational performance, or advancing sustainability targets, our platform equips you with real-time data, predictive intelligence, and transparent reporting so you can build safer, smarter, and more sustainable operations with confidence.'} />

      <BrochureCardSection
        cards={[
          {
            id: 1,
            title: 'Solar Optimization',
            content: 'Track energy usage in real time.',
            image: '../resources-brochure.png',
          },
          {
            id: 2,
            title: 'Wind Turbines',
            content: 'Automated alerts and analysis.',
            image: '../resources-brochure.png',
          },
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
      
      
    </>
  )
}

export default page