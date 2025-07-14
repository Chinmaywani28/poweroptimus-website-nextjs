"use client";
import Link from 'next/link';
import './form-section.css';

export const FormSection = () => {
  return (
    <section className="quote-section">
  <div className="quote-container">
    <div className="quote-text">
      <div className="Header2 TextBlue">Get a Quote</div>
      <p className="body3">
        An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress. An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress.
      </p>
    </div>

    <form className="quote-form">
      <div className="form-grid">
        <div className="form-group">
          <div className="Header3 TextBlue">Name*</div>
          <input type="text" />
        </div>
        <div className="form-group">
          <label className="Header3 TextBlue">Phone*</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label className="Header3 TextBlue">Email*</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label className="Header3 TextBlue">Company Name*</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label className="Header3 TextBlue">Designation*</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label className="Header3 TextBlue">Country*</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label className="Header3 TextBlue">Input Field Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label className="Header3 TextBlue">Input Field Name</label>
          <input type="text" />
        </div>
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  </div>
</section>

  );
};
