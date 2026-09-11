export default function TextMarquee() {
  const items = [
    "Ammonium Nitrate Bulk Supply",
    "Grade A Copper Cathode Trading",
    "SRT Bio Capsules Channel",
    "Gold CIP Plant Engineering",
    "Global Commodity Sourcing Network",
  ];

  // Repeat items to enable infinite animation loop
  const doubleItems = [...items, ...items];

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubleItems.map((item, idx) => (
          <div key={idx} className="ticker-item">
            {item} <div className="ticker-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
