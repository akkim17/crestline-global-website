import Link from "next/link";
import Image from "next/image";

export default function Logo({ onClick, variant }) {
  const isFooter = variant === "footer";
  return (
    <Link href="/" className="crestline-logo-container" onClick={onClick}>
      <div className={`logo-emblem-wrapper ${isFooter ? "footer-logo" : ""}`}>
        <Image
          src="/logo-emblem.png"
          alt="Crestline Global Emblem"
          width={44}
          height={44}
          priority
        />
      </div>
      <div className="logo-text-wrapper">
        <span className="logo-text-main">CRESTLINE</span>
        {isFooter ? (
          <span className="logo-text-sub" style={{ fontSize: "0.68rem", letterSpacing: "0.1em" }}>GLOBAL FZC LLC</span>
        ) : (
          <span className="logo-text-sub">GLOBAL</span>
        )}
      </div>
    </Link>
  );
}
