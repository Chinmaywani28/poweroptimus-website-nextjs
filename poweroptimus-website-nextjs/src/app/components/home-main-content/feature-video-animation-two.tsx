"use client";
import { useEffect, useRef, useState } from "react";
import "./feature-video-animation-two.css";

type TextItem = {
  id: number;
  time: number;
  text: string;
  side: "left" | "right";
  bottom: string; // ✅ changed from top → bottom
};

const VideoOverlay = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visibleTexts, setVisibleTexts] = useState<TextItem[]>([]);

  // 🧠 Timeline (bottom → upward stacking)
  const timeline: TextItem[] = [
    { id: 1, time: 1, text: "Provides a digital foundation with asset data, system relationships, and design insights for lifecycle integration.", side: "left", bottom: "10%" },
    { id: 2, time: 3, text: "Connects BAS/BMS, PLC/SCADA, and MES to capture real-time operational data from assets.", side: "right", bottom: "10%" },
    { id: 3, time: 5, text: "Central data backbone integrating systems, IoT sensors, and meters for seamless data capture and normalization.", side: "left", bottom: "34%" },
    { id: 4, time: 7, text: "Continuously monitors and analyzes energy and environmental data to improve efficiency and reduce costs.", side: "right", bottom: "40%" },
    { id: 5, time: 9, text: "Uses AI/ML to detect anomalies, predict failures, and enable proactive, risk-free operations.", side: "left", bottom: "57%" },
    { id: 6, time: 11, text: "Automates maintenance workflows with alerts and lifecycle tracking for improved reliability.", side: "right", bottom: "66%" },
    { id: 7, time: 13, text: "Creates a real-time digital replica for monitoring, simulation, and data-driven decision-making.", side: "left", bottom: "80%" },
  ];

  useEffect(() => {
    const video = videoRef.current;
    let lastTime = 0;

    const handleTimeUpdate = () => {
      if (!video) return;

      const currentTime = video.currentTime;

      // 🔁 Reset when video loops
      // if (currentTime < lastTime) {
      //   setVisibleTexts([]);
      // }

      setVisibleTexts((prev) => {
        const newItems = timeline.filter(
          (item) =>
            currentTime >= item.time &&
            !prev.find((p) => p.id === item.id)
        );

        return [...prev, ...newItems];
      });

      lastTime = currentTime;
    };

    video?.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section className="video-section">
      {/* 🎥 Video */}
      <video
        ref={videoRef}
        src="/videos/enviro-home-video.mp4"
        autoPlay
        muted
        // loop
        playsInline
        className="video"
      />

      {/* 📝 Overlay Text */}
      {visibleTexts.map((item) => (
        <div
          key={item.id}
          className={`overlay-text ${item.side}`}
          style={{ bottom: item.bottom }} // ✅ key change
        >
          {item.text}
        </div>
      ))}
    </section>
  );
};

export default VideoOverlay;