// import { Metadata } from "next";
// import { useCallback } from "react";
// import { getBlogByUrlId } from '@/app/services/blogService'



// type Props = {
//   children: React.ReactNode;
//   params: Promise<{
//     blogId: string;
//   }>;
// };

// export async function generateMetadata({
//   params,
// }: Props): Promise<Metadata> {

//   const { blogId } = await params;


//   console.log('blogIdslug::',blogId )

//   let blog : any = null;


//       // "Driving Energy Efficiency, Environmental Monitoring & Sustainability",


//   try {
//     blog = await getBlogByUrlId(blogId);
//     console.log("meta blogdetails::", blog);
//   } catch (err) {
//     console.error("Error fetching blog:", err);
//   }


//   return {
//     title:  blog?.metaTitle || '',
//       // "Driving Energy Efficiency, Environmental Monitoring & Sustainability",
//     description:
//       // "Find out how EnvirOptimus enables real-time energy monitoring, operational efficiency, and sustainability for effective industrial operations.",
//       blog?.metaDescription || '',
//     keywords: [blog.metaKeyword], 
//     // [
//     //   "Environmental Monitoring & Sustainability"
//     // ],
//     alternates: {
//       canonical: `https://www.enviroptimus.com/resources/blogs-details/${blogId}`,
//     },
//   };
// }

// export default function Layout({ children }: Props) {
//   return <>{children}</>;
// }



// from here started new code

import type { Metadata } from 'next';
import { getBlogByUrlId } from '@/app/services/blogService';

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

  let blog: any = null;

  try {
    blog = await getBlogByUrlId(blogId);

    // console.log('server components', blog)

  } catch (error) {
    console.error('Error fetching blog metadata:', error);
  }

  // Fallback metadata if blog is not found
  if (!blog) {
    return {
      title: 'Blogs | EnvirOptimus',
      description:
        'Explore energy management, environmental monitoring, sustainability and smart facility insights from EnvirOptimus.',
      alternates: {
        canonical: `https://www.enviroptimus.com/resources/blogs-details/${blogId}`,
      },
    };
  }

  return {
    title: blog.metaTitle || blog.title,

    description:
      blog.metaDescription ||
      blog.description ||
      '',

    keywords: blog.metaKeyword
      ? [blog.metaKeyword]
      : undefined,

    alternates: {
      canonical:
        `https://www.enviroptimus.com/resources/blogs-details/${blogId}`,
    },
  };
}

export default function Layout({
  children,
}: Props) {
  return <>{children}</>;
}