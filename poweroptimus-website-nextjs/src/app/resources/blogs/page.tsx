import HeroReusable from '@/app/components/key-verticals-page/hero-reusable'
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two'
import { CardGridSection } from '@/app/components/resources/card-grid-section'
import SolFeatureBtmSection from '@/app/components/solution/sol-feature-btm-section'
import React from 'react'


const page = () => {
  return (
    <>
      {/* <KeyverticalTwo
        title="Blogs"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam."
        showLink={false}
      /> */}

      <HeroReusable headerText={'Explore Blogs'} bodyText={'Your Destination for a wide range of insightful topics, innovative ideas, and thought-provoking articles. Whether you seek to expand your knowledge, gain inspiration, or stay informed on the latest developments, our curated content is designed to engage, enlighten, and add value for people across industries.'} />

      <CardGridSection
        cards={[
          {
            imageSrc: '../resources-one.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/resources/blogs/blogs-details',
          },
          {
            imageSrc: '../resources-two.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/resources/blogs/blogs-details',
          },
          {
            imageSrc: '../resources-three.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/resources/blogs/blogs-details',
          },
        ]}

        
/>
        {/* <CardGridSection
        cards={[
          {
            imageSrc: '../resources-one.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/resources/blogs/blogs-details',
          },
          {
            imageSrc: '../resources-two.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/resources/blogs/blogs-details',
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
            linkHref: '/resources/blogs/blogs-details',
          },
          {
            imageSrc: '../resources-two.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/resources/blogs/blogs-details',
          },
          {
            imageSrc: '../resources-three.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/resources/blogs/blogs-details',
          },
        ]}

        
/> */}
        {/* told to remove this sol bott sec by pragya 23-09-25 in all subpage of resources and news and events */}
        {/* <SolFeatureBtmSection
        heading="Drive Operational Efficiency and Ensure Long-Term Sustainability"
        paragraphs={[
          "PowerOptimus delivers more than monitoring it’s a complete solution for cost savings, resource optimization, and environmental responsibility. Whether your goal is resilience, sustainability, or operational excellence, PowerOptimus helps you achieve it all. Experience the difference."
        ]}
        buttonText="Schedule Demo"
        imageSrc="/integration.png"
        imageAlt="Illustration of integration"
      /> */}

    </>
  )
}

export default page