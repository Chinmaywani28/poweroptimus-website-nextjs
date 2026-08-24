// export const metadata = {
//   title: "Blogs on Energy & Environmental Trends | EnvirOptimus",
//   description: "Explore blogs tailored with ideas, trends and insights on energy efficiency, environmental monitoring sustainability and smart management across industries.",
//   keywords: "energy management blogs, Environmental monitoring blogs, Energy efficiency and sustainability blogs, Digital twin technology blogs",
//   alternates: {
//     canonical: "https://www.enviroptimus.com/resources/blogs",
//   },
// };

// export default function Layout({ children }: any) {
//   return <>{children}</>;
// }


import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blogs on Energy & Environmental Trends | EnvirOptimus",

  description:
    "Explore blogs tailored with ideas, trends and insights on energy efficiency, environmental monitoring sustainability and smart management across industries.",

  keywords: [
    "energy management blogs",
    "Environmental monitoring blogs",
    "Energy efficiency and sustainability blogs",
    "Digital twin technology blogs"
  ],

  alternates: {
    canonical: "https://www.enviroptimus.com/resources/blogs",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}