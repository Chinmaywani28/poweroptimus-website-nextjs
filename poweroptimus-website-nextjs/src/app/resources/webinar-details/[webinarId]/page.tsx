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
    const blogId = Array.isArray(params.webinarId) ? params.webinarId[0] : params.webinarId;
    console.log('navId',blogId)

    

    const loadSingleBlog = useCallback(async () => {
      const blog: any = await getWebinarByUrlId(blogId as string);
      console.log("webinar afer service::",blog)
      setSelectedBlog(blog);
    }, [blogId]);

    console.log("loadSinglewebinar", loadSingleBlog);
    console.log("nkhi", selectedBlog);


    
    useEffect(() => {
      loadSingleBlog();

      if (selectedBlog?.metaTitle) {
        document.title = `${selectedBlog.metaTitle} Blogs | ConstructMonitor`;
      }
    }, [blogId]);


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