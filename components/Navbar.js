"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/chemicals", label: "MINING CHEMICALS" },
    { href: "/minerals-copper", label: "MINERALS & COPPER" },
    { href: "/agro", label: "AGRO" },
    { href: "/trade-services", label: "TRADE SERVICES" },
  ];

  const isAgro = pathname === "/agro";

  return (
    <>
      <nav id="nav" className={`${scrolled ? "scrolled" : ""} ${isAgro ? "agro-theme" : ""}`}>
        <div className="container">
          <div className="nav-inner">
            <Logo onClick={closeMobileMenu} />
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? "active" : ""}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="nav-cta" onClick={closeMobileMenu}>
                  CONTACT
                </Link>
              </li>
            </ul>
            <button
              className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
              id="hamburger"
              aria-label="Toggle Portal Navigation Menu"
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""} ${isAgro ? "agro-theme" : ""}`} id="mobileMenu">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeMobileMenu}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" onClick={closeMobileMenu}>
          CONTACT
        </Link>
      </div>
    </>
  );
}
