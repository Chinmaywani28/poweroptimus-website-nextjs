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

      <div className='HomeFeature_container'>
      <div className='HomeFeature_Home'>

        {/* === Left Side: Masonry-style image grid === */}
        <div className='left-img-masonry-container'>
          <div className="left-img-masonry">
            <Link href="/industry">
              <img src="./key-vertices-one.jpg" alt="Industry" />
            </Link>
            <Link href="/chip">
              <img src="./ky-vertices-threee.jpg" alt="Chip" />
            </Link>
            <Link href="/robotics">
              <img src="./ky-vertices-two.jpg" alt="Robotics" />
            </Link>
            
            <Link href="/medical">
              <img src="./ky-vertices-two.jpg" alt="Medicalkkk" />
            </Link>
            <Link href="/energy">
              <img src="./ky-vertices-four.jpg" alt="Energy" />
            </Link>
            <Link href="/ai">
              <img src="./key-vertical-six.jpg" alt="AI" />
            </Link>
          </div>
        </div>

        {/* === Right Side: Text Content === */}
        <div className='HomeFeature_Leftss'>
            <div>
              <h2 className='Header1sec'>· Customizable to Industry Needs:</h2>
              <div className="body2three">
                Whether it's a factory, hospital, or high-rise, PowerOptimus adapts to the unique KPIs that matter most to your operation.
              </div> 
            </div>

            <div>
              <h2 className='Header1sec'>· Customizable to Industry Needs:</h2>
              <div className="body2three">
                Whether it's a factory, hospital, or high-rise, PowerOptimus adapts to the unique KPIs that matter most to your operation.
              </div> 
            </div>

            <div>
              <h2 className='Header1sec'>· Customizable to Industry Needs:</h2>
              <div className="body2three">
                Whether it's a factory, hospital, or high-rise, PowerOptimus adapts to the unique KPIs that matter most to your operation.
              </div> 
            </div>

            <div>
              <h2 className='Header1sec'>· Customizable to Industry Needs:</h2>
              <div className="body2three">
                Whether it's a factory, hospital, or high-rise, PowerOptimus adapts to the unique KPIs that matter most to your operation.
              </div> 
            </div>


        </div>

      </div>
    </div>
    </div>
  );
};
