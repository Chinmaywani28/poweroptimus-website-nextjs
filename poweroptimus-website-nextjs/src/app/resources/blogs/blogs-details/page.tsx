import Link from 'next/link'
import React from 'react'
import './page.css'
import { NewsAndEventsSubSection } from '@/app/components/news-and-events/news-and-events-subsec'


const page = () => {
  return (
    <>
        
     
    
      <NewsAndEventsSubSection 
      title="Necessitatibus perspiciatis voluptatem officia eos sed ut pariatur debitis"
      imageSrc="/blogs-img.jpg"
      content={[
        "Consequatur molestias sequi tempore officia. Sed consequatur facilis...",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      ]}
      otherCases={[
        "Maires sit et architecto. Eos doloribus sapiente pariatur nihil reiciendis.",
        "Another case study title...",
        "Yet another case study title..."
      ]}
      />



    </>
  )
}

export default page