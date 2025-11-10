"use client"
import { useRef } from 'react';
import './news-and-events-subsec-new.css';
import Link from 'next/link';
import SolFeatureBtmSection from '../solution/sol-feature-btm-section';

interface CaseStudyProps {
  title: string;
  imageSrc: string;
  content: string[]; // paragraphs
  otherCases: string[];
  textDesc?: React.ReactNode;

}

export const NewsAndEventsSubSectionNew : React.FC<CaseStudyProps> = ({
  title,
  imageSrc,
  content,
  otherCases,
  textDesc
})  => {
  

  return (
    <>
    <section className="container">
        {textDesc}

        
    </section>
    </>
  );
};

