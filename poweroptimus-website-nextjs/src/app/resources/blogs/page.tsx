"use client"
import Hero from '@/app/components/home-main-content/hero'
import HeroReusable from '@/app/components/key-verticals-page/hero-reusable'
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two'
import { CardGridSection } from '@/app/components/resources/card-grid-section'
import SolFeatureBtmSection from '@/app/components/solution/sol-feature-btm-section'
import { getBlogs } from '@/app/services/blogService'
import React, { useCallback, useEffect, useState } from 'react'


const page = () => {

  const [blogs, setBlogs] = useState<any[]>([]);
  
  
  const loadBlogs = useCallback(async () => {
    const BlogList = await getBlogs({});

    console.log("blogList,,", BlogList);

    if(BlogList?.length){
      setBlogs(BlogList);
    }

  }, []);

  

  useEffect(() => {
        loadBlogs();
    }, [loadBlogs])

     const cards = blogs.map((b: any) => ({
      //  imageSrc: b.image || "/default-blog.png",
      imageSrc: ["/Blog_Image.png","/resource-blog-image.jpg"],
      title: b.title,
       description: b.metaDescription || "",
       date: b.date || "Nov 25",
       linkText: "Read More",
       linkHref: `/resources/blogs-details/${b.urlId}`,
     }));
    
     console.log('ckdf',cards)

  return (
    <>
      {/* <KeyverticalTwo
        title="Blogs"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam."
        showLink={false}
      /> */}

      {/* <HeroReusable headerText={'Explore Blogs'} bodyText={'Your destination for a wide range of insightful topics, innovative ideas, and thought-provoking articles. Whether you seek to expand your knowledge, gain inspiration, or stay informed on the latest developments, our curated content is designed to engage, enlighten, and add value for people across industries.'} /> */}

      <Hero headerText={"Explore Blogs on Environmental & Energy Trends"} bodyText={
          "Your hub for insights, ideas, and trends in environment and energy, curated to inform, inspire, and keep you ahead across industries, while keeping you updated on innovations, technologies, and best practices shaping a more sustainable future."
      } image='/Resource_Blogs_Header_Vector_Image.svg' />

      {/* <CardGridSection
        cards={[
          {
            imageSrc: '../resources-one.png',
            title: 'Driving Energy Efficiency, Environmental Monitoring, and Sustainability with Smart Energy Management',
            description: '',
            date: 'Nov, 2025',
            linkText: 'Read More',
            linkHref: `/resources/blogs-details`,
          }
        ]}/> */}

        <CardGridSection
        cards={cards}/>

        
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