import Button from "@/components/Button";
import styles from "./page.module.css";

export default function AnonymityPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Your privacy is non-negotiable.</h1>
        <p className={styles.subhead}>
          Streaming doesn't have to mean giving up your identity. Here's how we
          help you stay completely anonymous.
        </p>
      </section>

      <section className={styles.grid}>
        <div className={styles.card}>
          <h2>Use any name you want.</h2>
          <p>
            Your streaming name is entirely your choice. It doesn't have to be
            your real name, anything close to it, or anything that could
            identify you. We help you pick a persona that feels right and
            protects your privacy.
          </p>
        </div>
        <div className={styles.card}>
          <h2>You control what people see.</h2>
          <p>
            Many creators choose to stream without showing their face, or use
            lighting, angles, and accessories to limit identification. We'll
            walk you through exactly how to set up your stream so you stay
            comfortable with what's visible -- and what isn't.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Your location stays private.</h2>
          <p>
            Neither your city, state, nor any personal location information is
            ever displayed on your profile or stream. StripChat and Chaturbate
            do not show your real location to viewers. We will never ask you to
            reveal where you are.
          </p>
        </div>
        <div className={styles.card}>
          <h2>We verify your age. That's it.</h2>
          <p>
            Platforms require age verification to comply with the law -- this is
            a one-time process between you and the platform, not Omega. Beyond
            that, your real name and identity are never shared, displayed, or
            disclosed to anyone. Not to viewers, not to us.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Keep your streaming life separate.</h2>
          <p>
            We strongly recommend keeping your streaming persona completely
            separate from any personal social media accounts. Don't use the
            same username, profile picture, or email. We'll help you set up a
            dedicated email address for your streaming accounts if needed.
          </p>
        </div>
      </section>

      <section className={styles.trustBlock}>
        <h3>Privacy promises</h3>
        <ul>
          <li>Your real name is never displayed anywhere</li>
          <li>Your location is never shared or shown</li>
          <li>You control exactly what appears on camera</li>
          <li>Age verification is between you and the platform only</li>
          <li>We never share your personal information with anyone</li>
        </ul>
      </section>

      <section className={styles.cta}>
        <div>
          <h2>Ready to get started safely?</h2>
          <Button href="/apply">Apply Now -></Button>
        </div>
      </section>
    </div>
  );
}
