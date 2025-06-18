import './facility-sections.css'; // Import HomePage specific styles


const FacilitySections = ({ title, text, imageSrc, reverse,label1,label2,label3 }: {
  title: string;
  text: string;
  imageSrc: string;
  reverse?: boolean;
  label1: string;
  label2: string;
  label3: string;
}) => {
  return (
    <section className="facility-section">
      <div className={`facility-content ${reverse ? 'reverse' : ''}`}>
        <div className="facility-image">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="facility-text">
          <h2 className="Header3 TextBlue">{title}</h2>
          <p className="body3">{text}</p>
          <div className="tags">
            <span>{label1}</span>
            <span>{label2}</span>
            <span>{label3}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacilitySections