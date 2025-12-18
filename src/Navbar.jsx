import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./assets/logo.svg";

const NAV_LINKS = [
  { label: "Azienda", href: "/Azienda" },
  { label: "Servizi", href: "/Comingsoon" },
  { label: "Settori", href: "/Comingsoon" },
  { label: "Prodotti", href: "/Comingsoon" },
  { label: "I nostri lavori", href: "/Comingsoon" },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Blocca scroll quando menu mobile è aperto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar-glass${visible ? " navbar-visible" : ""}`}>
        <div className="navbar-glass-inner">
          {/* SINISTRA: LOGO SVG (icona + scritta) */}
          <div className="navbar-left">
            <img
              src={logo}
              alt="Connecteed logo"
              className="navbar-logo"
              style={{ cursor: "pointer" }}
              tabIndex={0}
              aria-label="Homepage Connecteed"
              onClick={() => window.location.pathname = "/"}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  window.location.pathname = "/";
                }
              }}
            />
          </div>

          {/* CENTRO: MENU (desktop) */}
          <ul className="navbar-menu">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <button
                  type="button"
                  style={{ background: "none", border: "none", color: "inherit", font: "inherit", cursor: "pointer", padding: 0 }}
                  onClick={() => window.location.pathname = link.href}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* DESTRA: CTA o Burger */}
          <div className="navbar-right">
            {/* Desktop CTA */}
            <button
              className="navbar-contact navbar-contact-desktop"
              type="button"
              onClick={() => window.location.pathname = "/ContactPage"}
            >
              Contattaci
            </button>
            {/* Burger menu solo su mobile */}
            <button
              className="navbar-burger"
              aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(m => !m)}
              style={{
                background: "none",
                border: "none",
                display: "none",
                marginLeft: 16,
                cursor: "pointer",
                padding: 12,
              }}
            >
              <span style={{ display: "block", width: 18, height: 12 }}>
                <span style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "#fff",
                  borderRadius: 2,
                  marginTop: 5,
                  marginBottom: 5,
                  transition: "transform .3s",
                  transform: menuOpen ? "rotate(45deg) translateY(9px)" : "none"
                }} />
                <span style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "#fff",
                  borderRadius: 2,
                  marginBottom: 5,
                  opacity: menuOpen ? 0 : 1,
                  transition: "opacity .3s"
                }} />
                <span style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "#fff",
                  borderRadius: 2,
                  transition: "transform .3s",
                  transform: menuOpen ? "rotate(-45deg) translateY(-9px)" : "none"
                }} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay menu mobile */}
     {menuOpen && (
  <div
    id="mobile-menu"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(10,12,20,0.98)",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: "opacity .3s",
    }}
  >
    {/* HEADER MOBILE (LOGO + X) */}
    <div
      style={{
        position: "absolute",
        top: 16,
        left: 16,
        right: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 10001,
      }}
    >
      <img
        src={logo}
        alt="Connecteed logo"
        style={{ height: 24, width: "auto", display: "block" }}
        onClick={() => {
          setMenuOpen(false);
          window.location.pathname = "/";
        }}
      />

      <button
        aria-label="Chiudi menu"
        onClick={() => setMenuOpen(false)}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: 36,
          cursor: "pointer",
          lineHeight: 1,
        }}
      >
        ×
      </button>
    </div>

    {/* LISTA (IDENTICA A PRIMA) */}
    <ul style={{ listStyle: "none", padding: 0, margin: 0, width: "100%", textAlign: "center" }}>
      {NAV_LINKS.map(link => (
        <li key={link.label} style={{ margin: "24px 0" }}>
          <button
            type="button"
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: 24,
              fontFamily: "Host Grotesk, sans-serif",
              cursor: "pointer",
              padding: 0,
            }}
            onClick={() => {
              setMenuOpen(false);
              window.location.pathname = link.href;
            }}
          >
            {link.label}
          </button>
        </li>
      ))}
      <li style={{ margin: "32px 0 0 0" }}>
        <button
          type="button"
          style={{
            background: "#fff",
            color: "#001b66",
            border: "none",
            borderRadius: 20,
            fontSize: 20,
            fontWeight: 600,
            padding: "12px 32px",
            fontFamily: "Host Grotesk, sans-serif",
            cursor: "pointer",
          }}
          onClick={() => {
            setMenuOpen(false);
            window.location.pathname = "/ContactPage";
          }}
        >
          Contattaci
        </button>
      </li>
    </ul>
  </div>
)}


      {/* Responsive CSS per mostrare burger solo su mobile */}
      <style>{`
        @media (max-width: 900px) {
          .navbar-menu { display: none !important; }
          .navbar-contact-desktop { display: none !important; }
          .navbar-burger { display: block !important; }
        }
        @media (min-width: 901px) {
          .navbar-burger { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
