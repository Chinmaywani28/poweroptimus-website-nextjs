import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two'
import { NewsAndEventsSection } from '@/app/components/news-and-events/news-and-events-section'
import React from 'react'


const page = () => {
  return (
    <>
      <KeyverticalTwo
        title="News"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam."
        showLink={false}
      />

      <NewsAndEventsSection cards={[
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-one.png',
          date: 'January 2, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-two.png',
          date: 'January 3, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-three.png',
          date: 'January 4, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-one.png',
          date: 'January 2, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-two.png',
          date: 'January 3, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-three.png',
          date: 'January 4, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-one.png',
          date: 'January 2, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-two.png',
          date: 'January 3, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        {
          title: 'antium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut ',
          image: '../news-three.png',
          date: 'January 4, 2025',
          description: 'prove air quality and decr Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam....',
        },
        // You can add more cards here...
      ]} />
    </>
  )
}

export default page