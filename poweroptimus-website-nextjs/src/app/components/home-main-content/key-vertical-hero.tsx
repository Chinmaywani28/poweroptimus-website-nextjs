"use client";
import React from "react";
import "./key-vetical-hero.css";


type HeroProps = {
  image: string;
};

const KeyVerticalHero = ({image}: HeroProps) => {

  return (
   <section className="hero">
      <img src={image} alt="hero" className="hero-img" />
    </section>

    
  );
};

export default KeyVerticalHero;
