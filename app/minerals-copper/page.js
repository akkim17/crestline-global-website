import Link from "next/link";
import {
  MapPin,
  Globe,
  Handshake,
  ShieldCheck,
  Truck,
  Ship,
  TrendingUp,
  Coins,
  Sparkles,
  Layers,
  Settings,
  ClipboardCheck
} from "lucide-react";

export const metadata = {
  title: "Copper Cathodes 99.99% LME & Minerals Trading | Crestline Global FZC LLC",
  description: "Procurement and international trading of Grade A 99.99% Electrolytic Copper Cathodes, Copper Concentrates, Chromite, Cobalt, and Manganese for Dubai, GCC, Middle East, and global industrial markets.",
  alternates: {
    canonical: "/minerals-copper",
  },
};

export default function MineralsCopperPage() {
  const mineralOfferings = [
    {
      title: "Copper",
      desc: "Cathodes, Concentrates, and Scrap",
      bgColor: "#C26D48",
      icon: <Coins size={18} style={{ color: "#C26D48" }} />,
      photo: "/Copper.png"
    },
    {
      title: "Gold",
      desc: "Concentrates and Dore",
      bgColor: "#0A2540",
      icon: <Sparkles size={18} style={{ color: "#0A2540" }} />,
      photo: "/Gold.png"
    },
    {
      title: "Graphite",
      desc: "Flake and High-Purity Concentrates",
      bgColor: "#1A5F7A",
      icon: <Layers size={18} style={{ color: "#1A5F7A" }} />,
      photo: "/Cobalt.png"
    },
    {
      title: "Bauxite",
      desc: "Metallurgical Grade Ore",
      bgColor: "#4E1A29",
      icon: <Settings size={18} style={{ color: "#4E1A29" }} />,
      photo: "/Manganese.png"
    },
    {
      title: "Iron Ore",
      desc: "High-Grade Fines & Concentrates",
      bgColor: "#2D3748",
      icon: <ShieldCheck size={18} style={{ color: "#2D3748" }} />,
      photo: "/Chromite.png"
    }
  ];

  return (
    <div id="page-minerals-copper" className="page active minerals-theme">
      {/* 1. Page Header */}
      <div className="inner-header">
        <div className="container">
          <div className="inner-header-tagline">Division 02</div>
          <h1 className="section-title">
            GLOBAL MINERALS.<br />
            <span className="accent">RELIABLE TRADE.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: "1.02rem", color: "var(--charcoal)", marginTop: "1rem", maxWidth: "60ch" }}>
            Supplying critical raw materials that power industries, infrastructure, and global progress.
          </p>
        </div>
      </div>

      {/* 2. Main Two-Column Section */}
      <section className="section-white-padding" style={{ paddingBottom: "3.5rem" }}>
        <div className="container">
          <div className="two-col" style={{ alignItems: "stretch" }}>
            {/* Left Column: Sourcing Description & Bullets */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <MapPin size={22} style={{ color: "var(--copper)" }} />
                <h3 className="subsection-title-dark" style={{ fontSize: "1.25rem", color: "var(--wine-dark)", margin: 0, fontFamily: "var(--heading-font)", textTransform: "uppercase", fontWeight: "800", letterSpacing: "0.02em" }}>
                  Connecting Mineral Sources to Global Markets
                </h3>
              </div>
              <div className="divider" style={{ width: "60px", height: "3px", background: "var(--copper)", marginBottom: "1.5rem" }}></div>
              
              <p className="paragraph-spacing-heavy" style={{ fontSize: "0.95rem", color: "var(--charcoal)", lineHeight: "1.6", marginBottom: "2rem" }}>
                We trade a diversified range of base metals, mineral concentrates and industrial raw materials sourced from trusted mines and processors across Africa and beyond.
              </p>

              <div className="minerals-features-list">
                <div className="minerals-feature-row">
                  <div className="minerals-feature-icon-wrapper">
                    <Globe size={18} />
                  </div>
                  <div className="minerals-feature-row-content">
                    <div className="minerals-feature-row-title">Wide Mineral Portfolio</div>
                    <div className="minerals-feature-row-desc">Supplying a broad range of minerals and raw materials to global industries.</div>
                  </div>
                </div>

                <div className="minerals-feature-row">
                  <div className="minerals-feature-icon-wrapper">
                    <Handshake size={18} />
                  </div>
                  <div className="minerals-feature-row-content">
                    <div className="minerals-feature-row-title">Trusted Global Sourcing</div>
                    <div className="minerals-feature-row-desc">Working with verified producers, traders, and smelters across key mining regions.</div>
                  </div>
                </div>

                <div className="minerals-feature-row">
                  <div className="minerals-feature-icon-wrapper">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="minerals-feature-row-content">
                    <div className="minerals-feature-row-title">Quality &amp; Compliance Assured</div>
                    <div className="minerals-feature-row-desc">Strict quality control, assay verification and compliance with international standards.</div>
                  </div>
                </div>

                <div className="minerals-feature-row">
                  <div className="minerals-feature-icon-wrapper">
                    <Truck size={18} />
                  </div>
                  <div className="minerals-feature-row-content">
                    <div className="minerals-feature-row-title">Efficient Logistics Network</div>
                    <div className="minerals-feature-row-desc">Seamless coordination from mine to port with reliable, cost-effective shipping solutions.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Mineral Offerings Horizontal Row */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontFamily: "var(--heading-font)", fontSize: "1.1rem", color: "var(--wine-dark)", textTransform: "uppercase", fontWeight: "800", letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Our Key Mineral Offerings <span style={{ content: "''", display: "inline-block", width: "2rem", height: "2px", background: "var(--copper)", marginLeft: "0.5rem" }}></span>
                </h4>
              </div>

              <div className="minerals-row-grid">
                {mineralOfferings.map((mineral, idx) => (
                  <div className="mineral-card-visual" key={idx}>
                    <div className="mineral-card-photo" style={{ backgroundImage: `url('${mineral.photo}')` }}>
                      <div className="mineral-card-photo-overlay"></div>
                      <div className="mineral-card-circle-icon">
                        {mineral.icon}
                      </div>
                    </div>
                    <div className="mineral-card-body" style={{ backgroundColor: mineral.bgColor }}>
                      <div>
                        <h4>{mineral.title}</h4>
                        <p>{mineral.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Integrated Where We Operate Card */}
              <div className="minerals-operate-card">
                <div className="minerals-operate-title">
                  Where We Operate <span style={{ content: "''", display: "inline-block", width: "1.5rem", height: "1.5px", background: "var(--copper)", marginLeft: "0.5rem" }}></span>
                </div>
                <div className="minerals-operate-grid">
                  <div className="minerals-operate-col">
                    <Globe size={32} className="minerals-operate-icon" />
                    <span className="minerals-operate-text">
                      Sourced from<br />
                      <span>Africa &amp; Global</span><br />
                      Mining Regions
                    </span>
                  </div>
                  <div className="minerals-operate-col">
                    <ShieldCheck size={32} className="minerals-operate-icon" />
                    <span className="minerals-operate-text">
                      Traded through<br />
                      <span>Secure &amp; Compliant</span><br />
                      Channels
                    </span>
                  </div>
                  <div className="minerals-operate-col">
                    <Ship size={32} className="minerals-operate-icon" />
                    <span className="minerals-operate-text">
                      Delivered to<br />
                      <span>Global Buyers &amp;</span><br />
                      Industries
                    </span>
                  </div>
                  <div className="minerals-operate-col">
                    <TrendingUp size={32} className="minerals-operate-icon" />
                    <span className="minerals-operate-text">
                      Focused on<br />
                      <span>Value, Trust &amp;</span><br />
                      Long-term Growth
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Sourcing Callout Bar */}
              <div className="minerals-callout-bar">
                <div className="minerals-callout-left">
                  <div className="minerals-callout-circle-icon">
                    <ClipboardCheck size={22} />
                  </div>
                  <div className="minerals-callout-text">
                    <h4>Copper Trading &mdash; A Core Strength</h4>
                    <p>
                      Specialized in Electrolytic Copper Cathodes (Grade A), Copper Concentrates and Copper Scrap, sourced from the Central African Copperbelt to global markets.
                    </p>
                  </div>
                </div>
                <Link href="/contact" className="minerals-callout-btn">
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
