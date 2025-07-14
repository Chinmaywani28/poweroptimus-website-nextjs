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



const HomeMainContent = () => {

  const { t } = useTranslation(); // Initialize translation hook
  

  return (
    <>
    <div>
      <Hero headerText={t('BuildingSustainableFuture') } bodyText={t('IntroducingEnergySolution')} />
      {/* slider */}
      
      <Slider/>
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


      



      <HomefeatureTwo/>
      <Homefeature/>
      
      <FeatureHeader cards={[
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut odit ",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut odit ",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut odit ",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut odit ",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut odit ",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut odit ",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut odit ",
            link: "string"
          },
          {
            image: "./home-feature-header.jpg",
            description: "Et hic quisquam. Id expedita laboriosam temporibus placeat quia repellat sapiente et. Quo ex deserunt aperiam. Est fuga ut odit ",
            link: "string"
          }
      ]}/>

      {/* <KeyVertices/> */}
      <KeyVerticesTwo/>
      
      
      <RecentBlogs cards={[

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
      ]}/>

      {/* <FormSection/> */}

    </div>
    </>

  ); 
}

export default HomeMainContent;

