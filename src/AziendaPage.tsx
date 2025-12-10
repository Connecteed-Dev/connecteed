import React from 'react';
import { ListenIcon, DesignIcon, EvolveIcon } from './Icons';
import './AziendaPage.css';
import Footer from './Footer';

// --- Assets Replacement URLs ---
const IMG_LAPTOP_DASHBOARD = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop";
/* =======================
   HERO – QUALCOSA SU DI NOI
   ======================= */

const IMG_RED_WORKSHOP =
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop";
const IMG_CODE_SCREEN =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop";
const IMG_DESK_OFFICE =
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop";

const AboutSection = () => {
  return (
    <section className="w-full bg-white pt-24 pb-24 flex justify-center">
      <div className="w-full max-w-[1440px] px-6 md:px-[40px]">
        {/* Titolo + testo */}
        <h2 className="font-semibold about-title text-[#020B2D] mb-6">
          Qualcosa Su Di Noi
        </h2>
        <p className="font-normal text-[16px] leading-[26px] text-[#5F6575] max-w-[520px] mb-16">
          Persone, idee, risultati.
          <br />
          Dietro ogni progetto di successo ci sono persone: volti, storie, idee.
          Il nostro team è prima di tutto una squadra, crediamo nella forza
          della collaborazione, nell&apos;ascolto reciproco e nella diversità di
          pensiero come motore di innovazione.
        </p>

        {/* COLLAGE IMMAGINI – strutturato per il CSS che hai scritto */}
        <div className="about-section-images max-w-[1200px] mx-auto">
          {/* Immagine rossa grande in basso a sinistra */}
          <div className="about-section-img main-img">
            <img
              src={IMG_RED_WORKSHOP}
              alt="Workshop alla lavagna"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Immagine desk in b/n sopra la rossa, spostata a destra */}
          <div className="about-section-img grayscale">
            <img
              src={IMG_DESK_OFFICE}
              alt="Desk ufficio"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Immagine codice in alto a destra */}
          <div className="about-section-code-img">
            <img
              src={IMG_CODE_SCREEN}
              alt="Schermata di codice"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 flex justify-center">
      <div className="w-full max-w-[1440px] px-6 md:px-[40px] flex flex-row justify-between items-center text-center gap-12 md:gap-0">
        <div className="flex-1 w-full stats-container">
          <div className="font-semibold text-[64px] md:text-[80px] leading-[1] text-[#020b2d] mb-2 stat-number">2020</div>
          <div className="text-[18px] md:text-[20px] text-[#020b2d] stat-label">Anno di fondazione</div>
        </div>
        <div className="flex-1 w-full stats-container">
          <div className="font-semibold text-[64px] md:text-[80px] leading-[1] text-[#020b2d] mb-2 stat-number">21</div>
          <div className="text-[18px] md:text-[20px] text-[#020b2d] stat-label">Dipendenti</div>
        </div>
        <div className="flex-1 w-full">
          <div className="font-semibold text-[64px] md:text-[80px] leading-[1] text-[#020b2d] mb-2 stat-number">70</div>
          <div className="text-[18px] md:text-[20px] text-[#020b2d] stat-label">Progetti all’attivo</div>
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1440px] px-6 md:px-[40px] flex flex-row gap-12 lg:gap-20 items-center">
        {/* COLONNA SINISTRA – TESTO */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="font-semibold text-3xl md:text-[40px] leading-[48px] text-[#020b2d] mb-8 section-title">
            I nostri valori
          </h2>
          <p className="font-normal text-[16px] leading-[26px] text-[#5F6575] max-w-[500px]">
            Persone, idee, risultati.
            <br />
            Dietro ogni progetto di successo ci sono persone: volti, storie, idee.
            <br /> <br />
            Il nostro team è prima di tutto una squadra, crediamo nella
            forza della collaborazione, nell&apos;ascolto reciproco e nella
            diversità di pensiero come motore di innovazione.
          </p>
        </div>
        {/* COLONNA DESTRA – IMMAGINE */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="relative min-h-[300px] lg:h-[400px] w-full rounded-[32px] overflow-hidden bg-gray-50 flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, rgb(203, 213, 225) 25%, transparent 25%),
                  linear-gradient(-45deg, rgb(203, 213, 225) 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, rgb(203, 213, 225) 75%),
                  linear-gradient(-45deg, transparent 75%, rgb(203, 213, 225) 75%)
                `,
                backgroundSize: "60px 60px",
                backgroundPosition: "0px 0px, 0px 30px, 30px -30px, -30px 0px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-white/50 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const ApproachSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 flex justify-center">
      <div className="w-full max-w-[1440px] px-6 md:px-[40px]">
        <h2 className="font-semibold text-3xl md:text-[40px] leading-[48px] text-[#020b2d] mb-16 md:text-left text-center section-title">
          Il nostro approccio
        </h2>

        {/* 3 colonne SEMPRE orizzontali */}
        <div className="grid grid-cols-3 gap-12 text-center">
          {/* CARD 1 */}
          <div className="flex flex-col items-center group">
            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <div className="w-[80px] h-[80px] rounded-full bg-[#E6F0FF] flex items-center justify-center text-[#2D7FF9]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
            </div>

            <h3 className="font-semibold text-[20px] text-[#020b2d] mb-4">
              Ascoltiamo
            </h3>
            <p className="text-[14px] leading-[22px] text-[#5F6575] max-w-[300px]">
              Ogni progetto inizia con una fase di deep listening per
              comprendere a fondo le vostre esigenze, i vostri processi e i
              vostri obiettivi di business.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center group">
            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <div className="w-[80px] h-[80px] rounded-full bg-[#E6F0FF] flex items-center justify-center text-[#2D7FF9]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12h20" />
                  <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                  <path d="M10 2h4" />
                  <path d="m14 2 4 10h-8L14 2z" />
                </svg>
              </div>
            </div>

            <h3 className="font-semibold text-[20px] text-[#020b2d] mb-4">
              Progettiamo
            </h3>
            <p className="text-[14px] leading-[22px] text-[#5F6575] max-w-[300px]">
              Sviluppiamo soluzioni su misura che si integrano perfettamente nel
              vostro ecosistema esistente, minimizzando disruption e
              massimizzando valore.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center group">
            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <div className="w-[80px] h-[80px] rounded-full bg-[#E6F0FF] flex items-center justify-center text-[#2D7FF9]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
            </div>

            <h3 className="font-semibold text-[20px] text-[#020b2d] mb-4">
              Evolviamo
            </h3>
            <p className="text-[14px] leading-[22px] text-[#5F6575] max-w-[300px]">
              Il nostro lavoro non finisce al go-live. Monitoriamo, ottimizziamo
              e facciamo evolvere le soluzioni insieme al vostro business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// se hai già un import per l'immagine, riusalo:
// import imgLaptop from "./assets/imgLaptop.png";

const AspirationsSection = () => {
  return (
    <section className="w-full bg-[#0e1a24] text-white py-0 flex justify-center items-stretch min-h-[600px] aspirations-section" style={{ minHeight: 600, padding: 0 }}>
      <div className="w-full max-w-[1440px] flex flex-row items-stretch min-h-[600px] p-0 m-0">
        {/* COLONNA SINISTRA: Testo */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-[80px] py-[80px]">
          <h2
            className="font-normal text-[40px] leading-[48px] mb-10 section-title"
            style={{
              color: "#F8FAFF",
              fontWeight: 400,
              fontFamily: "Host Grotesk, system-ui, sans-serif",
              marginBottom: 40,
            }}
          >
            A cosa aspiriamo
          </h2>
          <div
            className="flex flex-col gap-6 text-[18px] leading-[28px] text-white/90 max-w-[700px]"
            style={{
              color: "#F8FAFF",
              fontWeight: 300,
              fontSize: 18,
              lineHeight: "28px",
              fontFamily: "Host Grotesk, system-ui, sans-serif",
            }}
          >
            <p>
              Vogliamo offrire soluzioni software e servizi digitali costruiti intorno ai bisogni reali delle imprese, unendo competenza tecnica, design e supporto continuo. Crediamo in un’innovazione semplice e accessibile, resa possibile da modelli di investimento flessibili che permettono alle aziende di evolvere mentre generano valore.
            </p>
            <p>
              Il nostro obiettivo è creare un ecosistema digitale in cui ogni impresa possa innovare senza limiti, grazie a tecnologie personalizzate e sostenibili che trasformano i processi, liberano il potenziale e accelerano la crescita.
            </p>
          </div>
        </div>
        {/* COLONNA DESTRA: Immagine */}
        <div className="flex-1 flex items-stretch justify-end relative min-h-[600px]">
          <img
            src={IMG_LAPTOP_DASHBOARD}
            alt="Platform Dashboard"
            className="w-full h-full object-cover object-right"
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              minHeight: 600,
              maxHeight: "100%",
              maxWidth: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}




const AziendaPage  = () => {
  return (
    // Added ID for scoped CSS
    <main id="azienda-page-root" className="w-full flex flex-col">
      <AboutSection />
      <StatsSection />
      <ValuesSection />
      <ApproachSection />
      <AspirationsSection />
      <Footer />
    </main>
  );
};

export default AziendaPage;
