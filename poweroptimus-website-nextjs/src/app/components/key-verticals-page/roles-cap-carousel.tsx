"use client"
import Link from 'next/link';
import './roles-cap-carousel.css'; // Import HomePage specific styles
import { useState, useRef, useEffect } from 'react';


const RolesCapCarousel = ( ) => {

  const slides = [
    {
      img: "/roles-new-one.jpg",
      title: "Facility Managers",
      text: `Facility Managers are tasked with ensuring the smooth and efficient operation of building systems daily. From managing HVAC, lighting, and equipment schedules to balancing energy consumption with occupant comfort, their role is critical to maintaining reliability and cost control. PowerOptimus supports facility managers by providing real-time monitoring and control of energy-intensive assets, sending proactive alerts for abnormal consumption or equipment failure, and reducing downtime through predictive insights. This ensures that buildings remain comfortable and operationally sound while lowering utility costs and maintenance burdens.`,
      label1: 'Predictive Maintenance',
      label2: 'Energy Management',
      label3: 'Employee Awareness Training'
    },
    {
      img: "/roles-new-one.jpg",
      title: "Facility Managers",
      text: `Facility Managers are tasked with ensuring the smooth and efficient operation of building systems daily. From managing HVAC, lighting, and equipment schedules to balancing energy consumption with occupant comfort, their role is critical to maintaining reliability and cost control. PowerOptimus supports facility managers by providing real-time monitoring and control of energy-intensive assets, sending proactive alerts for abnormal consumption or equipment failure, and reducing downtime through predictive insights. This ensures that buildings remain comfortable and operationally sound while lowering utility costs and maintenance burdens.`,
      label1: 'Efficiency Improvements',
      label2: 'Data Analysis',
      label3: 'Sustainability and ESG Analysis'
    },
    {
      img: "/roles-new-one.jpg",
      title: "Facility Managers",
      text: `Facility Managers are tasked with ensuring the smooth and efficient operation of building systems daily. From managing HVAC, lighting, and equipment schedules to balancing energy consumption with occupant comfort, their role is critical to maintaining reliability and cost control. PowerOptimus supports facility managers by providing real-time monitoring and control of energy-intensive assets, sending proactive alerts for abnormal consumption or equipment failure, and reducing downtime through predictive insights. This ensures that buildings remain comfortable and operationally sound while lowering utility costs and maintenance burdens.`,
      label1: 'Energy Audits',
      label2: 'Detects Operational Inefficiencies',
      label3: 'ROI Improvement'
    },
    {
      img: "/roles-new-one.jpg",
      title: "Facility Managers",
      text: `Facility Managers are tasked with ensuring the smooth and efficient operation of building systems daily. From managing HVAC, lighting, and equipment schedules to balancing energy consumption with occupant comfort, their role is critical to maintaining reliability and cost control. PowerOptimus supports facility managers by providing real-time monitoring and control of energy-intensive assets, sending proactive alerts for abnormal consumption or equipment failure, and reducing downtime through predictive insights. This ensures that buildings remain comfortable and operationally sound while lowering utility costs and maintenance burdens.`,
      label1: 'Data Analysis',
      label2: 'ROI Improvement',
      label3: 'Sustainability and ESG Analysis'
    },
    {
      img: "/roles-new-one.jpg",
      title: "Facility Managers",
      text: `Facility Managers are tasked with ensuring the smooth and efficient operation of building systems daily. From managing HVAC, lighting, and equipment schedules to balancing energy consumption with occupant comfort, their role is critical to maintaining reliability and cost control. PowerOptimus supports facility managers by providing real-time monitoring and control of energy-intensive assets, sending proactive alerts for abnormal consumption or equipment failure, and reducing downtime through predictive insights. This ensures that buildings remain comfortable and operationally sound while lowering utility costs and maintenance burdens.`,
      label1: 'Data Analysis',
      label2: 'ROI Improvement',
      label3: 'Sustainability and ESG Analysis'
    },
    {
      img: "/roles-new-one.jpg",
      title: "Facility Managers",
      text: `Facility Managers are tasked with ensuring the smooth and efficient operation of building systems daily. From managing HVAC, lighting, and equipment schedules to balancing energy consumption with occupant comfort, their role is critical to maintaining reliability and cost control. PowerOptimus supports facility managers by providing real-time monitoring and control of energy-intensive assets, sending proactive alerts for abnormal consumption or equipment failure, and reducing downtime through predictive insights. This ensures that buildings remain comfortable and operationally sound while lowering utility costs and maintenance burdens.`,
      label1: 'Data Analysis',
      label2: 'ROI Improvement',
      label3: 'Sustainability and ESG Analysis'
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide but pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const changeSlide = (i: number) => {
    setActiveIndex(i);
  };

  return (
      <div
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}   // pause on hover
      onMouseLeave={() => setIsPaused(false)} // resume on leave
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="slide" key={i}>
            <div className="image-box">
              <img src={slide.img} alt={slide.title} />
            </div>

            <div className="text-box">
              <div className="Header2 TextBlue">{slide.title}</div>
              <div className="body2">{slide.text}</div>

              <div className="tags marTopGlobal">

                <Link href={`/roles/roles-cap`} style={{ textDecoration: "none" }}>
                <span className="body2sec">{slide.label1}</span></Link>
                <Link href={`/roles/roles-cap`} style={{ textDecoration: "none" }}>  
                <span className="body2sec">{slide.label2}</span>
                
                </Link>
                <Link href={`/roles/roles-cap`} style={{ textDecoration: "none" }}>
                <span className="body2sec">{slide.label3}</span>

                </Link>
              </div>

            </div>

            
          </div>
        ))}
      </div>

      <div className="dot-icons">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === activeIndex ? "active-dot" : ""}`}
            onClick={() => changeSlide(i)}
          />
        ))}
      </div>
    </div>

  )
}

export default RolesCapCarousel