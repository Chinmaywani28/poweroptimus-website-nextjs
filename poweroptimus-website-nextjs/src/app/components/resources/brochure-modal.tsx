"use client";
import { saveCaseStudyRequest } from "@/app/services/demoService";
// import './brochure-card-section.css';
import styles from "./brochure-modal.module.css";
import { useRef, useState } from "react";

export const BrochureModalSection: React.FC<any> = ({
  open,
  pdfLink,
  onClose,
  caseStudyTitle,
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
      "rediffmail.com",
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
    city: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  if (!open) return null;

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     console.log("pdf link::", pdfLink);

  //     if(!isOrganizationEmail(formData.email)){
  //       setEmailError(
  //         "Please enter a valid organization email address."
  //       );
  //         return
  //     }

  //     //   setEmailError("")

  //     await saveCaseStudyRequest({
  //       ...formData,
  //       pdfLink,
  //       caseStudyTitle,
  //     });

  //     setFormData(initialFormData);

  //     onClose();
  //   } catch (error) {
  //     console.error("Firestore Error:", error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setFormError("");
  setEmailError("");

  // Check all fields are filled
  const hasEmptyField = Object.values(formData).some(
    (value) => !value.trim()
  );

  if (hasEmptyField) {
    setFormError("Please fill all fields.");
    return;
  }

  // Validate organization email
  if (!isOrganizationEmail(formData.email)) {
    setEmailError(
      "Please enter a valid organization email address."
    );
    return;
  }

  try {
    await saveCaseStudyRequest({
      ...formData,
      pdfLink,
      caseStudyTitle,
    });

    setFormData(initialFormData);
    setIsSubmitted(true);

    // Optional: close modal after 2 sec
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 2000);

  } catch (error) {
    console.error("Firestore Error:", error);
    setFormError("Something went wrong. Please try again.");
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


          {isSubmitted ? (
  <div className={styles.successContainer}>
    <h3>Submitted Successfully!</h3>
    <p>Your request has been received.</p>
  </div>
) : (
  <form className={styles.form}>
            <input
              name="name"
              type="text"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="company"
              type="text"
              required
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Company Email"
              value={formData.email}
              onChange={handleChange}
            />

            {emailError && (
              <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
                {emailError}
              </div>
            )}

            <input
              name="jobTitle"
              type="text"
              required
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
            />

            <input
              name="phone"
              type="text"
              required
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              name="country"
              type="text"
              required
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />

            <input
              name="city"
              type="text"
              required
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />


            {formError && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {formError}
              </p>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              onClick={handleSubmit}
            >
              Submit & Download
            </button>
          </form>
)}










          
        </div>
      </div>
    </>
  );
};
