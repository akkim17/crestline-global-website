import { Barlow, Barlow_Condensed, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--body-font",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--heading-font",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--display-font",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://crestlineglobalfzc.com"),
  title: {
    default: "Crestline Global FZC LLC | UAE Commodity Trading & Logistics (Dubai & Middle East)",
    template: "%s | Crestline Global FZC LLC",
  },
  description: "Crestline Global FZC LLC is a premier UAE-registered commodity trading network based in Ajman Free Zone. Supplying Mining Chemicals, Grade A 99.99% Copper Cathodes, NPK Agro Solutions, and Trade Logistics across Dubai, GCC, Middle East, Africa, and Asia.",
  keywords: [
    "Crestline Global FZC LLC",
    "Dubai commodity trading company",
    "UAE mining chemicals supplier",
    "Copper Cathodes 99.99% LME Dubai",
    "Middle East industrial chemicals distributor",
    "NPK fertilizers Dubai UAE",
    "GCC trade services",
    "Ajman Free Zone trading firm",
    "Africa Middle East logistics trading",
    "ammonium nitrate bulk UAE",
    "sodium cyanide Middle East",
    "copper concentrate trading Dubai",
    "mineral inspection SGS UAE"
  ],
  authors: [{ name: "Crestline Global FZC LLC" }],
  creator: "Crestline Global FZC LLC",
  publisher: "Crestline Global FZC LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Crestline Global FZC LLC | UAE Commodity Trading & Logistics Network",
    description: "UAE-registered international commodity trading house in Ajman Free Zone. Connecting global suppliers and Middle East / Dubai buyers across Mining Chemicals, Copper Cathodes, Agro Solutions, and Trade Services.",
    url: "https://crestlineglobalfzc.com",
    siteName: "Crestline Global FZC LLC",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/Banner.png",
        width: 1200,
        height: 630,
        alt: "Crestline Global FZC LLC - Global Commodity & Trade Services Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crestline Global FZC LLC | UAE Commodity Trading & Logistics",
    description: "UAE-registered commodity trading house specializing in Mining Chemicals, Copper Cathodes 99.99%, Agro Solutions, and Trade Services.",
    images: ["/Banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Crestline Global FZC LLC",
    "url": "https://crestlineglobalfzc.com",
    "logo": "https://crestlineglobalfzc.com/Banner.png",
    "description": "UAE-registered international commodity trading house specializing in Mining Chemicals, Grade A 99.99% Copper Cathodes, Agro Solutions, and Trade Services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ajman Free Zone",
      "addressLocality": "Ajman",
      "addressCountry": "AE"
    },
    "telephone": "+971501234567",
    "email": "info@crestlineglobalfzc.com",
    "areaServed": ["United Arab Emirates", "Dubai", "Ajman", "GCC", "Middle East", "Africa", "Asia"],
    "knowsAbout": [
      "Mining Chemicals & Flotation Reagents",
      "Electrolytic Copper Cathodes Grade A 99.99%",
      "Copper Concentrates & Base Metals",
      "Agro Fertilizers NPK & Urea",
      "Global Sourcing & Port Inspection Services"
    ]
  };

  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${bebasNeue.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollReveal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
