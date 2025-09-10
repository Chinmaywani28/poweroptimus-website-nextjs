import HeroReusable from '@/app/components/key-verticals-page/hero-reusable'
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two'
import { NewsAndEventsSection } from '@/app/components/news-and-events/news-and-events-section'
import SolFeatureBtmSection from '@/app/components/solution/sol-feature-btm-section'
import React from 'react'


const page = () => {
  return (
    <>
      {/* <KeyverticalTwo
        title="Events"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam."
        showLink={false}
      /> */}

      <HeroReusable headerText={'Stay Connected Stay Ahead'} bodyText={'Our Events page brings you the latest updates on webinars, workshops, conferences, and industry meetups. Explore opportunities to learn from experts, network with peers, and discover innovative solutions that drive efficiency, sustainability, and growth. Whether attending virtually or in person, stay informed and inspired with events designed to keep you at the forefront of your industry'} /> 

      <NewsAndEventsSection cards={[
              {
                title: 'Antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum ',
                image: '../news-one.png',
                date: 'January 2, 2025',
                description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
                link: '/news-and-events/events/events-details'
              },
              {
                title: 'Antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum ',
                image: '../news-two.png',
                date: 'January 3, 2025',
                description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
                link: '/news-and-events/events/events-details'
              },
              {
                title: 'Antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum ',
                image: '../news-three.png',
                date: 'January 4, 2025',
                description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
                link: '/news-and-events/events/events-details'
              },
              // {
              //   title: 'Antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum ',
              //   image: '../news-one.png',
              //   date: 'January 2, 2025',
              //   description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
              //   link: '/news-and-events/events/events-details'
              // },
              // {
              //   title: 'Antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum ',
              //   image: '../news-two.png',
              //   date: 'January 3, 2025',
              //   description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
              //   link: '/news-and-events/events/events-details'
              // },
              // {
              //   title: 'Antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum ',
              //   image: '../news-three.png',
              //   date: 'January 4, 2025',
              //   description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
              //   link: '/news-and-events/events/events-details'
              // },
              // {
              //   title: 'Antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum ',
              //   image: '../news-one.png',
              //   date: 'January 2, 2025',
              //   description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
              //   link: '/news-and-events/events/events-details'
              // },
              // {
              //   title: 'Antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum ',
              //   image: '../news-two.png',
              //   date: 'January 3, 2025',
              //   description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
              //   link: '/news-and-events/events/events-details'
              // },
              // {
              //   title: 'Antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum ',
              //   image: '../news-three.png',
              //   date: 'January 4, 2025',
              //   description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
              //   link: '/news-and-events/events/events-details'
              // },
              // You can add more cards here...
            ]} />


      {/* <NewsAndEventsSection cards={[
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../events-one.png',
          date: 'January 2, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../events-two.png',
          date: 'January 3, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../events-three.png',
          date: 'January 4, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../events-four.png',
          date: 'January 2, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../events-five.png',
          date: 'January 3, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../events-six.png',
          date: 'January 4, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../events-one.png',
          date: 'January 2, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../events-two.png',
          date: 'January 3, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../events-three.png',
          date: 'January 4, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        }
        // You can add more cards here...
      ]} /> */}

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