import React from "react";
import "./BusinessSupport.css";
import { tools } from "./toolsList";

export default function BusinessSupport() {
  return (
    <section className="business-support-section">
      <div className="business-support-inner">
        {/* BLOCCO TESTI */}
        <div className="business-support-title-block">
          <div className="business-support-subtitle">— Cosa facciamo —</div>

          <h2 className="business-support-title">
            Sviluppiamo <span className="blue">soluzioni digitali</span> su misura
            che semplificano i processi,
            <br />
            integrano i sistemi e accelerano la crescita del tuo business.
          </h2>

          <p className="business-support-desc">
            In un mercato sempre più complesso, le aziende si trovano a gestire
            una moltitudine di strumenti diversi: marketing, gestione dati,
            vendite, post–vendita, logistica e molto altro.
          </p>

          <p className="business-support-desc business-support-desc-secondary">
            <span className="business-support-highlight">
              Connecteed nasce per unire tutto in un’unica soluzione
            </span>
            , garantendo efficienza, automazione e crescita senza ostacoli.
          </p>
        </div>

        {/* FASCIA CARD */}
        <div className="business-support-cards-wrapper">
          {/* GRID 2×6 */}
          <div className="business-support-grid business-support-bg-white">
            {tools.map((tool) => (
              <div className="business-support-card" key={tool.title}>
                <div className="business-support-card-img">
                  <img src={tool.img} alt={tool.title} />
                </div>
                <div className="business-support-card-title">{tool.title}</div>
              </div>
            ))}
          </div>

          <div className="business-support-btn-block">
            <button type="button" className="business-support-btn">
              Scopri tutti
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
