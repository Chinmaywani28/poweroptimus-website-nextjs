"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './page.css'
import Image from "next/image";
import { saveDemoRequest } from '../services/demoService';
import { toast } from 'react-toastify';


const RequestDemo = () => {

  let formValues = {
    name: '',
    phone:'',
    email:'',
    company: '',
    designation: '',
    country: '',
    discussion: '',
    areaOfInterest: ''
  }

  const [formData, setFormData] = useState(formValues)
  // const [areaOfInterest, setAreaOfInterest] = useState('')

  const [areaOfInterest,setAreaOfInterest] = useState('')


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // const { t } = useTranslation(); 

    console.log("formmdatta", formData);

    if(formData){

      await saveDemoRequest(formData);
    }

    const id = toast.loading('Loading');

    toast.update(id, {
      render: "Submitted",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
    setFormData(formValues);
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <section className="request-demo">
        {/* LEFT IMAGE */}
        <div className="image-panel">
          <Image
            src="./powerOptimus-demo.webp" // put image in public folder
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
            Share your contact details to request a demonstration, and we'll be
            in touch soon!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                name="name"
                type="text"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                name="company"
                type="text"
                placeholder="Company Name*"
                value={formData.company}
                onChange={handleChange}
              />
              <input
                name="designation"
                type="text"
                placeholder="Designation*"
                value={formData.designation}
                onChange={handleChange}
              />
              <input
                name="country"
                type="text"
                placeholder="Country*"
                value={formData.country}
                onChange={handleChange}
              />

              <input
              type="text"
              name="discussion"
              placeholder="What would you like to discuss?"
              value={formData.discussion}
              onChange={handleChange}
            />

            <select
              name="areaOfInterest"
              value={formData.areaOfInterest}
              onChange={handleChange}
            >
              <option value="">Select Interest</option>
              <option value="Enviorment Management">Enviorment Management</option>
              <option value="Energy Management">Energy Management</option>
              <option value="Digital Management">Digital Management</option>

            </select>
            </div>

            

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