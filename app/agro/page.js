import Link from "next/link";
import {
  Leaf,
  Wheat,
  Droplet,
  FlaskConical,
  Sprout,
  Tractor,
  TrendingUp,
  ArrowRight
} from "lucide-react";

export const metadata = {
  title: "Agro Solutions & NPK Fertilizers | Crestline Global FZC LLC (Dubai & GCC)",
  description: "Distributing high-grade NPK fertilizers, Urea 46% N, soil nutrients, and bio-agriculture inputs across GCC, Middle East, Africa, and international farming markets.",
  alternates: {
    canonical: "/agro",
  },
};

const FarmhouseSVG = ({ className }) => (
  <svg viewBox="0 0 200 80" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
    <path d="M10 65 Q 40 45, 90 60 T 190 55" stroke="rgba(255,255,255,0.15)" />
    <path d="M5 72 Q 70 50, 130 68 T 195 65" stroke="rgba(255,255,255,0.25)" />
    <rect x="130" y="32" width="28" height="20" fill="none" stroke="rgba(255,255,255,0.3)" />
    <polygon points="127,32 144,18 161,32" stroke="rgba(255,255,255,0.3)" />
    <line x1="144" y1="18" x2="144" y2="52" stroke="rgba(255,255,255,0.15)" />
    <rect x="164" y="24" width="10" height="28" rx="2" fill="none" stroke="rgba(255,255,255,0.3)" />
    <path d="M164 24 Q 169 16, 174 24" stroke="rgba(255,255,255,0.3)" />
  </svg>
);

export default function AgroSolutionsPage() {
  const agroSolutions = [
    {
      title: "Bio Capsules & Inputs",
      desc: "Advanced biological inputs that enhance soil health and yield.",
      icon: <FlaskConical size={28} />
    },
    {
      title: "Soil Health Optimization",
      desc: "Solutions for soil regeneration and nutrient enrichment.",
      icon: <Sprout size={28} />
    },
    {
      title: "Water Use Efficiency",
      desc: "Technologies that maximize water utilization.",
      icon: <Droplet size={28} />
    },
    {
      title: "Crop Productivity Solutions",
      desc: "Proven solutions to increase yield and quality sustainably.",
      icon: <Wheat size={28} />
    },
    {
      title: "Supporting Farmers",
      desc: "Empowering farmers with knowledge, tools and support.",
      icon: <Tractor size={28} />
    }
  ];

  return (
    <div id="page-agro" className="page active agro-theme">
      {/* 1. Page Header */}
      <div className="inner-header">
        <div className="container">
          <div className="inner-header-tagline">Division 03</div>
          <h1 className="section-title">
            AGRO SOLUTIONS &<br />
            <span className="accent">SUSTAINABLE TECHNOLOGY</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: "1.02rem", color: "var(--charcoal)", marginTop: "1rem", maxWidth: "60ch" }}>
            Delivering innovative agricultural inputs and technologies that enhance productivity, restore soil health, and support food security.
          </p>
        </div>
      </div>

      {/* 2. Main Two-Column Section */}
      <section className="section-white-padding" style={{ paddingBottom: "3.5rem" }}>
        <div className="container">
          <div className="two-col" style={{ alignItems: "stretch" }}>
            {/* Left Column: SRT Bio Capsules Card (30%) */}
            <div className="agro-capsule-card">
              <h3 className="agro-capsule-card-title">SRT Bio Capsules Distribution</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--charcoal)", lineHeight: "1.55", marginBottom: "1.75rem" }}>
                Crestline Global leverages its logistics network to expand agricultural sustainability across the region. We are focused on securing distribution for SRT Bio Capsules within mainland Africa.
              </p>

              <div className="agro-bullets-list">
                <div className="agro-bullet-row">
                  <div className="agro-bullet-circle">
                    <Leaf size={15} />
                  </div>
                  <div className="agro-bullet-text">
                    <span>Biological optimization structures</span> that improve natural crop soil balance.
                  </div>
                </div>

                <div className="agro-bullet-row">
                  <div className="agro-bullet-circle">
                    <Sprout size={15} />
                  </div>
                  <div className="agro-bullet-text">
                    <span>Accelerates cellular root</span> nutrient absorption without long-term soil depletion.
                  </div>
                </div>

                <div className="agro-bullet-row">
                  <div className="agro-bullet-circle">
                    <TrendingUp size={15} />
                  </div>
                  <div className="agro-bullet-text">
                    <span>Built specifically</span> to scale up raw agricultural volume output metrics securely.
                  </div>
                </div>
              </div>

              <Link href="/contact" className="agro-capsule-btn">
                Learn More About SRT Biotechnology <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right Column: Key Offerings & Bottom Farmhouse Banner (70%) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Header: Our Agro Solutions */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontFamily: "var(--heading-font)", fontSize: "1.1rem", color: "var(--wine-dark)", textTransform: "uppercase", fontWeight: "800", letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Our Agro Solutions <span style={{ content: "''", display: "inline-block", width: "2rem", height: "2px", background: "var(--copper)", marginLeft: "0.5rem" }}></span>
                </h4>
              </div>

              {/* 5 columns grid */}
              <div className="agro-solutions-row">
                {agroSolutions.map((solution, idx) => (
                  <div className="agro-solution-card" key={idx}>
                    <div className="agro-solution-circle">
                      {solution.icon}
                    </div>
                    <h4>{solution.title}</h4>
                    <p>{solution.desc}</p>
                  </div>
                ))}
              </div>

              {/* Bottom Farmhouse Banner */}
              <div className="agro-bottom-banner">
                <div className="agro-bottom-left">
                  <div className="agro-bottom-circle">
                    <Leaf size={20} />
                  </div>
                  <div className="agro-bottom-text">
                    <h4>Sustainable Agriculture. Responsible Future.</h4>
                    <p>
                      We are committed to building a resilient agricultural ecosystem through innovation, sustainability, and responsible practices.
                    </p>
                  </div>
                </div>
                <FarmhouseSVG className="farmhouse-draw" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
