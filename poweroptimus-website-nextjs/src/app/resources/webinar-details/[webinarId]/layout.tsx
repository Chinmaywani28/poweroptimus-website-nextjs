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

  return {
    title:
      `${webinarId.split('-').join(' ')}`,
    description:
      "Transform your enterprise with integrated energy and environmental technology - reducing costs, boosting resilience, and meeting sustainability targets.",
    keywords: [
      "Connecting Energy Monitoring",
      "Predictive Maintenance & Sustainability",
    ],
    alternates: {
      canonical: `https://www.enviroptimus.com/resources/webinar-details/${webinarId}`,
    },
  };
}

export default function Layout({ children }: Props) {
  return <>{children}</>;
}