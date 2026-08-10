"use client"
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import './page.css'
import { getBlogByUrlId } from '@/app/services/blogService'
import { useParams } from 'next/navigation'


const page = () => {
  
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const params = useParams();

  

  

  console.log('nvadsf',params)

  const blogId = Array.isArray(params.blogId) ? params.blogId[0] : params.blogId;

  console.log('blogIDD',blogId)

  const loadSingleBlog = useCallback(async () => {
    if (!blogId) return;
    const blog: any = await getBlogByUrlId(blogId as string);

    console.log('nbmbhf',blog)

    setSelectedBlog(blog);

    

  }, [blogId]);

  const imgObj : Record<string, string> = {
    'Driving-Energy-Efficiency-Environmental-Monitoring-and-Sustainability-with-Smart-Energy-Management': '/Blog_UnderPage_Smart Energy Management.png',
    'dont-Let-Your-Digital-Twin-Be-Just-a-Replica-Bring-It-to-Life': '/Blog_UnderPage_DIGITAL TWIN.jpg',
    "From-Building-Management-Systems-to-Intelligent-Operations-The-Next-Evolution-of-Smart-Facilities": '/from-building-management-system-inside-image.jpg',
    "The-Real-Cost-of-Not-Knowing-What-Your-Building-Is-Doing-Right-Now": "/bloog-four-image-four.jpg"
  }


  useEffect(() => {
    loadSingleBlog();
  }, [loadSingleBlog]);

  return (
    <>
      {/* Blog Details Section */}
<section className="blog-details-section">
  <div className="blog-layout">

    {/* LEFT COLUMN */}
    <div className="main-column">

      {/* Title */}
      <header className="hero">
        <div className="Header1 TextBlue">
          {selectedBlog?.title}
        </div>
      </header>

      {/* Image */}
      <section className="media marTopGlobal">
        <div className="image-wrap">
          <img
            src={imgObj[blogId as string] || '/abc.png'}
            alt={selectedBlog?.title}
            loading="lazy"
          />
        </div>

        <div className="body3 marTopGlobal">
          {selectedBlog?.date}
        </div>
      </section>

      {/* Blog Content */}
      <div className="blog-text marTopGlobal">
        <div
          dangerouslySetInnerHTML={{
            __html: selectedBlog?.content ?? "",
          }}
        />
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <aside className="sidebar">

      <div className="share">
        <div className="body2">Share</div>

        <div className="share-icons marTopGlobal">
          {/* <span><i className="ri-links-fill"></i></span>
          <span><i className="ri-twitter-x-fill"></i></span>
          <span><i className="ri-facebook-fill"></i></span> */}
            <span>
              <a
              href="https://www.youtube.com/@EnvirOptimusNeilAutomation"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="ri-youtube-fill" style={{ fontSize: "26px" }}></i>
            </a>
              </span>

            <span>
              <a
              href="https://www.linkedin.com/company/enviroptimus/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i
                className="ri-linkedin-box-fill footer-icon"
                style={{ fontSize: "26px" }}
              ></i>
            </a>
            </span>
            
        </div>

        
      </div>

      {/* <div>
          abc
        </div> */}

        <div className="recent-blogs">

  <div className="recent-title">
    Our Recent Blogs
  </div>

  <div className="recent-blog-list">

    <div>
         <a href="https://enviroptimus.com/resources/blogs-details/Driving-Energy-Efficiency-Environmental-Monitoring-and-Sustainability-with-Smart-Energy-Management" className="recent-blog-item">
      <span className="arrow-icon">
        <i className="ri-arrow-right-s-line"></i>
      </span>

      <span className="blog-name">
        {/* The Role of Technology in Driving Lean Construction Success */}
        Driving Energy Efficiency, Environmental Monitoring, and Sustainability with Smart Energy Management
      </span>
    </a>
    </div>
   
        <div>
          <a href="https://enviroptimus.com/resources/blogs-details/dont-Let-Your-Digital-Twin-Be-Just-a-Replica-Bring-It-to-Life" className="recent-blog-item">
      <span className="arrow-icon">
        <i className="ri-arrow-right-s-line"></i>
      </span>

      <span className="blog-name">
        Dont Let Your Digital Twin Be Just a Replica - Bring It to Life
      </span>
    </a>
        </div>

    
    <div className="recent-title">
    Our Recent Videos
  </div>


      <div>
        <a href="https://www.youtube.com/watch?v=WrFonQop5QY" className="recent-blog-item">
      <span className="arrow-icon">
        <i className="ri-arrow-right-s-line"></i>
      </span>

      <span className="blog-name">
        EnvirOptimus - Energy Management and Environmental Monitoring System
      </span>
    </a>
      </div>
    
      {/* <div>
        <a href="#" className="recent-blog-item">
      <span className="arrow-icon">
        <i className="ri-arrow-right-s-line"></i>
      </span>

      <span className="blog-name">
        How Digital Quality Tracking Drives Faster Handover & Reduces Defects
      </span>
    </a>
      </div> */}
    

  </div>

</div>

    </aside>

  </div>
</section>


      

      {/* <SolFeatureBtmSection
        heading="Easy to Integrate with Existing Systems"
        paragraphs={[
          "PowerOptimus is more than a monitoring tool—it is a strategic platform designed to help organizations gain complete control over energy and environmental performance. With integrated energy monitoring systems, smart dashboards, and real-time analytics, PowerOptimus empowers organizations to optimize operations and uphold high-performance standards."
        ]}
        buttonText="Download Documentation"
        imageSrc="/integration.png"
        imageAlt="Illustration of integration"
      /> */}
    </>
  );
}

export default page