"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/catalog", label: "Catalog" },
  { href: "/anonymity", label: "Anonymity" },
  { href: "/apply", label: "Apply" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Lock body scroll when the drawer is open on mobile.
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/">
          <span className={styles.logoAccent}>Omega</span>
          <span className={styles.logoNeutral}>Agency</span>
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileActions}>
          <Button href="/apply">Apply Now -></Button>
          <button
            className={styles.menuButton}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div
        className={`${styles.drawerOverlay} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(false)}
      />
      <aside className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.drawerHeader}>
          <span>Menu</span>
          <button
            className={styles.closeButton}
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
          >
            Close
          </button>
        </div>
        <div className={styles.drawerLinks}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
        <Button href="/apply" variant="secondary">
          Apply Now ->
        </Button>
      </aside>
    </header>
  );
}
