import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './keyvertical.css'; // Import HomePage specific styles

const Keyvertical = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className="HomeKeyVerticals_home_container">
      <div className="HomeKeyVerticalshome">
        <div className="HeaderHomeKeyVerticals">
          <div className="Header2 TextBlue">
            {t('KeyVerticals')}
          
          </div>
          <div className="body1 alignbodytextmain">
            {t('KeyVerticalsDescription')}
          </div>
        </div>

        <div className="HomeKeyVerticals_3inputs11">
          <div className="HomeKeyVerticals_1">
            <img src="/KV6.svg" alt={t('ManufacturingPlant')} className="imagewidthhome3" />
            <div className="TextBlue Header3">{t('ManufacturingPlant')}</div>
            <div className="body3 alignbodytext">{t('ManufacturingPlantDescription')}</div>
          </div>
        </div>

        <div className="HomeKeyVerticals_3inputs12">
          <div className="HomeKeyVerticals_1">
            <img src="/KV2.svg" alt={t('DataCenter')} className="imagewidthhome3" />
            <div className="TextBlue Header3">{t('DataCenter')}</div>
            <div className="body3 alignbodytext">{t('DataCenterDescription')}</div>
          </div>
        </div>

        <div className="HomeKeyVerticals_3inputs13">
          <div className="HomeKeyVerticals_1">
            <img src="/KV4.svg" alt={t('Hospital')} className="imagewidthhome3" />
            {/* <img src="/KV3.svg" alt={t('Warehouse')} className="imagewidthhome3" /> */}
            <div className="TextBlue Header3">{t('Hospital')}</div>
            {/* <div className="TextBlue Header3">{t('Warehouse')}</div> */}
            <div className="body3 alignbodytext">{t('HospitalDescription')}</div>
            {/* <div className="body3 alignbodytext">{t('WarehouseDescription')}</div> */}
          </div>
        </div>

        <div className="HomeKeyVerticals_3inputs21">
          <div className="HomeKeyVerticals_1">
            <img src="/KV3.svg" alt={t('Warehouse')} className="imagewidthhome3" />
            {/* <img src="/KV4.svg" alt={t('Hospital')} className="imagewidthhome3" /> */}
            <div className="TextBlue Header3">{t('Warehouse')}</div>
            {/* <div className="TextBlue Header3">{t('Hospital')}</div> */}
            <div className="body3 alignbodytext">{t('WarehouseDescription')}</div>
            {/* <div className="body3 alignbodytext">{t('HospitalDescription')}</div> */}
          </div>
        </div>

        <div className="HomeKeyVerticals_3inputs22">
          <div className="HomeKeyVerticals_1">
            <img src="/KV5.svg" alt={t('CommercialBuilding')} className="imagewidthhome3" />
            <div className="TextBlue Header3">{t('CommercialBuilding')}</div>
            <div className="body3 alignbodytext">{t('CommercialBuildingDescription')}</div>
          </div>
        </div>

        <div className="HomeKeyVerticals_3inputs23">
          <div className="HomeKeyVerticals_1">
            <img src="/KV1.svg" alt={t('OtherIndustries')} className="imagewidthhome3" />
            <div className="TextBlue Header3">{t('OtherIndustries')}</div>
            <div className="body3 alignbodytext">{t('OtherIndustriesDescription')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Keyvertical
