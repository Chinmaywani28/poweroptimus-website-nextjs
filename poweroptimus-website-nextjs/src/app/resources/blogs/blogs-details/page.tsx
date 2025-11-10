import Link from 'next/link'
import React from 'react'
import './page.css'
import { NewsAndEventsSubSection } from '@/app/components/news-and-events/news-and-events-subsec'
import { NewsAndEventsSubSectionNew } from '@/app/components/news-and-events/news-and-events-subsec-new'


const page = () => {
  return (
    <>
      {/* <NewsAndEventsSubSection 
      title=""
      imageSrc="/blogs-img.jpg"
      content={[
        "Consequatur molestias sequi tempore officia. Sed consequatur facilis...",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      ]}
      otherCases={[
        "Maires sit et architecto. Eos doloribus sapiente pariatur nihil reiciendis.",
        "Another case study title...",
        "Yet another case study title..."
      ]}
      /> */}

      {/* <NewsAndEventsSubSectionNew
        title=""
        imageSrc="/blogs-img.jpg"
        content={[
          "Consequatur molestias sequi tempore officia. Sed consequatur facilis...",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        ]}
        otherCases={[
          "Maires sit et architecto. Eos doloribus sapiente pariatur nihil reiciendis.",
          "Another case study title...",
          "Yet another case study title...",
        ]}
        textDesc={
           <div>
            sc
           </div>

        }
      /> */}

      <section className="container">
        {/* Back link */}
        <nav className="topbar">
          <Link href="/blogs" className="back-link">
            {/* <span className="arrow">←</span> */}
            {/* <span>All Blogs</span> */}
          </Link>
        </nav>

        {/* Hero section */}
        <header className="hero">
          <div className="Header1 TextBlue">
            Driving Energy Efficiency, Environmental Monitoring, and Sustainability with Smart Energy Management 
          </div>
          {/* <div className="body1 marTopGlobal lead">
            Tenetur dolorem enim amet id architecto ullam ipsum. Excepturi est
            rem cum. Autem excepturi qui consequatur molestias
          </div> */}
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
          <div className="body3 marTopGlobal">Posted on Nov 2025</div>
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


        <div className="main-column">
          <div className="page-title Header2">Driving Energy Efficiency, Environmental Monitoring, and Sustainability with Smart Energy Management </div>

          <div className="body2 marTopGlobal">
            With rising energy costs, growing environmental accountability, and increasingly complex operational demands, organisations are rethinking how they manage their facilities and assets. The convergence of energy monitoring, predictive maintenance, and sustainability strategies has become the foundation for resilient, efficient, and future-ready operations. Together, they help businesses balance performance, cost, and environmental impact through real-time data, analytics, and intelligent automation. 
          </div>


          {/* <div className="marTopGlobal">
          <img src='' alt="Case study" className="main-image" />
          </div> */}

          <article className="content">
            {/* {content.map((para, index) => (
              <p key={index}>{para}</p>
            ))} */}

             <div className="page-title Header3 marTopGlobal">The Growing Need for Energy Management Solutions </div>

          <div className="body2 marTopGlobal">
           Energy is one of the most significant operational costs for industries, commercial facilities, and large-scale enterprises. Traditional approaches often rely on periodic reviews, manual reporting, and fragmented monitoring systems. These methods can lead to inefficiencies, high energy costs, and difficulties in maintaining sustainability standards. 

          Modern organizations require a holistic approach that combines technology, data analytics, and actionable insights. Energy management solutions provide the tools and infrastructure to monitor, analyze, and optimize energy consumption in real time, ensuring operational continuity and environmental responsibility. 
          </div>

              <div className="page-title Header3 marTopGlobal">Key benefits of implementing advanced energy management solutions include:  </div>

          <ul>
            <li className="body2 marTopGlobal">
              <b>Reduced energy costs </b>
                By tracking consumption patterns and identifying inefficiencies, organizations can reduce energy wastage and optimize resource allocation. 
              
            </li>
            <li className="body2 marTopGlobal">
              <b>Enhanced operational reliability:</b>
                Continuous monitoring of critical systems ensures early detection of anomalies, preventing unplanned downtime.  
              
            </li>
            <li className="body2 marTopGlobal">
              <b>Sustainability compliance:</b>
               Energy management systems help organizations adhere to regulatory standards, ESG requirements, and environmental sustainability targets. 
              
            </li>
            <li className="body2 marTopGlobal">
              <b> Data-driven decision-making:</b>
              Real-time analytics empower organizations to make informed decisions on energy usage, capital investments, and sustainability initiatives.
            </li>
          </ul>

          <div className="page-title Header3 marTopGlobal">What is Smart Energy Management?</div>

          <div className="body2 marTopGlobal">
           Smart energy management refers to the application of intelligent systems, data analytics, and automated controls to optimize energy consumption. Unlike traditional energy management practices, which rely on manual reporting and periodic audits, smart energy management leverages technology to provide real-time visibility into energy usage across operations, facilities, and equipment. 
          </div>

          <ul>
            <li className="body2 marTopGlobal">
              <b>IoT-enabled energy monitoring systems: </b>
                Sensors and meters continuously collect data on energy consumption, equipment performance, and environmental conditions. 
              
            </li>
            <li className="body2 marTopGlobal">
              <b>Predictive analytics:</b>
               Advanced algorithms analyze historical and real-time data to predict equipment failures, energy spikes, or inefficiencies. 
              
            </li>
            <li className="body2 marTopGlobal">
              <b>Automated controls:</b>
               Systems can dynamically adjust energy loads, switch between energy sources, and optimize HVAC, lighting, and industrial machinery operations. 
              
            </li>
            <li className="body2 marTopGlobal">
              <b>Integration with sustainability goals:</b>
              Smart energy management aligns operational efficiency with ESG and environmental sustainability objectives, including CO₂ reduction targets. 
            </li>

            
          </ul>

          <div className="page-title Header3 marTopGlobal">Role of Energy Monitoring Systems </div>

          <div className="body2 marTopGlobal">
           Energy monitoring systems are the backbone of any effective energy management strategy. These systems provide granular insights into energy consumption at multiple levels—facility-wide, departmental, and equipment-specific. By continuously collecting and analyzing energy data, organizations can identify trends, inefficiencies, and opportunities for optimization.  
          </div>

          
           <ul>
            <li className="body2 marTopGlobal">
              <b>Real-time visibility</b>
                Stakeholders can track energy usage as it happens, rather than relying on delayed reports.
            </li>
            <li className="body2 marTopGlobal">
              <b>Anomaly detection:</b>
             Sudden spikes in energy consumption or equipment malfunction can be detected and addressed promptly. 
              
            </li>
            <li className="body2 marTopGlobal">
              <b>Actionable insights:</b>
               Detailed dashboards and reports provide guidance for energy-saving initiatives and investment decisions. 
            </li>
            <li className="body2 marTopGlobal">
              <b>Regulatory compliance:</b>
              Continuous monitoring ensures that facilities meet local and international sustainability standards. 
            </li>

            
          </ul>

































          </article>
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