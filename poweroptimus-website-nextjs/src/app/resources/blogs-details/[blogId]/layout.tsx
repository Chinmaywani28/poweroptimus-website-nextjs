// export const metadata = {
//   title: "Driving Energy Efficiency, Environmental Monitoring & Sustainability",
//   description: "Find out how EnvirOptimus enables real-time energy monitoring, operational efficiency, and sustainability for effective industrial operations.",
//   keywords: "Environmental Monitoring & Sustainability",
//   alternates: {
//     canonical: "https://www.enviroptimus.com/resources/blogs-details/Driving-Energy-Efficiency-Environmental-Monitoring-and-Sustainability-with-Smart-Energy-Management",
//   },
// };

// export default function Layout({ children }: any) {
//   return <>{children}</>;
// }



import { Metadata } from "next";


type Props = {
  children: React.ReactNode;
  params: Promise<{
    blogId: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { blogId } = await params;

  console.log('blogIdslug::',blogId )

  return {
    title:
      "Driving Energy Efficiency, Environmental Monitoring & Sustainability",
    description:
      "Find out how EnvirOptimus enables real-time energy monitoring, operational efficiency, and sustainability for effective industrial operations.",
    keywords: [
      "Environmental Monitoring & Sustainability"
    ],
    alternates: {
      canonical: `https://www.enviroptimus.com/resources/blogs-details/${blogId}`,
    },
  };
}

export default function Layout({ children }: Props) {
  return <>{children}</>;
}