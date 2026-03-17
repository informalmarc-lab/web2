import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Most agencies take 30%. We take zero.
          </h1>
          <p className={styles.heroSubhead}>
            Free promotion. Full setup. Your money goes straight to you — every
            time, no exceptions.
          </p>
          <p className={styles.heroSupport}>
            No experience needed. No contracts that trap you. Just real support
            from people who actually get it.
          </p>
          <div className={styles.heroActions}>
            <Button href="/apply">Apply Now →</Button>
            <div className={styles.trustBadge}>✓ No Agency Fee — Ever</div>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <Image
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80"
            alt="Woman working confidently from home"
            width={1200}
            height={900}
            className={styles.heroImage}
          />
          <div className={styles.heroGlow} aria-hidden="true" />
        </div>
      </section>

      {/* How it works */}
      <section className={styles.section}>
        <div>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <p className={styles.sectionLead}>Three steps. That&apos;s it.</p>
        </div>
        <div className={styles.steps}>
          <div className={styles.stepCard}>
            <span className={styles.stepNumber}>01</span>
            <h3>Apply</h3>
            <p>
              Fill out a short form. We review every application personally and
              get back to you within 48 hours.
            </p>
          </div>
          <div className={styles.stepCard}>
            <span className={styles.stepNumber}>02</span>
            <h3>Get Set Up</h3>
            <p>
              We handle your stream setup, branding, and everything you need to
              go live with confidence.
            </p>
          </div>
          <div className={styles.stepCard}>
            <span className={styles.stepNumber}>03</span>
            <h3>Get Promoted</h3>
            <p>
              On-stream placement, a featured profile on our site, and ongoing
              promotion. All free. Always.
            </p>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className={styles.section}>
        <div>
          <h2 className={styles.sectionTitle}>Built for women who want freedom</h2>
          <p className={styles.sectionLead}>
            Omega is for women 18+ who want flexible income on their own terms —
            including college-age women, bilingual creators, and Latina creators.
            We welcome applications in any language, with support available in
            English and Spanish.
          </p>
        </div>
        <div className={styles.imageGrid}>
          <Image
            src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=900&q=80"
            alt="Woman working from home with a laptop"
            width={900}
            height={1100}
            className={styles.imageTile}
          />
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
            alt="Confident woman smiling at her desk"
            width={900}
            height={1100}
            className={styles.imageTile}
          />
          <Image
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
            alt="Woman preparing for a work session at home"
            width={900}
            height={1100}
            className={styles.imageTile}
          />
        </div>
      </section>

      {/* What you get */}
      <section className={styles.section}>
        <div>
          <h2 className={styles.sectionTitle}>What you get</h2>
          <p className={styles.sectionLead}>
            Everything you need to build a real income — without giving any of
            it away.
          </p>
        </div>
        <div className={styles.cardGrid}>
          <Card title="On-Stream Ad Placement">
            A small, non-intrusive overlay sits in the bottom-left corner of
            your stream. You keep streaming. We handle the rest.
          </Card>
          <Card title="Featured Profile on Omega Agency">
            Your name, your image, your bio — showcased to everyone who visits
            omegagency.cam.
          </Card>
          <Card title="Off-Site Promotion">
            We actively promote you beyond the site — helping drive new viewers
            directly to your streams.
          </Card>
          <Card title="Full Coaching & Setup Support">
            Never streamed before? No problem. We&apos;ll walk you through
            equipment, lighting, platform setup, and what actually works.
          </Card>
          <Card title="Your Money, Your Account, Always">
            Your earnings hit your account directly. We never touch your money
            — not a single dollar passes through us.
          </Card>
        </div>
      </section>

      {/* Numbers */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The numbers</h2>
        <div className={styles.stats}>
          <div className={styles.statBlock}>
            <h3>$4,000,000+</h3>
            <p>earned collectively by Omega creators since 2022.</p>
          </div>
          <div className={styles.statBlock}>
            <h3>$250,000+</h3>
            <p>already earned in 2026 alone.</p>
          </div>
          <div className={styles.statBlock}>
            <h3>$0</h3>
            <p>taken from a single creator&apos;s income. Ever.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <div className={styles.testimonials}>
          <blockquote>
            &quot;I was nervous about joining an agency. Omega was the first one
            that didn&apos;t ask for anything from me. Within two weeks I had
            more viewers than I&apos;d ever had on my own.&quot; — Anonymous, StripChat
          </blockquote>
          <blockquote>
            &quot;They set everything up for me from scratch. I didn&apos;t know
            anything about streaming and now I&apos;m making more than I did at
            my 9-to-5.&quot; — Anonymous, Chaturbate
          </blockquote>
          <blockquote>
            &quot;What sold me was knowing my account is mine and my money is mine.
            Omega doesn&apos;t change that. They just help you grow.&quot; — Anonymous,
            StripChat
          </blockquote>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.ctaStrip}>
        <h2>Ready to start? It costs you nothing.</h2>
        <Button href="/apply">Apply Now →</Button>
      </section>
    </div>
  );
}
