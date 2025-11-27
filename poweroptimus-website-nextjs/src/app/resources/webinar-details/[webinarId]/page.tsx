"use client"
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import './page.css'
import { NewsAndEventsSubSection } from '@/app/components/news-and-events/news-and-events-subsec'
import { CaseStudySubSection } from '@/app/components/news-and-events/case-study-subsec'
import { useParams } from 'next/navigation'
import { getWebinarByUrlId } from '@/app/services/blogService'


const page = () => {

  const [selectedBlog, setSelectedBlog] = useState<any>(null);
    const params = useParams();

    const webinarId = Array.isArray(params.webinarId) ? params.webinarId[0] : params.webinarId;
    

    const loadSingleWebinar = useCallback(async () => {
      const webinar: any = await getWebinarByUrlId(webinarId as string);
      console.log("webinar afer service::",webinar)
      setSelectedBlog(webinar);
    }, [webinarId]);

    console.log("loadSingleWebinar", loadSingleWebinar);
    console.log("nkhi", selectedBlog);


    
    useEffect(() => {
      loadSingleWebinar();

      if (selectedBlog?.metaTitle) {
        document.title = `${selectedBlog.metaTitle} Blogs | ConstructMonitor`;
      }
    }, [webinarId]);


  return (
    <>
      <CaseStudySubSection
        title={selectedBlog?.title}
        imageSrc="/webinar-img.jpg"
        content={[
          "Consequatur molestias sequi tempore officia. Sed consequatur facilis...",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        ]}
        otherCases={[
          "Maires sit et architecto. Eos doloribus sapiente pariatur nihil reiciendis.",
          "Another case study title...",
          "Yet another case study title...",
        ]}
        showBackLink={false}
        htmlContent={ selectedBlog?.content ?? "" }
      />

      
      
        

    </>
  );
}

export default page