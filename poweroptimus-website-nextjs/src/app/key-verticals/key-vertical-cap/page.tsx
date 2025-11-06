"use client"
import './page.css';
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two';
import HeroReusable from '@/app/components/key-verticals-page/hero-reusable';
import FacilitySection from '@/app/components/key-verticals-page/facility-sections-two';
import SolFeatureBtmSection from '@/app/components/solution/sol-feature-btm-section';
import Hero from '@/app/components/home-main-content/hero';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageLeft?: boolean;
}

export default function Page() {

  useEffect(() => {
    const hash = window.location.hash; // e.g., "#hvac"
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }


  },[])

  return (
    <div>
      {/* keyvertical two */}
      {/* <KeyverticalTwo
        title="Smart Device Compatibility"
        description="Explore the wide range of devices and sensors we support for precise energy monitoring and management. From HVAC systems and temperature sensors to air quality monitors and beyond, our platform integrates with a variety of devices to provide you with comprehensive insights into your energy consumption and environmental conditions."
        subLink='All Industries'
      /> */}

      {/* hvac sections */}
      {/* <KeyverticalTwo
        title="Smart Device Compatibility"
        description="Explore the wide range of devices and sensors we support for precise energy monitoring and management. From HVAC systems and temperature sensors to air quality monitors and beyond, our platform integrates with a variety of devices to provide you with comprehensive insights into your energy consumption and environmental conditions."
        showLink={true}
        linkHref="/industries"
        linkText="All Industries"
        iconText="←"
      /> */}

      {/* <HeroReusable
        headerText={"Key Capabilities"}
        bodyText={
          "Explore how PowerOptimus empowers organizations across industries to enhance operational efficiency, safeguard people and assets, and advance sustainability goals. From intelligent air quality management and hazardous gas monitoring to smart HVAC and compressor control, our integrated solutions deliver actionable insights and automated responses, building safer and more resilient facilities."
        }
      /> */}

      <Hero headerText={"Key Capabilities"} bodyText={
          "Explore how PowerOptimus empowers organizations across industries to enhance operational efficiency, safeguard people and assets, and advance sustainability goals. From intelligent air quality management and hazardous gas monitoring to smart HVAC and compressor control, our integrated solutions deliver actionable insights and automated responses, building safer and more resilient facilities."
      } image='/KeyCapabilities_Header_Vector_Image.svg'/>

      {/* <FacilitySectionsTwo
        title="PowerOptimus continuously tracks indoor air quality to ensure healthy, compliant environments:"
        subtitle="Air Quality Monitoring (IAQ & AQI)"
        description=""
        imageSrc="../key-vertical-sec-one.png"
        imageLeft={false}
        listItems={[
          {
            text: "CO2-based Demand Control Ventilation (DCV): Adjusts fresh air intake in real time based on occupancy, reducing unnecessary energy use and maintaining safe CO₂ levels.",
          },
          {
            text: "Particulate & Air Quality Monitoring in Clean Rooms: Ensures pharma & electronics manufacturing meet stringent particulate matter limits using AQI sensors at duct inlets & outlet",
          },
          {
            text: "Gas Detection for Chemical Handling: Safeguards worker health by sensing harmful gases, triggering ventilation to maintain air quality standards.",
          },
          {
            text: "Specialized Applications: ",
            subItems: [
              "Controls CO₂ levels in breweries & carbonated environments.",
              "Optimizes IAQ in large commercial spaces by adjusting HVAC air flow to occupancy.",
            ],
          },
          {
            text: "BMS Integration: Links with Building Management Systems to highlight excess energy usage, supporting certifications like ISO 14001.",
          },
        ]}
      />

      <FacilitySectionsTwo
        title="Mitigate risks from toxic gas leaks across industries:"
        subtitle="Hazardous Gas Monitoring"
        description=""
        imageSrc="../key-vertical-sec-two.png"
        imageLeft={true}
        listItems={[
          {
            text: "Chemical Plants: Monitors SO₂, NOx, VOCs and particulate emissions to protect workers and meet regulatory norms.",
          },
          {
            text: "Manufacturing Facilities: Deploys sensors across tubing, valve manifolds, and machinery to ensure safe ambient conditions.",
          },
          {
            text: "Food & Beverage Plants: Keeps CO₂ and organic waste gases in check in breweries, bottling lines, and cold storage.",
          },
          {
            text: "Pharma Units: Detects hazardous byproducts, preventing exposure and ensuring safe manufacturing",
          },
        ]}
      />

      <FacilitySectionsTwo
        title="Maintain optimal temperatures and maximize equipment efficiency:"
        subtitle="Temperature Monitoring & Boiler Optimization"
        description=""
        imageSrc="../key-vertical-sec-three.png"
        imageLeft={false}
        listItems={[
          {
            text: "Industrial Facilities & Buildings: Alerts users if temperatures exceed set thresholds, preventing costly failures.",
          },
          {
            text: "Boiler Heat Loss Monitoring: Tracks dry flue gases, fuel moisture, and radiation losses to fine-tune combustion efficiency and cut fuel costs.",
          },
        ]}
      />

      <FacilitySectionsTwo
        title="Enhance comfort and minimize wastage"
        subtitle="Occupancy Monitoring for Smart HVAC Control"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. . Vitae similique totam. chine operations, reducing downtime, and minimizing waste.PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime"
        imageSrc="../key-vertical-sec-four.png"
        imageLeft={true}
        listItems={[
          {
            text: "Healthcare & Commercial Buildings: Occupancy sensors regulate HVAC operation, adapting air flow and temperature to the number of people present.",
          },
          {
            text: "Data-Driven Optimization: Dashboards visualize zone-wise occupancy rates, helping target HVAC operations only where needed.",
          },
        ]}
      />

      <FacilitySectionsTwo
        title="Smart load-based compressor scheduling reduces energy costs and Scope 2 emissions:"
        subtitle="Compressor Management for HVAC Networks"
        description=""
        imageSrc="../key-vertical-sec-two.png"
        imageLeft={false}
        listItems={[
          

          {
            text: "Dynamic Loading",
            subItems: [
              "Up to 200 CFM: small compressor operates.",
              "Up to 500 CFM: large compressor runs.",
              "Beyond 500 CFM: two large compressors engage.",
            ],
          },
          {
            text: "Predictive Maintenance: Auto-switching of compressors ensures balanced wear and reliable performance.",
          },
          {
            text: "Live Benchmarking: Real-time kW/CFM analysis highlights efficiency, supporting your sustainability goals.",
          },
        ]}
      />

      <FacilitySectionsTwo
        title="Get more from your HVAC systems while lowering kW/TR:"
        subtitle="Advanced HVAC Controls & Pump Efficiency"
        description=""
        imageSrc="../key-vertical-sec-one.png"
        imageLeft={true}
        listItems={[
          {
            text: "Adjust ventilation based on CO₂ sensors (DCV), balancing energy savings and occupant comfort"
          },
          {
            text: "Optimize chilled water & cooling water circuits by shutting valves to idle equipment."
          },
          {
            text: "Automated switching & instant alerts for key KPIs like pressure and temperature deviations keep your system running at peak efficiency."
          }
        ]}
      /> */}

      {/* <FacilitySection/> */}
      <FacilitySection
        id="abc"
        subtitle="Air Quality Monitoring (IAQ & AQI) "
        title="Track and control indoor air quality for healthier, compliant spaces"
        description=""
        imageSrc="/key-vertical-sec-three.png"
        imageLeft={false}
        listItems={[
          {
            text: "Real-time CO₂-based DCV for fresh air adjustment & energy savings"
          },
          {
            text: "AQI sensors for clean rooms in pharma/electronics"
          },
          {
            text: "Gas detection to auto-vent harmful gases & protect workers"
          },
          {
            text: "BMS integration & special uses (breweries, large spaces, ISO 14001 support)"
          }
        ]}
      />

      {/* Image on Left */}
      <FacilitySection
        id="hva"
        subtitle="Hazardous Gas Monitoring"
        title="Prevent toxic leaks and ensure compliance across industries"
        description=""
        imageSrc="/key-vertical-sec-four.png"
        imageLeft={true}
        listItems={[
          {
            text: "SO₂, NOx, VOC monitoring in chemical plants"
          },
          {
            text: "Leak detection in tubing, valves & machinery"
          },
          {
            text: "CO₂ control in breweries, bottling lines & cold storage"
          },
          {
            text: "Byproduct detection in pharma units for worker safety"
          }
        ]}
      />

      {/* Image on right */}
      <FacilitySection
        id="hva"
        subtitle="Sustainability & Compliance Automation"
        title="Simplify sustainability compliance with automated tracking"
        description=""
        imageSrc="/key-vertical-sec-four.png"
        imageLeft={false}
        listItems={[
          {
            text: "Automated tracking of energy, emissions & IAQ KPIs for ESG reporting"
          },
          {
            text: "Supports certification goals like LEED, WELL, IGBC & ISO 50001"
          },
          {
            text: "Smart alerts for deviation from sustainability benchmarks"
          },
          {
            text: "Digital documentation for audits & regulatory compliance"
          }
        ]}
      />

      {/* Image on Left */}
      <FacilitySection
        id="hva"
        subtitle="Hazardous Gas Monitoring"
        title="Prevent toxic leaks and ensure compliance across industries"
        description=""
        imageSrc="/key-vertical-sec-four.png"
        imageLeft={true}
        listItems={[
          {
            text: "SO₂, NOx, VOC monitoring in chemical plants"
          },
          {
            text: "Leak detection in tubing, valves & machinery"
          },
          {
            text: "CO₂ control in breweries, bottling lines & cold storage"
          },
          {
            text: "Byproduct detection in pharma units for worker safety"
          }
        ]}
      />

      <FacilitySection
        id="hvac"
        subtitle="Keep Equipment Efficient and Safe"
        title="Boiler Optimization & Temperature Monitoring "
        description=""
        imageSrc="/key-vertical-sec-three.png"
        imageLeft={false}
        listItems={[
          {
            text: "Temperature alerts for equipment protection"
          },
          {
            text: "Boiler heat loss tracking (dry flue gases, radiation, fuel moisture)"
          },
          {
            text: "Combustion fine-tuning to improve efficiency"
          },
          {
            text: "Fuel cost reduction through optimized performance"
          }
        ]}
      />

      {/* Image on Left */}
      <FacilitySection
        id="hvac"
        subtitle="Occupancy Monitoring for Smart HVAC"
        title="Smarter comfort, lower waste"
        description=""
        imageSrc="/key-vertical-sec-four.png"
        imageLeft={true}
        listItems={[
          {
            text: "Healthcare & commercial HVAC adapts to occupancy"
          },
          {
            text: "Sensors regulate airflow & temperature dynamically"
          },
          {
            text: "Dashboards show zone-wise occupancy rates"
          },
          {
            text: "Targeted optimization for reduced waste & better comfort"
          }
        ]}
      />

      <FacilitySection
        id="hvac"
        subtitle="Compressor Management for HVAC"
        title="Reduce costs and emissions with load-based scheduling"
        description=""
        imageSrc="/key-vertical-sec-three.png"
        imageLeft={false}
        listItems={[
          {
            text: "Dynamic loading: auto-adjust from small to large compressors"
          },
          {
            text: "Predictive maintenance via auto-switching for balanced wear"
          },
          {
            text: "Load-based scheduling reduces Scope 2 emissions"
          },
          {
            text: "Live benchmarking (real-time kW/CFM analysis) for efficiency"
          }
        ]}
      />

      <FacilitySection
        id="hvac"
        subtitle="Advanced HVAC Controls & Pump Efficiency"
        title="Boost system efficiency while cutting kW/TR"
        description=""
        imageSrc="/key-vertical-sec-three.png"
        imageLeft={true}
        listItems={[
          {
            text: "CO₂-based ventilation for energy & comfort balance"
          },
          {
            text: "Chilled/cooling water optimization with auto-shut valves"
          },
          {
            text: "Real-time monitoring of flow, temp, and pressure"
          },
          {
            text: "Automated alerts for quick KPI deviation response"
          },
        ]}
      />

      {/* Image on Left */}
      {/* <FacilitySection
        subtitle="Advanced HVAC Controls & Pump Efficiency"
        title="Energy efficiency in production facilities"
        description="
        Get more from your HVAC systems while lowering kW/TR:
        •	Adjust ventilation based on CO₂ sensors (DCV), balancing energy savings and occupant comfort.
        •	Optimize chilled water & cooling water circuits by shutting valves to idle equipment.
        •	Monitor flow, temperature & pressure in real time — isolate high-consumption pumps automatically.
        • Automated switching & instant alerts for key KPIs like pressure and temperature deviations keep your system running at peak efficiency.

        "
        imageSrc="/key-vertical-sec-four.png"
        imageLeft={true}
        listItems={[
          {
            text: "CO2-based Demand Control Ventilation (DCV): Adjusts fresh air intake in real time based on occupancy, reducing unnecessary energy use and maintaining safe CO₂ levels."
          }
        ]}
      /> */}

      <SolFeatureBtmSection
        heading="Ready to Build a Safer, Sustainable Future?"
        paragraphs={[
          "Partner with PowerOptimus to transform the way you manage energy, environment, and operations. From improving air quality and safety to driving down energy costs and emissions, we’re here to help you achieve your sustainability goals, smarter and faster."
        ]}
        buttonText="Schedule a Demo"
        imageSrc="/KeyCapabilities_Footer_Vector_Image.svg"
        imageAlt="Illustration of integration"
      />
    </div>
  );
};


// export default page