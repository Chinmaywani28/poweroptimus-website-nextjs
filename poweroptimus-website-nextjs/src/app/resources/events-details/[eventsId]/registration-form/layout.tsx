import { getEventByUrlId } from "@/app/services/blogService";
import { Metadata } from "next";


type Props = {
  children: React.ReactNode;
  params: Promise<{
    eventsId: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { eventsId } = await params;

  console.log('eventslug::',eventsId )

  let event : any = null;
  
  
  
    try {
      event = await getEventByUrlId(eventsId);
      console.log("meta eventDetails::", event);
    } catch (err) {
      console.error("Error fetching event:", err);
    }



  return {
    title: event?.metaTitle || '',
    description: event?.metadescription || '',

    keywords: [''] , 
    alternates: {
      canonical: `https://www.enviroptimus.com/resources/webinar-details/${event}`,
    },
  };
}

export default function Layout({ children }: any) {
  return <>{children}</>;
}