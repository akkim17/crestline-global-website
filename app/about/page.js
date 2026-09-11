import { Users, Building2, Globe, FlaskConical, Handshake, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Us | Crestline Global FZC LLC (Dubai & UAE)",
  description: "Crestline Global FZC LLC is a UAE-registered commodity trading house based in Ajman Free Zone. Serving Middle East, Dubai, GCC, Africa, and Asian markets with compliance and supply chain excellence.",
  alternates: {
    canonical: "/about",
  },
};

const AvatarSilhouette = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" fill="currentColor"/>
    <path d="M4 21v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1" fill="currentColor"/>
  </svg>
);

export default function AboutPage() {
  const miniAvatars = Array(6).fill({ name: "Name", role: "Designation" });
  const bottomAvatars = Array(6).fill({ name: "Name", role: "Designation" });

  return (
    <div id="page-about" className="page active">
      <div className="inner-header">
        <div className="container">
          <div className="inner-header-tagline">Corporate Foundation</div>
          <h1 className="section-title">EXPERIENCE. NETWORK. <span className="accent">EXECUTION.</span></h1>
        </div>
      </div>

      <section className="section-white-padding" style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <div className="two-col" style={{ alignItems: "stretch" }}>
            {/* Left Column: Leadership Card */}
            <div className="about-lead-card">
              <Users size={32} style={{ color: "var(--wine-dark)", margin: "0 auto 0.5rem" }} />
              <h3 className="about-lead-card-title">Leadership Team</h3>
              <p className="about-lead-card-sub">Executive Profiles Coming Soon</p>
              <div className="about-lead-card-line"></div>

              <div className="about-lead-mini-row">
                {miniAvatars.map((avatar, idx) => (
                  <div className="lead-mini-item" key={idx}>
                    <div className="lead-mini-avatar-wrapper">
                      <AvatarSilhouette className="w-full h-full text-slate-400" />
                    </div>
                    <div className="lead-mini-name">{avatar.name}</div>
                    <div className="lead-mini-role">{avatar.role}</div>
                  </div>
                ))}
              </div>

              <p className="about-lead-card-caption">
                Our leadership team brings together decades of experience across global trade, mining, chemicals, logistics, and agro-industrial sectors.
              </p>
            </div>

            {/* Right Column: Corporate Governance */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 className="subsection-title-dark" style={{ fontSize: "1.6rem", color: "var(--wine-dark)", marginBottom: "0.5rem", fontFamily: "var(--heading-font)", textTransform: "uppercase", fontWeight: "800", letterSpacing: "0.02em" }}>
                Leadership &amp; Corporate Governance
              </h3>
              <div className="divider" style={{ width: "60px", height: "3px", background: "var(--wine-dark)", marginBottom: "1.5rem" }}></div>
              
              <p className="paragraph-spacing-heavy" style={{ fontSize: "0.95rem", color: "var(--charcoal)", lineHeight: "1.65", marginBottom: "1.25rem" }}>
                Crestline Global FZC LLC is guided by a multidisciplinary leadership team with experience across international trade, mining chemicals, mineral commodities, logistics, procurement, finance, and agricultural distribution.
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

      {/* Bottom Section: Meet Our Leadership Team */}
      <section className="meet-leader-section">
        <div className="container">
          <div className="meet-leader-title">Meet Our Leadership Team</div>
          <div className="meet-leader-grid">
            {bottomAvatars.map((member, idx) => (
              <div className="leader-member-card" key={idx}>
                <div className="leader-avatar-wrapper">
                  <AvatarSilhouette className="w-full h-full text-slate-400" />
                </div>
                <div className="leader-member-name">{member.name}</div>
                <div className="leader-member-role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
