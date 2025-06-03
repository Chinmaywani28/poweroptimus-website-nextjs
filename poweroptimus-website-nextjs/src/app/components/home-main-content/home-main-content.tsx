"use client";
import './home-main-content.css'
import Hero from './hero';
import { useTranslation } from 'react-i18next';
import Slider from '../slider/slider';
import WhyEnergy from '../whyEnergy/WhyEnergy';
import Homehowitwork from '@/app/homehowitwork/homehowitwork';

import Homefeature from '../homefeature/homefeature';
import Keyvertical from '../keyvertical/keyvertical';
import Table from '../table1/table';
import TableTwo from '../table2/tabletwo';



const HomeMainContent = () => {

  const { t } = useTranslation(); // Initialize translation hook
  

  return (
    <>
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
      <TableTwo/>
      {/* home feature */}
      <Homefeature/>
      {/* key-vertical */}
      <Keyvertical/>
    </div>
    </>

  ); 
}

export default HomeMainContent;

