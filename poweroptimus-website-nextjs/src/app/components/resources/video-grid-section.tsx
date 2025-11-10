import Link from 'next/link';
import './video-grid-section.css';

type CardData = {
  videoUrl?: string;
  title: string;
  description?: string;
  date: string;
  // linkText: string;
  // linkHref: string;
};

type Props = {
  cards: CardData[];
};

export const VideoGridSection = ({cards}: Props) => {
  return (
    <section className="video-grid-section">
      <div className="card-grid">
        {cards.map((card: any, index:any) => (
          <div className="card" key={index}>
            {/* <img src={card.imageSrc} alt={card.title} className="card-image" /> */}


           <div className="video-wrapper">
              <iframe
                src={card.videoUrl}
                title={card.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="card-video"
              ></iframe>
            </div>

            <div className="Header3 TextBlue marTopGlobal">{card.title}</div>
            <div className="body2 marTopGlobal">{card.description}</div>
            <div className="card-footer">
              <span className="body2" style={{color: '#666'} }>{card.date}</span>
              {/* <Link href={card.linkHref} className="card-link body3sec">
                {card.linkText} <span className="body3sec">→</span>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </section>



  );
};

