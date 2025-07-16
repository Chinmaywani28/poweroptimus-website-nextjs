"use client";
import Link from 'next/link';
import './why-power-optimus-two.css';

export const WhyPowerOptimusTwo = () => {
  return (
    <div className='HomeFeature_container'>

      {/* ✅ Top Heading and Description */}
      <div className="HomeFeature_intro">
        <h2 className="Header1sec TextBlue marTopBtmZero">Why PowerOptimus?</h2>
        <p className="body1sec">
          PowerOptimus delivers more than just monitoring; it empowers your teams to optimize energy use, safeguard the environment, and drive operational excellence. 
        </p>
      </div>

      {/* ✅ Existing Grid Starts Here */}
      <div className='HomeFeature_Home'>

        {/* === Left Side: Background Section (grid from 1 to 7) === */}
        <div className='left-img-grid-container'>
          <div className="left-img-grid">
            <Link href="/industry">
              <img src="./key-vertices-one.jpg" alt="Industry" />
            </Link>

            <Link href="/robotics">
              <img src="./key-vertices-two.jpg" alt="Robotics" />
            </Link>

            <Link href="/chip">
              <img src="./key-vertices-one.jpg" alt="Chip" />
            </Link>

            <Link href="/medical">
              <img src="./key-vertices-two.jpg" alt="Medical" />
            </Link>
          </div>
        </div>

        {/* === Right Side: Text Content === */}
        <div className='HomeFeature_Leftss'>
          <div>
            <h2 className='Header2sec TextBlue marTopBtm'>· Lorem, ipsum dolor.</h2>
            <div className='body2sec TextBlue marTopGlobal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolores!
            </div>
          </div>

          <div>
            <h2 className='Header2sec TextBlue marTopBtm'>· Lorem, ipsum dolor.</h2>
            <div className='body2sec TextBlue marTopGlobal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolores!
            </div>
          </div>

          <div>
            <h2 className='Header2sec TextBlue marTopBtm'>· Lorem, ipsum dolor.</h2>
            <div className='body2sec TextBlue marTopGlobal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolores!
            </div>
          </div>

         <div>
            <h2 className='Header2sec TextBlue marTopBtm'>· Lorem, ipsum dolor.</h2>
            <div className='body2sec TextBlue marTopGlobal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolores!
            </div>
          </div>


          {/* <li><strong>Customizable to Industry Needs:</strong> Whether it's a factory, hospital, or high-rise, PowerOptimus adapts to the unique KPIs that matter most to your operation</li>

            <li><strong>Scalable and Future-Ready:</strong> Designed to grow with your business, our platform integrates effortlessly with existing systems, including BIM, IoT devices, and SCADA.</li>
            <li><strong>Actionable Insights, Always-On Monitoring:</strong> Continuous data visibility across energy, environment, and operations helps you make informed decisions faster.</li>
            <li><strong>Driving Environmental Responsibility:</strong> From toxic gas emission monitoring in factories to AQI tracking in hospitals, PowerOptimus is built to support environmentally conscious operations.</li> */}


          {/* <div className='Header1 TextBlue'>
            Key Vertices
          </div>
          <div className='body1_300'>
            Eum in placeat doloremque sed aliquid iste. Enim ullam esse ipsa aut velit alias rerum. Eligendi quasi exercitationem incidunt. Sapiente totam dignissimos alias est dicta magni enim dolores soluta. Nobis reiciendis nulla ex eum id qui. Id et aperiam dolore aspernatur architecto ducimus ut nobis ut.
          </div>
          <div className='buttonDiv2'>
            <button className="know-more-button3">Know More</button>
          </div> */}
        </div>

      </div>
    </div>
  );
};
