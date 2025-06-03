"use client";
import { useState } from 'react';
import './navbar.css'
import { useTranslation } from 'react-i18next';
import Link from 'next/link'
const Navbar = () => {

  const handleContactClick = () => {
    const email = 'productsmarketing@neilsoft.com';
    const subject = encodeURIComponent('Inquiry from PowerOptimus Website');
    const mailtoLink = `mailto:${email}?subject=${subject}`;
    window.location.href = mailtoLink;
  };
  const { t } = useTranslation(); // Translation hook
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev: any) => !prev);
  };

  return (
    <div>
      {/* <h1>This is navabar component</h1> */}

      <div className="navbar-container">
        <nav className="navbar">
          {/* Logo Section */}
          <div className="navbar-brand">
            <img
              src="/app-icon.png"
              alt="Logo"
              className="navbar-logo"
              // onClick={scrollToHero}
              style={{ cursor: "pointer" }} // Make it clear that it's clickable
            />
          </div>

            {/* Burger Icon */}
          <div className="hamburger" onClick={toggleMobileMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          {/* Nav Links */}
          <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link href="/solution">{t('Solutions')}</Link>
            <Link href="/key-vertical">{t('Key Verticals')}</Link>
            <Link href="/roles">{t('Roles')}</Link>
            <Link href="/resources">{t('Resources')}</Link>
            <Link href="/news-and-events">{t('News and Events')}</Link>
          </div>

          <div className="navbarRightSide">
            <button
              className="know-more-button Header3Bold"
              onClick={handleContactClick}
            >
              {" "}
              {t("ContactUs")}{" "}
            </button>
          </div>
        </nav>
      </div>
    </div>
  ); 
}

export default Navbar;

