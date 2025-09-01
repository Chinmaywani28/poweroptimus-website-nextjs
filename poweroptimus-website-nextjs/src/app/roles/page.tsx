import React from 'react'
import KeyverticalTwo from '../components/key-verticals-page/key-vertical-two'
import FacilitySections from '../components/key-verticals-page/facility-sections'
import HeroReusable from '../components/key-verticals-page/hero-reusable'
import SolFeatureBtmSection from '../components/solution/sol-feature-btm-section'

const page = () => {
  return (
    <>
      {/* <KeyverticalTwo
        title="Energy Solutions for Every Stakeholder"
        description="Whether you're a hands-on technical manager, a strategic sustainability leader, or a service provider delivering client solutions, our comprehensive platform is designed to meet your unique needs. Gain real-time visibility, drive efficiency, and achieve measurable results with our energy monitoring and management solutions. See how we empower every stakeholder to make informed decisions and achieve their energy goals"
        showLink={false}
      /> */}

      <HeroReusable headerText={'Empower Every Role to Drive Efficiency and Sustainability'} bodyText={'From facility managers ensuring day-to-day reliability to CXOs shaping long-term ESG strategies, PowerOptimus delivers tailored insights and tools for every stakeholder. Whether your focus is cutting costs, enhancing operational performance, or advancing sustainability targets, our platform equips you with real-time data, predictive intelligence, and transparent reporting so you can build safer, smarter, and more sustainable operations with confidence.'} />


      <FacilitySections
        title="Facility Managers / Administrators"
        text="Facility managers are responsible for the day-to-day efficiency and reliability of building systems. From HVAC to lighting and equipment scheduling, they must balance occupant comfort, energy use, and maintenance tasks."
        listOne="Provides real-time monitoring and control of energy-consuming assets"
        listTwo="Sends proactive alerts for abnormal consumption or equipment failure"
        listThree="Reduces downtime through predictive insights and maintenance schedules"
        listFour="Helps maintain optimal working conditions while reducing utility bills"
        imageSrc="./roles-one.png"
        label1="Real-Time Usage Insights"
        label2="Predictive Maintenance Alerts"
        label3="Environmental Impact"
        showList={true}
        tagPath="/roles/roles-cap"
      />

      <FacilitySections
        title="Operations Heads"
        text="Operations Heads oversee plant and process performance, striving for operational excellence while managing budgets and resources."
        imageSrc="./roles-two.png"
        listOne="Offers facility-wide dashboards for instant visibility into energy usage"
        listTwo="Correlates energy consumption with process output to identify bottlenecks"
        listThree="Enables load balancing and shift optimization based on usage trends"
        listFour="Supports energy budgeting, target setting, and performance benchmarking"
        reverse
        label1="Real-Time Usage Insights"
        label2="Predictive Maintenance Alerts"
        label3="Environmental Impact"
        showList={true}
        tagPath="/roles/roles-cap"

      />

      

      <FacilitySections
        title="Energy Managers"
        text="Energy Managers lead efforts to reduce energy usage, improve efficiency, and achieve sustainability targets. Their role is increasingly data-driven and strategic."
        listOne="Provides granular, circuit-level monitoring and historical data"
        listTwo="Identifies inefficiencies with trend analysis and consumption patterns"
        listThree="Enables benchmarking across departments or locations"
        listFour="Supports ISO 50001, compliance, and other energy management frameworks"
        imageSrc="./roles-three.png"
        label1="Real-Time Usage Insights"
        label2="Predictive Maintenance Alerts"
        label3="Environmental Impact"
        showList={true}
        tagPath="/roles/roles-cap"

      />

      <FacilitySections
        title="CXOs (Chief Executives / C-Suite)"
        text="CXOs are focused on profitability, compliance, and long-term sustainability. They need insights, not just data, to support ESG initiatives and operational transformation."
        listOne="Delivers executive dashboards with KPIs across energy, cost, and carbon"
        listTwo="Aids in aligning ESG goals with real-time operational performance"
        listThree="Offers ROI projections for energy interventions and capital investments"
        listFour="Empowers strategic planning through scenario analysis and forecasting"
        imageSrc="./roles-four.png"
        reverse
        label1="Real-Time Usage Insights"
        label2="Predictive Maintenance Alerts"
        label3="Environmental Impact"
        showList={true}
        tagPath="/roles/roles-cap"

      />

      <FacilitySections
        title="Sustainability Leaders"
        text="Sustainability leaders track the environmental impact of operations and ensure compliance with internal and external sustainability standards."
        listOne="Tracks carbon emissions and energy intensity metrics automatically"
        listTwo="Supports GHG reporting frameworks, ISO 14001 compliance, and other sustainability documentation"
        listThree="Enables visibility into sustainability KPIs across sites and teams"
        listFour="Encourages behavioral change by making progress visible and actionable"
        imageSrc="./roles-five.png"
        label1="Real-Time Usage Insights"
        label2="Predictive Maintenance Alerts"
        label3="Environmental Impact"
        showList={true}
        tagPath="/roles/roles-cap"

      />

      <FacilitySections
        title="Production Managers"
        text="Production managers focus on throughput, quality, and uptime. They often face trade-offs between operational efficiency and energy consumption."
        imageSrc="./roles-four.png"
        listOne="Links machine-level energy use with production metrics"
        listTwo="Highlights inefficiencies during idle, peak, or off-peak hours"
        listThree="Supports lean manufacturing through energy-aware scheduling"
        listFour="Minimizes waste while ensuring production targets are met"
        reverse
        label1="Real-Time Usage Insights"
        label2="Predictive Maintenance Alerts"
        label3="Environmental Impact"
        showList={true}
        tagPath="/roles/roles-cap"

      />

      <FacilitySections
        title="Health Inspectors"
        text="Health inspectors oversee the adherence to safety and environmental regulations related to building operations, air quality, and equipment safety."
        listOne="Monitors HVAC and indoor environmental quality in real time"
        listTwo="Helps track equipment performance and preventive maintenance"
        listThree="Provides logs and reports to support health audits and inspections"
        listFour="Ensures transparency in adherence to operational health standards"
        imageSrc="./roles-five.png"
        label1="Real-Time Usage Insights"
        label2="Predictive Maintenance Alerts"
        label3="Environmental Impact"
        showList={true}
        tagPath="/roles/roles-cap"
      />

      <SolFeatureBtmSection
        heading="Easy to Integrate with Existing Systems"
        paragraphs={[
          "PowerOptimus is more than a monitoring tool—it is a strategic platform designed to help organizations gain complete control over energy and environmental performance. With integrated energy monitoring systems, smart dashboards, and real-time analytics, PowerOptimus empowers organizations to optimize operations and uphold high-performance standards."
        ]}
        buttonText="Download Documentation"
        imageSrc="/integration.png"
        imageAlt="Illustration of integration"
      />

    </>
  )
}

export default page