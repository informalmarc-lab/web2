import Button from "@/components/Button";
import styles from "./page.module.css";

export default function AnonymityPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Privacy first</p>
          <h1>How models stay anonymous</h1>
          <p className={styles.lead}>
            We build privacy into every step so you can grow without exposing
            your real identity. You stay in control, always.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Our privacy playbook</h2>
          <ul className={styles.list}>
            <li>Use a stage name and a separate email for all accounts.</li>
            <li>Keep social media and streaming accounts completely separate.</li>
            <li>Use a dedicated phone number or app number for verification.</li>
            <li>Control what your background shows with simple lighting tricks.</li>
            <li>Set your payout method directly with the platform.</li>
            <li>Block regions if you want extra privacy.</li>
            <li>We never ask for your login, ever.</li>
          </ul>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.storyCard}>
          <p className={styles.storyLabel}>Real story</p>
          <h2>"Maya" paid off college in 10 weeks</h2>
          <p>
            Maya is a 21-year-old college student in the Midwest. She started on
            January 1, 2026 with a stage name, a new email, and a simple setup in
            her dorm. We helped her build a safe routine and keep her identity
            private from day one.
          </p>
          <p>
            By March 12, 2026 she had earned over $45,000, paid off her spring
            semester, and covered her remaining balance for the year. She still
            streams under her stage name and has kept her real identity private.
          </p>
          <p>
            Her biggest takeaway: privacy is not a myth. It is a system. When you
            follow the steps, you stay anonymous and you stay in control.
          </p>
          <Button href="/apply" variant="secondary">Apply with privacy in mind</Button>
        </div>
      </section>
    </div>
  );
}
