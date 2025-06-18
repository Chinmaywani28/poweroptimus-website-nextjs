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
            <div className="Header3 TextBlue">{card.title}</div>
            <p className="body3">{card.description}</p>
            <div className="card-footer">
              <span className="body3" style={{color: '#666'} }>{card.date}</span>
              <Link href={card.linkHref} className="card-link body3">
                {card.linkText} <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>



  );
};

