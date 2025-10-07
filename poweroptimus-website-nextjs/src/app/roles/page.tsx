import React from 'react'
import KeyverticalTwo from '../components/key-verticals-page/key-vertical-two'
import FacilitySections from '../components/key-verticals-page/facility-sections'
import HeroReusable from '../components/key-verticals-page/hero-reusable'
import SolFeatureBtmSection from '../components/solution/sol-feature-btm-section'
import Hero from '../components/home-main-content/hero'

const page = () => {
  return (
    <>
      {/* <KeyverticalTwo
        title="Energy Solutions for Every Stakeholder"
        description="Whether you're a hands-on technical manager, a strategic sustainability leader, or a service provider delivering client solutions, our comprehensive platform is designed to meet your unique needs. Gain real-time visibility, drive efficiency, and achieve measurable results with our energy monitoring and management solutions. See how we empower every stakeholder to make informed decisions and achieve their energy goals"
        showLink={false}
      /> */}

      {/* <HeroReusable headerText={'Empower Every Role to Drive Efficiency and Sustainability'} bodyText={'From facility managers ensuring day-to-day reliability to CXOs shaping long-term ESG strategies, PowerOptimus delivers tailored insights and tools for every stakeholder. Whether your focus is cutting costs, enhancing operational performance, or advancing sustainability targets, our platform equips you with real-time data, predictive intelligence, and transparent reporting so you can build safer, smarter, and more sustainable operations with confidence.'} /> */}

      <Hero headerText={"Empower Every Role to Drive Efficiency and Sustainability"} bodyText={
          "From facility managers ensuring day-to-day reliability to CXOs shaping long-term ESG strategies, PowerOptimus delivers tailored insights and tools for every stakeholder. Whether your focus is cutting costs, enhancing operational performance, or advancing sustainability targets, our platform equips you with real-time data, predictive intelligence, and transparent reporting so you can build safer, smarter, and more sustainable operations with confidence." 
      } image='/HeaderSVG.svg'/>


      <FacilitySections
        title="Facility Managers"
        text="Facility managers are tasked with ensuring the smooth and efficient operation of building systems daily. From managing HVAC, lighting, and equipment schedules to balancing energy consumption with occupant comfort, their role is critical to maintaining reliability and cost control. PowerOptimus supports facility managers by providing real-time monitoring and control of energy-intensive assets, sending proactive alerts for abnormal consumption or equipment failure, and reducing downtime through predictive insights. This ensures that buildings remain comfortable and operationally sound while lowering utility costs and maintenance burdens.
        "
        // listOne="Provides real-time monitoring and control of energy-consuming assets"
        // listTwo="Sends proactive alerts for abnormal consumption or equipment failure"
        // listThree="Reduces downtime through predictive insights and maintenance schedules"
        // listFour="Helps maintain optimal working conditions while reducing utility bills"
        imageSrc="./roles-one.png"
        label1="Predictive Maintenance"
        label2="Energy Management"
        label3="Employee Awareness Training"
        showList={true}
        tagPath="/roles/roles-cap"
      />

      <FacilitySections
        title="Operations Head"
        text="Operations heads oversee plant and process performance, where efficiency, cost management, and resource optimization are key to achieving operational excellence. PowerOptimus empowers them with facility-wide dashboards that provide instant visibility into energy usage, helping to correlate energy consumption with process output and identify bottlenecks. Load balancing and shift optimization features enable better resource allocation, while benchmarking and target setting support energy budgeting and long-term performance improvement. This visibility allows operations leaders to enhance productivity without losing sight of energy and cost efficiency.
        "
        imageSrc="./roles-two.png"
        // listOne="Offers facility-wide dashboards for instant visibility into energy usage"
        // listTwo="Correlates energy consumption with process output to identify bottlenecks"
        // listThree="Enables load balancing and shift optimization based on usage trends"
        // listFour="Supports energy budgeting, target setting, and performance benchmarking"
        reverse
        label1="Efficiency Improvements"
        label2="Data Analysis"
        label3="Sustainability and ESG Analysis"
        showList={true}
        tagPath="/roles/roles-cap"

      />

      

      <FacilitySections
        title="Energy Managers"
        text="Energy managers focus on reducing consumption, improving efficiency, and driving sustainability across operations. Their role has become increasingly strategic and data-driven, requiring tools that provide both depth and clarity. PowerOptimus equips energy managers with granular, circuit-level monitoring and historical data, helping them identify inefficiencies through trend analysis and consumption patterns. The platform also enables benchmarking across different departments or locations, ensuring fair comparisons and actionable insights. By supporting compliance with ISO 50001 and other energy management frameworks, our solutions help energy managers achieve both organizational and regulatory sustainability goals.
        "
        // listOne="Provides granular, circuit-level monitoring and historical data"
        // listTwo="Identifies inefficiencies with trend analysis and consumption patterns"
        // listThree="Enables benchmarking across departments or locations"
        // listFour="Supports ISO 50001, compliance, and other energy management frameworks"
        imageSrc="./roles-three.png"
        label1="Energy Audits"
        label2="Detects Operational Inefficiencies"
        label3="ROI Improvement"
        showList={true}
        tagPath="/roles/roles-cap"

      />

      <FacilitySections
        title="C-Suite Executives (CXOs)"
        text="For CXOs, the priorities extend beyond day-to-day operations to profitability, compliance, and long-term sustainability. They require insights that connect performance with strategic decision-making, not just raw data. PowerOptimus addresses this by delivering executive dashboards with key performance indicators spanning energy, cost, and carbon impact. The platform enables leaders to align ESG initiatives with real-time operational performance while also providing ROI projections for energy interventions and capital investments. With scenario analysis and forecasting, this solution  empowers executives to make informed strategic decisions that balance profitability, compliance, and environmental responsibility.
        "
        // listOne="Delivers executive dashboards with KPIs across energy, cost, and carbon"
        // listTwo="Aids in aligning ESG goals with real-time operational performance"
        // listThree="Offers ROI projections for energy interventions and capital investments"
        // listFour="Empowers strategic planning through scenario analysis and forecasting"
        imageSrc="./roles-four.png"
        reverse
        label1="Data Analysis"
        label2="ROI Improvement"
        label3="Sustainability and ESG Analysis"
        showList={true}
        tagPath="/roles/roles-cap"

      />

      <FacilitySections
        title="EHS(Environmental Health & Safety) Heads"
        text="EHS leaders focus on sustainability, compliance, and reducing the environmental footprint of operations. Their responsibilities often extend to tracking emissions, reporting under frameworks like ISO 14001, and ensuring adherence to internal and external sustainability standards. PowerOptimus helps EHS heads by automatically tracking carbon emissions and energy intensity metrics, simplifying GHG reporting and compliance documentation. The platform provides visibility into sustainability KPIs across sites and teams, and it drives behavioural change by making progress transparent and actionable. This not only ensures compliance but also embeds sustainability into the daily culture of operations.
        "
        // listOne="Tracks carbon emissions and energy intensity metrics automatically"
        // listTwo="Supports GHG reporting frameworks, ISO 14001 compliance, and other sustainability documentation"
        // listThree="Enables visibility into sustainability KPIs across sites and teams"
        // listFour="Encourages behavioral change by making progress visible and actionable"
        imageSrc="./roles-five.png"
        label1="Co2 Emissions Monitoring"
        label2="Safety Audits"
        label3="Sustainability and ESG Analysis"
        showList={true}
        tagPath="/roles/roles-cap"

      />

      <FacilitySections
        title="Production Managers"
        text="Production managers are under constant pressure to maximize throughput, quality, and uptime, often balancing trade-offs between productivity and energy use. PowerOptimus helps them strike this balance by linking machine-level energy data with production metrics, making inefficiencies visible during idle, peak, or off-peak hours. By supporting lean manufacturing through energy-aware scheduling, the platform ensures that processes run with minimal waste and maximum efficiency. This allows production managers to maintain output targets while reducing unnecessary energy expenditure, achieving both operational and sustainability objectives.
        "
        imageSrc="./roles-four.png"
        // listOne="Links machine-level energy use with production metrics"
        // listTwo="Highlights inefficiencies during idle, peak, or off-peak hours"
        // listThree="Supports lean manufacturing through energy-aware scheduling"
        // listFour="Minimizes waste while ensuring production targets are met"
        reverse
        label1="Machine Energy Intensity"
        label2="Predictive Maintenance"
        label3="Detects Operation Inefficiencies"
        showList={true}
        tagPath="/roles/roles-cap"

      />

      {/* <FacilitySections
        title="Health Inspectors"
        text="Health inspectors oversee the adherence to safety and environmental regulations related to building operations, air quality, and equipment safety.
        Monitors HVAC and indoor environmental quality in real time
        Helps track equipment performance and preventive maintenance
        Provides logs and reports to support health audits and inspections
        Ensures transparency in adherence to operational health standards"
        // listOne="Monitors HVAC and indoor environmental quality in real time"
        // listTwo="Helps track equipment performance and preventive maintenance"
        // listThree="Provides logs and reports to support health audits and inspections"
        // listFour="Ensures transparency in adherence to operational health standards"
        imageSrc="./roles-five.png"
        label1="Real-Time Usage Insights"
        label2="Predictive Maintenance Alerts"
        label3="Environmental Impact"
        showList={true}
        tagPath="/roles/roles-cap"
      /> */}

      <SolFeatureBtmSection
        heading="Ready to Power a Safer, Smarter, and More Sustainable Future?"
        paragraphs={[
          "No matter your role, be it facilities, operations, energy, or sustainability, PowerOptimus can help you streamline operations, cut energy costs, and drive meaningful progress toward your sustainability goals. From real-time insights to proactive control, we’re here to support your journey toward operational excellence and environmental responsibility."
        ]}
        buttonText="Schedule a Demo"
        imageSrc="/solutions-bottom.svg"
        imageAlt="Illustration of integration"
      />

    </>
  )
}

export default page