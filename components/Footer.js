import Link from "next/link";
import Logo from "./Logo";
import { Settings, ShieldCheck, Briefcase, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo variant="footer" />
            <p>
              Connecting global suppliers to reliable supply chains through mining chemicals, copper &amp; minerals trading, agro solutions, and sourcing &amp; trade services.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="mailto:info@crestlineglobalfzc.com" className="social-icon-btn">
                <Mail size={16} />
              </a>
              <Link href="/" className="social-icon-btn" aria-label="Home">
                <Globe size={16} />
              </Link>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-header">
              <Settings size={16} />
              <h4>Operational Divisions</h4>
            </div>
            <ul>
              <li>
                <span className="footer-arrow">&gt;</span>
                <Link href="/chemicals">Mining Chemicals Portfolio</Link>
              </li>
              <li>
                <span className="footer-arrow">&gt;</span>
                <Link href="/minerals-copper">Copper &amp; Minerals Trading</Link>
              </li>
              <li>
                <span className="footer-arrow">&gt;</span>
                <Link href="/agro">Agro Solutions Platform</Link>
              </li>
              <li>
                <span className="footer-arrow">&gt;</span>
                 <Link href="/trade-services">Sourcing &amp; Trade Services</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-header">
              <ShieldCheck size={16} />
              <h4>Regulatory Matrix</h4>
            </div>
            <ul>
              <li>
                <span className="footer-arrow">&gt;</span>
                <Link href="/about">Compliance Overview</Link>
              </li>
              <li>
                <span className="footer-arrow">&gt;</span>
                <Link href="/about">Compliance Status</Link>
              </li>
              <li>
                <span className="footer-arrow">&gt;</span>
                <Link href="/about">Quality Assurance</Link>
              </li>
              <li>
                <span className="footer-arrow">&gt;</span>
                <Link href="/about">HSE Standards</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-header">
              <Briefcase size={16} />
              <h4>Procurement Desks</h4>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="footer-contact-item">
                <Mail size={14} className="footer-contact-icon" />
                <a href="mailto:info@crestlineglobalfzc.com">info@crestlineglobalfzc.com</a>
              </div>
              <div className="footer-contact-item">
                <Phone size={14} className="footer-contact-icon" />
                <span>+971 50 123 4567</span>
              </div>
              <div className="footer-contact-item" style={{ alignItems: "flex-start" }}>
                <MapPin size={14} className="footer-contact-icon" style={{ marginTop: "2px" }} />
                <span>Ajman Free Zone,<br />Ajman, United Arab Emirates</span>
              </div>
              <div className="footer-contact-item">
                <Globe size={14} className="footer-contact-icon" />
                <span>Connecting Global Markets.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <Globe size={14} style={{ color: "var(--copper)", marginRight: "0.5rem" }} />
            <span>UAE REGISTERED &nbsp;•&nbsp; GLOBAL NETWORK</span>
          </div>
          <div className="footer-bottom-right">
            <span>&copy; 2026 CRESTLINE GLOBAL FZC LLC. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
