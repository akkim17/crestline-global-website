import { Users, Building2, Globe, FlaskConical, Handshake, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Us | Crestline Global FZC LLC (Dubai & UAE)",
  description: "Crestline Global FZC LLC is a UAE-registered commodity trading house based in Ajman Free Zone. Serving Middle East, Dubai, GCC, Africa, and Asian markets with compliance and supply chain excellence.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div id="page-about" className="page active">
      <div className="inner-header">
        <div className="container">
          <div className="inner-header-tagline">Corporate Foundation</div>
          <h1 className="section-title">EXPERIENCE. NETWORK. <span className="accent">EXECUTION.</span></h1>
        </div>
      </div>

      <section className="section-white-padding" style={{ paddingBottom: "4rem" }}>
        <div className="container">
          <div className="two-col" style={{ alignItems: "stretch" }}>
            {/* Left Column: Corporate Overview Card */}
            <div className="about-lead-card" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Users size={36} style={{ color: "var(--wine-dark)", margin: "0 auto 1rem" }} />
              <h3 className="about-lead-card-title">Leadership &amp; Governance</h3>
              <p className="about-lead-card-sub" style={{ textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.8rem", fontWeight: "700", color: "var(--wine-mid)" }}>
                Executive Steering Committee
              </p>
              <div className="about-lead-card-line" style={{ margin: "1rem auto 1.5rem" }}></div>

              <p className="about-lead-card-caption" style={{ borderTop: "none", paddingTop: 0, fontSize: "0.95rem", lineHeight: "1.75" }}>
                Our leadership team brings together decades of hands-on commercial experience across global commodity trading, mining chemicals, non-ferrous metals, international maritime logistics, and agro-industrial distribution.
              </p>
            </div>

            {/* Right Column: Corporate Governance */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 className="subsection-title-dark" style={{ fontSize: "1.6rem", color: "var(--wine-dark)", marginBottom: "0.5rem", fontFamily: "var(--heading-font)", textTransform: "uppercase", fontWeight: "800", letterSpacing: "0.02em" }}>
                Leadership &amp; Corporate Governance
              </h3>
              <div className="divider" style={{ width: "60px", height: "3px", background: "var(--wine-dark)", marginBottom: "1.5rem" }}></div>
              
              <p className="paragraph-spacing-heavy" style={{ fontSize: "0.95rem", color: "var(--charcoal)", lineHeight: "1.65", marginBottom: "1.25rem" }}>
                Crestline Global FZC LLC is guided by a multidisciplinary executive team operating across international trade, mining chemicals, mineral commodities, logistics, procurement, finance, and agricultural distribution.
              </p>
              <p className="paragraph-spacing-heavy" style={{ fontSize: "0.95rem", color: "var(--charcoal)", lineHeight: "1.65", marginBottom: "2rem" }}>
                Operating from the United Arab Emirates and serving markets globally, our management team combines regional market knowledge with global commercial networks to deliver reliable supply chain solutions.
              </p>

              <div className="about-features-list">
                <div className="about-feature-row">
                  <div className="about-feature-icon-wrapper">
                    <Building2 size={20} />
                  </div>
                  <div className="about-feature-row-content">
                    <div className="about-feature-row-title">UAE Registered Trading Company</div>
                    <div className="about-feature-row-desc">Registered in Ajman, United Arab Emirates with full legal compliance.</div>
                  </div>
                </div>

                <div className="about-feature-row">
                  <div className="about-feature-icon-wrapper">
                    <Globe size={20} />
                  </div>
                  <div className="about-feature-row-content">
                    <div className="about-feature-row-title">Global Commercial Network</div>
                    <div className="about-feature-row-desc">Strong presence and distribution capabilities across international supply corridors.</div>
                  </div>
                </div>

                <div className="about-feature-row">
                  <div className="about-feature-icon-wrapper">
                    <FlaskConical size={20} />
                  </div>
                  <div className="about-feature-row-content">
                    <div className="about-feature-row-title">Mining Chemicals &amp; Commodity Specialists</div>
                    <div className="about-feature-row-desc">Supplying high-quality chemicals, copper &amp; minerals to key industries.</div>
                  </div>
                </div>

                <div className="about-feature-row">
                  <div className="about-feature-icon-wrapper">
                    <Handshake size={20} />
                  </div>
                  <div className="about-feature-row-content">
                    <div className="about-feature-row-title">Cross-Border Procurement Expertise</div>
                    <div className="about-feature-row-desc">Global sourcing with efficient logistics and secure supply chain management.</div>
                  </div>
                </div>

                <div className="about-feature-row">
                  <div className="about-feature-icon-wrapper">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="about-feature-row-content">
                    <div className="about-feature-row-title">Strategic Partnerships Globally</div>
                    <div className="about-feature-row-desc">Building long-term value through trusted relationships and performance.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
