"use client";

import React, { useState, useEffect } from "react";
import styles from "./vertical-carousel.module.css";

/**
 * Step type
 */
interface Step {
  title: string;
  description: string;
  bg?: string; // optional background color/gradient
}

/**
 * Props for VerticalCarousel
 */
interface VerticalCarouselProps {
  steps: Step[];
}

export default function VerticalCarousel({ steps }: VerticalCarouselProps) {
  const [index, setIndex] = useState(0);
  const SLIDE_HEIGHT = 260; // px → must match CSS

  // keep index in bounds when steps change
  useEffect(() => {
    if (index > steps.length - 1) {
      setIndex(Math.max(0, steps.length - 1));
    }
  }, [steps.length, index]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(steps.length - 1, i + 1));

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselTrack}
        style={{ transform: `translateY(-${index * SLIDE_HEIGHT}px)` }}
      >
        {steps.map((s, idx) => (
          <article
            className={styles.slide}
            key={idx}
            style={{ background: s.bg || "linear-gradient(90deg,#2f80ed,#56ccf2)" }}
            aria-hidden={idx !== index}
          >
            <h3 className={styles.slideTitle}>{s.title}</h3>
            <p className={styles.slideDesc}>{s.description}</p>
          </article>
        ))}
      </div>

      {/* Up/Down Controls */}
      <div className={styles.controls}>
        <button className={styles.ctrlBtn} onClick={prev} disabled={index === 0}>
          ▲
        </button>
        <button
          className={styles.ctrlBtn}
          onClick={next}
          disabled={index >= steps.length - 1}
        >
          ▼
        </button>
      </div>
    </div>
  );
}
