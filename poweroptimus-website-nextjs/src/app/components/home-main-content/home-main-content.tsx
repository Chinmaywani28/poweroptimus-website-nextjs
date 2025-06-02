"use client";
import './home-main-content.css'
import Hero from './hero';
import { useTranslation } from 'react-i18next';
import Slider from '../slider/slider';
import WhyEnergy from '../whyEnergy/WhyEnergy';
import Homehowitwork from '@/app/homehowitwork/homehowitwork';
import Table from '../table1/table';
import Homefeature from '../homefeature/homefeature';
import Keyvertical from '../keyvertical/keyvertical';


const HomeMainContent = () => {

  const { t } = useTranslation(); // Initialize translation hook
  

  return (
    <><h1>
      this is home main content
    </h1>

    <div>

      <Hero headerText={t('BuildingSustainableFuture') } bodyText={t('IntroducingEnergySolution')} />
      {/* slider */}
      <Slider/>
      {/* why energy efficiency matters the most */}
      <WhyEnergy/>
      {/* how it works */}
      <Homehowitwork/>
      {/* table1 */}
      <Table/>
      {/* table2 */}
      <Table/>
      {/* home feature */}
      <Homefeature/>
      {/* key-vertical */}

      <Keyvertical/>


    </div>


    </>

  ); 
}

export default HomeMainContent;

