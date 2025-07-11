"use client";
import Link from 'next/link';
import './form-section.css';

export const FormSection = () => {
  return (
    <section className='HomeFeature_container'>
      <div className='HomeFeature_Home'>

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

        <div className='HomeFeature_Leftss'>
          <div className='Header1 TextBlue'>
            Key Vertices
          </div>
          <div className='body1_300'>
            Eum in placeat doloremque sed aliquid iste. Enim ullam esse ipsa aut velit alias rerum. Eligendi quasi exercitationem incidunt. Sapiente totam dignissimos alias est dicta magni enim dolores soluta. Nobis reiciendis nulla ex eum id qui. Id et aperiam dolore aspernatur architecto ducimus ut nobis ut.
          </div>
          <div className='buttonDiv2'>
            <button className="know-more-button3">Know More</button>
          </div>
        </div>

      </div>
    </section>
  );
};
