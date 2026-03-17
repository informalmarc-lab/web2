import Image from "next/image";
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
          respond within 48 hours. If you’re a college woman (18+) or just
          starting out, this was built to feel doable.
        </p>
      </section>

      {/* Application form */}
      <section className={styles.formSection}>
        <ApplyForm />
        <div className={styles.formNotes}>
          <div className={styles.applyGallery}>
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
              alt="Woman at home preparing to go live"
              width={900}
              height={1100}
              className={styles.applyImage}
            />
            <Image
              src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=900&q=80"
              alt="Woman working from a calm home setup"
              width={900}
              height={1100}
              className={styles.applyImage}
            />
          </div>
          <p>We review every application personally. No bots, no auto-rejections.</p>
          <p>You’ll hear back via email within 48 hours.</p>
          <p>Not sure if this is right for you? Read our FAQ before applying.</p>
          <p>We welcome applications in any language, with support in English and Spanish.</p>
          <div className={styles.trustList}>
            <p>? We will never share your information.</p>
            <p>? Applying does not commit you to anything.</p>
            <p>? You can withdraw your application at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
