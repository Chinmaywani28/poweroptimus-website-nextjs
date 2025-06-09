import './facility-sections-two.css';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageLeft?: boolean;
}

export const FacilitySectionsTwo = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageLeft = false,
}: FeatureSectionProps) => {
  return (
    <section className={`feature-section ${imageLeft ? 'image-left' : 'image-right'}`}>
      <div className="feature-image">
        <img src={imageSrc} alt="Feature" />
      </div>
      <div className="feature-text">
        <h4 className="Header3 TextBlue">{subtitle}</h4>
        <h2 className="Header2">{title}</h2>
        <p className="body3">{description}</p>
      </div>
    </section>
  );
};

