import Link from "next/link";
import TextMarquee from "@/components/TextMarquee";
import {
  FlaskConical,
  Database,
  Leaf,
  Handshake,
  ShieldCheck,
  Globe,
  Trophy,
  AlertTriangle,
  Truck,
  User,
  TrendingUp
} from "lucide-react";

export const metadata = {
  title: "UAE Commodity Trading & Logistics Network | Crestline Global FZC LLC",
  description: "Crestline Global FZC LLC connects global producers and Middle East / Dubai buyers across Mining Chemicals, Grade A 99.99% Copper Cathodes, Agro Solutions (SRT Bio Capsules), and Trade Logistics.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div id="page-home" className="page active">
      <section id="hero">
        <div className="hero-left-column">
          <div className="hero-eyebrow reveal">
            UAE REGISTERED &bull; GLOBAL NETWORK
          </div>
          
          <h1 className="hero-headline reveal">
            GLOBAL REACH<br />
            <span className="accent-color">LOCAL EXECUTION</span>
          </h1>
          
          {/* Horizontal Segment Indicators */}
          <div className="hero-segments reveal" style={{ marginBottom: "1.5rem" }}>
            <Link href="/chemicals" className="hero-segment-item segment-link">
              <span className="segment-label-text" style={{ fontSize: "0.85rem" }}>Mining Chemicals</span>
            </Link>
            <span style={{ color: "rgba(6, 28, 55, 0.2)", fontSize: "1.1rem", fontWeight: 300 }}>|</span>
            <Link href="/minerals-copper" className="hero-segment-item segment-link">
              <span className="segment-label-text" style={{ fontSize: "0.85rem" }}>Copper &amp; Minerals</span>
            </Link>
            <span style={{ color: "rgba(6, 28, 55, 0.2)", fontSize: "1.1rem", fontWeight: 300 }}>|</span>
            <Link href="/agro" className="hero-segment-item segment-link">
              <span className="segment-label-text" style={{ fontSize: "0.85rem" }}>Agro Distribution</span>
            </Link>
          </div>
          
          <p className="hero-sub reveal" style={{ fontSize: "0.95rem", color: "var(--charcoal)", lineHeight: "1.6", marginBottom: "2rem" }}>
            Crestline Global FZC LLC is a UAE registered trading company specializing in mining chemicals, copper and mineral trading, agricultural distribution, and sourcing &amp; trade services. We connect global suppliers to reliable supply chains, competitive solutions, and trusted partnerships.
          </p>
          
          {/* 4 Columns Product Grid */}
          <div className="hero-product-grid reveal">
            <div className="product-col">
              <div className="product-icon-circle">
                <FlaskConical size={20} strokeWidth={2.5} />
              </div>
              <div className="product-col-title">Mining Chemicals</div>
              <ul className="product-col-list">
                <li className="product-col-item">&bull; Ammonium Nitrate</li>
                <li className="product-col-item">&bull; Sodium Cyanide</li>
                <li className="product-col-item">&bull; Activated Carbon</li>
                <li className="product-col-item">&bull; and more</li>
              </ul>
            </div>

            <div className="product-col">
              <div className="product-icon-circle">
                <Database size={20} strokeWidth={2.5} />
              </div>
              <div className="product-col-title">Minerals &amp; Copper</div>
              <ul className="product-col-list">
                <li className="product-col-item">&bull; Copper Cathodes</li>
                <li className="product-col-item">&bull; Copper Concentrates</li>
                <li className="product-col-item">&bull; Industrial Minerals</li>
                <li className="product-col-item">&bull; Bulk Commodities</li>
              </ul>
            </div>

            <div className="product-col">
              <div className="product-icon-circle">
                <Leaf size={20} strokeWidth={2.5} />
              </div>
              <div className="product-col-title">Agro Distribution</div>
              <ul className="product-col-list">
                <li className="product-col-item">&bull; SRT Bio Capsules</li>
                <li className="product-col-item">&bull; Crop Nutrition</li>
                <li className="product-col-item">&bull; Agricultural Inputs</li>
              </ul>
            </div>

            <div className="product-col">
              <div className="product-icon-circle">
                <Handshake size={20} strokeWidth={2.5} />
              </div>
              <div className="product-col-title">Trade Services</div>
              <ul className="product-col-list">
                <li className="product-col-item">&bull; Procurement Solutions</li>
                <li className="product-col-item">&bull; Logistics Support</li>
                <li className="product-col-item">&bull; Trade Sourcing</li>
                <li className="product-col-item">&bull; Compliance Audit</li>
              </ul>
            </div>
          </div>
          

          
          {/* Hero Actions */}
          <div className="hero-rebrand-actions reveal">
            <Link href="/contact" className="btn-rebrand-primary">
              Request A Quotation &rarr;
            </Link>
            <Link href="/about" className="btn-rebrand-secondary">
              Company Profile
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </Link>
          </div>
        </div>
        <div className="hero-right-column">
          {/* Curved crops cutout in the bottom right corner */}
          <div className="hero-crops-cutout"></div>
        </div>
      </section>
      
      {/* Dark Bottom Stats Banner Bar — matches design's 5 trust items */}
      <div className="hero-bottom-bar reveal">
        <div className="container">
          <div className="bottom-bar-grid">
            <div className="bottom-bar-col">
              <div className="bottom-bar-icon">
                <ShieldCheck size={24} />
              </div>
              <div className="bottom-bar-text">
                <div className="bottom-bar-title"><span>UAE</span></div>
                <div className="bottom-bar-sub">Registered Company</div>
              </div>
            </div>
            
            <div className="bottom-bar-col">
              <div className="bottom-bar-icon">
                <Globe size={24} />
              </div>
              <div className="bottom-bar-text">
                <div className="bottom-bar-title"><span>GLOBAL</span></div>
                <div className="bottom-bar-sub">Commodity Network</div>
              </div>
            </div>
            
            <div className="bottom-bar-col">
              <div className="bottom-bar-icon">
                <FlaskConical size={24} />
              </div>
              <div className="bottom-bar-text">
                <div className="bottom-bar-title"><span>MINING CHEMICAL</span></div>
                <div className="bottom-bar-sub">Wholesaler</div>
              </div>
            </div>
            
            <div className="bottom-bar-col">
              <div className="bottom-bar-icon">
                <Handshake size={24} />
              </div>
              <div className="bottom-bar-text">
                <div className="bottom-bar-title"><span>RELIABLE</span></div>
                <div className="bottom-bar-sub">Trade Partner</div>
              </div>
            </div>
            
            <div className="bottom-bar-col">
              <div className="bottom-bar-icon">
                <Trophy size={24} />
              </div>
              <div className="bottom-bar-text">
                <div className="bottom-bar-title"><span>EXPERIENCE IN</span></div>
                <div className="bottom-bar-sub">High Volume Trading</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TextMarquee />

      <section id="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal-left" style={{ backgroundImage: "url('/crestline-hero.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div className="about-card-deco">
                <h3>CRESTLINE</h3>
                <p className="deco-brand-sub">Resource Integrity</p>
                <div className="deco-line-divider"></div>
              </div>
            </div>
            <div className="about-text reveal-right">
              <div className="section-label">Enterprise Positioning</div>
              <h2 className="section-title">EQUIPPING COMMODITY ECOSYSTEMS <span className="accent">CROSS-CONTINENT</span></h2>
              <div className="divider"></div>
              <p>Crestline Global FZC LLC operates as a modern corporate interface bridging international heavy manufacturing outputs with primary processing sectors inside mainland Africa and global destination markets.</p>
              <p>Registered within the UAE and operating critical corridors throughout East and Southern Africa, we manage rigorous transactional protocols to offer security across volatile resource markets.</p>
              <div className="about-pillars">
                <div className="pillar">
                  <div className="pillar-num">I</div>
                  <div className="pillar-label">Bulk Chemical Logistics</div>
                </div>
                <div className="pillar">
                  <div className="pillar-num">II</div>
                  <div className="pillar-label">Cross-Border Base Metals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="segments">
        <div className="container">
          <div className="segments-header">
            <div className="section-label centered-label">Commercial Verticals</div>
            <h2 className="section-title reveal">CORE INDUSTRIAL <span className="accent">BUSINESS UNITS</span></h2>
          </div>
          <div className="segments-grid">
            <Link href="/chemicals" className="segment-card reveal">
              <div className="segment-card-content">
                <div>
                  <div className="segment-card-header">
                    <div className="segment-card-icon-wrapper chemicals-icon">
                      <FlaskConical size={24} />
                    </div>
                    <h3 className="segment-card-title">Chemicals &amp; Industrial Supplies</h3>
                  </div>
                  <div className="segment-card-underline"></div>
                  <p className="segment-card-desc">Registered allocation pipeline delivering wholesale Ammonium Nitrate porous prill, Sodium Cyanide briquettes, and granular high-absorption Activated Carbon elements to major operational sites.</p>
                </div>
                <div className="segment-card-pills">
                  <span className="segment-pill">NH<sub>4</sub>NO<sub>3</sub></span>
                  <span className="segment-pill warning-pill">
                    <AlertTriangle size={13} strokeWidth={2.5} style={{ marginRight: "2px" }} />
                    NaCN, C
                  </span>
                </div>
              </div>
              <div className="segment-card-image" style={{ backgroundImage: "url('/Chemical.webp')" }}></div>
            </Link>

            <Link href="/minerals-copper" className="segment-card reveal">
              <div className="segment-card-content">
                <div>
                  <div className="segment-card-header">
                    <div className="segment-card-icon-wrapper copper-icon">
                      <Database size={24} />
                    </div>
                    <h3 className="segment-card-title">Copper Trade Channels</h3>
                  </div>
                  <div className="segment-card-underline"></div>
                  <p className="segment-card-desc">Structured metallurgical procurement handling LME Grade A Copper Cathodes, crude processing concentrates, and copper industrial scrap blocks throughout the active Zambia-Congo freight corridors.</p>
                </div>
                <div className="segment-card-pills">
                  <span className="segment-pill">
                    <Database size={13} strokeWidth={2.5} />
                    East-African Copper belt access
                  </span>
                  <span className="segment-pill">
                    <Truck size={13} strokeWidth={2.5} />
                    Credible Network, Safer Trade
                  </span>
                </div>
              </div>
              <div className="segment-card-image" style={{ backgroundImage: "url('/Copper.webp')" }}></div>
            </Link>

            <Link href="/agro" className="segment-card reveal">
              <div className="segment-card-content">
                <div>
                  <div className="segment-card-header">
                    <div className="segment-card-icon-wrapper agro-icon">
                      <Leaf size={24} />
                    </div>
                    <h3 className="segment-card-title">Agro Solutions Division</h3>
                  </div>
                  <div className="segment-card-underline"></div>
                  <p className="segment-card-desc">Deploying market footprint access for SRT Bio Capsules within mainland Africa—pioneering biochemical soil optimization technology to scale farming crop outputs efficiently.</p>
                </div>
                <div className="segment-card-pills">
                  <span className="segment-pill">
                    <Leaf size={13} strokeWidth={2.5} />
                    SRT BIOTECHNOLOGY
                  </span>
                  <span className="segment-pill">
                    <Globe size={13} strokeWidth={2.5} />
                    GLOBAL FOOTPRINT
                  </span>
                </div>
              </div>
              <div className="segment-card-image" style={{ backgroundImage: "url('/Agro.webp')" }}></div>
            </Link>

            <Link href="/trade-services" className="segment-card reveal">
              <div className="segment-card-content">
                <div>
                  <div className="segment-card-header">
                    <div className="segment-card-icon-wrapper commission-icon">
                      <Handshake size={24} />
                    </div>
                    <h3 className="segment-card-title">Sourcing &amp; Trading Solutions</h3>
                  </div>
                  <div className="segment-card-underline"></div>
                  <p className="segment-card-desc">Offering professional sourcing services and global trading solutions. We act as a reliable bridge between suppliers and buyers, ensuring secure transactions, procurement support, and end-to-end trade management.</p>
                </div>
                <div className="segment-card-pills">
                  <span className="segment-pill">
                    <User size={13} strokeWidth={2.5} />
                    Bridge for Traders
                  </span>
                  <span className="segment-pill">
                    <Globe size={13} strokeWidth={2.5} />
                    GLOBAL TRADING
                  </span>
                </div>
              </div>
              <div className="segment-card-image" style={{ backgroundImage: "url('/Handshake.webp')" }}></div>
            </Link>
          </div>

          {/* Bottom stats/compliance banner from mockup */}
          <div className="verticals-bottom-bar reveal">
            <div className="verticals-bottom-grid">
              <div className="verticals-bottom-col">
                <div className="verticals-bottom-icon">
                  <ShieldCheck size={24} />
                </div>
                <div className="verticals-bottom-text">
                  <div className="verticals-bottom-title">COMPLIANCE ASSURED</div>
                  <div className="verticals-bottom-sub">Licensed &amp; Quality Assured</div>
                </div>
              </div>

              <div className="verticals-bottom-col">
                <div className="verticals-bottom-icon">
                  <Globe size={24} />
                </div>
                <div className="verticals-bottom-text">
                  <div className="verticals-bottom-title">GLOBAL SOURCING</div>
                  <div className="verticals-bottom-sub">Trusted Suppliers, Reliable Quality</div>
                </div>
              </div>

              <div className="verticals-bottom-col">
                <div className="verticals-bottom-icon">
                  <Handshake size={24} />
                </div>
                <div className="verticals-bottom-text">
                  <div className="verticals-bottom-title">STRATEGIC PARTNERSHIPS</div>
                  <div className="verticals-bottom-sub">Long-term Value, Driven Relationships</div>
                </div>
              </div>

              <div className="verticals-bottom-col">
                <div className="verticals-bottom-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="verticals-bottom-text">
                  <div className="verticals-bottom-title">SUSTAINABLE GROWTH</div>
                  <div className="verticals-bottom-sub">Building Assets, Creating Value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div>
              <div className="cta-tagline">— Global Partnerships. Reliable Solutions.</div>
              <h3 className="section-title headline-xl" style={{ textTransform: "uppercase", lineHeight: "1.05", marginBottom: "1rem" }}>
                Engage With An<br />
                International<br />
                <span className="accent">Resource Partner</span>
              </h3>
              <p className="cta-subtitle" style={{ fontSize: "1.02rem", color: "var(--charcoal)", marginTop: "0.75rem", maxWidth: "55ch", lineHeight: "1.6" }}>
                Securing premium, compliant commercial supply channels globally.
              </p>
            </div>
            <Link href="/contact" className="cta-btn">
              <Globe size={18} style={{ marginRight: "8px" }} />
              Connect With Crestline
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
