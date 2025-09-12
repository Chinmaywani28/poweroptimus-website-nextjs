// import React from 'react';
// import { useTranslation } from 'react-i18next'; // Import translation hook
// import './Footer.css'; // Import Footer specific styles

// function Footer() {
//   const { t } = useTranslation(); // Initialize translation hook

//   return (
//     <div className="footer-container">
//       <div className="footer">
//         <div className="footerSectionName TextWhite">
//           <div className="footer_productname">
//             <div className="Header1ABold">
//               {t('PowerOptimus')}
//             </div>
//             <div className="body3">
//               {t('SolutionBy')} Neilsoft
//             </div>
//           </div>

//           <div className="footerAddress body4">
//             <div>{t('CompanyAddressLine1')}</div>
//             <div>{t('CompanyAddressLine2')}</div>
//             <div>{t('CompanyAddressLine3')}</div>

//             {/* <div className="footer_email">info@poweroptimus.com</div> */}

//             <div className="footer_email">productsmarketing@neilsoft.com</div>
//           </div>
//         </div>

//         <div className="footerLink1 TextWhite Header3">
//           <div className="footer_productname">{t('QuickLinks')}</div>
//           <div className="footer_email body4">{t('PrivacyPolicy')}</div>
//           {/* <div className="footer_email body4">{t('AboutUs')}</div> */}

//           <div className="footer_email body4">{t('TermsAndConditions')}</div>
//           {/* <div className="footer_email body4">{t('FAQ')}</div> */}



//         <div className="footer_email body4">{t('Disclaimer')}</div>
//           {/* <div className="footer_email body4">{t('CaseStudy')}</div> */}
          

//         </div>

//         <div className="footerLink2 TextWhite Header3">
//           <div className="footer_productname">{t('FollowUsOn')}</div>

//           <div className="footer_email body4">
           

//               <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer_email_link">
//               {t('LinkedIn')}
//             </a>

           
//           </div>

//           <div className="footer_email body4">
//           <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="footer_email_link">
//           {t('YouTube')}
//           </a>
//           </div>

//           <div className="footer_email body4">
//             <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer" className="footer_email_link">
//               {t('Pinterest')}
//             </a>
//           </div>

//           {/* <div className="footer_email body4">
//             <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="footer_email_link">
//               {t('Twitter')}
//             </a>
//           </div> */}
//         </div>

//         <div className="footerLink3 TextWhite Header3">
//           {/* <div className="footer_productname">{t('WantToKnowMore')}</div> */}

//           <div className="footerAddress2 body4">
            
//             {/* <div>{t('FooterDescription')}</div> */}

//             {/* <button className="footer_know-more-button">{t('ContactUs')}</button> */}
//           </div>
//         </div>

//         <div className="separateLine_footer"></div>

//         <div className="footer_bottom_Left TextWhite">
//           © 2025 Neilsoft Ltd. {t('AllRightsReserved')}
//         </div>

//         <div className="footer_bottom_Right TextWhite">
//           {/* <div>{t('PrivacyPolicy')}</div> */}
//           {/* <div>|</div> */}
//           {/* <div>{t('TermsAndConditions')}</div> */}
//           {/* <div>|</div> */}
//           {/* <div>{t('Disclaimer')}</div> */}
//           {/* <div>|</div> */}
//           {/* <div>{t('Sitemap')}</div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footerSectionName TextWhite">
          <div className="footer_productname">
            <div className="Header1ABold">{t("PowerOptimus")}</div>
            {/* <div className="body3">
              {t('SolutionBy')} Neilsoft
            </div> */}
          </div>

          <div className="footerAddress body4">
            <div>{t("CompanyAddressLine1")}</div>
            <div>{t("CompanyAddressLine2")}</div>
            <div>{t("CompanyAddressLine3")}</div>

            {/* <div className="footer_email">info@poweroptimus.com</div> */}

            {/* <div className="footer_email">productsmarketing@neilsoft.com</div> */}
            <div className="footer_email">
              <span>
                {" "}
                <i className="ri-contacts-book-2-line"></i>{" "}
                {t("CompanyAddressLine4")}{" "}
              </span>{" "}
            </div>
            <div>
              <i className="ri-mail-line"></i>
              <span> eems@neilautomation.com</span>{" "}
            </div>
          </div>
        </div>

        
        <div className="footerLink1 TextWhite Header3">
          <div className="newsletter-title Header1ABold">Newsletter</div>
          <div className="newsletter-text footerAddress body4">
            Subscribe to our newsletters to receive latest news and updates
          </div>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your Email"
          />
          <button className="newsletter-button">Subscribe Now</button>
        </div>
      


        <div className="separateLine_footer"></div>

        <div className="footer_bottom_Left TextWhite">
          © 2025 Neilsoft Ltd. {t("AllRightsReserved")}
        </div>

        <div className="footer_bottom_Middle TextWhite">
          <div>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_email_link"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </div>

          <div>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_email_link"
            >
              <i className="ri-youtube-fill"></i>
            </a>
          </div>

          <div>
            {/* <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_email_link"
            >
              <i className="ri-twitter-x-fill"></i>
            </a> */}
          </div>

          

          <div></div>
        </div>

        <div className="footer_bottom_Right TextWhite">
          {/* <div>{t('PrivacyPolicy')}</div> */}
          {/* <div>|</div> */}
          {/* <div>{t('TermsAndConditions')}</div> */}
          {/* <div>|</div> */}
          {/* <div>{t('Disclaimer')}</div> */}
          {/* <div>|</div> */}
          {/* <div>{t('Sitemap')}</div> */}

          <div>Privacy Policy</div>
          <div>|</div>
          <div>Terms and Conditions</div>
          <div>|</div>
          <div>Disclaimer</div>
          <div>|</div>
          <div>Sitemap</div>
        </div>
      </div>
    </div>
  );
}

export default Footer