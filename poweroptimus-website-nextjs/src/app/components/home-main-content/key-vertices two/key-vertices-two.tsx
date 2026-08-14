// "use client";
// import Link from 'next/link';
// import './key-vertices-two.css';

// export const KeyVerticesTwo = () => {
//   return (
//     <div className='HomeFeature_container'>
//       <div className='HomeFeature_Home'>

//         <div className='left-img-grid-container'>
//           <div className="left-img-grid">
//             <Link href="/industry">
//               <img src="./key-vertices-one.jpg" alt="Industry" />
//             </Link>

//             <Link href="/robotics">
//               <img src="./key-vertices-two.jpg" alt="Robotics" />
//             </Link>

//             <Link href="/chip">
//               <img src="./key-vertices-one.jpg" alt="Chip" />
//             </Link>

//             <Link href="/medical">
//               <img src="./key-vertices-two.jpg" alt="Medical" />
//             </Link>
//           </div>
//         </div>

//         {/* === Right Side: Text Content === */}
//         <div className='HomeFeature_Leftss'>
//           <div className='Header1 TextBlue'>
//             Key Vertices
//           </div>
//           <div className='body1_300'>
//             Eum in placeat doloremque sed aliquid iste. Enim ullam esse ipsa aut velit alias rerum. Eligendi quasi exercitationem incidunt. Sapiente totam dignissimos alias est dicta magni enim dolores soluta. Nobis reiciendis nulla ex eum id qui. Id et aperiam dolore aspernatur architecto ducimus ut nobis ut.
//           </div>
//           <div className='buttonDiv2'>
//             <button className="know-more-button3">Know More</button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };


"use client";
import Link from 'next/link';
import './key-vertices-two.css';
import { useRouter } from "next/navigation";

export const KeyVerticesTwo = () => {

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/key-verticals");
  };

  return (
    <div className='HomeFeature_container'>
      <div className='HomeFeature_Home'>

        {/* === Left Side: Masonry-style image grid === */}
        <div className='left-img-masonry-container'>
          <div className="left-img-masonry">
            {/* <div >
              <img src="/key-vertices-one.jpg" alt="Industry" />
            </div>
            <div >
              <img src="/ky-vertices-threee.jpg" alt="Chip" />
            </div>
            <div >
              <img src="/Food&Beverage_KeyVerticals_Image.jpg" alt="Robotics" />
            </div>
            
            <div >
              <img src="/Pharmaceutical_KeyVerticals_Image.jpg" alt="Medicalkkk" />
            </div> */}

              {/* before it was only like this
              <div>
                <img src="/Home Page- Key Verticals- Building.jpg" alt="Chip" />
              </div>
              */}
            <div >
              <Link href="/key-verticals">
              <img src="/Home Page- Key Verticals- Data Center.jpg" alt="EnvirOptimus for data center" />
              </Link>
            </div>
            <div >
              <Link href="/key-verticals">
              <img src="/Home Page- Key Verticals- Building.jpg" alt="EnvirOptimus for commercial facilities" />
              </Link>
            </div>
            <div >
              <Link href="/key-verticals">
              <img src="/Home Page- Key Verticals- Food & Beverages.jpg" alt="EnvirOptimus for food and beverages" />
              </Link>
            </div>
            
            <div >
              <Link href="/key-verticals">
              <img src="/Home Page- Key Verticals- Manufacturing.jpg" alt="EnvirOptimus for manufacturing" />
              </Link>
            </div>





            {/* till here new */}
            {/* <div >
              <img src="/ky-vertices-four.jpg" alt="Energy" />
            </div>
            <div >
              <img src="/key-vertical-six.jpg" alt="AI" />
            </div> */}
          </div>
        </div>

        {/* === Right Side: Text Content === */}
        <div className='HomeFeature_Leftsss'>
          <div className='Header2 TextBlue'>
            Key Verticals
          </div>
          {/* <div className='body2'>
            <p>EnvirOptimus helps industries manage energy consumption efficiently, reduce costs, and support sustainability. as a comprehensive Energy Management System (EMS) and Environmental Monitoring System. Its data-driven energy management capabilities make it a valuable solution for all types of industries and sectors with high energy demands and optimum environmental conditions. By using IoT sensors, real-time analytics, and automation, the platform detects inefficiencies early, optimizes load to avoid peak tariffs, and supports renewable energy integration.</p>
            <p>
              Beyond monitoring, EnvirOptimus empowers organizations to take proactive control of their energy strategy. Through advanced visualization dashboards and predictive analytics, facility teams can forecast energy trends, assess the impact of operational changes, and implement automated responses to maintain optimal performance.
            </p>
          </div>
          <div>
            <button onClick={handleNavigate} className="know-more-button3">Know More</button>
          </div> */}

            <div className='body2'>
              EnvirOptimus is designed for high-energy-demand sectors, including commercial buildings (malls, auditoriums, and office spaces), industrial plants and manufacturing facilities, and large infrastructure such as data centers, airports, and transport hubs.

              <div style={{ marginTop: "20px" }}>
                <b>How EnvirOptimus helps:</b> 
              </div>

              <ul style={{ marginTop: "0px" }}>
                <li>Environmental monitoring and compliance</li>
                <li>Energy optimization and peak demand management</li>
                <li>Real-time IoT-based analytics</li>
                <li>Carbon tracking and sustainability reporting</li>
                <li>Predictive insights and automation</li>
              </ul>
            </div>
        </div>

      </div>
    </div>
  );
};
