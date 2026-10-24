import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Procurement Desk & Contact Us | Crestline Global FZC LLC (Ajman & Dubai, UAE)",
  description: "Initiate commercial intake parameters for Mining Chemicals, Copper Cathodes 99.99%, Agro Solutions, and Trade Services with Crestline Global FZC LLC trade team in Ajman Free Zone, UAE.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div id="page-contact" className="page active contact-theme">
      <section id="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Contact details and office addresses */}
            <div className="contact-info">
              <div className="section-label">Enquiry Desk</div>
              <h1 className="contact-main-title">
                START A STRATEGIC<br />
                <span className="accent">COMMERCIAL ENQUIRY</span>
              </h1>
              <p className="contact-description">
                Our trade team coordinates directly with asset holders, mine operations, and processing plant teams to deliver reliable, long-term procurement solutions.
              </p>

              <div className="contact-details">
                {/* Registered Office */}
                <div className="contact-card">
                  <div className="contact-card-circle">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-card-content">
                    <h4>REGISTERED OFFICE (AJMAN, UAE)</h4>
                    <p>
                      Crestline Global FZC LLC<br />
                      Ajman Free Zone,<br />
                      Ajman, United Arab Emirates
                    </p>
                  </div>
                </div>

                {/* Official Email */}
                <div className="contact-card">
                  <div className="contact-card-circle">
                    <Mail size={20} />
                  </div>
                  <div className="contact-card-content">
                    <h4>OFFICIAL EMAIL</h4>
                    <p>
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              {whatsappUrl && (
                <div>
                  <a href={whatsappUrl} className="contact-wa-btn" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} /> Connect On WhatsApp
                  </a>
                </div>
              )}
            </div>

            {/* Right Column: Contact form container */}
            <div id="contactFormWrap">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
