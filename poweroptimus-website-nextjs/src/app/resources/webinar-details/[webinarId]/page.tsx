"use client"
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import './page.css'
import { NewsAndEventsSubSection } from '@/app/components/news-and-events/news-and-events-subsec'
import { CaseStudySubSection } from '@/app/components/news-and-events/case-study-subsec'
import { useParams } from 'next/navigation'
import { getWebinarByUrlId } from '@/app/services/blogService'
import { savewatchRecRequest } from '@/app/services/demoService'
import { toast } from 'react-toastify';



const page = () => {

  const [selectedBlog, setSelectedBlog] = useState<any>(null);
    const params = useParams();

    console.log('vnavn', params)

    const [resetFormTrigger, setResetFormTrigger] = useState(false);

    const webinarId = Array.isArray(params.webinarId) ? params.webinarId[0] : params.webinarId;
    

    const loadSingleWebinar = useCallback(async () => {
      const webinar: any = await getWebinarByUrlId(webinarId as string);
      console.log("webinar afer service::",webinar)
      setSelectedBlog(webinar);
    }, [webinarId]);

    console.log("loadSingleWebinar", loadSingleWebinar);
    console.log("nkhi", selectedBlog);


    const handleFormSubmit = async (data: any) => {
    console.log("Received from child:", data);

      // if (data) {
        await savewatchRecRequest(data);
      // }


       const id = toast.loading('Loading');
    
        toast.update(id, {
          render: "Submitted",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });

        // ✅ trigger reset
        setResetFormTrigger(prev => !prev);


    }; 

    //  const handleSubmit = async (e: any) => {
    //     e.preventDefault();
    
    //     console.log("formmdatta", formData);
    
    //     if(formData){
    
    //       await saveDemoRequest(formData);
    //     }
    
    //     const id = toast.loading('Loading');
    
    //     toast.update(id, {
    //       render: "Submitted",
    //       type: "success",
    //       isLoading: false,
    //       autoClose: 3000,
    //     });
    //     setFormData(formValues);
    //   };


    
    useEffect(() => {
      loadSingleWebinar();

      if (selectedBlog?.metaTitle) {
        document.title = `${selectedBlog.metaTitle} Blogs | ConstructMonitor`;
      }
    }, [webinarId]);


  return (
    <>
      <CaseStudySubSection
        webinarId=''
        sendWatchRecData={handleFormSubmit}
        title={selectedBlog?.title}
        resetFormTrigger={resetFormTrigger}
        images={
          [
  {
    title: "Connecting Energy Monitoring, Predictive Maintenance, and Sustainability for Resilient Operations",
    image: "/webinar-parish.jpg"
  },
  {
    title: "Webinar Digital Twin Maturity Model: From BIM to Intelligent Operations",
    image: "/EnvirOptimus_Infographic_1.jpg"
  },
  {
    title: "Beyond Monitoring: The Digital Twin Mandate for Data Centers Webinar",
    image: "/DataCenter_Webinar_Underpage_Image.jpg"
  },
  {
    title: "Intelligent Hospital Operations: Leveraging Digital Twins for Better Outcomes",
    image: "/Webinar Image_Intelligent Hospital Operations Leveraging Digital Twins for Better Outcomes.jpg"
  }
]
        }
        // ,'/EnvirOptimus_Infographic_1.jpg'
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