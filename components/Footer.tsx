import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.message}>Questions? Apply and ask us directly.</p>
        <nav className={styles.links} aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/apply">Apply</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <p className={styles.meta}>(c) 2026 Omega Agency - omegagency.cam</p>
      </div>
    </footer>
  );
}
