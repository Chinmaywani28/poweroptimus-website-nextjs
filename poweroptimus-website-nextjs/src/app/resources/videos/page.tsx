import Hero from '@/app/components/home-main-content/hero'
import HeroReusable from '@/app/components/key-verticals-page/hero-reusable'
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two'
import { VideoGridSection } from '@/app/components/resources/video-grid-section'
import SolFeatureBtmSection from '@/app/components/solution/sol-feature-btm-section'
import React from 'react'


const page = () => {
  return (
    <>
      {/* <KeyverticalTwo
        title="Video"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam."
        showLink={false}
      /> */}

      {/* <HeroReusable headerText={'Watch, Learn, and Stay Ahead'} bodyText={'Our video library brings you expert insights, case studies, and practical strategies from industry leaders. Explore sessions on energy optimization, smart operations, predictive maintainence, and digital transformation designed to help you make informed decisions and drive measurable results. Access both live recordings and on-demand webinars anytime, anywhere.'} /> */}

      <Hero headerText={"Watch, Learn, and Stay Ahead"} bodyText={
          "Our video library brings you expert insights, case studies, and practical strategies from industry leaders. Explore sessions on energy optimization, smart operations, predictive maintainence, and digital transformation designed to help you make informed decisions and drive measurable results. Access both live recordings and on-demand webinars anytime, anywhere."
      } image='/youtube-svg.svg' />

      <VideoGridSection
        cards={[
          // {
          //   videoUrl: 'https://www.youtube.com/embed/A05DUg57S7k',
          //   title: 'EnvirOptimus - Energy Management and Environmental Monitoring System',
          //   // description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
          //   date: 'Nov, 2025',
          //   // linkText: 'Read More',
          //   // linkHref: '/blog/power',
          // },
          {
            videoUrl: 'https://www.youtube.com/embed/WrFonQop5QY?si=qC4bEQxUCfbknGXn',
            title: 'EnvirOptimus - Energy Management and Environmental Monitoring System',
            // description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'Mar, 2026',
            // linkText: 'Read More',
            // linkHref: '/blog/power',
          }
        ]}

        
/>
        {/* <VideoGridSection
        cards={[
          {
            videoUrl: 'https://www.youtube.com/embed/nAplc9KGBwk?si=wEINBj6dsLeIY9_g',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            // linkText: 'Read More',
            // linkHref: '/blog/power',
          },
          {
            videoUrl: 'https://www.youtube.com/embed/nAplc9KGBwk?si=wEINBj6dsLeIY9_g',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            // linkText: 'Read More',
            // linkHref: '/blog/earth',
          },
          {
            videoUrl: 'https://www.youtube.com/embed/nAplc9KGBwk?si=wEINBj6dsLeIY9_g',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025',
            // linkText: 'Read More',
            // linkHref: '/blog/solar',
          },
        ]}

        
/>

        <VideoGridSection
        cards={[
          {
            videoUrl: 'https://www.youtube.com/embed/nAplc9KGBwk?si=wEINBj6dsLeIY9_g',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025'
          },
          {
            videoUrl: 'https://www.youtube.com/embed/nAplc9KGBwk?si=wEINBj6dsLeIY9_g',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025'
          },
          {
            videoUrl: 'https://www.youtube.com/embed/nAplc9KGBwk?si=wEINBj6dsLeIY9_g',
            title: 'More productive with an atmosphere',
            description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: 'January 1, 2025'
          },
        ]}

        
/> */}

        {/* <SolFeatureBtmSection
        heading="Build Sustainable, Resilient, and Efficient Operations"
        paragraphs={[
          "Energy monitoring and predictive maintenance come together to help you reduce downtime, extend asset lifespans, and cut emissions. PowerOptimus equips your team with the tools needed to turn sustainability strategies into measurable operational improvements."
        ]}
        buttonText="Schedule Demo"
        imageSrc="/integration.png"
        imageAlt="Illustration of integration"
      /> */}
    </>
  )
}

export default page