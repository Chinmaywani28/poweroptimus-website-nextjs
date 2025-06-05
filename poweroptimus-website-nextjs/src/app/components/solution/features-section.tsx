"use client";
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './features-section.css'; // Import feature-section specific styles

// const FeatureSection = () => {
//   const { t } = useTranslation(); // Initialize translation hook
  
//   return (
//     <>
//       <section className="features-section">
//       <h2 className="features-title">Features</h2>
//       <div className="features-grid">
//         {Array.from({ length: 8 }).map((_, index) => (
//           <div className="feature-card" key={index}>
//             <h3>Corporis delectus eveniet molestias qui in aut rem.</h3>
//             <p>
//               Eius molestias consequatur pariatur quae iure culpa ullam quo. Non tempora est.
//               Et provident voluptatem doloremque. Et totam dolor voluptatibus eos dolorem ratione.
//               Minus nisi blanditiis facilis a ab non voluptate qui sed. Sint ut ex odio est ratione.
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//     </>
//   )
// }

// export default FeatureSection

const FeatureSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Features</h2>
      <div className="features-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="feature-card" key={index}>
            <h3>Corporis delectus eveniet molestias qui in aut rem.</h3>
            <p>
              Eius molestias consequatur pariatur quae iure culpa ullam quo.
              Non tempora est. Et provident voluptatem doloremque. Et totam dolor voluptatibus eos dolorem ratione. Minus nisi blanditiis facilis a ab non voluptate qui sed. Sint ut ex odio est ratione.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureSection
