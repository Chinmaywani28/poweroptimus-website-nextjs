"use client"
// import './brochure-card-section.css';
import styles from './brochure-card-section.module.css';
import { useRef, useState } from 'react';
import { BrochureModalSection } from './brochure-modal';

// ✅ Type for each card
interface CardData {
  id: number;
  title: string;
  content: string;
  image: string;
  buttonText?: string;
  link: string;
  requiresForm?: boolean;
}

// ✅ Component props
interface EnergyCardSliderProps {
  cards: CardData[];
}




export const BrochureCardSection: React.FC<EnergyCardSliderProps> = ({cards}) => {

  const [showModal, setShowModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const sliderRef = useRef<HTMLDivElement>(null);


  // ✅ Scroll left on arrow click
  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  // ✅ Scroll right on arrow click
  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handleDownloadClick: any = (pdfLink: string, caseStudyTitle: string) => {
  console.log("Download clicked for PDF:", pdfLink);
  setSelectedPdf(pdfLink);
  setSelectedTitle(caseStudyTitle);
  setShowModal(true);
};

  return (
    <>
    <div className={styles["energy-slider-wrapper"]}>
      {/* ✅ Slider container for horizontal scroll */}
      <div className={styles["energy-slider"]} ref={sliderRef}>
        {cards.map(card => (
          <div className={styles["energy-card"]} key={card.id}>
            {/* ✅ Card image */}
            <div className={styles["card-image"]}>
              <img src={card.image} alt={card.title} />
            </div>


            {/* ✅ Download button */}
            {/* <button className={styles["download-btn"]} onClick={() => handleDownloadClick(card.link)}>
              <span>{card.buttonText || <i className="ri-arrow-down-line"></i> }
              <a href={card.link} download style={{ textDecoration: 'none', color: 'green'  }}>Download</a> </span> 
            </button> */}

            <button
              className={styles["download-btn"]}
              onClick={() => handleDownloadClick(card.link, card.title)}
            >
              Download
            </button>

              {/* <button className={styles["download-btn"]} onClick={() => handleDownloadClick(card)}>
              <span>{card.buttonText || <i className="ri-arrow-down-line"></i> }
              <a href={card.link} download style={{ textDecoration: 'none', color: 'green'  }}>Download</a> </span> 
            </button> */}


            {/* <button
  className={styles["download-btn"]}
  onClick={() => handleDownloadClick(card.link)}
>
  Download
</button> */}
          </div>
        ))}
      </div>

      {/* ✅ Arrows shown only on mobile/tablet */}
      <div className={styles["arrow-btn-container"]}>
        <button className={styles["arrow-btn"]} onClick={scrollLeft}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button className={styles["arrow-btn"]} onClick={scrollRight}>
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>


      
    </div>

    <BrochureModalSection
  open={showModal}
  pdfLink={selectedPdf}
  caseStudyTitle={selectedTitle}
  onClose={() => setShowModal(false)}
/>

    </>

    

  );
};

