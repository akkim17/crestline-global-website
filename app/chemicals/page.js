export const metadata = {
  title: "Mining Chemicals & Industrial Supplies | Crestline Global FZC LLC (Dubai & UAE)",
  description: "Premier Middle East supplier of mining chemicals, flotation reagents, collectors, frothers, leaching agents, bulk Ammonium Nitrate, and Sodium Cyanide for UAE, GCC, Africa, and international mining operations.",
  alternates: {
    canonical: "/chemicals",
  },
};

export default function ChemicalsPage() {
  return (
    <div id="page-chemicals" className="page active">
      <div className="inner-header">
        <div className="container">
          <div className="section-label">Division 01</div>
          <h1 className="section-title">MINING CHEMICALS &amp; <span className="accent">INDUSTRIAL SUPPLIES</span></h1>
        </div>
      </div>
      <section className="section-white-padding">
        <div className="container">
          <p className="section-subtitle">
            Crestline Global FZC LLC coordinates a highly secure logistics infrastructure to import, warehouse,
            and distribute key chemical reagents for gold and copper leaching circuits across major regional fields.
          </p>

          <div className="chemicals-grid">
            <div className="chem-card">
              <div className="chem-formula">NH<sub>4</sub>NO<sub>3</sub></div>
              <div className="chem-name">Ammonium Nitrate</div>
              <p className="chem-desc">
                Porous prill optimization engineered directly for commercial mining explosive matrix compounds.
                Distributed securely under strict regulatory validation protocols to certified blasting contractors.
              </p>
            </div>
            <div className="chem-card">
              <div className="chem-formula">NaCN</div>
              <div className="chem-name">Sodium Cyanide</div>
              <p className="chem-desc">
                High-concentration processing reagent briquettes manufactured specifically for complex recovery agitation
                tank lines. Managed within a secure supply chain framework from origin to mine site.
              </p>
            </div>
            <div className="chem-card">
              <div className="chem-formula">C</div>
              <div className="chem-name">Activated Carbon</div>
              <p className="chem-desc">
                High hardness, premium grain granular activated carbon materials engineered to prevent particle loss
                during demanding absorption and gold stripping cycles.
              </p>
            </div>
          </div>

          <div className="compliance-badges">
            <div className="badge">Licensed Bulk Handler</div>
            <div className="badge">International Origin Supply Streams</div>
          </div>
        </div>
      </section>
    </div>
  );
}
