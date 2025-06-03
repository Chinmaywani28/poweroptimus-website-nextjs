"use client";
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './hero.css'; // Import HomePage specific styles

const Hero = () => {
  const { t } = useTranslation(); // Initialize translation hook
  
  return (
    <div>
      <div className='layout'>solution</div>
      <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Overview Title Lorem Epsum</h1>
          <p>
            Itaque quod facilis dolor deleniti distinctio alias. Dolorum voluptates qui doloribus
            fugiat aut dolores. Facilis iure molestiae. Repudiandae doloremque aperiam. Magnam sunt
            tempore doloribus. Laudantium molestias vel sed neque in minus optio. Molestiae
            molestiae est architecto incidunt autem. Nam ut quod ratione corporis animi doloremque
            repellat. Id non adipisci ut harum. A dolorem dolorum.
          </p>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Hero
