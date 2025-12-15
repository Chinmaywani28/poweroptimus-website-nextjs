import './page.css';
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two';
import HeroReusable from '@/app/components/key-verticals-page/hero-reusable';
import FacilitySection from '@/app/components/key-verticals-page/facility-sections-two';
import SolFeatureBtmSection from '@/app/components/solution/sol-feature-btm-section';
import FacilitySectionsTwo from '@/app/components/key-verticals-page/facility-sections-two';
import Hero from '@/app/components/home-main-content/hero';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageLeft?: boolean;
}

export default function Page() {
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
        headerText={"Transforming Energy Management and Environmental Monitoring with Intelligence"}
        bodyText={
          "Traditional tracking often stops at consumption reports, offering little insight into inefficiencies or long-term sustainability goals. With advanced analytics, real-time monitoring, and intelligent insights, enterprises can optimize energy use, improve asset performance, and strengthen ESG compliance."
        }
      /> */}

      <Hero headerText={"Transforming Energy Management and Environmental Monitoring with Intelligence"} bodyText={
          "Traditional tracking often stops at consumption reports, offering little insight into inefficiencies or long-term sustainability goals. With advanced analytics, real-time monitoring, and intelligent insights, enterprises can optimize energy use, improve asset performance, and strengthen ESG compliance."
      } image='/Roles Transforming EEMM with Intelligence.svg'/>

      <FacilitySectionsTwo
        id="predictive-maintenance"
        title="Ensures fewer breakdowns, lower costs, and higher uptime"
        subtitle="Predictive Maintenance for Reliability"
        description=""
        imageSrc="/Predictive Maintenance for Reliability - Roles Under Page.jpg"
        imageLeft={false}
        listItems={[
          {
            text: "Analyze energy, vibration, and thermal patterns of critical systems."
          },
          {
            text: "Detect early signs of inefficiency or malfunction.",
          },
          {
            text: "Alert teams before failures occur.",
          },
          {
            text: "Extend lifespan of HVAC units, pumps, compressors, and more.",
          }
        ]}
      />

      <FacilitySectionsTwo
        id="ensure"
        title="Delivers measurable savings and optimized resource use"
        subtitle="Energy Strategy that Delivers ROI"
        description=""
        imageSrc="/Energy Strategy that Delivers ROI - Roles Under Page.jpg"
        imageLeft={true}
        listItems={[
          {
            text: "Identify top energy-consuming assets.",
          },
          {
            text: "Prioritize quick wins and long-term impact.",
          },
          {
            text: "Track KPIs and efficiency goals.",
          },
          {
            text: "Align energy use with business and sustainability objectives.",
          },
        ]}
      />

      <FacilitySectionsTwo
        id="employee-awareness"
        title="Embeds accountability and amplifies efficiency efforts"
        subtitle="Employee Awareness & Training"
        description=""
        imageSrc="/Employee Awareness & Training - Roles Under Page.jpg"
        imageLeft={false}
        listItems={[
          {
            text: "Build awareness of energy’s role in daily operations.",
          },
          {
            text: "Encourage SOPs that minimize waste.",
          },
          {
            text: "Adopt safer practices around equipment.",
          },
          {
            text: "Involve teams in sustainability initiatives.",
          },
        ]}
      />

      <FacilitySectionsTwo
        id="energy-audits"
        title="Creates a structured path to efficiency and reduced costs"
        subtitle="Energy Audits & Efficiency Improvements "
        description=""
        imageSrc="/Energy Audits & Efficiency Improvements - Roles Under Page.jpg"
        imageLeft={true}
        listItems={[
          {
            text: "Detect inefficiencies and hidden cost drivers.",
          },
          {
            text: "Benchmark performance against standards.",
          },
          {
            text: "Recommend upgrades or process changes.",
          },
          {
            text: "Enable continuous post-audit monitoring.",
          },
        ]}
      />

      <FacilitySectionsTwo
        id="real-time"
        title="Prevents waste and ensures KPI compliance"
        subtitle="Real-Time Inefficiency Detection"
        description=""
        imageSrc="/Real-Time Inefficiency Detection - Roles Under Page.jpg"
        imageLeft={false}
        listItems={[
          {
            text: "Spot abnormal consumption at machine or site level."
          },
          {
            text: "Access real-time dashboards and drill-down views.",
          },
          {
            text: "Receive instant alerts for corrective action.",
          }
        ]}
      />

      <FacilitySectionsTwo
        id="roi"
        title="ROI improvements often visible within months"
        subtitle="ROI & Cost Optimization"
        description=""
        imageSrc="/ROI & Cost Optimization - Roles Under Page.jpg"
        imageLeft={true}
        listItems={[
          {
            text: "Reduce energy and operational expenses."
          },
          {
            text: "Extend equipment lifespan."
          },
          {
            text: "Minimize downtime and emergency repairs."
          },
          {
            text: "Stay compliant with regulations to avoid penalties."
          }
        ]}
      />

      <FacilitySectionsTwo
        id="data-analysis"
        title=" Enables evidence-based decision-making"
        subtitle="Data Analysis & KPI Monitoring"
        description=""
        imageSrc="/Data Analysis & KPI Monitoring - Roles Under Page.jpg"
        imageLeft={false}
        listItems={[
          {
            text: "Visualize metrics in real time."
          },
          {
            text: "Compare performance across systems and sites."
          },
          {
            text: "Automate KPI tracking for operations and efficiency."
          },
          {
            text: "Deliver actionable insights for decision-makers."
          }
        ]}
      />

      <FacilitySectionsTwo
        id="co2-monitoring"
        title="Strengthens compliance and market positioning"
        subtitle="CO₂ Monitoring & Sustainability "
        description=""
        imageSrc="/CO₂ Monitoring & Sustainability - Roles Under Page.jpg"
        imageLeft={true}
        listItems={[
          {
            text: "Measure direct and indirect emissions."
          },
          {
            text: "Link efficiency gains to carbon reduction."
          },
          {
            text: "Generate ESG-compliant sustainability reports."
          },
          {
            text: "Track progress toward carbon goals."
          }
        ]}
      />

      <FacilitySectionsTwo
        id="safety-audits"
        title="Reduces accidents and enhances reliability"
        subtitle="Safety Audits & Risk Reduction"
        description=""
        imageSrc="/Safety Audits & Risk Reduction- Roles Under Page.jpg"
        imageLeft={false}
        listItems={[
          {
            text: "Verify safe operating conditions for energy-intensive systems."
          },
          {
            text: "Identify electrical and mechanical risks."
          },
          {
            text: "Ensure regulatory compliance."
          },
          {
            text: "Improve workplace safety."
          }
        ]}
      />

      <FacilitySectionsTwo
        id="machine-levels"
        title="Targets improvements where they matter most"
        subtitle="Machine-Level Energy Intensity "
        description=""
        imageSrc="/Machine-Level Energy Intensity - Roles Under Page.jpg"
        imageLeft={true}
        listItems={[
          {
            text: "Compare energy use across machines."
          },
          {
            text: "Highlight underperforming assets."
          },
          {
            text: "Optimize scheduling and utilization."
          },
          {
            text: "Allocate energy costs with precision."
          }
        ]}
      />

      {/* <FacilitySection/> */}
      {/* <FacilitySection
        subtitle="ENHANCED ENVIRONMENTAL IMPACT"
        // title="Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium"
        description="Air Quality Monitoring (IAQ & AQI)
        PowerOpimus continuously tracks indoor air quality to ensure healthy, compliant environments:
        •	CO2-based Demand Control Ventilation (DCV): Adjusts fresh air intake in real time based on occupancy, reducing unnecessary energy use and maintaining safe CO₂ levels.
        •	Particulate & Air Quality Monitoring in Clean Rooms.
    
        "
        imageSrc="/key-vertical-sec-three.png"
        imageLeft={false}
      /> */}

      {/* Image on Left */}
      {/* <FacilitySection
        subtitle="Hazardous Gas Monitoring"
        title="Energy efficiency in production facilities"
        description="Hazardous Gas Monitoring
        Mitigate risks from toxic gas leaks across industries:
        •	Chemical Plants: Monitors SO₂, NOx, VOCs and particulate emissions to protect workers and meet regulatory norms.
        •	Manufacturing Facilities: Deploys sensors across tubing, valve manifolds, and machinery to ensure safe ambient conditions.
        •	Food & Beverage Plants: Keeps CO₂ and organic waste gases in check in breweries, bottling lines, and cold storage.
        •	Pharma Units: Detects hazardous byproducts, preventing exposure and ensuring safe manufacturing.
        "
        imageSrc="/key-vertical-sec-four.png"
        imageLeft={true}
      />

      <FacilitySection
        subtitle="Temp Monitoring & Boiler Optimization"
        // title="Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium"
        description="
        Maintain optimal temperatures and maximize equipment efficiency:
        •	Industrial Facilities & Buildings: Alerts users if temperatures exceed set thresholds, preventing costly failures.
        •	Boiler Heat Loss Monitoring: Tracks dry flue gases, fuel moisture, and radiation losses to fine-tune combustion efficiency and cut fuel costs.

    
        "
        imageSrc="/key-vertical-sec-three.png"
        imageLeft={false}
      />

      {/* Image on Left */}
      {/* <FacilitySection
        subtitle="Occupancy Monitoring for Smart HVAC Control"
        title="Energy efficiency in production facilities"
        description="Enhance comfort and minimize wastage:
        •	Healthcare & Commercial Buildings: Occupancy sensors regulate HVAC operation, adapting air flow and temperature to the number of people present.
        •	Data-Driven Optimization: Dashboards visualize zone-wise occupancy rates, helping target HVAC operations only where needed.

        "
        imageSrc="/key-vertical-sec-four.png"
        imageLeft={true}
      /> */}

      {/* <FacilitySection
        subtitle="Compressor Management for HVAC Networks"
        // title="Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium"
        description="
        Smart load-based compressor scheduling reduces energy costs and Scope 2 emissions:
        •	Dynamic Loading:
        o	Up to 200 CFM: small compressor operates.
        o	Up to 500 CFM: large compressor runs.
        o	Beyond 500 CFM: two large compressors engage.
        •	Predictive Maintenance: Auto-switching of compressors ensures balanced wear and reliable performance.
        •	Live Benchmarking: Real-time kW/CFM analysis highlights efficiency, supporting your sustainability goals.

        "
        imageSrc="/key-vertical-sec-three.png"
        imageLeft={false}
      /> */}

      {/* Image on Left */}
      {/* <FacilitySection
        subtitle="Adv HVAC Controls & Pump Efficiency"
        title="Energy efficiency in production facilities"
        description="
        Get more from your HVAC systems while lowering kW/TR:
        •	Adjust ventilation based on CO₂ sensors (DCV), balancing energy savings and occupant comfort.
        •	Optimize chilled water & cooling water circuits by shutting valves to idle equipment.
        •	Monitor flow, temperature & pressure in real time — isolate high-consumption pumps automatically.
        

        "
        imageSrc="/key-vertical-sec-four.png"
        imageLeft={true}
      /> */}

      <SolFeatureBtmSection
        heading="From Operations to Optimization "
        paragraphs={[
          "Drill down energy distribution to the equipment level. Turn raw data into actionable insights. Combine predictive maintenance, smart strategy, and ESG tracking for lower costs, fewer breakdowns, higher efficiency, reduced emissions, and sustainable growth."
        ]}
        buttonText="Schedule a Demo"
        imageSrc="/Roles Operations to Optimization 1.svg"
        imageAlt="Illustration of integration"
      />
    </div>
  );
};


// export default page