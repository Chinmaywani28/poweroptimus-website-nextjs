"use client";
import './home-main-content.css'
import Hero from './hero';
import { useTranslation } from 'react-i18next';
import Slider from '../slider/slider';
// import WhyEnergy from '../whyEnergy/WhyEnergy';
import Homehowitwork from '@/app/homehowitwork/homehowitwork';

import Homefeature from '../homefeature/homefeature';
import Keyvertical from '../keyvertical/keyvertical';
import Table from '../table1/table';
import TableTwo from '../table2/tabletwo';
import WhyEnergy from '../whyEnergy/whyenergy';
import HomefeatureTwo from './homefeature/home-feature-two';
import { FeatureHeader } from './feature-header/feature-header';
import { RecentBlogs } from './recent-blogs/recent-blogs';
import { KeyVertices } from './key-vertices/key-vertices';
import { KeyVerticesTwo } from './key-vertices two/key-vertices-two';
import { FormSection } from './form-section/form-section';
import SolFeatureBtmSection from '../solution/sol-feature-btm-section';
import SustainableDev from './sustainable-dev';
import SustainableGoals from './sustainable-goals';
import SustainableGoalsTwo from './sustainable-goals-two';
import SustainableGoalsThree from './sustainable-goals-three';
import SolutionDescription from '../solution/solution-description';
import FeatureTwo from './feature-two';
import HomeVideo from './home-video';
import FeatureThree from './feature-three';
import FeatureVideoAnimation from './feature-video-animation';
import VideoOverlay from './feature-video-animation-two';
import HomeVideoTwo from './home-video-two';
import ImageBgOverlay from './image-bg';
import ImageOver from './image-over';



const HomeMainContent = () => {

  const { t } = useTranslation(); // Initialize translation hook

  
  return (
    <>
    <div>

      {/* <HomeVideo/> */}

      <HomeVideoTwo/>


      {/* <Hero headerText={t('BuildingSustainableFuture') } bodyText={t('IntroducingEnergySolution')} 
        image='/HeaderSVG.svg'
      /> */}
      {/* slider */}


      {/* description section */}
    <SolutionDescription bodyText={'EnvirOptimus is an Environment and Energy Management solution that combines BIM, Building Management System (BMS), and data analytics to create a digital twin enabling proactive and efficient facility management. It is designed to monitor, analyze, manage, and optimize energy consumption and environmental health with data-driven precision. By leveraging advanced hardware, real-time visibility, and predictive analytics, it empowers organizations to enhance energy efficiency, improve operational performance, and ensure sustainable environmental health.'}/>
      

      {/* <FeatureTwo/> */}
      {/* <FeatureVideoAnimation/> */}
      <VideoOverlay/> 
      {/* this is VideoOverlay is component for video animation */}

      {/* <ImageOver/> */}


      {/* pg content */}
      <FeatureThree/>


      {/* <FeatureThree/> */}



      {/* <SustainableDev/> */}
      {/* <SustainableDev/> moved to solution page dd said */}


      {/* <SustainableGoals/> */}
      {/* <SustainableGoalsTwo/> */}
      {/* <SustainableGoalsThree/> */}

      {/* <Slider/> */}
      {/* why energy efficiency matters the most */}
      <WhyEnergy/>

      {/* how it works */}
      {/* <Homehowitwork/> */}

      {/* table1 */}
      {/* <Table/> */}

      {/* table2 */}
      {/* <TableTwo/> */}

      {/* home feature */}
      {/* <Homefeature/> */}

      {/* key-vertical */}
      {/* <Keyvertical/> */
      }


      



      {/* <HomefeatureTwo/> */}


      {/* Removed dif section instead of Homefeature
      <Homefeature/>
       */}


      {/* <FeatureHeader cards={[
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut",
            link: "string"
          }
      ]}/> */}

      {/* <KeyVertices/> */}
      <KeyVerticesTwo/>
      
      
      {/* <RecentBlogs cards={[

          {
            title: "lorem ipsum industry em",
            image: "./resources-one.png",
            date: "January 1, 2025",
            description: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
            link: "Read More"
          },
          {
            title: "lorem ipsum industry em",
            image: "./resources-one.png",
            date: "January 1, 2025",
            description: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
            link: "Read More"
          },
          {
            title: "lorem ipsum industry em",
            image: "./resources-one.png",
            date: "January 1, 2025",
            description: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
            link: "Read More"
          },
          {
            title: "lorem ipsum industry em",
            image: "./resources-one.png",
            date: "January 1, 2025",
            description: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
            link: "Read More"
          },
          {
            title: "lorem ipsum industry em",
            image: "./resources-one.png",
            date: "January 1, 2025",
            description: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
            link: "Read More"
          },
          {
            title: "lorem ipsum industry em",
            image: "./resources-one.png",
            date: "January 1, 2025",
            description: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
            link: "Read More"
          },
          {
            title: "lorem ipsum industry em",
            image: "./resources-one.png",
            date: "January 1, 2025",
            description: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
            link: "Read More"
          },
          {
            title: "lorem ipsum industry em",
            image: "./resources-one.png",
            date: "January 1, 2025",
            description: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
            link: "Read More"
          }
      ]}/> */}

      {/* <FormSection/> */}

      {/* <SolFeatureBtmSection
        heading="A Simple and Customizable Solution Designed for Industries Needs"
        paragraphs={[
          "EnvirOptimus allows users to select and customize the sensor data, level of detail, and layout to suit requirements. Manage real-time data, trends, and patterns through a modern web-based user interface that offers effective data visualization techniques. Users can easily set up personalized alerts in just a few simple steps."
        ]}
        buttonText="Schedule a Demo"
        imageSrc="/HomePage_Footer_Vector_Image.svg"
        imageAlt="Illustration of integration"
      /> */}

      <SolFeatureBtmSection
        heading="Take the Next Step Toward Smarter Operations"
        paragraphs={[
          "From monitoring to optimization, EnvirOptimus empowers you to manage environment, energy, and performance in one unified platform scalable for every stage of your journey."
        ]}
        buttonText="Schedule a Demo"
        // imageSrc="/HomePage_Footer_Vector_Image.svg"
        imageSrc="/home-page-footer-one.jpg"
        imageAlt="Illustration of integration"
      />

    </div>
    </>

  ); 
}

export default HomeMainContent;

