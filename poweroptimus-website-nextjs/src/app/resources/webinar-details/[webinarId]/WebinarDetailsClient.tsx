"use client";

import React, { useState } from 'react';
import { CaseStudySubSection } from '@/app/components/news-and-events/case-study-subsec';
import { savewatchRecRequest } from '@/app/services/demoService';
import { toast } from 'react-toastify';

interface WebinarDetailsClientProps {
  webinarId: string;
  webinar: any;
}

const WebinarDetailsClient = ({
  webinarId,
  webinar,
}: WebinarDetailsClientProps) => {

  const [resetFormTrigger, setResetFormTrigger] = useState(false);

  const handleFormSubmit = async (data: any) => {

    console.log("Received from child:", data);

    try {

      await savewatchRecRequest(data);

      const id = toast.loading('Loading');

      toast.update(id, {
        render: 'Submitted',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      });

      // Reset form
      setResetFormTrigger(prev => !prev);

    } catch (error) {

      console.error(
        'Error submitting webinar form:',
        error
      );

      toast.error(
        'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <CaseStudySubSection

      webinarId={webinarId}

      sendWatchRecData={handleFormSubmit}

      title={webinar?.title || ''}

      resetFormTrigger={resetFormTrigger}

      images={[
        {
          title:
            'Connecting Energy Monitoring, Predictive Maintenance, and Sustainability for Resilient Operations',
          image: '/webinar-parish.jpg',
        },
        {
          title:
            'Webinar Digital Twin Maturity Model: From BIM to Intelligent Operations',
          image: '/EnvirOptimus_Infographic_1.jpg',
        },
        {
          title:
            'Beyond Monitoring: The Digital Twin Mandate for Data Centers Webinar',
          image: '/DataCenter_Webinar_Underpage_Image.jpg',
        },
        {
          title:
            'Intelligent Hospital Operations: Leveraging Digital Twins for Better Outcomes',
          image:
            '/Webinar Image_Intelligent Hospital Operations Leveraging Digital Twins for Better Outcomes.jpg',
        },
      ]}

      content={[
        'Consequatur molestias sequi tempore officia. Sed consequatur facilis...',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      ]}

      otherCases={[
        'Maires sit et architecto. Eos doloribus sapiente pariatur nihil reiciendis.',
        'Another case study title...',
        'Yet another case study title...',
      ]}

      showBackLink={false}

      htmlContent={webinar?.content || ''}

    />
  );
};

export default WebinarDetailsClient;