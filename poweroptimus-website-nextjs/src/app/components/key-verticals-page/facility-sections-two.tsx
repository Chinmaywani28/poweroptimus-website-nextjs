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
import './facility-sections-two.css';

interface FacilitySectionProps {
  title?: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageLeft?: boolean; // if true -> image on left
}

export default function FacilitySection({
  title,
  subtitle,
  description,
  imageSrc,
  imageLeft = false,
}: FacilitySectionProps) {
  return (
    <section
      className={`facility-section-cap ${imageLeft ? 'image-left' : 'image-right'}`}
    >
      {/* Text Card */}
      <div className="facility-card">
        <div className="facility-subtitle Header1sec TextBlue marBtm">{subtitle}</div>
        {/* <h2 className="facility-title">{title}</h2> */}
        <div className="body1sec marTopGlobal">{description}</div>
      </div>

      {/* Image */}
      <div className="facility-image">
        <img src={imageSrc} alt="facility" />
      </div>
    </section>
  );
}
