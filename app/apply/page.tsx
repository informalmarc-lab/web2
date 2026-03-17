import ApplyForm from "@/components/ApplyForm";
import styles from "./page.module.css";

export default function ApplyPage() {
  return (
    <div className={styles.page}>
      {/* Intro */}
      <section className={styles.hero}>
        <h1>Take the first step.</h1>
        <p className={styles.subhead}>
          Fill out the form below. We review every application personally and
          respond within 48 hours. If you're a college woman (18+) or just
          starting out, this was built to feel doable.
        </p>
      </section>

      {/* Application form */}
      <section className={styles.formSection}>
        <ApplyForm />
        <div className={styles.formNotes}>
          <div className={styles.applyCard}>
            <h2>What happens next</h2>
            <ul>
              <li>We review every application personally.</li>
              <li>You hear back within 48 hours by email.</li>
              <li>If accepted, we help you go live within 2 hours.</li>
            </ul>
          </div>
          <p>Not sure if this is right for you? Read our FAQ before applying.</p>
          <p>We welcome applications in any language, with support in English and Spanish.</p>
          <div className={styles.trustList}>
            <p>We will never share your information.</p>
            <p>Applying does not commit you to anything.</p>
            <p>You can withdraw your application at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
