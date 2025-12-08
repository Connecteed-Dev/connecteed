import React, { useState } from "react";
import "./Services.css";
import imgCustom from "./assets/Frame 1707480667.svg";
import imgSaas from "./assets/Group 1171275099.svg";
import imgFeed from "./assets/image 1.svg";
import imgUi from "./assets/Frame 1707480709 (1).svg";
import imgEcom from "./assets/E-commerce.svg";
import ContactPage from "./ContactPage";

const services = [
  {
    title: "Software Custom",
    desc: "Realizziamo soluzioni software personalizzate che rispondano a esigenze concrete di business.",
    img: imgCustom,
  },
  {
    title: "SaaS Development",
    desc: "Tecnologia avanzata, architetture scalabili e massimo controllo sul prodotto finale.",
    img: imgSaas,
  },
  {
    title: "Product Feed Manager",
    desc: "Il nostro motore centrale per la gestione avanzata dei feed: semplice, potente, scalabile.",
    img: imgFeed,
    full: true,
  },
  {
    title: "UX/UI Design & Branding",
    desc: "Design che comunica, strumenti che funzionano. Il nostro team ti affianca dalla definizione dell’identità fino alle interfacce.",
    img: imgUi,
  },
  {
    title: "Website & E-commerce",
    desc: "Creiamo siti e piattaforme e-commerce progettati per vendere: UX fluida, design professionale e tecnologie top tier.",
    img: imgEcom,
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-inner">
        {/* BLOCCO TITOLO */}
        <div className="services-title-block">
  
  <div className="services-subtitle">— I nostri servizi —</div>

  <h2 className="services-title">
    Il cuore del &lt;tailor_made/&gt;
  </h2>

  <p className="services-desc">
    Potenziare i brand e far crescere i business è ciò che facciamo, dando vita
    a esperienze digitali costruite sulle reali esigenze delle persone. Partiamo
    sempre dall’ascolto, superando ogni barriera, per trasformare i bisogni in
    risultati concreti. <br />
    Uniamo tecnologia, design e creatività per raggiungere ciò che conta davvero:
    coinvolgere, sorprendere, convertire e creare valore.
  </p>

</div>


        {/* GRID SERVIZI */}
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, img, full }) {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <div className={`service-card${full ? " service-card-full" : ""}`}>
        <div className="service-card-img">
          <img
            src={img}
            alt={title}
            className={
              img.includes("Frame 1707480709 (1).svg")
                ? "service-card-img-real no-border"
                : "service-card-img-real"
            }
          />
        </div>
        <div className="service-card-content">
          <h3 className="service-card-title">{title}</h3>
          <p className="service-card-desc">{desc}</p>
          <div className="service-card-btns">
            {!showContact ? (
              <button
                className="service-btn"
                type="button"
                onClick={() => setShowContact(true)}
              >
                Contattaci
              </button>
            ) : (
              <span
                style={{
                  display: "inline-block",
                  background: "#10b981",
                  color: "#fff",
                  borderRadius: 24,
                  padding: "12px 32px",
                  fontWeight: 600,
                  fontSize: 18,
                  boxShadow: "0 2px 12px rgba(16,185,129,0.10)",
                }}
              >
                You're on the list!
              </span>
            )}
          </div>
        </div>
      </div>

      {showContact && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.7)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: 24,
                overflow: "hidden",
                maxWidth: 900,
                width: "100%",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              <ContactPage onBack={() => setShowContact(false)} />
            </div>
            <button
              onClick={() => setShowContact(false)}
              style={{
                position: "absolute",
                top: 32,
                right: 32,
                background: "rgba(0,0,0,0.6)",
                color: "white",
                border: "none",
                borderRadius: 8,
                padding: "8px 16px",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              Chiudi
            </button>
          </div>
        </div>
      )}
    </>
  );
}
