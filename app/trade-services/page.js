import Link from "next/link";

export const metadata = {
  title: "Trade Services & Global Logistics Facilitation | Crestline Global FZC LLC UAE",
  description: "Strategic commodity sourcing, counterparty verification, SGS/Alex Stewart quality inspection, ocean freight chartering, and Dubai port clearance services.",
  alternates: {
    canonical: "/trade-services",
  },
};

export default function TradeServicesPage() {
  const services = [
    {
      category: "Sourcing & Counterparty Verification",
      title: "Trade Sourcing Services",
      desc: "Leveraging our established network to identify, vet, and contract with reliable producers of raw minerals, industrial chemicals, and agro products."
    },
    {
      category: "Freight & Transshipment",
      title: "Logistics Coordination",
      desc: "Supervising rail freight paths, heavy trucking logistics, and port warehousing operations across major transport corridors."
    },
    {
      category: "Risk & Regulatory Affairs",
      title: "Regulatory Compliance Audit",
      desc: "Assisting counterparties with local customs clearance, environmental licensing, quality testing, and chemical transport audits in other countries."
    }
  ];

  return (
    <div id="page-trade-services" className="page active">
      <div className="inner-header">
        <div className="container">
          <div className="section-label">Division 04</div>
          <h1 className="section-title">TRADE SERVICES. <span className="accent">GLOBAL EXECUTION.</span></h1>
        </div>
      </div>
      
      <section className="section-white-padding">
        <div className="container">
          <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
            We act as a vital trade bridge, facilitating seamless commercial exchanges and providing transaction security for international commodities, metallurgical corridors, and chemicals sourcing.
          </p>

          <div className="trade-services-grid">
            {services.map((service, index) => (
              <div key={index} className="trade-service-card">
                <div>
                  <div className="trade-service-category">
                    {service.category}
                  </div>
                  <h3 className="trade-service-title">
                    {service.title}
                  </h3>
                  <p className="trade-service-desc">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="trade-callout-card">
            <h4 className="trade-callout-title">
              Facilitating Global Partnerships
            </h4>
            <p className="trade-callout-desc">
              Our presence in key trade zones like the UAE combined with local operations, positions us uniquely to handle cross-border payments, compliance procedures, and supply security for transactions of any scale.
            </p>
            <Link href="/contact" className="btn-primary">
              Discuss Deal Facilitation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
