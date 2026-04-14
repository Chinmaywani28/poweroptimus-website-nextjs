"use client";
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './solution-description.css'; // Import feature-section specific styles

type text = {
 bodyText: string
}

const SolutionDescription = ({bodyText}: text) => {
  
  return (
    <div className="body2 alignbodytext2 marginSide">
        {/* EnvirOptimus is a scalable Environment and Energy Management Solution built to improve energy efficiency, lower operating costs, and meet sustainability targets. By combining advanced energy monitoring with environmental performance management, it enables organizations to enhance operational control, ensure compliance, and drive measurable sustainability outcomes. */}

        {bodyText}
    </div>
  );
};

export default SolutionDescription;



