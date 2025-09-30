"use client";

import React from "react";
import styles from "./image-with-legend.module.css";

/**
 * Single legend item
 */
interface LegendItem {
  key: string;   // used for icon class
  label: string; // text
}

/**
 * Props for ImageWithLegend
 */
interface ImageWithLegendProps {
  imageSrc: string;
  legendItems: LegendItem[];
}

export default function ImageWithLegend({ imageSrc, legendItems }: ImageWithLegendProps) {
  return (
    <div className={styles.imageBlock}>
      {/* Main illustration */}
      <img src={imageSrc} alt="Illustration" className={styles.mainImage} />

      {/* Legend below image */}
      <div className={styles.legend}>
        {legendItems.map((it) => (
          <div className={styles.legendItem} key={it.key}>
            <span
              className={`${styles.icon} ${styles["icon-" + it.key]}`}
              aria-hidden="true"
            ></span>
            <span className={styles.legendLabel}>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
