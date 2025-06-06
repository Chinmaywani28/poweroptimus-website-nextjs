import './facility-sections.css'; // Import HomePage specific styles


const FacilitySections = ({ title, text, imageSrc, reverse }: {
  title: string;
  text: string;
  imageSrc: string;
  reverse?: boolean;
}) => {
  return (
    <section className="facility-section">
      <div className={`facility-content ${reverse ? 'reverse' : ''}`}>
        <div className="facility-image">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="facility-text">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="tags">
            <span>HVAC Management</span>
            <span>Energy Monitoring</span>
            <span>Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacilitySections