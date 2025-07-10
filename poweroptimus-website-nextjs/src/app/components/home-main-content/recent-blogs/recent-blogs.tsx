"use client";
import { useRef } from 'react';
import './recent-blogs.css';
import Link from 'next/link';

type CardData = {
  title: string;
  image: string;
  date: string;
  description: string;
  link: string;
};

type Props = {
  cards: CardData[];
};

export const RecentBlogs: React.FC<Props> = ({ cards }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 👉 Scroll amount per card (approx width + margin)
  const scrollAmount = 320;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="carousel-wrapper">

      <h2 className="Header1 TextBlue blogheading">Recent Blogs</h2>


      {/* Horizontal scrolling card container */}
      <div className="card-container" ref={scrollRef}>
        {cards.map((item, idx) => (
          <div className="carousel-card" key={idx}>
            <img src={item.image} alt="card" className="carousel-img" />
            <h3 className="carousel-title Header3 TextBlue marginTopZero">{item.title}</h3>
            <p className="carousel-desc body3">{item.description}</p>
            <div className="carousel-btm">
                <div className="carousel-date body3">{item.date}</div>
                {/* <a className="card-link body3" href="/blog/power">Read More<span className="arrow">→</span></a> */}
              <Link href="" className="feature-link body3 alignbodytext TextGray3">Read More <span><i className="ri-arrow-right-long-line"></i></span></Link>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll buttons (always visible) */}
      <div className="carousel-buttons">
        <button onClick={scrollLeft}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button onClick={scrollRight}>
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
  );
};
