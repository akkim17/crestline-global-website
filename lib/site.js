// Single source of truth for company contact details and the canonical domain.
// Leave a value as null to hide it everywhere on the site.
export const site = {
  name: "Crestline Global FZC LLC",
  url: "https://www.crestlineglobalfzc.com",
  email: "info@crestlineglobalfzc.com",
  // Display format, e.g. "+971 50 000 0000". Also used for the WhatsApp link and structured data.
  phone: null,
  linkedin: null, // e.g. "https://www.linkedin.com/company/crestline-global"
  address: {
    lines: ["Ajman Free Zone", "Ajman, United Arab Emirates"],
    locality: "Ajman",
    country: "AE",
  },
};

// "+971 50 000 0000" -> "971500000000"
export const phoneDigits = site.phone ? site.phone.replace(/\D/g, "") : null;
export const whatsappUrl = phoneDigits ? `https://wa.me/${phoneDigits}` : null;
