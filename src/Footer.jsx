import "./Footer.css";
import logo from "./assets/Vector.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Logo in alto a sinistra */}
        <div className="footer-logo-wrapper">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>

        {/* Titolo grande */}
        <div className="footer-title-wrapper">
          <h1 className="footer-title">
            Tecnologia che Unisce,
            <br />
            Automatizza e fa Crescere.
          </h1>
        </div>

        {/* Info e social in basso */}
        <div className="footer-bottom">
          <div className="footer-info">
            <div className="footer-info-block">
              <span className="footer-info-label">Indirizzo</span>
              <span className="footer-info-text">
                Via della Conciliazione, 44
                <br />
                00193 – Roma IT
              </span>
            </div>
            <div className="footer-info-block">
              <span className="footer-info-label">Email</span>
              <a
                href="mailto:contact@connecteed.com"
                className="footer-info-link"
              >
                contact@connecteed.com
              </a>
            </div>
          </div>

          <div className="footer-socials">
            <a href="#" className="footer-social-btn" aria-label="LinkedIn">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                alt="LinkedIn"
                className="footer-social-icon"
              />
            </a>
            <a href="#" className="footer-social-btn" aria-label="Instagram">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                alt="Instagram"
                className="footer-social-icon"
              />
            </a>
            <a href="#" className="footer-social-btn" aria-label="Facebook">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                alt="Facebook"
                className="footer-social-icon"
              />
            </a>
          </div>
        </div>

        {/* Barra finale */}
        <div className="footer-bar">
          <div className="footer-links">
            <a href="#" className="footer-link">
              Termini &amp; Condizioni
            </a>
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Cookies
            </a>
          </div>
          <div className="footer-copy">© 2025 Copyright Connecteed</div>
        </div>
      </div>
    </footer>
  );
}