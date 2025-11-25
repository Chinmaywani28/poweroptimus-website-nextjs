import Hero from '@/app/components/home-main-content/hero'
import HeroReusable from '@/app/components/key-verticals-page/hero-reusable'
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two'
import { CardGridSection } from '@/app/components/resources/card-grid-section'
import SolFeatureBtmSection from '@/app/components/solution/sol-feature-btm-section'
import React from 'react'


const page = () => {
  return (
    <>
      {/* <KeyverticalTwo
        title="Case Study"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam."
        showLink={false}
      /> */}

      {/* <HeroReusable headerText={'Explore Real-World Success Stories'} bodyText={'Discover how industry leaders are driving innovation, efficiency, and sustainability through practical solutions. Our case studies provide in-depth insights into challenges, strategies, and measurable results, helping you learn from real-world implementations.'} /> */}

      <Hero headerText={"Explore Real-World Success Stories"} bodyText={
          "Discover how industry leaders are driving innovation, efficiency, and sustainability through practical solutions. Our case studies provide in-depth insights into challenges, strategies, and measurable results, helping you learn from real-world implementations."
      } image='/Resources_CaseStudy_Vector_Image.svg' />

      <CardGridSection
        cards={[
          {
            imageSrc: '/resources-case-study-one.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/resources/case-study/case-study-details',
          },
          {
            imageSrc: '/resources-case-study-two.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/resources/case-study/case-study-details',
          },
          {
            imageSrc: '/resources-case-study-three.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/resources/case-study/case-study-details',
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
            linkHref: '/resources/case-study/case-study-details',
          },
          {
            imageSrc: '../resources-two.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/resources/case-study/case-study-details',
          },
          {
            imageSrc: '../resources-three.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: '/resources/case-study/case-study-details',
          }
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
            linkHref: 'resources/case-study/case-study-details',
          },
          {
            imageSrc: '../resources-two.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: 'resources/case-study/case-study-details',
          },
          {
            imageSrc: '../resources-three.png',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            linkText: 'Read More',
            linkHref: 'resources/case-study/case-study-details',
          },
        ]}

        
/> */}

        {/* <SolFeatureBtmSection
        heading="Transform Data into Action That Drives Efficiency, Sustainability, and Growth"
        paragraphs={[
          "Don’t just collect data use it. PowerOptimus provides powerful analytics to help you identify excessive utility usage, prevent downtime, and make informed sustainability decisions. It’s more than monitoring; it’s your pathway to smarter, greener operations. Let’s get started together."
        ]}
        buttonText="Schedule Demo"
        imageSrc="/integration.png"
        imageAlt="Illustration of integration"
      /> */}

    </>
  )
}

export default page