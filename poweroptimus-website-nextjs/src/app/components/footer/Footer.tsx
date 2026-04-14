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
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './Footer.css'
import Link from 'next/link';
import { NewsLetter } from './newsletter';
import { toast } from 'react-toastify';
import { isValidEmail } from '@/app/services/UtilityService';
import { addSubcriber, getActiveSubscribersByEmail } from '@/app/services/SubscriberService';


const Footer = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [email, setEmail] = useState<string>("");


  const subscribeNow = async () => {
    const id = toast.loading(t("messages.pleaseWait"));

    if (!email || !isValidEmail(email)) {
      toast.update(id, { render: t("messages.provideValidEmail"), type: "warning", isLoading: false, autoClose: 3000 });
      return;
    }

    const subscribers = await getActiveSubscribersByEmail(email);
    if (!subscribers.empty) {
      toast.update(id, { render: "you Have Already Subscribed", type: "warning", isLoading: false, autoClose: 3000 });
      return;
    }

    await addSubcriber(email);
    toast.update(id, { render: "Subscribed to newsletter", type: "success", isLoading: false, autoClose: 3000 });
    setEmail("");


  }







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

          <div className="footerAddress body2">
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
          {/* <div className="newsletter-title Header1ABold">Newsletter</div>
          <div className="newsletter-text footerAddress body4">
            Subscribe to our newsletters to receive latest news and updates
          </div> */}
          {/* <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your Email"
          /> */}

          {/* <input type='text' value={email} onChange={e => setEmail(e.target.value)} className='newsletter-input' name='' id='' aria-describedby='helpId' placeholder="Enter your Email"/>
          <button className="newsletter-button" onClick={subscribeNow}>Subscribe Now</button> */}

          {/* sitemap start */}
          <div className="footer-sitemap">
            {/* Column 1 */}
            <div className="sitemap-column">
              
              <Link href="/solution">Solution</Link>
              <Link href="/key-verticals">Key Verticals</Link>
              <Link href="/roles">Roles</Link>
              {/* <Link href="/resources/blogs">Resources</Link> */}
            </div>

            {/* Column 2 */}
            <div className="sitemap-column">
              
              <Link href="/resources/blogs">Resources</Link>
              <Link href="/key-verticals/capabilities#advanced-hvac">Capabilities</Link>
              {/* <Link href="/">Roles</Link> */}
              <Link href="/roles/responsibilities#energy-audits">Responsibilities</Link>
              
            </div>

            {/* Column 3 */}
            <div className="sitemap-column">
             
              <Link href="/resources/blogs">Blog</Link>
              <Link href="/resources/case-study">Case Studies</Link>
              <Link href="/resources/webinars">Webinars</Link>
              <Link href="/resources/videos">Videos</Link>
              <Link href="/resources/brochures">Brochure</Link>
            </div>
          </div>

          {/* sitemap end */}
        </div>

        <div className="separateLine_footer"></div>

        <div className="footer_bottom_Left TextWhite">
          © 2026 Neilsoft Ltd. {t("AllRightsReserved")}
        </div>

        <div className="footer_bottom_Middle TextWhite">
          <div>
            <a
              href="https://www.linkedin.com/company/poweroptimus/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_email_link"
            >
              <i
                className="ri-linkedin-box-fill footer-icon"
                style={{ fontSize: "28px" }}
              ></i>
            </a>
          </div>

          <div>
            <a
              href="https://www.youtube.com/@PowerOptimusNeilAutomation"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_email_link"
            >
              <i className="ri-youtube-fill" style={{ fontSize: "28px" }}></i>
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
          <Link
            href={"/faq"}
            style={{ color: "white", textDecoration: "none" }}
          >
            FAQ
          </Link>

          <div>|</div>

          <Link
            href={"/privacy-policies"}
            style={{ color: "white", textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
          <div>|</div>
          <Link
            href={"/terms-and-condition"}
            style={{ color: "white", textDecoration: "none" }}
          >
            Terms and Conditions
          </Link>
          <div>|</div>
          {/* <div>Disclaimer</div> */}
          <Link
            href={"/disclaimer"}
            style={{ color: "white", textDecoration: "none" }}
          >
            Disclaimer
          </Link>
          <div>|</div>
          {/* <div>Sitemap</div> */}
          <Link
            href={"/eula"}
            style={{ color: "white", textDecoration: "none" }}
          >
            EULA
          </Link>
          <div>|</div>

          <Link
            href={"/cookie-policy"}
            style={{ color: "white", textDecoration: "none" }}
          >
            Cookies Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer