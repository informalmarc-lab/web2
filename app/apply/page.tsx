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
          respond within 48 hours.
        </p>
      </section>

      {/* Application form */}
      <section className={styles.formSection}>
        <ApplyForm />
        <div className={styles.formNotes}>
          <p>We review every application personally. No bots, no auto-rejections.</p>
          <p>You&apos;ll hear back via email within 48 hours.</p>
          <p>Not sure if this is right for you? Read our FAQ before applying.</p>
          <div className={styles.trustList}>
            <p>✓ We will never share your information.</p>
            <p>✓ Applying does not commit you to anything.</p>
            <p>✓ You can withdraw your application at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
