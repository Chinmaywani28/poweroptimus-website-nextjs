"use client"
import { useRef } from 'react';
import './case-study-subsec.css';
import Link from 'next/link';

interface CaseStudyProps {
  title: string;
  imageSrc: string;
  backNavLink?: string;
  backNavPath?: string;
  showBackLink: boolean
  content: string[]; // paragraphs
  otherCases: string[];
  textDesc?: React.ReactNode;
  htmlContent?: any
}

export const CaseStudySubSection : React.FC<CaseStudyProps> = ({
  title,
  imageSrc,
  content,
  otherCases,
  backNavLink,
  backNavPath,
  showBackLink,
  textDesc,
  htmlContent
})  => {
  

  return (
    <>
      {/* <section className="container">
        <nav className="topbar">
          <Link href="/blogs" className="back-link">
            <span className="arrow">←</span>
            <span>All Blogs</span>
          </Link>
        </nav>

        
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
      </section> */}

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

        <div>
          <nav className="topbar">
            <Link href={"backNavPath"} className="back-link">
            {showBackLink ? <div>
              <span className="arrow">←</span>
              <span>{backNavLink}</span></div>
            : ''  
            }
            
            </Link>
          </nav>
        </div>

        <main className="page-content">
          {/* Left column */}
          <div className="main-column">
            <div className="page-title Header1">{title}</div>

            {/* <div className="body3sec marTopGlobal">
              Et voluptatem eveniet explicabo vitae. Ut esse est rerum at. Sed
              consequatur labore est ipsum. Dolores dolore laudantium nam labore
              dolor iure rerum. Dicta est dicta minus. Autem dicta nesciunt
              laborum. Ut aspernatur quisquam fuga quod distinctio voluptatibus
              doloribus laborum. Et voluptatem est ratione eum minus quia quas
              rem. Tempora officia maiores illo iste cumque aut. Molestiae
              fugiat animi ut et maiores. Et sit architecto. Est doloribus
              sapiente pariatur nihil reiciendis. Iusto facilis et quisquam
              laborum. Et voluptatem eveniet explicabo vitae. Ut esse est rerum
              at. Sed consequatur labore est ipsum. Dolores dolore laudantium
              nam labore dolor iure
            </div> */}

            <div className="marTopGlobal">
              <img src={imageSrc} alt="Case study" className="main-image" />
            </div>

            <article className="content">
              {/* {content.map((para, index) => (
              <p key={index}>{para}</p>
            ))} */}

              <div  dangerouslySetInnerHTML={{ __html: htmlContent }} className="body2 marTopGlobal">
                {/* Et voluptatem eveniet explicabo vitae. Ut esse est rerum at. Sed
                consequatur labore est ipsum. Dolores dolore laudantium nam
                labore dolor iure rerum. Dicta eest dicta minus. Autem dicta
                nesciunt laborum. Ut aspernatur quisquam fuga quod distinctio
                voluptatibus doloribus laborum. Et voluptatem est ratione eum
                minus quia quas rem. Tempora officia maiores illo iste cumque
                aut. Molestiae fugiat animi ut t maiores. Et sit architecto.
                Est doloribus sapiente pariatur nihil reiciendis. Iusto facilis
                et quisquam laborum. Et voluptatem eveniet explicabo vitae. Ut
                esse est rerum at. Sed consequatur labore est ipsum. Dolores
                dolore laudantium nam labore dolor iure */}
                {/* {textDesc } */}
               

                

              </div>
            </article>
          </div>

          {/* Right column (sidebar) */}
          <aside className="sidebar">

            <div>
              <form className="contact-form">
            <label className="body3sec">
              Name
              <input type="text" placeholder="Enter your name" required />
            </label>
            <label className="body3sec">
              Email
              <input type="email" placeholder="Enter your email" required />
            </label>
            
            <label className="body3sec">
              Phone no
              <input type="text" placeholder="Enter your name" required />
            </label>
            <label className="body3sec">
              Job Title
              <input type="email" placeholder="Enter your email" required />
            </label>
            <label className="body3sec">
              Country
              <input type="email" placeholder="Enter your email" required />
            </label>
            <label className="body3sec">
              City
              <input type="email" placeholder="Enter your email" required />
            </label>
            <label className="body3sec">
              Message
              <textarea placeholder="Enter your message" rows={4} required></textarea>
            </label>
            <button type="submit" className="submit-btn">
              Watch Recording
            </button>
          </form>
            </div>

            {/* <div>
              <button className="download-btn">
                ⬇ Download Full Case Study
              </button>
            </div> */}

            {/* <div className="share">
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
          </div> */}
          </aside>
        </main>
      </section>
    </>
  );
};

