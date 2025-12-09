import React, { useState } from 'react';
// Assumi che ContactFormData e FormStatus siano definiti qui o importati
import { ContactFormData, FormStatus } from './types'; 

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    agreedToTerms: false
  });

  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreedToTerms: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      alert("Devi accettare i termini e le condizioni.");
      return;
    }
    
    setStatus(FormStatus.SUBMITTING);
    
    // Simulate API call
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      console.log("Form payload:", formData);
      // Reset after success
      setTimeout(() => setStatus(FormStatus.IDLE), 3000);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        agreedToTerms: false
      });
    }, 1500);
  };

  // Classe unificata per gli input per replicare lo stile: 
  // Bordo inferiore, sfondo trasparente, testo e placeholder bianchi/grigi
  const inputClasses = "w-full bg-transparent text-white placeholder-gray-400 py-3 border-b border-gray-500 focus:border-white outline-none transition-colors duration-300 font-light text-base mb-6";
  
  // La TextArea nell'immagine sembra avere un placeholder 'Messaggio' che funge da titolo
  // e la linea di separazione è appena sotto, non un bordo lungo la linea.

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg lg:max-w-none">

      {/* Nome E Cognome */}
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Nome E Cognome"
        className={inputClasses}
        required
      />

      {/* Azienda */}
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Azienda"
        className={inputClasses}
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className={inputClasses}
        required
      />

      {/* Numero Di Telefono */}
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Numero Di Telefono"
        className={inputClasses}
      />

      {/* Messaggio (Textarea) */}
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Messaggio"
        rows={2} // Ridotto a 2 righe per replicare lo spazio contenuto nell'immagine
        className={`${inputClasses} resize-none`}
      />

      {/* Termini e Condizioni */}
      <div className="mb-8 mt-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleCheckboxChange}
              className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-400 bg-transparent transition-all checked:border-white checked:bg-white"
            />
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#020b2d] opacity-0 peer-checked:opacity-100 transition-opacity"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3L4.5 8.5L2 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* Il testo e il titolo sono stati combinati per replicare lo stile dell'immagine */}
          <div className="text-sm text-gray-200 font-light leading-snug">
            <span className="font-normal block text-base mb-1">Termini e Condizioni*</span>
            <p className="text-gray-400 text-xs leading-relaxed">
              Autorizzo il trattamento dei miei dati personali secondo quanto riportato nell'informativa ai sensi del Decreto legislativo 30 Giugno 2003, n. 196
            </p>
          </div>
        </label>
      </div>

      {/* Pulsante di Invio */}
      <button
        type="submit"
        disabled={status === FormStatus.SUBMITTING}
        // Colore del testo impostato sul blu scuro dello sfondo e sfondo bianco
        className="w-full bg-white text-[#020b2d] font-bold text-lg rounded-full py-4 px-8 hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      >
        {status === FormStatus.SUBMITTING ? 'Invio in corso...' : 'Invia messaggio'}
      </button>

      {/* Messaggio di successo */}
      {status === FormStatus.SUCCESS && (
        <div className="mt-4 text-green-400 text-center text-sm font-medium animate-pulse">
          Messaggio inviato con successo!
        </div>
      )}
    </form>
  );
};
export default ContactForm; 