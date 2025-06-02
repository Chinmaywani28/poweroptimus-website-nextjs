"use client";
import './home-main-content.css'
import Hero from './hero';
import { useTranslation } from 'react-i18next';

const HomeMainContent = () => {

  const { t } = useTranslation(); // Initialize translation hook
  

  return (
    <><h1>
      this is home main content
    </h1>
      <Hero headerText={t('BuildingSustainableFuture') } bodyText={t('IntroducingEnergySolution')} />
    </>

  ); 
}

export default HomeMainContent;

