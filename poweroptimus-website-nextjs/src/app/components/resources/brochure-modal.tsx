"use client"
import { saveCaseStudyRequest } from '@/app/services/demoService';
// import './brochure-card-section.css';
import styles from './brochure-modal.module.css';
import { useRef, useState } from 'react';







export const BrochureModalSection: React.FC<any> = ({
  open,
  pdfLink,
  onClose,
  caseStudyTitle
}) => {

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


  const initialFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  jobTitle: "",
  country: "",
  city: ""
};

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [formData, setFormData] = useState(initialFormData)
  const [emailError, setEmailError] = useState("");


  if (!open) return null;

  // const handleSubmit = () => {
  //   console.log('formData', formData);

  //   window.open(pdfLink, "_blank");

  //   onClose();
  // };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // await addDoc(collection(db, "brochure_downloads"), {
      //   ...formData,

      //   brochureLink: pdfLink,

      //   createdAt: serverTimestamp(),
      // });

      // window.open(pdfLink, "_blank");

      // onClose();

      console.log('pdf link::',pdfLink )

      if(!isOrganizationEmail(formData.email)){
        setEmailError(
          "Please enter a valid organization email address."
        );
          return 
      }

        setEmailError("")


      await saveCaseStudyRequest({
        ...formData,
        pdfLink,
        caseStudyTitle
      })

      setFormData(initialFormData)

      onClose();



    } catch (error) {
      console.error("Firestore Error:", error);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (e.target.name === "email") {
     setEmailError("");
    }
  };

  

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={onClose}>
            <i className="ri-close-line"></i>
          </button>

          <h2>Download Case Study</h2>

          <p>Please fill in your details to download the Case Study.</p>

          <form className={styles.form}>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="company"
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Company Email"
              value={formData.email}
              onChange={handleChange}
            />

            {emailError && (
              <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
                {emailError}
              </p>
            )}

            <input
              name="jobTitle"
              type="text"
              placeholder="Telephone"
              value={formData.jobTitle}
              onChange={handleChange}
            />

            <input
              name="phone"
              type="text"
              placeholder="Telephone"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              name="country"
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />

            <input
              name="city"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />

            <button
              type="submit"
              className={styles.submitBtn}
              onClick={handleSubmit}
            >
              Submit & Download
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

