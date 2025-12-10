import React from 'react';
import { ListenIcon, DesignIcon, EvolveIcon } from './Icons';
import './AziendaPage.css';

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

        <p className="font-normal text-[16px] leading-[26px] text-[#5F6575] max-w-[520px]">
          Persone, idee, risultati.
          <br />
          Dietro ogni progetto di successo ci sono persone: volti, storie, idee.
          Il nostro team è prima di tutto una squadra, crediamo nella forza
          della collaborazione, nell&apos;ascolto reciproco e nella diversità di
          pensiero come motore di innovazione.
        </p>

        {/* COLLAGE IMMAGINI */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* CELL 1 (vuota su desktop, per lasciare spazio in alto a sx) */}
          <div className="hidden lg:block" />

          {/* MONITOR CODICE – in alto a destra, un po’ più su */}
          <div className="rounded-[32px] overflow-hidden shadow-lg lg:-translate-y-16">
            <img
              src={IMG_CODE_SCREEN}
              alt="Schermata di codice"
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMMAGINE ROSSA – in basso a sinistra */}
          <div className="rounded-[32px] overflow-hidden">
            <img
              src={IMG_RED_WORKSHOP}
              alt="Workshop alla lavagna"
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMMAGINE DESK – in basso a destra */}
          <div className="rounded-[32px] overflow-hidden grayscale">
            <img
              src={IMG_DESK_OFFICE}
              alt="Desk ufficio"
              className="w-full h-full object-cover"
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
      <div className="w-full max-w-[1440px] px-6 md:px-[40px] flex flex-col md:flex-row justify-between items-center text-center gap-12 md:gap-0">
        <div className="flex-1 w-full md:border-r border-gray-200 last:border-0 md:px-4 stats-container">
          <div className="font-semibold text-[64px] md:text-[80px] leading-[1] text-[#020b2d] mb-2 stat-number">2020</div>
          <div className="text-[18px] md:text-[20px] text-[#020b2d] stat-label">Anno di fondazione</div>
        </div>
        <div className="flex-1 w-full md:border-r border-gray-200 last:border-0 md:px-4 stats-container">
          <div className="font-semibold text-[64px] md:text-[80px] leading-[1] text-[#020b2d] mb-2 stat-number">21</div>
          <div className="text-[18px] md:text-[20px] text-[#020b2d] stat-label">Dipendenti</div>
        </div>
        <div className="flex-1 w-full md:px-4">
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
      <div className="w-full max-w-[1440px] px-6 md:px-[40px] flex flex-col lg:flex-row gap-12 lg:gap-20">
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
            forza della collaborazione, nell'ascolto reciproco e nella
            diversità di pensiero come motore di innovazione.
          </p>
        </div>
        <div className="lg:w-1/2 relative min-h-[300px] lg:h-[400px] rounded-[32px] overflow-hidden bg-gray-50">
             {/* Checkered pattern simulation */}
             <div 
                className="w-full h-full opacity-40"
                style={{
                    backgroundImage: `
                        linear-gradient(45deg, #cbd5e1 25%, transparent 25%), 
                        linear-gradient(-45deg, #cbd5e1 25%, transparent 25%), 
                        linear-gradient(45deg, transparent 75%, #cbd5e1 75%), 
                        linear-gradient(-45deg, transparent 75%, #cbd5e1 75%)
                    `,
                    backgroundSize: '60px 60px',
                    backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
                }}
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/50 rounded-full blur-2xl"></div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="flex flex-col items-center group">
                    <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110"><ListenIcon /></div>
                    <h3 className="font-semibold text-[20px] text-[#020b2d] mb-4">Ascoltiamo</h3>
                    <p className="text-[14px] leading-[22px] text-[#5F6575] max-w-[300px]">
                        Ogni progetto inizia con una fase di deep listening per comprendere a fondo le vostre esigenze, i vostri processi e i vostri obiettivi di business.
                    </p>
                </div>
                <div className="flex flex-col items-center group">
                    <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110"><DesignIcon /></div>
                    <h3 className="font-semibold text-[20px] text-[#020b2d] mb-4">Progettiamo</h3>
                    <p className="text-[14px] leading-[22px] text-[#5F6575] max-w-[300px]">
                        Sviluppiamo soluzioni su misura che si integrano perfettamente nel vostro ecosistema esistente, minimizzando disruption e massimizzando valore.
                    </p>
                </div>
                <div className="flex flex-col items-center group">
                    <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110"><EvolveIcon /></div>
                    <h3 className="font-semibold text-[20px] text-[#020b2d] mb-4">Evolviamo</h3>
                    <p className="text-[14px] leading-[22px] text-[#5F6575] max-w-[300px]">
                        Il nostro lavoro non finisce al go-live. Monitoriamo, ottimizziamo e facciamo evolvere le soluzioni insieme al vostro business.
                    </p>
                </div>
            </div>
        </div>
      </section>
    );
};

const AspirationsSection = () => {
    return (
        <section className="w-full bg-[#020b2d] text-white py-16 md:py-24 flex justify-center relative overflow-hidden aspirations-section">
            <div className="w-full max-w-[1440px] px-6 md:px-[40px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
                <div className="lg:w-1/2">
                    <h2 className="font-semibold text-3xl md:text-[40px] leading-[48px] mb-8 section-title">
                        A cosa aspiriamo
                    </h2>
                    <div className="flex flex-col gap-6 text-[16px] leading-[26px] text-white/80 max-w-[550px]">
                        <p>
                            Vogliamo offrire soluzioni software e servizi digitali costruiti intorno ai bisogni reali delle imprese, unendo competenza tecnica, design e supporto continuo. Crediamo in un'innovazione semplice e accessibile, resa possibile da modelli di investimento flessibili che permettono alle aziende di evolvere mentre generano valore.
                        </p>
                        <p>
                            Il nostro obiettivo è creare un ecosistema digitale in cui ogni impresa possa innovare senza limiti, grazie a tecnologie personalizzate e sostenibili che trasformano i processi, liberano il potenziale e accelerano la crescita.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[600px]">
                        <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
                        <img 
                            src={IMG_LAPTOP_DASHBOARD} 
                            alt="Platform Dashboard" 
                            className="relative w-full h-auto object-cover rounded-xl shadow-2xl border-4 border-[#1a2342] transform lg:translate-x-10 lg:scale-110"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
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
    </main>
  );
};

export default AziendaPage;
