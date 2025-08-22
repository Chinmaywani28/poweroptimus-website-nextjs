import './facility-sections-two.css';

interface ListItem {
  text: string;
  subItems?: string[]; // optional sublist
}


interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageLeft?: boolean;
  listItems?: ListItem[]; // <-- new prop for list
}

export const FacilitySectionsTwo = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageLeft = false,
  listItems = [], // default empty array
}: FeatureSectionProps) => {
  return (
    <section className={`feature-section ${imageLeft ? 'image-left' : 'image-right'}`}>
      <div className="feature-image">
        <img src={imageSrc} alt="Feature" />
      </div>
      <div className="feature-text">
        <h4 className="Header3 TextBlue marTopNil">{subtitle}</h4>
        <h2 className="Header2">{title}</h2>
        {/* <p className="body3">{description}</p> */}
        
        {listItems.length > 0 && (
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              {item.text}

              {/* Sublist (only if exists) */}
              {item.subItems && item.subItems.length > 0 && (
                <ul>
                  {item.subItems.map((sub, subIndex) => (
                    <li key={subIndex}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}



      </div>
    </section>
  );
};

