"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';
import './page.css'
import FAQComponent from '../components/solution/faq-component';

const Faq = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <>
   
    {/* <div>coming soon</div> */}
      <FAQComponent/>
    </>
  );
}

export default Faq