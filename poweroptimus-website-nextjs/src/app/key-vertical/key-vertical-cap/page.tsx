import './page.css';
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two';
import HeroReusable from '@/app/components/key-verticals-page/hero-reusable';
import FacilitySection from '@/app/components/key-verticals-page/facility-sections-two';
import SolFeatureBtmSection from '@/app/components/solution/sol-feature-btm-section';

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

      <HeroReusable
        headerText={"Key Capabilities"}
        bodyText={
          "Explore how PowerOptimus empowers organizations across industries to enhance operational efficiency, safeguard people and assets, and advance sustainability goals. From intelligent air quality management and hazardous gas monitoring to smart HVAC and compressor control, our integrated solutions deliver actionable insights and automated responses, building safer and more resilient facilities."
        }
      />

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
        subtitle="Eanhaced Enviorment Impact"
        // title="Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium"
        description="Air Quality Monitoring (IAQ & AQI)
        PowerOpimus continuously tracks indoor air quality to ensure healthy, compliant environments:
        •	CO2-based Demand Control Ventilation (DCV): Adjusts fresh air intake in real time based on occupancy, reducing unnecessary energy use and maintaining safe CO₂ levels.
        •	Particulate & Air Quality Monitoring in Clean Rooms.
    
        "
        imageSrc="/key-vertical-sec-three.png"
        imageLeft={false}
      />

      {/* Image on Left */}
      <FacilitySection
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
        subtitle="Boiler Optimization & Temperature Monitoring"
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
      <FacilitySection
        subtitle="Occupancy Monitoring for Smart HVAC Control"
        title="Energy efficiency in production facilities"
        description="Enhance comfort and minimize wastage:
        •	Healthcare & Commercial Buildings: Occupancy sensors regulate HVAC operation, adapting air flow and temperature to the number of people present.
        •	Data-Driven Optimization: Dashboards visualize zone-wise occupancy rates, helping target HVAC operations only where needed.

        "
        imageSrc="/key-vertical-sec-four.png"
        imageLeft={true}
      />

      <FacilitySection
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
      />

      {/* Image on Left */}
      <FacilitySection
        subtitle="Advanced HVAC Controls & Pump Efficiency"
        title="Energy efficiency in production facilities"
        description="
        Get more from your HVAC systems while lowering kW/TR:
        •	Adjust ventilation based on CO₂ sensors (DCV), balancing energy savings and occupant comfort.
        •	Optimize chilled water & cooling water circuits by shutting valves to idle equipment.
        •	Monitor flow, temperature & pressure in real time — isolate high-consumption pumps automatically.
        

        "
        imageSrc="/key-vertical-sec-four.png"
        imageLeft={true}
      />

      <SolFeatureBtmSection
        heading="Ready to build a safer, sustainable future?"
        paragraphs={[
          "Partner with PowerOptimus to transform the way you manage energy, environment, and operations. From improving air quality and safety to driving down energy costs and emissions, we’re here to help you achieve your sustainability goals, smarter and faster."
        ]}
        buttonText="Download Documentation"
        imageSrc="/integration.png"
        imageAlt="Illustration of integration"
      />
    </div>
  );
};


// export default page