"use client"
import Hero from '@/app/components/home-main-content/hero'
import HeroReusable from '@/app/components/key-verticals-page/hero-reusable'
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two'
import { CardGridSection } from '@/app/components/resources/card-grid-section'
import SolFeatureBtmSection from '@/app/components/solution/sol-feature-btm-section'
import { getEvents } from '@/app/services/blogService'
import React, { useCallback, useEffect, useState } from 'react'


const page = () => {

  const [events, setEvents] = useState<any[]>([]);
  
  
  const loadEvents = useCallback(async () => {
    const eventList = await getEvents({});

    console.log("eventList::", eventList);

    if(eventList?.length){
      setEvents(eventList);
    }

  }, []);

  

  useEffect(() => {
        loadEvents();
    }, [loadEvents])

     const cards = events.map((b: any) => ({
      imageSrc: ["/enviroptimus-au-event.png"],
      title: b.title,
       description: b.metaDescription || "",
       date: b.date || "Nov 25",
       linkText: "Read More",
       linkHref: `/resources/events-details/${b.urlId}/registration-form`,
       alt: b.alt || ""
     }));
    
     console.log('events list',cards)

  return (
    <>
      <Hero headerText={"Explore Events on Environmental & Energy Trends"} bodyText={
          "Your hub for insights, ideas, and trends in environment and energy, curated to inform, inspire, and keep you ahead across industries, while keeping you updated on innovations, technologies, and best practices shaping a more sustainable future."
      } image='/Resource_Blogs_Header_Vector_Image.svg' alt='EnvirOptimus Blogs'/>

        <CardGridSection
        cards={cards}/>

        

    </>
  )
}

export default page