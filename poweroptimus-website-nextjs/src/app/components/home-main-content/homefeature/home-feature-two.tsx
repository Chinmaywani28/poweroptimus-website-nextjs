import { useTranslation } from 'react-i18next'; // Import translation hook
import './home-feature-two.css'; // Import HomePage specific styles

const HomefeatureTwo = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (

    <div className='HomeFeature_container'>
      <div className='HomeFeature_Home-four'>
        {/* <div className='HomeFeature_BG'>
          <img src="/HomeFeatureBG2.svg" alt={t('FeatureImageAlt')} className="HomeFeatureBGimage" />
        </div> */}
        <div className='HomeFeature_Leftss'>
          <div className='Header1'>
            {t('HomeFeatureTitle')}
          </div>
          <div className='body1_300'>
            {t('HomeFeatureDescription')}
          </div>
          <div className='buttonDiv2'>
          <button className="know-more-button3">{t('KnowMore')}</button>
          </div> 
        </div>
        <img src="/FeatureImage.svg" alt={t('FeatureLogoAlt')} className="HomeFeature_Rightss" />
      </div>
    </div>




  )
}

export default HomefeatureTwo