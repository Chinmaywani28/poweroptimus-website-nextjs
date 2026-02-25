"use client"
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './sol-feature-btm-section.css'; // Import HomePage specific styles
import Image from "next/image";
import { useRouter } from 'next/navigation';


type FeatureSectionProps = {
  heading: string;
  paragraphs: string[];
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
};

const SolFeatureBtmSection = ({
  heading,
  paragraphs,
  buttonText,
  imageSrc,
  imageAlt,
}: FeatureSectionProps) => {

  const router = useRouter();
  

  const handleContactClick = () => {
    // const emails = 'eems@neilautomation.com';
    // const subject = encodeURIComponent('Inquiry from PowerOptimus Website');
    // const mailtoLink = `mailto:${emails}?subject=${subject}`;
    // window.location.href = mailtoLink;

    router.push("/contact-us");

  };

  const { t } = useTranslation(); // Initialize translation hook

  return (
    <>
   <section className="feature-section">
      <div className="feature-container">
        {/* Left Side: Text content */}
        <div className="feature-text">
          <h2 className="Header2 TextBlue">{heading}</h2>
          {paragraphs.map((para, idx) => (
            <p className="body2 alignbodytext2" key={idx}>{para}</p>
          ))}
          {/* <button className="download-btn">{buttonText}</button> */}
          <div className='downloadBtnDiv'>
            <button onClick={handleContactClick} className="donwloadBtn">{buttonText}</button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="feature-image">
          <Image src={imageSrc} alt={imageAlt} width={500} height={400} />
        </div>
      </div>
    </section>
    </>
    
  )
}

export default SolFeatureBtmSection
