import React from "react";
import "./Services.css";
import imgCustom from "./assets/Frame 1707480667.svg";
import imgSaas from "./assets/Group 1171275099.svg";
import imgFeed from "./assets/image 1.svg";
import imgUi from "./assets/Frame 1707480709 (2).svg";
import imgEcom from "./assets/E-commerce.svg";

const services = [
  { title: "Software Custom", desc: "Realizziamo soluzioni software personalizzate che rispondano a esigenze concrete di business.", img: imgCustom },
  { title: "SaaS Development", desc: (<><span>Tecnologia avanzata, architetture scalabili e massimo controllo sul prodotto </span><br /><span>finale.</span></>), img: imgSaas },
  { title: "Product Feed Manager", desc: "Il nostro motore centrale per la gestione avanzata dei feed: semplice, potente, scalabile.", img: imgFeed, featured: true },
  { title: "UX/UI Design & Branding", desc: "Design che comunica, strumenti che funzionano. Il nostro team ti affianca dalla definizione dell’identità fino alle interfacce.", img: imgUi, imgContain: true },
  { title: "Website & E-commerce", desc: "Creiamo siti e piattaforme e-commerce progettati per vendere: UX fluida, design professionale e tecnologie top tier.", img: imgEcom, imgContain: true },
];

export default function Services() {
  return (
    <section className="services">
      <div className="services__wrap">
        {/* HEADER “editoriale” stile Jakala */}
        <header className="services__header">
          <div className="services__kicker">— I nostri servizi —</div>

          <h2 className="services__title">
            Il cuore del <span className="services__accent">&lt;tailor_made/&gt;</span>
          </h2>

         

          <p className="services__intro">
            Potenziare i brand e far crescere i business è ciò che facciamo, dando vita a esperienze digitali costruite sulle reali esigenze delle persone.
            Uniamo tecnologia, design e creatività per coinvolgere, sorprendere, convertire e creare valore.
          </p>
        </header>

        {/* GRID */}
        <div className="services__grid">
          {services.map((s) => (
            <article
              key={s.title}
              className={[
                "service",
                s.featured ? "service--featured" : "",
              ].join(" ")}
            >
              <div className="service__media">
                <img
                  src={s.img}
                  alt={s.title}
                  className={[
                    "service__img",
                    s.imgContain ? "service__img--contain" : "",
                  ].join(" ")}
                />
              </div>

              <div className="service__body">
                <h3 className="service__title">{s.title}</h3>
                <p className="service__desc">{s.desc}</p>

                <div className="service__actions">
                  <a className="service__btn" href="/ContactPage">
                    Contattaci
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
