"use client"
import './brochure-card-section.css';
import { useRef } from 'react';

// ✅ Type for each card
interface CardData {
  id: number;
  title: string;
  content: string;
  image: string;
  buttonText?: string;
}

// ✅ Component props
interface EnergyCardSliderProps {
  cards: CardData[];
}




export const BrochureCardSection: React.FC<EnergyCardSliderProps> = ({cards}) => {

  const sliderRef = useRef<HTMLDivElement>(null);

  // ✅ Scroll left on arrow click
  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  // ✅ Scroll right on arrow click
  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
    <div className="energy-slider-wrapper">
      {/* ✅ Slider container for horizontal scroll */}
      <div className="energy-slider" ref={sliderRef}>
        {cards.map(card => (
          <div className="energy-card" key={card.id}>
            {/* ✅ Card image */}
            <div className="card-image">
              <img src={card.image} alt={card.title} />
            </div>


            {/* ✅ Download button */}
            <button className="download-btn">
              <span>{card.buttonText || <i className="ri-arrow-down-line"></i> } Download</span> 
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Arrows shown only on mobile/tablet */}
      <div className="arrow-btn-container">
        <button className="arrow-btn" onClick={scrollLeft}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button className="arrow-btn" onClick={scrollRight}>
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>


    </>



  );
};

