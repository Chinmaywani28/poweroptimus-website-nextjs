"use client"
import { useRef } from 'react';
import './news-and-events-section.css';
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



export const NewsAndEventsSection : React.FC<Props> = ({ cards }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 👉 Get scroll amount based on screen size
  const getScrollAmount = (container: HTMLDivElement) => {
    const width = window.innerWidth;

    if (width <= 600) return container.offsetWidth / 1; // Mobile: 1 card
    if (width <= 900) return container.offsetWidth / 2; // Tablet: 2 cards
    return container.offsetWidth / 3; // Laptop/Desktop: 3 cards
  };

  // 👉 Scroll left function
  const scrollLeft = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const amount = getScrollAmount(container);

      container.scrollBy({
        left: -amount,
        behavior: 'smooth',
      });
    }
  };

  // 👉 Scroll right function
  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const amount = getScrollAmount(container);

      container.scrollBy({
        left: amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
     <div className="carousel-wrapper">
      {/* Card container */}
      <div className="card-container" ref={scrollRef}>
        {cards.map((item, idx) => (
          <div className="carousel-card" key={idx}>
            <Link href={item.link} className="Header2 TextBlue" style={{ textDecoration: "none" }}>{item.title}</Link>
            <img src={item.image} alt="card" className="carousel-img marTopGlobal" />
            <div className="body2 marTopGlobal" style={{color:'#666' }}>{item.date}</div>
            <div className="body2 marTopGlobal">{item.description}</div>
          </div>
        ))}

          {/* {
            cards.map((item, idx) => (
              <Link href={item.link || '#'} key={idx}>
                <div className="carousel-card">
                  <h3 className="Header3 TextBlue">{item.title}</h3>
                  <img src={item.image} alt="card" className="carousel-img" />
                  <p className="body3" style={{ color: '#666' }}>{item.date}</p>
                  <p className="body3">{item.description}</p>
                </div>
              </Link>
            ))
          } */}

      </div>

      {/* Left/Right buttons visible only on mobile/tablet */}
      <div className="carousel-buttons">
        <button onClick={scrollLeft}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button onClick={scrollRight}>
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
    </>
  );
};

