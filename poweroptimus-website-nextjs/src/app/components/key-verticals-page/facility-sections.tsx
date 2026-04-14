import Link from 'next/link';
import './facility-sections.css'; // Import HomePage specific styles


const FacilitySections = ({ title,subTitle,subTitleTwo, text , textArr, imageSrc, reverse,label1,label2,label3,listOne,listTwo,listThree,listFour,tagPath1,tagPath2,tagPath3 }: {
  title: string;
  subTitle: string;
  subTitleTwo: string;
  textArr: any;
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
  tagPath1: string
  tagPath2: string
  tagPath3: string
}) => {
  return (
    <section className="facility-section">
      <div className={`facility-content ${reverse ? "reverse" : ""}`}>
        <div className="facility-image">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="facility-text">
          <div className="Header2 TextBlue marBtm">{title}</div>

          <div className="Header3 TextBlue marBtm">{subTitle}</div>

          <div className="body2 marTopGlobal">
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

          <ul style={{ marginTop: 0, marginBottom: 0 }}>
            {textArr.map((text: any, index: number) => (
              <li className='body2 marTopGlobal' key={index}>{text}</li>
            ))}
          </ul>

          

          <div className="body2 marTopGlobal">{subTitleTwo}</div>

          <div className="tags marTopGlobal">
            {/* <span className="body2sec">{label1}</span>
            <span className="body2sec">{label2}</span>
            <span className="body2sec">{label3}</span> */}

            <Link href={tagPath1} style={{ textDecoration: "none" }}>
              <span className="body2sec">{label1}</span>
            </Link>
            <Link href={tagPath2} style={{ textDecoration: "none" }}>
              <span className="body2sec">{label2}</span>
            </Link>
            <Link href={tagPath3} style={{ textDecoration: "none" }}>
              <span className="body2sec">{label3}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacilitySections