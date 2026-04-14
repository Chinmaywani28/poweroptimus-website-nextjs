// "use client";
// import { useEffect, useRef, useState } from "react";
// import "./feature-video-animation.css";

// const FeatureVideoAnimation = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [currentText, setCurrentText] = useState("");

//   useEffect(() => {
//     const video = videoRef.current;

//     const handleTimeUpdate = () => {
//       if (!video) return;

//       const time = video.currentTime;

//       // ⏱️ Control text based on time
//       if (time >= 0 && time < 2) {
//         setCurrentText("Provides a structured digital foundation with rich asset metadata, system relationships, and design specifications for lifecycle visibility and integration.");
//       } else if (time >= 2 && time < 4) {
//         setCurrentText("Integrates BAS/BMS, PLC/SCADA, and MES systems to capture real-time operational data directly from assets and on-ground infrastructure.");
//       } else if (time >= 4 && time < 6) {
//         setCurrentText("Acts as a centralized data backbone, connecting systems, IoT sensors, and smart meters for seamless data capture, normalization, and BIM mapping.");
//       } else {
//         setCurrentText("");
//       }
//     };

//     video?.addEventListener("timeupdate", handleTimeUpdate);

//     return () => {
//       video?.removeEventListener("timeupdate", handleTimeUpdate);
//     };
//   }, []);

//   return (
//     <section className="video-section">
//       {/* 🎥 Video */}
//       <video
//         ref={videoRef}
//         src="/videos/Neil Automation website Motion Graphic_Option-02 1.mp4"
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="video"
//       />

//       {/* 📝 Overlay Text */}
//       <div className="overlay">
//         <p>{currentText}</p>
//       </div>
//     </section>
//   );
// };

// export default FeatureVideoAnimation;

"use client";
import { useEffect, useRef, useState } from "react";
import "./feature-video-animation.css";


type TextItem = {
  id: number;
  time: number;
  text: string;
  side: "left" | "right";
  top: string;
};

const FeatureVideoAnimation = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [visibleTexts, setVisibleTexts] = useState<TextItem[]>([]);

  // 🧠 Timeline config (EDIT THIS ONLY)
  const timeline: TextItem[] = [
    { id: 1, time: 1, text: "Provides a structured digital foundation with rich asset metadata, system relationships, and design specifications for lifecycle visibility and integration.", side: "left", top: "20%" },
    { id: 2, time: 3, text: "Leverages AI/ML-driven insights to detect anomalies, forecast failures, and support proactive decision-making while minimizing downtime and operational risks.", side: "right", top: "30%" },
    { id: 3, time: 5, text: "Digitizes maintenance workflows with automated alerts and lifecycle tracking to enhance asset reliability and optimize maintenance planning strategies.", side: "left", top: "45%" },
    { id: 4, time: 7, text: "Transforms static models into dynamic, real-time digital replicas powered by live data, enabling monitoring, simulation, and intelligent decision-making.", side: "right", top: "55%" },
    { id: 5, time: 9, text: "Leverages AI/ML-driven insights to detect anomalies, forecast failures, and support proactive decision-making while minimizing downtime and operational risks.", side: "left", top: "65%" },
    { id: 6, time: 11, text: "Enables continuous monitoring and analysis of energy and environmental parameters to improve efficiency, reduce costs, and achieve sustainability goals.", side: "right", top: "75%" },
    { id: 7, time: 13, text: "Provides a structured digital foundation with rich asset metadata, system relationships, and design specifications for lifecycle visibility and integration.", side: "left", top: "85%" },
  ];

  // useEffect(() => {
  //   const video = videoRef.current;

  //   const handleTimeUpdate = () => {
  //     if (!video) return;

  //     const currentTime = video.currentTime;

  //     setVisibleTexts((prev) => {
  //       const newItems = timeline.filter(
  //         (item) =>
  //           currentTime >= item.time &&
  //           !prev.find((p) => p.id === item.id)
  //       );

  //       return [...prev, ...newItems];
  //     });
  //   };

  //   video?.addEventListener("timeupdate", handleTimeUpdate);

  //   return () => {
  //     video?.removeEventListener("timeupdate", handleTimeUpdate);
  //   };
  // }, []);

  useEffect(() => {
    const video = videoRef.current;
    let lastTime = 0;

    const handleTimeUpdate = () => {
      if (!video) return;

      const currentTime = video.currentTime;

      // 🔁 Detect video loop restart
      if (currentTime < lastTime) {
        setVisibleTexts([]); // reset all text
      }

      setVisibleTexts((prev) => {
        const newItems = timeline.filter(
          (item) =>
            currentTime >= item.time && !prev.find((p) => p.id === item.id),
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
        playsInline
        className="video"
      />

      {/* <video
        ref={videoRef}
        src="/videos/envir-video.mp4"
        autoPlay
        muted
        loop // ✅ IMPORTANT
        playsInline
        className="video"
      /> */}

      {/* 📝 Overlay Texts */}
      {visibleTexts.map((item) => (
        <div
          key={item.id}
          className={`overlay-text ${item.side}`}
          style={{ top: item.top }}
        >
          {item.text}
        </div>
      ))}
    </section>
  );
};

export default FeatureVideoAnimation;