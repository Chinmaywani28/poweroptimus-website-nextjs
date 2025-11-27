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

  const loadSingleBlog = useCallback(async () => {
    if (!blogId) return;
    const blog: any = await getBlogByUrlId(blogId as string);

    console.log('nbmbhf',blog)

    setSelectedBlog(blog);
  }, [blogId]);

  useEffect(() => {
    loadSingleBlog();
  }, [loadSingleBlog]);

  return (
    <>
      <section className="container">
        {/* Back link */}
        <nav className="topbar">
          <Link href="/blogs" className="back-link">
            {/* <span className="arrow">←</span>
            <span>All Blogs</span> */}
          </Link>
        </nav>

        {/* Hero section */}
        <header className="hero">
          <div className="Header1 TextBlue">

            {selectedBlog?.title}
          </div>
        </header>

        {/* Image + meta */}
        <section className="media">
          <div className="image-wrap">
            <img
              src="/blogs-img.jpg"
              alt="Workers in a factory"
              loading="lazy"
            />
          </div>
          <div className="body3 marTopGlobal">{ selectedBlog?.updatedOnStr}</div>
        </section>
      </section>

      {/* down section */}
      <section className="case-study-section">
        {/* <Link href={linkPath} className="breadcrumb body3sec">
                {linkText} <span className="body3sec">→</span>
              </Link> */}

        {/* Header */}
        {/* <header className="page-header marTopGlobal">
        <div className="page-title Header3sec">{title}</div>
        <button className="download-btn">⬇ Download Full Case Study</button>
      </header> */}

        {/* Main grid */}
        <main className="page-content marTopGlobal">
          {/* Left column */}

          <div className="main-column blog-text">
            <div
              dangerouslySetInnerHTML={{
                __html: selectedBlog?.content ?? "",
              }}
            />
          </div>

          {/* Right column (sidebar) */}
          <aside className="sidebar">
            {/* <div>
        <button className="download-btn">⬇ Download Full Case Study</button>

            </div> */}

            <div className="share">
            <div className="body2 ">Share</div>
            <div className="share-icons marTopGlobal">
              <span><i className="ri-links-fill"></i></span>
              <span><i className="ri-twitter-x-fill"></i></span>
              <span><i className="ri-facebook-fill"></i></span>
            </div>
          </div>

            <div className="other-cases">
              {/* <div className="body2">Other Blogs</div> */}
              <ul>
                {/* <div className="marTopGlobal">
                {otherCases.map((item, index) => (
                <li className="body2" key={index}>
                  <a className="body2" href="#">{item}</a>
                </li>
              ))}
              </div> */}
              </ul>
            </div>
          </aside>
        </main>
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