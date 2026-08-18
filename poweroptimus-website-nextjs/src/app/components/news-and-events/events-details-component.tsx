"use client"
import { useEffect, useRef, useState } from 'react';
import './events-details-component.css';
import Link from 'next/link';

interface FormDataType {
  firstName: "",
  lastName: "",
  businessEmail: "",
  phone: "",
  jobRole: "",
  companyName: "",
  country: "",
  annualRevenue: "",
  industry: "",
  eventName: any
}

interface ImageItem {
  title: string;
  image: string;
}
interface CaseStudyProps {
  webinarId: string
  title: string;
  images: ImageItem[];
  backNavLink?: string;
  backNavPath?: string;
  showBackLink: boolean
  content: string[]; // paragraphs
  otherCases: string[];
  textDesc?: React.ReactNode;
  htmlContent?: any;
  sendWatchRecData: (data: FormDataType) => void
  resetFormTrigger: boolean;
}



export const EventsDetailsComponent : React.FC<CaseStudyProps> = ({
  webinarId,
  title,
  images,
  content,
  otherCases,
  backNavLink,
  backNavPath,
  showBackLink,
  textDesc,
  htmlContent,
  sendWatchRecData,
  resetFormTrigger
})  => {


  const jobRoleOptions = [
    "C-Suite/Owner/Partner",
    "Vice President",
    "Director",
    "Project Manager",
    "Project Engineer",
    "Superintendent",
    "Foreman",
    "Field Staff",
    "Student/Co-op",
    "Other"
];

const countryOptions = [
"United States",
"Afghanistan",
"Aland Islands",
"Albania",
"Algeria",
"Andorra",
"Angola",
"Anguilla",
"Antarctica",
"Antigua and Barbuda",
"Argentina",
"Armenia",
"Aruba",
"Australia",
"Austria",
"Azerbaijan",
"Bahamas",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Belize",
"Benin",
"Bermuda",
"Bhutan",
"Bolivia, Plurinational State of",
"Bonaire, Sint Eustatius and Saba",
"Bosnia and Herzegovina",
"Botswana",
"Bouvet Island",
"Brazil",
"British Indian Ocean Territory",
"Brunei Darussalam",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cambodia",
"Cameroon",
"Canada",
"Cape Verde",
"Cayman Islands",
"Central African Republic",
"Chad",
"Chile",
"China",
"Christmas Island",
"Cocos (Keeling) Islands",
"Colombia",
"Comoros",
"Congo",
"Congo, the Democratic Republic of the",
"Cook Islands",
"Costa Rica",
"Cote d'Ivoire",
"Croatia",
"Cuba",
"Curaçao",
"Cyprus",
"Czech Republic",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Ethiopia",
"Falkland Islands (Malvinas)",
"Faroe Islands",
"Fiji",
"Finland",
"France",
"French Guiana",
"French Polynesia",
"French Southern Territories",
"Gabon",
"Gambia",
"Georgia",
"Germany",
"Ghana",
"Gibraltar",
"Greece",
"Greenland",
"Grenada",
"Guadeloupe",
"Guatemala",
"Guernsey",
"Guinea",
"Guinea-Bissau",
"Guyana",
"Haiti",
"Heard Island and McDonald Islands",
"Holy See (Vatican City State)",
"Honduras",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran, Islamic Republic of",
"Iraq",
"Ireland",
"Isle of Man",
"Israel",
"Italy",
"Jamaica",
"Japan",
"Jersey",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Korea, Democratic People’s Republic of",
"Korea, Republic of",
"Kuwait",
"Kyrgyzstan",
"Lao People’s Democratic Republic",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Macao",
"Macedonia, the former Yugoslav Republic of",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Martinique",
"Mauritania",
"Mauritius",
"Mayotte",
"Mexico",
"Moldova, Republic of",
"Monaco",
"Mongolia",
"Montenegro",
"Montserrat",
"Morocco",
"Mozambique",
"Myanmar",
"Namibia",
"Nauru",
"Nepal",
"Netherlands",
"New Caledonia",
"New Zealand",
"Nicaragua",
"Niger",
"Nigeria",
"Niue",
"Norfolk Island",
"Norway",
"Oman",
"Pakistan",
"Palestine",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines",
"Pitcairn",
"Poland",
"Portugal",
"Qatar",
"Reunion",
"Romania",
"Russian Federation",
"Rwanda",
"Saint Barthélemy",
"Saint Helena, Ascension and Tristan da Cunha",
"Saint Kitts and Nevis",
"Saint Lucia",
"Saint Martin (French part)",
"Saint Pierre and Miquelon",
"Saint Vincent and the Grenadines",
"Samoa",
"San Marino",
"Sao Tome and Principe",
"Saudi Arabia",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leone",
"Singapore",
"Sint Maarten (Dutch part)",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"South Georgia and the South Sandwich Islands",
"South Sudan",
"Spain",
"Sri Lanka",
"Sudan",
"Suriname",
"Svalbard and Jan Mayen",
"Swaziland",
"Sweden",
"Switzerland",
"Syrian Arab Republic",
"Taiwan",
"Tajikistan",
"Tanzania, United Republic of",
"Thailand",
"Timor-Leste",
"Togo",
"Tokelau",
"Tonga",
"Trinidad and Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Turks and Caicos Islands",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates",
"United Kingdom",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Venezuela, Bolivarian Republic of",
"Vietnam",
"Virgin Islands, British",
"Wallis and Futuna",
"Western Sahara",
"Yemen",
"Zambia",
"Zimbabwe",
];

const annualRevenueOptions = [
    "0 - 9M",
    "10 - 19M",
    "20 - 39M",
    "40 - 249M",
    "250 - 499M",
    "500M+"
];

const industryOptions = [
  "Aerospace",
"Agriculture",
"Apparel",
"Architecture",
"Automotive",
"Banking",
"Biotechnology",
"Chemicals",
"Communications",
"Construction",
"Construction - Commercial",
"Construction - Industrial",
"Construction - Materials",
"Construction - Residential",
"Construction - Specialty Trade",
"Construction - Specialty Trade - Concrete",
"Construction - Specialty Trade - Drywall",
"Construction - Specialty Trade - Electrical",
"Construction - Specialty Trade - Flooring",
"Construction - Specialty Trade - Framing",
"Construction - Specialty Trade - Masonry",
"Construction - Specialty Trade - Plumbing & HVAC",
"Construction - Specialty Trade - Roofing",
"Construction - Specialty Trade - Siding",
"Construction - Specialty Trade - Wall Covering",
"Consulting",
"Design",
"Education",
"Electronics",
"Energy",
"Engineering",
"Entertainment",
"Environmental",
"Facilities Services",
"Finance",
"Food & Beverage",
"Government",
"Healthcare",
"Hospitality",
"Information Services",
"Inspection",
"Insurance",
"Machinery",
"Manufacturing",
"Media",
"Mining",
"Not For Profit",
"Other",
"Real Estate",
"Recreation",
"Residential",
"Retail",
"Shipbuilding",
"Shipping",
"Technology",
"Telecommunications",
"Transportation",
"Utilities",
"Warehousing",
"Wholesale",
];





  const isOrganizationEmail = (email: string) => {
  const blockedDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "live.com",
    "msn.com",
    "aol.com",
    "icloud.com",
    "protonmail.com",
    "zoho.com",
    "mail.com",
    "gmx.com",
    "rediffmail.com"
  ];

  const domain = email.split("@")[1]?.toLowerCase();

  return domain && !blockedDomains.includes(domain);
};



  const [formData, setFormData] = useState<FormDataType>({
  firstName: "",
  lastName: "",
  businessEmail: "",
  phone: "",
  jobRole: "",
  companyName: "",
  country: "",
  annualRevenue: "",
  industry: "",
  eventName: ""
});
  const [emailError, setEmailError] = useState("");

useEffect(() => {
  setFormData({
  firstName: "",
  lastName: "",
  businessEmail: "",
  phone: "",
  jobRole: "",
  companyName: "",
  country: "",
  annualRevenue: "",
  industry: "",
  eventName: ""
  });
}, [resetFormTrigger, title]);
  
  const matchedImage = images.find(
  (item: any) => item.title === title
);

  console.log('matchedImage',matchedImage)

//   const handleChange = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => {

//   setFormData({
//     ...formData,
//     [e.target.name]: e.target.value,
//   });

//     if (e.target.name === "email") {
//      setEmailError("");
//     }
// };


  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  if (e.target.name === "email") {
    setEmailError("");
  }
};
  
  // ✅ form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('formEventData::',formData);

     if (!isOrganizationEmail(formData.businessEmail)) {
    setEmailError(
      "Please enter a valid organization email address."
    );
    return;

  }
    setEmailError("")

    // ✅ send data to parent
    // sendWatchRecData(formData);


    sendWatchRecData({
      ...formData,
      eventName: title
    });


  };

//   useEffect(() => {
//   setFormData(initialFormData);
// }, [resetFormTrigger]);

  


  
  return (
    <>

      {/* down section */}
      <section className="case-study-section">
        {/* <Link href={linkPath} className="breadcrumb body3sec">
                {linkText} <span className="body3sec">→</span>
              </Link> */}

        {/* Header */}
        {/* <header className="page-header marTopGlobal">
        <div className="page-title Header3sec">{title}</div>
        <button className="download-btn">⬇ Download Full Case Study</button>
      </header> */}

        {/* <div>
          <nav className="topbar">
            <Link href={"backNavPath"} className="back-link">
              {showBackLink ? (
                <div>
                  <span className="arrow">←</span>
                  <span>{backNavLink}</span>
                </div>
              ) : (
                ""
              )}
            </Link>
          </nav>
        </div> */}

        <main className="page-content">
          {/* Left column */}
          <div className="main-column">
            <div className="page-title Header1">{title}</div>

            <div className="marTopGlobal">
              {/* <img src={imageSrc} alt="Case study" className="main-image" /> */}
              <img
                src={matchedImage?.image || "/default-image.jpg"}
                alt={title}
                className="main-image"
              />
            </div>

            <article className="content">
              {/* {content.map((para, index) => (
              <p key={index}>{para}</p>
            ))} */}

              <div
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                className="body2 marTopGlobal"
              >
                
              </div>
            </article>
          </div>

          {/* Right column (sidebar) */}
          <aside className="sidebar">
            <div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="recent-title">Tell us about yourself</div>
                
                <label className="body3sec">
                  First Name
                  <input type="text" name="firstName" placeholder="Enter your first name" value={formData.firstName}
                onChange={handleChange} required />
                </label>

                
                <label className="body3sec">
                  Last Name
                  <input type="text" name="lastName" placeholder="Enter your last name" 
                  value={formData.lastName}
                  onChange={handleChange} required />
                </label>

                


                <label className="body3sec">
                  Business Email
                  <input type="text" name="businessEmail" placeholder="Enter your business email"
                  value={formData.businessEmail}
                  onChange={handleChange}
                   required />
                </label>

                {emailError && (
                  <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
                    {emailError}
                  </div>
                )}

                <label className="body3sec">
                  Phone
                  <input type="text" name="phone" placeholder="Enter your phone" 
                  value={formData.phone}
                  onChange={handleChange} required />
                </label>



                <label className="body3sec">
                Job Role
                <select
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select your job role
                  </option>

                  {jobRoleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </label>

                
              <label className="body3sec">
                  Company Name
                  <input type="text" name="companyName" placeholder="Enter your company name" value={formData.companyName}
                onChange={handleChange} required />
                </label>


               <label className="body3sec">
                  Country
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select your country
                    </option>

                    {countryOptions.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </label>


                <label className="body3sec">
                  Annual Revenue
                  <select
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select annual revenue
                    </option>

                    {annualRevenueOptions.map((revenue) => (
                      <option key={revenue} value={revenue}>
                        {revenue}
                      </option>
                    ))}
                  </select>
                </label>


                <label className="body3sec">
                  Industry
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select your industry
                    </option>

                    {industryOptions.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </label>

                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>

          </aside>
        </main>
      </section>
    </>
  );
};

