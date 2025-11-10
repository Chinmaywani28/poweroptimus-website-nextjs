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
      label1: 'Employee Awareness Training',
      label2: 'Energy Management',
      label3: 'Predictive Maintenance',
      tagPath1: '/roles/roles-cap/#embeds',
      tagPath2: '/roles/roles-cap/#create',
      tagPath3: '/roles/roles-cap/#ensure'
    },
    {
      img: "/Operation Heads  Image.jpg",
      title: "Operations Heads",
      text: `Operations Heads oversee plant and process performance, where efficiency, cost management, and resource optimization are key to achieving operational excellence. PowerOptimus empowers them with facility-wide dashboards that provide instant visibility into energy usage, helping to correlate energy consumption with process output and identify bottlenecks. Load balancing and shift optimization features enable better resource allocation, while benchmarking and target setting support energy budgeting and long-term performance improvement. This visibility allows operations leaders to enhance productivity without losing sight of energy and cost efficiency.`,
      label1: 'Sustainability and ESG Analysis',
      label2: 'Data Analysis',
      label3: 'Efficiency Improvements',
      tagPath1: '/roles/roles-cap/#strengthens',
      tagPath2: '/roles/roles-cap/#enable',
      tagPath3: '/roles/roles-cap/#create'
    },
    {
      img: "/Energy managers Image.jpg",
      title: "Energy Managers",
      text: `Energy Managers focus on reducing consumption, improving efficiency, and driving sustainability across operations. Their role has become increasingly strategic and data-driven, requiring tools that provide both depth and clarity. PowerOptimus equips energy managers with granular, circuit-level monitoring and historical data, helping them identify inefficiencies through trend analysis and consumption patterns. The platform also enables benchmarking across different departments or locations, ensuring fair comparisons and actionable insights. By supporting compliance with ISO 50001 and other energy management frameworks, our solutions help energy managers achieve both organizational and regulatory sustainability goals.`,
      label1: 'Detects Operational Inefficiencies',
      label2: 'Energy Audits',
      label3: 'ROI Improvement',
      tagPath1: '/roles/roles-cap/#prevent',
      tagPath2: '/roles/roles-cap/#create',
      tagPath3: '/roles/roles-cap/#roi'
    },
    {
      img: "/C-Executives Image.jpg",
      title: "C-Suite Executives (CXOs)",
      text: `For CXOs, the priorities extend beyond day-to-day operations to profitability, compliance, and long-term sustainability. They require insights that connect performance with strategic decision-making, not just raw data. PowerOptimus addresses this by delivering executive dashboards with key performance indicators spanning energy, cost, and carbon impact. The platform enables leaders to align ESG initiatives with real-time operational performance while also providing ROI projections for energy interventions and capital investments. With scenario analysis and forecasting, this solution  empowers executives to make informed strategic decisions that balance profitability, compliance, and environmental responsibility.`,
      label1: 'Sustainability and ESG Analysis',
      label2: 'ROI Improvement',
      label3: 'Data Analysis',
      tagPath1: '/roles/roles-cap/#strengthens',
      tagPath2: '/roles/roles-cap/#roi',
      tagPath3: '/roles/roles-cap/#enable'
    },
    {
      img: "/EHS Image.jpg",
      title: "EHS(Environmental Health & Safety) Heads",
      text: `EHS leaders focus on sustainability, compliance, and reducing the environmental footprint of operations. Their responsibilities often extend to tracking emissions, reporting under frameworks like ISO 14001, and ensuring adherence to internal and external sustainability standards. PowerOptimus helps EHS heads by automatically tracking carbon emissions and energy intensity metrics, simplifying GHG reporting and compliance documentation. The platform provides visibility into sustainability KPIs across sites and teams, and it drives behavioural change by making progress transparent and actionable. This not only ensures compliance but also embeds sustainability into the daily culture of operations.`,
      label1: 'Co2 Emissions Monitoring',
      label2: 'Safety Audits',
      label3: 'Sustainability and ESG Analysis',
      tagPath1: '/roles/roles-cap/#strengthens',
      tagPath2: '/roles/roles-cap/#roi',
      tagPath3: '/roles/roles-cap/#enable'
    },
    {
      img: "/Production manager  Image.jpg",
      title: "Production Managers",
      text: `Production Managers are under constant pressure to maximize throughput, quality, and uptime, often balancing trade-offs between productivity and energy use. PowerOptimus helps them strike this balance by linking machine-level energy data with production metrics, making inefficiencies visible during idle, peak, or off-peak hours. By supporting lean manufacturing through energy-aware scheduling, the platform ensures that processes run with minimal waste and maximum efficiency. This allows production managers to maintain output targets while reducing unnecessary energy expenditure, achieving both operational and sustainability objectives.`,
      label1: 'Machine Energy Intensity',
      label2: 'Predictive Maintenance',
      label3: 'Operation Inefficiencies',
      tagPath1: '/roles/roles-cap/#strengthens',
      tagPath2: '/roles/roles-cap/#roi',
      tagPath3: '/roles/roles-cap/#enable'
    },
    {
      img: "/Health Inspectors Image.jpg",
      title: "Health Inspectors",
      text: `Health inspectors oversee the adherence to safety and environmental regulations related to building operations, air quality, and equipment safety.
        Monitors HVAC and indoor environmental quality in real time
        Helps track equipment performance and preventive maintenance
        Provides logs and reports to support health audits and inspections
        Ensures transparency in adherence to operational health standards.`,
      label1: 'Real-Time Usage Insights',
      label2: 'Predictive Maintenance Alerts',
      label3: 'Environmental Impact',
      tagPath1: '/roles/roles-cap/#strengthens',
      tagPath2: '/roles/roles-cap/#roi',
      tagPath3: '/roles/roles-cap/#enable'
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

                <Link href={slide.tagPath1} style={{ textDecoration: "none" }}>
                <span className="body2sec">{slide.label1}</span></Link>
                <Link href={slide.tagPath2} style={{ textDecoration: "none" }}>  
                <span className="body2sec">{slide.label2}</span>
                
                </Link>
                <Link href={slide.tagPath3} style={{ textDecoration: "none" }}>
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