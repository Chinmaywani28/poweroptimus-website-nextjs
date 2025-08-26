"use client"
import { useRef } from 'react';
import './news-and-events-subsec.css';
import Link from 'next/link';

interface CaseStudyProps {
  title: string;
  imageSrc: string;
  content: string[]; // paragraphs
  otherCases: string[];
}

export const NewsAndEventsSubSection : React.FC<CaseStudyProps> = ({
  title,
  imageSrc,
  content,
  otherCases,
  
})  => {
  

  return (
    <>
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
          <div className="Header1sec TextBlue">
            Necessitatibus perspiciatis voluptatem officia eos sed ut pariatur
            debitis soluta. Et est nisi
          </div>
          <div className="body3sec marTopGlobal lead">
            Tenetur dolorem enim amet id architecto ullam ipsum. Excepturi est
            rem cum. Autem excepturi qui consequatur molestias eaque tempore
            officia. Sed consequatur facilis
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
          <div className="body3sec marTopGlobal">Posted on 20 March 2024</div>
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
      <main className="page-content">
        {/* Left column */}


        <div className="main-column">
          <div className="page-title Header3sec">{title}</div>

          <div className="body3sec marTopGlobal">
            Et voluptatem eveniet explicabo vitae. Ut esse est rerum at. Sed consequatur labore est ipsum. Dolores dolore laudantium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut aspernatur quisquam fuga quod distinctio voluptatibus doloribus laborum. Et voluptatem est ratione eum minus quia quas rem. Tempora officia maiores illo iste cumque aut. Molestiae fugiat animi ut et maiores. Et sit architecto. Est doloribus sapiente pariatur nihil reiciendis. Iusto facilis et quisquam laborum. Et voluptatem eveniet explicabo vitae. Ut esse est rerum at. Sed consequatur labore est ipsum. Dolores dolore laudantium nam labore dolor iure 
          </div>


          <div className="marTopGlobal">
          <img src={imageSrc} alt="Case study" className="main-image" />
          </div>

          <article className="content">
            {/* {content.map((para, index) => (
              <p key={index}>{para}</p>
            ))} */}

          <div className="body3sec marTopGlobal">
            Et voluptatem eveniet explicabo vitae. Ut esse est rerum at. Sed consequatur labore est ipsum. Dolores dolore laudantium nam labore dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt laborum. Ut aspernatur quisquam fuga quod distinctio voluptatibus doloribus laborum. Et voluptatem est ratione eum minus quia quas rem. Tempora officia maiores illo iste cumque aut. Molestiae fugiat animi ut et maiores. Et sit architecto. Est doloribus sapiente pariatur nihil reiciendis. Iusto facilis et quisquam laborum. Et voluptatem eveniet explicabo vitae. Ut esse est rerum at. Sed consequatur labore est ipsum. Dolores dolore laudantium nam labore dolor iure 
          </div>


          </article>
        </div>

        {/* Right column (sidebar) */}
        <aside className="sidebar">

            <div>
        <button className="download-btn">⬇ Download Full Case Study</button>

            </div>

          <div className="share">
            <div className="body3sec ">Share</div>
            <div className="share-icons marTopGlobal">
              <span>🔗</span>
              <span>🐦</span>
              <span>💼</span>
            </div>
          </div>

          <div className="other-cases">
            <div className="body3sec">Other Blogs</div>
            <ul>
              <div className="marTopGlobal">
                {otherCases.map((item, index) => (
                <li className="body3sec" key={index}>
                  <a className="body3sec" href="#">{item}</a>
                </li>
              ))}
              </div>
              
            </ul>
          </div>
        </aside>
      </main>
    </section>
    </>
  );
};

