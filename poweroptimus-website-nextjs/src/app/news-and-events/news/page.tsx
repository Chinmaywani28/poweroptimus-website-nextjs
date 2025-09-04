import HeroReusable from '@/app/components/key-verticals-page/hero-reusable'
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two'
import { NewsAndEventsSection } from '@/app/components/news-and-events/news-and-events-section'
import SolFeatureBtmSection from '@/app/components/solution/sol-feature-btm-section'
import React from 'react'


const page = () => {
  return (
    <>
      {/* <KeyverticalTwo
        title="News"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam."
        showLink={false}
      /> */}

       <HeroReusable headerText={'News'} bodyText={'From facility managers ensuring day-to-day reliability to CXOs shaping long-term ESG strategies, PowerOptimus delivers tailored insights and tools for every stakeholder. Whether your focus is cutting costs, enhancing operational performance, or advancing sustainability targets, our platform equips you with real-time data, predictive intelligence, and transparent reporting so you can build safer, smarter, and more sustainable operations with confidence.'} /> 

      <NewsAndEventsSection cards={[
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-one.png',
          date: 'January 2, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
          link: '/news-and-events/news/news-details'
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-two.png',
          date: 'January 3, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
          link: '/news-and-events/news/news-details'
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-three.png',
          date: 'January 4, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
          link: '/news-and-events/news/news-details'
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-one.png',
          date: 'January 2, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
          link: '/news-and-events/news/news-details'
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-two.png',
          date: 'January 3, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
          link: '/news-and-events/news/news-details'
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-three.png',
          date: 'January 4, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
          link: '/news-and-events/news/news-details'
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-one.png',
          date: 'January 2, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
          link: '/news-and-events/news/news-details'
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-two.png',
          date: 'January 3, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
          link: '/news-and-events/news/news-details'
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-three.png',
          date: 'January 4, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
          link: '/news-and-events/news/news-details'
        },
        // You can add more cards here...
      ]} />

      {/* <SolFeatureBtmSection
        heading="Easy to Integrate with Existing Systems"
        paragraphs={[
          "PowerOptimus is more than a monitoring tool—it is a strategic platform designed to help organizations gain complete control over energy and environmental performance. With integrated energy monitoring systems, smart dashboards, and real-time analytics, PowerOptimus empowers organizations to optimize operations and uphold high-performance standards."
        ]}
        buttonText="Download Documentation"
        imageSrc="/integration.png"
        imageAlt="Illustration of integration"
      /> */}
    </>
  )
}

export default page