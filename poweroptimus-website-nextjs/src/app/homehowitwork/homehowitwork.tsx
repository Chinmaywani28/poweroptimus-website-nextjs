import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './homehowitwork.css'; // Import HomePage specific styles

// function HomeHowItWork() {
//   const { t } = useTranslation(); // Initialize translation hook

//   return (
//     <div className="HomeHowItWork_container">
//       <div className="HomeHowItWork_Home">
//         <div className="HomeHowItWork_left">
//           <img src="/Wifi.png" alt={t('HowItWorksImageAlt')} className="imagewidthhome2" />
//         </div>
//         <div className="HomeHowItWork_right">
//           <div className="Header2 TextBlue">
//             {t('HowPowerOptimusHelps')}
//           </div>
//           <div className="body1 TextGray3">
//             {t('HowPowerOptimusDescription')}
//           </div>
//           <div className='buttonDiv'>
//           {/* <button className="know-more-button2">{t('KnowMore')}</button> */}
//           </div> 
//         </div>
//       </div>
      
//     </div>
//   );
// }

// export default HomeHowItWork;


const Homehowitwork = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
        <div className="HomeHowItWork_container">
      <div className="HomeHowItWork_Home">
        <div className="HomeHowItWork_left">
          <img src="/Wifi.png" alt={t('HowItWorksImageAlt')} className="imagewidthhome2" />
        </div>
        <div className="HomeHowItWork_right">
          <div className="Header2 TextBlue">
            {t('HowPowerOptimusHelps')}
          </div>
          <div className="body1 TextGray3">
            {t('HowPowerOptimusDescription')}
          </div>
          <div className='buttonDiv'>
          {/* <button className="know-more-button2">{t('KnowMore')}</button> */}
          </div> 
        </div>
      </div>
      
    </div>

  )
}

export default Homehowitwork
