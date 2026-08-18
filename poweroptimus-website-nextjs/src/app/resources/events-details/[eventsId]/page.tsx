"use client"
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import './page.css'
import { NewsAndEventsSubSection } from '@/app/components/news-and-events/news-and-events-subsec'
import { CaseStudySubSection } from '@/app/components/news-and-events/case-study-subsec'
import { useParams } from 'next/navigation'
import { getEventByUrlId } from '@/app/services/blogService'
import { saveEventsRegRequest } from '@/app/services/demoService'
import { toast } from 'react-toastify';
import { EventsDetailsComponent } from '@/app/components/news-and-events/events-details-component'



const page = () => {

  const [selectedBlog, setSelectedBlog] = useState<any>(null);
    const params = useParams();

    console.log('vnavn', params)

    const [resetFormTrigger, setResetFormTrigger] = useState(false);

    const eventId = Array.isArray(params.eventsId) ? params.eventsId : params.eventsId;
    

    const loadSingleWebinar = useCallback(async () => {
      const webinar: any = await getEventByUrlId(eventId as string);
      console.log("webinar afer service::",webinar)
      setSelectedBlog(webinar);
    }, [eventId]);

    console.log("loadSingleWebinar", loadSingleWebinar);
    console.log("nkhi", selectedBlog);


    const handleFormSubmit = async (data: any) => {
    console.log("Received from child:", data);

      // if (data) {
        await saveEventsRegRequest(data);
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


    
    useEffect(() => {
      loadSingleWebinar();

      if (selectedBlog?.metaTitle) {
        document.title = `${selectedBlog.metaTitle} Blogs | ConstructMonitor`;
      }
    }, [eventId]);


  return (
    <>
      <EventsDetailsComponent
        webinarId=''
        sendWatchRecData={handleFormSubmit}
        title={selectedBlog?.title}
        resetFormTrigger={resetFormTrigger}
        images={
          [
            {
              title: "Meet EnvirOptimus at Autodesk University 2026",
              image: "/enviroptimus-au-event.png"
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