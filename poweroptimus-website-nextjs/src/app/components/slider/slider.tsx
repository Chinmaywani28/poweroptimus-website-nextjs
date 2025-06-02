import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './slider.css'; // Import HomePage specific styles

// const images = [
//   `${process.env.PUBLIC_URL}/image0A.png`,
//   `${process.env.PUBLIC_URL}/image0B.png`,
//   `${process.env.PUBLIC_URL}/image0C.png`,
//   `${process.env.PUBLIC_URL}/image0D.png`,
//   `${process.env.PUBLIC_URL}/image0E.png`,
// ];

// function Slider() {
//   const { t } = useTranslation(); // Initialize translation hook
  
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [language, setLanguage] = useState('en'); // Default language set to English

//   // Function to get the correct index with wrap-around
//   const getIndex = (index) => {
//     return (index + images.length) % images.length;
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => getIndex(prevIndex + 1));
//     }, 3000); // Rotate every 3 seconds

//     return () => clearInterval(interval); // Clean up on unmount
//   }, []);

//   return (
//     <div className="Slider_home_container">
//       <div className="launch-container">
    
//         {/* Start of Carousel */}
//         <div className="carousel">
//           {images.map((image, index) => {
//             let position = '';
//             if (index === currentIndex) {
//               position = 'current';
//             } else if (index === getIndex(currentIndex - 1)) {
//               position = 'previous';
//             } else if (index === getIndex(currentIndex + 1)) {
//               position = 'next';
//             } else if (index === getIndex(currentIndex - 2)) {
//               position = 'far-previous';
//             } else if (index === getIndex(currentIndex + 2)) {
//               position = 'far-next';
//             }

//             return (
//               <div key={index} className={`carousel-item ${position}`}>
//                 <img src={image} alt={`Slide ${index + 1}`} />
//               </div>
//             );
//           })}
//         </div>
//         {/* End of Carousel */}
//       </div>

 
//     </div>
//   );
// }

// export default Slider;




const Slider = () => {

  const images = [
  '/image0A.png',
  '/image0B.png',
  '/image0C.png',
  '/image0D.png',
  '/image0E.png',
];

  const { t } = useTranslation(); // Initialize translation hook
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [language, setLanguage] = useState('en'); // Default language set to English

  // Function to get the correct index with wrap-around
  const getIndex = (index: any) => {
    return (index + images.length) % images.length;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => getIndex(prevIndex + 1));
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);


  return (
      <div className="Slider_home_container">
      <div className="launch-container">
    
        {/* Start of Carousel */}
        <div className="carousel">
          {images.map((image, index) => {
            let position = '';
            if (index === currentIndex) {
              position = 'current';
            } else if (index === getIndex(currentIndex - 1)) {
              position = 'previous';
            } else if (index === getIndex(currentIndex + 1)) {
              position = 'next';
            } else if (index === getIndex(currentIndex - 2)) {
              position = 'far-previous';
            } else if (index === getIndex(currentIndex + 2)) {
              position = 'far-next';
            }

            return (
              <div key={index} className={`carousel-item ${position}`}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            );
          })}
        </div>
        {/* End of Carousel */}
      </div>

 
    </div>
  )
}

export default Slider