
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// const Homepage = () => {

//   return (
//     <div className='container'>
//     <div className="App">

//         <h1>asdf</h1>
       
//       </Navbar>
//       {/* <HomePage /> */}
//       {/* <Footer /> */}
//     </div>
//     </div>
//   )
// }

// export default Homepage;




"use client"
import Navbar from '../components/navbar/Navbar';
import HomeMainContent from '../components/home-main-content/home-main-content'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeMainContent />
      
    </div>
  );
}
