import Link from 'next/link';
import './card-grid-section.css';

type CardData = {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  linkText: string;
  linkHref: string;
};

type Props = {
  cards: CardData[];
};

export const CardGridSection = ({cards}: Props) => {
  return (
    <section className="card-grid-section">
      <div className="card-grid">
        {cards.map((card: any, index:any) => (
          <div className="card" key={index}>
            <img src={card.imageSrc} alt={card.title} className="card-image" />
            <div className="Header3sec TextBlue marTopGlobal">{card.title}</div>
            <div className="body3sec marTopGlobal">{card.description}</div>
            <div className="card-footer marTopGlobal">
              <span className="body3sec" style={{color: '#666'} }>{card.date}</span>
              <Link href={card.linkHref} className="card-link body3sec">
                {card.linkText} <span className="body3sec">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>



  );
};

