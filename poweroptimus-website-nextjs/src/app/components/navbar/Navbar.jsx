"use client";
import './navbar.css'
import { useTranslation } from 'react-i18next';

const Navbar = () => {

  const handleContactClick = () => {
    const email = 'productsmarketing@neilsoft.com';
    const subject = encodeURIComponent('Inquiry from PowerOptimus Website');
    const mailtoLink = `mailto:${email}?subject=${subject}`;
    window.location.href = mailtoLink;
  };
  const { t } = useTranslation(); // Translation hook


  return (
    <div>
      <h1>This is navabar component</h1>

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

