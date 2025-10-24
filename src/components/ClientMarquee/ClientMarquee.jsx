// src/components/ClientMarquee/ClientMarquee.jsx
import React, { useRef } from "react";
import styles from "./ClientMarquee.module.css";

const companies = [
  "Adani - Lucknow Airport",
  "gaudium school hyderabad",
  "Lilamani Group ahmedabad",
  "safal business park ahmedabad",
  "Reliance Fresh Signal store",
  "Radious Hospital",
  "Amity University",
  "Omaxe mall",
  "sanidhya sky rose",
  "Hilton Hotel",
];

export default function ClientMarquee() {
  const trackRef = useRef(null);

  const handleMouseEnter = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className={styles.clientMarquee}>
      <h2 className={styles.marqueeTitle}>Happy Clients</h2>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack} ref={trackRef}>
          {companies.concat(companies).map((name, i) => (
            <div
              className={styles.marqueeItem}
              key={i}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
