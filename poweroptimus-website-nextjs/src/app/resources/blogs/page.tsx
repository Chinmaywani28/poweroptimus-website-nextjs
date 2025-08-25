import HeroReusable from '@/app/components/key-verticals-page/hero-reusable'
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two'
import { CardGridSection } from '@/app/components/resources/card-grid-section'
import React from 'react'


const page = () => {
  return (
    <>
      {/* <KeyverticalTwo
        title="Blogs"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam."
        showLink={false}
      /> */}

      <HeroReusable headerText={'Empower Every Role to Drive Efficiency and Sustainability'} bodyText={'From facility managers ensuring day-to-day reliability to CXOs shaping long-term ESG strategies, PowerOptimus delivers tailored insights and tools for every stakeholder. Whether your focus is cutting costs, enhancing operational performance, or advancing sustainability targets, our platform equips you with real-time data, predictive intelligence, and transparent reporting so you can build safer, smarter, and more sustainable operations with confidence.'} />

      <CardGridSection
        cards={[
          {
            imageSrc: '../resources-one.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/blog/power',
          },
          {
            imageSrc: '../resources-two.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/blog/earth',
          },
          {
            imageSrc: '../resources-three.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/blog/solar',
          },
        ]}

        
/>
        <CardGridSection
        cards={[
          {
            imageSrc: '../resources-one.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/blog/power',
          },
          {
            imageSrc: '../resources-two.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/blog/earth',
          },
          {
            imageSrc: '../resources-three.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/blog/solar',
          },
        ]}

        
/>

        <CardGridSection
        cards={[
          {
            imageSrc: '../resources-one.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/blog/power',
          },
          {
            imageSrc: '../resources-two.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/blog/earth',
          },
          {
            imageSrc: '../resources-three.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/blog/solar',
          },
        ]}

        
/>

    </>
  )
}

export default page