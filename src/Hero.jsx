import React, { useEffect, useState } from "react";
import "./Hero.css";
import heroVideo from "./assets/hero-bg.mp4"; // usa qui il tuo mp4

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150); // qualche centesimo
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero-section${visible ? " fade-in" : ""}`}>
      {/* VIDEO BACKGROUND */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* TESTO HERO */}
      <h1 className="hero-heading">
        Tecnologia che unisce,<br />
        automatizza e fa crescere.
      </h1>
    </section>
  );
}
