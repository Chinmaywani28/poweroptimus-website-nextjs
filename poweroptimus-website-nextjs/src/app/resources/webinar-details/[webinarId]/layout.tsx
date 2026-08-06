// export const metadata = {
//   title: "Connecting Energy Monitoring, Predictive Maintenance & Sustainability",
//   description: "Transform your enterprise with integrated energy and environmental technology - reducing costs, boosting resilience, and meeting sustainability targets.",
//   keywords: ["Connecting Energy Monitoring","Predictive Maintenance & Sustainability"],
//   alternates: {
//     canonical: "https://www.enviroptimus.com/resources/webinar-details/Connecting-Energy-Monitoring-Predictive-Maintenance-and-Sustainability-for-Resilient-Operations",
//   },
// };

// export default function Layout({ children }: any) {
//   return <>{children}</>;
// }


import { getWebinarByUrlId, getWebinars } from "@/app/services/blogService";
import { Metadata } from "next";


type Props = {
  children: React.ReactNode;
  params: Promise<{
    webinarId: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { webinarId } = await params;

  console.log('webslug::',webinarId )

  let webinar : any = null;
  
  
        // "Driving Energy Efficiency, Environmental Monitoring & Sustainability",
  
  
    try {
      webinar = await getWebinarByUrlId(webinarId);
      console.log("meta webinardetails::", webinar);
    } catch (err) {
      console.error("Error fetching webinar:", err);
    }



  return {
    title: webinar?.metaTitle || '',
    description: webinar?.metadescription || '',

      // "Transform your enterprise with integrated energy and environmental technology - reducing costs, boosting resilience, and meeting sustainability targets.",

    keywords: [webinar.metaKeyword] , 
    // [
    //   "Connecting Energy Monitoring",
    //   "Predictive Maintenance & Sustainability",
    // ],
    alternates: {
      canonical: `https://www.enviroptimus.com/resources/webinar-details/${webinarId}`,
    },
  };
}

export default function Layout({ children }: Props) {
  return <>{children}</>;
}