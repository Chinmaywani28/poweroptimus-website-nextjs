"use client"
import Hero from '@/app/components/home-main-content/hero'
import HeroReusable from '@/app/components/key-verticals-page/hero-reusable'
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two'
import { CardGridSection } from '@/app/components/resources/card-grid-section'
import SolFeatureBtmSection from '@/app/components/solution/sol-feature-btm-section'
import { getWebinars } from '@/app/services/blogService'
import React, { useCallback, useEffect, useState } from 'react'


const page = () => {

  const [blogs, setBlogs] = useState<any[]>([]);
    
    
    const loadBlogs = useCallback(async () => {
      const BlogList = await getWebinars({});
  
      console.log("webinarList,,", BlogList);
  
      if(BlogList?.length){
        setBlogs(BlogList);
      }
  
    }, []);
  
    
  
    useEffect(() => {
          loadBlogs();
      }, [loadBlogs])


       const cards = blogs.map((b: any) => ({
        //  imageSrc: b.image || "/default-blog.png",
        // for new addition of images add from first location 
         imageSrc: ['/Resource_Webinar_Image-Intelligent Hospital Operations Leveraging Digital Twins for Better Outcomes.jpg',"/DataCenter-Webinar_Page_Image.png","/resource-webinar-image.jpg","/Webinar_Image2.jpg"],
         title: b.title,
         description: b.metaDescription || "",
         date: b.date || "Nov 25",
         linkText: "Read More",
         linkHref: `/resources/webinar-details/${b.urlId}`,
       }));
      
       console.log('ckdf',cards)






  return (
    <>
      {/* <KeyverticalTwo
        title="Blogs"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam."
        showLink={false}
      /> */}

      {/* <HeroReusable headerText={'Webinar Hub – Learn, Engage, Transform '} bodyText={'Welcome to our Webinar Hub, your go-to destination for expert insights, industry trends, and practical strategies. From energy optimization and smart asset management to construction quality and digital transformation, our sessions bring together thought leaders, innovators, and practitioners to share knowledge that matters.'} /> */}

      <Hero headerText={"Webinar Hub – Learn, Engage, Transform"} bodyText={
          "Your destination for expert insights, industry trends, and practical strategies to enhance energy and environmental operations, covering optimization, smart asset management, and digital transformation."
      } image='/Resource_Webinar_Header_Vector_Image.svg' />

      {/* <CardGridSection
        cards={[
          {
            imageSrc: '../resources-one.png',
            title: 'Connecting Energy Monitoring, Predictive Maintenance, and Sustainability for Resilient Operations',
            // description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
            date: '8 Oct 2025',
            linkText: 'Learn More',
            linkHref: '/resources/webinar/webinar-details',
          }
          
        ]}

        
/> */}

        
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

        {/* <SolFeatureBtmSection
        heading="Ready to Transform and Optimize Your Operation"
        paragraphs={[
          "PowerOptimus transforms energy monitoring into actionable insights, helping organizations improve efficiency, reduce emissions, and extend equipment lifespan. Whether you’re focused on cutting costs or meeting sustainability targets, the platform has you covered. Discover how today."
        ]}
        buttonText="Schedule Demo"
        imageSrc="/integration.png"
        imageAlt="Illustration of integration"
      /> */}

    </>
  )
}

export default page