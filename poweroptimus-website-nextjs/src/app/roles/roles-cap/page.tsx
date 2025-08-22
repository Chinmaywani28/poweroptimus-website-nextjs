import FacilitySectionsTwo from '@/app/components/key-verticals-page/facility-sections-two';
import './page.css';
import KeyverticalTwo from '@/app/components/key-verticals-page/key-vertical-two';
import HeroReusable from '@/app/components/key-verticals-page/hero-reusable';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageLeft?: boolean;
}

export const page = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageLeft = false,
}: FeatureSectionProps) => {
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

    <HeroReusable headerText={'Key Capabilities'} bodyText={'Explore how PowerOptimus empowers organizations across industries to enhance operational efficiency, safeguard people and assets, and advance sustainability goals. From intelligent air quality management and hazardous gas monitoring to smart HVAC and compressor control, our integrated solutions deliver actionable insights and automated responses, building safer and more resilient facilities.'} />


      <FacilitySectionsTwo
        title="Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium"
        subtitle="HVAC Controls and Monitoring"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam. chine operations, reducing downtime, and minimizing waste.PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime"
        imageSrc="./key-vertical-sec-one.png"
        imageLeft={false}
      />

      <FacilitySectionsTwo
        title="Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium"
        subtitle="AQI Monitoring"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam. chine operations, reducing downtime, and minimizing waste.PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime"
        imageSrc="./key-vertical-sec-two.png"
        imageLeft={true}
      />

      <FacilitySectionsTwo
        title="Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium "
        subtitle="Temperature Monitoring"
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam. chine operations, reducing downtime, and minimizing waste.PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime"
        imageSrc="./key-vertical-sec-three.png"
        imageLeft={false}
      />

      <FacilitySectionsTwo
        title="Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium"
        subtitle="Early Fault Detection "
        description="Vitae incidunt omnis suscipit omnis natus non. Facilis non omnis id iure qui quaerat voluptate aliquam. Quis totam voluptatem maiores at explicabo architecto sed voluptatem laudantium. Vitae similique totam. chine operations, reducing downtime, and minimizing waste.PowerOptimus improves energy efficiency in production facilities by analyzing energy consumption against committed demand thus optimizing machine operations, reducing downtime"
        imageSrc="./key-vertical-sec-four.png"
        imageLeft={true}
      />
    </div>
  );
};


export default page