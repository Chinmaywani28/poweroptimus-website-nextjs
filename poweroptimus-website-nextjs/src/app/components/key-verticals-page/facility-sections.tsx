import './facility-sections.css'; // Import HomePage specific styles


const FacilitySections = ({ title, text, imageSrc, reverse,label1,label2,label3,listOne,listTwo,listThree,listFour }: {
  title: string;
  text: string;
  imageSrc: string;
  reverse?: boolean;
  listOne?: string;
  listTwo?: string;
  listThree?: string;
  listFour?: string;
  label1: string;
  label2: string;
  label3: string;
  showList?: boolean; // 👈 added
}) => {
  return (
    <section className="facility-section">
      <div className={`facility-content ${reverse ? 'reverse' : ''}`}>
        <div className="facility-image">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="facility-text">
          <div className="Header1sec TextBlue marBtm">{title}</div>
          <div className="body1sec marTopGlobal">
            {text}
            {/* <ul  className="listStyleGlobal">
              <li>{listOne}</li>
              <li>{listTwo}</li>
              <li>{listThree}</li>
              <li>{listFour}</li>
            </ul> */}
            <ul className="listStyleGlobal">
                {listOne && <li>{listOne}</li>}
                {listTwo && <li>{listTwo}</li>}
                {listThree && <li>{listThree}</li>}
                {listFour && <li>{listFour}</li>}
              </ul>
          </div>
          <div className="tags marTopGlobal">
            <span className="body2sec">{label1}</span>
            <span className="body2sec">{label2}</span>
            <span className="body2sec">{label3}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacilitySections