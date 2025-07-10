"use client";
import { useRef } from 'react';
import './feature-header.css';
import Link from 'next/link';

type CardData = {
  image: string;
  description: string;
  link: string;
};

type Props = {
  cards: CardData[];
};

export const FeatureHeader: React.FC<Props> = ({ cards }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="feature-wrapper">
      <h2 className="feature-title Header1 TextBlue">Feature Header</h2>
      <p className="feature-desc body1_300">
        Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et.
        Quo ex deserunt aperiam. Est fuga ut odit porro nam. Natus commodi nostrum nesciunt
        quia mollitia eligendi voluptas iste odit.
      </p>

      <div className="card-row" ref={scrollRef}>
        {cards.map((item, idx) => (
          <div className="feature-card-wrapper" key={idx}>
            <div className="feature-card">
              <img src={item.image} alt="card" className="feature-img" />
            </div>
            <div className="feature-content">
              <p className="feature-text body3 alignbodytext TextGray3">{item.description}</p>
              <Link href={item.link || "#"} className="feature-link body3 alignbodytext TextGray3">Read More</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-buttons">
        <button onClick={scrollLeft}><i className="ri-arrow-left-s-line"></i></button>
        <button onClick={scrollRight}><i className="ri-arrow-right-s-line"></i></button>
      </div>
    </section>
  );
};
