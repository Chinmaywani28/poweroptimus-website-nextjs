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

export const KeyVerticesTwo = () => {
  return (
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
          <div className='Header1 TextBlue'>
            Key Verticals
          </div>
          <div className='body1_300'>
            PowerOptimus helps industries manage energy consumption efficiently, reduce costs, and support sustainability. Its data-driven energy management capabilities make it a valuable solution for all types of industries and sectors with high energy demands and optimum environmental conditions. By harnessing IoT sensors, real-time analytics, and intelligent automation, the platform identifies inefficiencies as they emerge, optimizes load balancing to avoid peak tariffs, and enables renewable energy integration to reduce reliance on the grid.  
          </div>
          <div className='buttonDiv2'>
            <button className="know-more-button3">Know More</button>
          </div>
        </div>

      </div>
    </div>
  );
};
