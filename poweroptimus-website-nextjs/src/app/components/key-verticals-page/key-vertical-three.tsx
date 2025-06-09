// import './key-vertical-hero.css'; // Import HomePage specific styles


// const KeyverticalHeader = () => {
//   return (
//     <section className="industry-section">
//       <div className="industry-content">
//         <h1 className="Header1 TextBlue">Optimizing Energy Across Industries</h1>
//         <p className="body1 TextGray1">
//           Explore the diverse sectors we empower with intelligent energy monitoring and management solutions. 
//           From industrial plants and data centers to hospitals and commercial buildings, discover how our tailored 
//           approaches drive efficiency, reduce costs, and promote sustainability.
//         </p>
//       </div>
//     </section>
//   )
// }

// export default KeyverticalHeader


import Link from 'next/link';
import './key-vertical-hero.css';

type KeyverticalTwoProps = {
  title: string;
  description: string;
  subLink?: string;
  className?: string; // Optional: for layout overrides
};

const KeyverticalTwo = ({ title, description, className = '',subLink = '' }: KeyverticalTwoProps) => {
  return (
    <section className={`industry-section ${className}`}>
      <div className="industry-content">
        <Link href="/solution" className="back-link">
          <span className="arrow-icon">&#8592;</span>
          <span className="link-text">All Industries</span>
        </Link>
        <h1 className="Header1 TextBlue">{title}</h1>
        <p className="body1 TextGray1">{description}</p>
      </div>
    </section>
  );
};

export default KeyverticalTwo;