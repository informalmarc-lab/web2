import Link from "next/link";
import Button from "./Button";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/">
          <span className={styles.logoAccent}>Omega</span>
          <span className={styles.logoNeutral}>Agency</span>
        </Link>
        <div className={styles.actions}>
          <nav className={styles.nav} aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/catalog">Models</Link>
            <Link href="/apply">Apply</Link>
            <Link href="/faq">FAQ</Link>
          </nav>
          <Button href="/apply">Apply Now →</Button>
        </div>
      </div>
    </header>
  );
}
