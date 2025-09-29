// components/FeatureCard.tsx
"use client";
import React from "react";
import "./solution-feature-section.css";

interface FeatureCardProps {
  title: string;
  description: string;
  titlePosition?: "left" | "right"; // controls blue tab position
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  titlePosition = "left", // default is left
}) => {
  return (
    <div className="feature-card">
      <div className={`title-tab Header2 TextBlue ${titlePosition}`}>{title}</div>
      <div className="description body2 marTopGlobal">{description}</div>
    </div>
  );
};

export default FeatureCard;
