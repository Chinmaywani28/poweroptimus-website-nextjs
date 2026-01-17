"use client";
import { useEffect, useRef, useState } from 'react';
import './navbar.css'
import { useTranslation } from 'react-i18next';
import Link from 'next/link'
import { useRouter } from "next/navigation";
const Navbar = () => {

  const handleContactClick = () => {
    const emails = 'eems@neilautomation.com';
    const subject = encodeURIComponent('Inquiry from PowerOptimus Website');
    const mailtoLink = `mailto:${emails}?subject=${subject}`;
    window.location.href = mailtoLink;
  };
  const { t } = useTranslation(); // Translation hook
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // dropdown logic
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // dropdown open and close on outside click
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev: any) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Dropdown for news and events
  const [isDropdownOpenNews, setIsDropdownOpenNews] = useState(false);
  const toggleMobileMenuNews = () => {
    setIsDropdownOpenNews((prev: any) => !prev);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefNews.current &&
        !dropdownRefNews.current.contains(event.target as Node)
      ) {
        setIsDropdownOpenNews(false);
      }
    };

    if (isDropdownOpenNews) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpenNews]);
  const dropdownRefNews = useRef<HTMLDivElement | null>(null);

  

  return (
    <div>
      {/* <h1>This is navabar component</h1> */}

      <div className="navbar-container">
        <nav className="navbar">
          {/* Logo Section */}
          <Link href="/" className="navbar-brand">
          <div >
            <img
              src="/power-optimus-logo.png"
              alt="Logo"
              className="navbar-logo"
              // onClick={scrollToHero}
              style={{ cursor: "pointer" }} // Make it clear that it's clickable
            />
          </div>
          </Link>
          

            {/* Burger Icon */}
          <div className="hamburger" onClick={toggleMobileMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          {/* Nav Links */}
          <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link href="/solution">{t('Solution')}</Link>
            <div>|</div>
            <Link href="/key-verticals">{t('Key Verticals')}</Link>
            <div>|</div>
            <Link href="/roles">{t('Roles')}</Link>
            <div>|</div>

            {/* <Link href="/resources">{t('Resources')}</Link> */}


            <div className="nav-item-with-dropdown" ref={dropdownRef}>
              <span onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="dropdown-toggle">
                {t('Resources')}
              </span>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link href="/resources/blogs">Blogs</Link></li>
                  <li><Link href="/resources/case-study">Case Study</Link></li>
                  <li><Link href="/resources/webinars">Webinars</Link></li>
                  <li><Link href="/resources/videos">Videos</Link></li>
                  <li><Link href="/resources/brochures">Brochures</Link></li>
                </ul>
              )}
            </div>

            {/* <div>|</div> */}

            {/* <Link href="/news-and-events">{t('News and Events')}</Link> */}
            {/* <div className="nav-item-with-dropdown" ref={dropdownRefNews}>
              <span onClick={() => setIsDropdownOpenNews(!isDropdownOpenNews)} className="dropdown-toggle">
                {t('News and Events')}
              </span>
              {isDropdownOpenNews && (
                <ul className="dropdown-menu">
                  <li><Link href="/news-and-events/news">News</Link></li>
                  <li><Link href="/news-and-events/events">Events</Link></li>
                </ul>
              )}
            </div> */}
          </div>

          <div className="navbarRightSide">
            <button
              className="know-more-button"
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

