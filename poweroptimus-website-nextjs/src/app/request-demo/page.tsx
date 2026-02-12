"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';
import './page.css'
import Image from "next/image";

const RequestDemo = () => {

  const handleSubmit = async (event: any) => {
        console.log('nmnjj',event)
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        // setValidated(true);
        if (!form.checkValidity()) {
            return;
        }

        // await saveDemoRequest(formValues);
        // setSubmitted(true);

        
    };

  const { t } = useTranslation(); // Initialize translation hook

  return (
      <>

          <section className="request-demo">
      {/* LEFT IMAGE */}
      <div className="image-panel">
        <Image
          src="./powerOptimus-demo.webp"   // put image in public folder
          alt="Construction demo"
          fill
          priority
        />
        {/* <img src="./powerOptimus-demo.webp" alt="PowerOptimus demo" /> */}
      </div>

      {/* RIGHT FORM */}
      <div className="form-panel">
        <h2>Request A Demo</h2>
        <p>
          Share your contact details to request a demonstration,
          and we'll be in touch soon!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input type="text" placeholder="Name*" />
            <input type="tel" placeholder="Phone*" />
            <input type="email" placeholder="Email*" />
            <input type="text" placeholder="Company Name*" />
            <input type="text" placeholder="Designation*" />
            <input type="text" placeholder="Country*" />
          </div>

          <textarea placeholder="What would you like to discuss?" />

          {/* <label className="checkbox">
            <input type="checkbox" />
            <span>Send brochure on my email</span>
          </label> */}

            <br />
            <br />

          <button type="submit">
            Submit <span>→</span>
          </button>
        </form>
      </div>
    </section>

      </>
  );
}

export default RequestDemo