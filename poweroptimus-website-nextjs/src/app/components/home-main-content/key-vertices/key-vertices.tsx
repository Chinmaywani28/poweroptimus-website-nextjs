"use client";
import { useRef } from 'react';
import './key-vertices.css';
import Link from 'next/link';

export const KeyVertices = () => {

  return (
    <section className="key-vertices">
      <div className="image-grid">
        {/* Replace these with real <Image /> or <img src=... /> in Next.js */}
        <Link href="/industry">
          <img src="/key-vertices-one.jpg" alt="Industry" />
        </Link>
        <Link href="/robotics">
          <img src="/key-vertices-two.jpg" alt="Robotics" />
        </Link>
        <Link href="/chip">
          <img src="/key-vertices-one.jpg" alt="Chip" />
        </Link>
        <Link href="/medical">
          <img src="/key-vertices-two.jpg" alt="Medical" />
        </Link>
      </div>
      <div className="content">
        <div className="Header1">Key Verticals</div>
        <div className="body1 TextGray1">
          PowerOptimus allows users to select and customize the sensor data, level of detail, and layout to suit requirements. Manage real-time data, trends, and patterns through a modern web-based user interface that offers effective data visualization techniques. Users can easily set up personalized alerts in just a few simple steps.
        </div>
        <div className="margindwn">
        <button className="downBtn">Know More</button>
        </div>
      </div>
    </section>
  );
};
