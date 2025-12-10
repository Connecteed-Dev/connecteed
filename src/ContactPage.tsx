import React, { useState } from "react";
import { ContactFormData, FormStatus } from "./types";
import Footer from "./Footer";
import videoBg from "./assets/Composizione1.mp4";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agreedToTerms: false,
  });

  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreedToTerms: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      alert("Devi accettare i termini e le condizioni.");
      return;
    }

    setStatus(FormStatus.SUBMITTING);

    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      setTimeout(() => setStatus(FormStatus.IDLE), 3000);
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        agreedToTerms: false,
      });
    }, 1500);
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "Host Grotesk, system-ui, sans-serif",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "22px",
    color: "#FFFFFF",
    marginBottom: 4,
  };

  const inputClasses =
    "w-full bg-transparent text-white text-[16px] leading-[24px] " +
    "h-[56px] border-b border-white/40 focus:border-white outline-none " +
    "transition-colors duration-200 placeholder-white/40";

  return (
    <>
      <section
        className="relative w-full min-h-[920px] flex justify-center text-white overflow-hidden"
        style={{ paddingTop: "218.5px" }}
      >
        {/* VIDEO DI SFONDO */}
        <video
          src={videoBg}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* OVERLAY SCURO PER LEGGIBILITÀ */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: "rgba(2, 11, 45, 0.78)" }}
        />

        {/* CONTENUTO */}
        <div
          className="relative z-20 w-full max-w-[1440px] px-[40px] pt-[0px] pb-[40px] box-border flex gap-[142px]"
          style={{
            minHeight: "920px",
            marginBottom: 0,
          }}
        >
          {/* COLONNA SINISTRA – TESTO */}
          <div className="w-[668px] flex flex-col">
            <h2
              style={{
                width: 668,
                fontFamily: "Host Grotesk, system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 40,
                lineHeight: "48px",
                color: "#FFFFFF",
                marginBottom: 16,
              }}
            >
              Teniamoci in contatto
            </h2>

            <p
              style={{
                width: 668,
                fontFamily: "Host Grotesk, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "26px",
                color: "#FFFFFF",
                marginBottom: 40,
                minHeight: 186,
              }}
            >
              Siamo a un messaggio di distanza!
              <br />
              Scrivici tramite il form e il nostro team ti ricontatterà rapidamente.
              Che si tratti di informazioni, supporto o curiosità sul nostro
              prodotto, siamo felici di darti una mano.
            </p>

            {/* CARD – SEDE LEGALE */}
            <div className="w-[668px] border-b border-white/25 pb-[24px] mb-[24px] flex items-start gap-[16px]">
              <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-white/40 text-[18px]">
                📍
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#FFFFFF",
                    marginBottom: 2,
                  }}
                >
                  Sede legale
                </div>
                <div
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "22px",
                    color: "#FFFFFF",
                  }}
                >
                  Via della Conciliazione, 44 00193 – Roma
                </div>
              </div>
            </div>

            {/* CARD – EMAIL */}
            <div className="w-[668px] border-b border-white/25 pb-[24px] flex items-start gap-[16px]">
              <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-white/40 text-[18px]">
                ✉️
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#FFFFFF",
                    marginBottom: 2,
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:contact@connecteed.com"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "22px",
                    color: "#FFFFFF",
                    textDecoration: "underline",
                  }}
                >
                  contact@connecteed.com
                </a>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA – FORM */}
          {/* COLONNA DESTRA – FORM */}

          {/* RIGHT COLUMN - FORM */}
          <div className="w-[550px]">
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[24px]">
              
              {/* Nome E Cognome */}
              <div className="flex flex-col">
                <span className="text-[12px] leading-[18px] text-white mb-[4px]">
                  Nome E Cognome
                </span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Inserisci il tuo nome completo"
                  className="w-full bg-transparent text-white placeholder-white/40 text-[14px] leading-[22px] h-[48px] border-b border-white focus:border-white outline-none transition-colors duration-200"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <span className="text-[12px] leading-[18px] text-white mb-[4px]">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full bg-transparent text-white placeholder-white/40 text-[14px] leading-[22px] h-[48px] border-b border-white focus:border-white outline-none transition-colors duration-200"
                  required
                />
              </div>

              {/* Numero Di Telefono */}
              <div className="flex flex-col">
                <span className="text-[12px] leading-[18px] text-white mb-[4px]">
                  Numero Di Telefono
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full bg-transparent text-white placeholder-white/40 text-[14px] leading-[22px] h-[48px] border-b border-white focus:border-white outline-none transition-colors duration-200"
                />
              </div>

              {/* Messaggio */}
              <div className="flex flex-col">
                <span className="text-[12px] leading-[18px] text-white mb-[4px]">
                  Messaggio
                </span>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full bg-transparent text-white placeholder-white/40 text-[14px] leading-[22px] h-[48px] border-b border-white focus:border-white outline-none transition-colors duration-200"
                />
              </div>

              {/* Termini e Condizioni */}
              <div className="mt-[8px]">
                <span className="block mb-[8px] font-medium text-[16px] leading-[24px] text-white">
                  Termini e Condizioni*
                </span>

                <label className="flex items-start gap-[12px] cursor-pointer">
                  <div className="relative flex items-center mt-[2px]">
                    <input
                      type="checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleCheckboxChange}
                      className="peer h-[16px] w-[16px] cursor-pointer appearance-none border border-white bg-transparent"
                    />
                    <svg
                      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className="font-normal text-[12px] leading-[18px] text-white">
                    Autorizzo il trattamento dei miei dati personali secondo quanto
                    riportato nell&apos;informativa ai sensi del Decreto legislativo
                    30 Giugno 2003, n. 196
                  </p>
                </label>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={status === FormStatus.SUBMITTING}
                className="
                  w-full
                  h-[56px]
                  rounded-full
                  bg-[#FFFFFF]
                  text-[#020b2d]
                  text-[16px]
                  font-medium
                  tracking-[0.01em]
                  shadow-[0_0_20px_rgba(255,255,255,0.35)]
                  transition-transform
                  hover:scale-[1.01]
                  active:scale-[0.99]
                  disabled:opacity-70
                  disabled:cursor-not-allowed
                  mt-2
                "
              >
                {status === FormStatus.SUBMITTING ? "Invio in corso..." : "Text"}
              </button>

              {status === FormStatus.SUCCESS && (
                <div className="mt-2 text-green-400 text-center text-sm font-medium">
                  Messaggio inviato con successo!
                </div>
              )}
            </form>
          </div>

        </div>
      </section>

      <Footer noFixedHeight={true} />
    </>
  );
};

export { ContactForm };
