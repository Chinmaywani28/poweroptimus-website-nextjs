// import './facility-sections-two.css';

// interface FacilitySectionProps {
//   title: string;
//   subtitle: string;
//   description: string;
//   imageSrc: string;
//   imageLeft?: boolean; 
// }

// export default function FacilitySection({
//   title,
//   subtitle,
//   description,
//   imageSrc,
//   imageLeft = false,
// }: FacilitySectionProps) {
//   return (
//     <section
//       className={`facility-section ${imageLeft ? 'image-left' : 'image-right'}`}
//     >
     
//       {imageLeft && (
//         <div className="facility-image">
//           <img src={imageSrc} alt="facility" />
//         </div>
//       )}

      
//       <div className="facility-card">
//         <h4 className="facility-subtitle">{subtitle}</h4>
//         <h2 className="facility-title">{title}</h2>
//         <p className="facility-text">{description}</p>
//       </div>

      
//       {!imageLeft && (
//         <div className="facility-image">
//           <img src={imageSrc} alt="facility" />
//         </div>
//       )}
//     </section>
//   );
// }

// components/FacilitySection.tsx
// import './facility-sections-two.module.css';
import styles from './facility-sections-two.module.css';


interface FacilitySectionProps {
  id?: string
  title?: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageLeft?: boolean; // if true -> image on left
  listItems?: any
}

export default function FacilitySection({
  id,
  title,
  subtitle,
  description,
  imageSrc,
  imageLeft = false,
  listItems
}: FacilitySectionProps) {
  return (
    <section id={id}
      // className={`facility-section-cap ${
      //   imageLeft ? "image-left" : "image-right"
      // }`}
      className={`${styles["facility-section-cap"]} ${
        imageLeft ? styles["image-left"] : styles["image-right"]
      }`}
    >
      {/* Text Card */}
      <div className={styles["facility-card"]}>
        <div className="facility-subtitle Header2 TextBlue marBtm">
          {subtitle}
        </div>

        {/* <div className="body1sec marTopGlobal">{description}</div> */}

        <ul>
          {listItems.map((item: any, id: any) => (
            <li key={id} className="body2 marTopGlobal">
              {item.text}
            </li>
          ))}
        </ul>

        <div className={styles["subTitle"]}>{title}</div>
      </div>

      {/* Image */}
      <div className={styles["facility-image"]}>
        <img src={imageSrc} alt="facility" className={styles["fac-img"]}/>
      </div>
    </section>
  );
}
