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
            Free promotion. Full setup. Start within 2 hours -- your money goes
            straight to you every time.
          </p>
          <p className={styles.heroSupport}>
            No experience needed. No contracts that trap you. Just real support
            from people who get it -- so you can look at this and feel,
            "I can do this."
          </p>
          <div className={styles.heroActions}>
            <Button href="/apply">Apply Now -></Button>
            <div className={styles.trustBadge}>No Agency Fee -- Ever</div>
          </div>
        </div>
        <div className={styles.heroArt}>
          <div className={styles.heroTag}>Zero fee agency</div>
          <div className={styles.heroStat}>
            <span>Start in</span>
            <strong>2 hours</strong>
          </div>
          <p>
            We set up your stream, branding, and promotion so you can go live
            with confidence and keep 100% of your earnings.
          </p>
          <div className={styles.heroDivider} />
          <div className={styles.heroMiniGrid}>
            <div>
              <span>Setup</span>
              <strong>Done for you</strong>
            </div>
            <div>
              <span>Promotion</span>
              <strong>Always on</strong>
            </div>
            <div>
              <span>Fees</span>
              <strong>$0</strong>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.section}>
        <div>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <p className={styles.sectionLead}>Three steps. That's it.</p>
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
              go live with confidence -- often within 2 hours.
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
            Omega is for women 18+ who want flexible income on their own terms --
            especially college women, bilingual creators, and Latina creators.
            We welcome applications in any language, with support available in
            English and Spanish.
          </p>
        </div>
        <div className={styles.callout}>
          <h3>You don't need experience to start</h3>
          <p>
            If you're in college and want a real income stream without a rigid
            schedule, we make the first steps simple and supportive.
          </p>
        </div>
        <div className={styles.communityGrid}>
          <div>
            <h4>Flexible schedules</h4>
            <p>Stream when you want, pause when you need to.</p>
          </div>
          <div>
            <h4>Privacy first</h4>
            <p>We show you how to stay anonymous and stay safe.</p>
          </div>
          <div>
            <h4>Support in two languages</h4>
            <p>Guidance available in English and Spanish.</p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className={styles.section}>
        <div>
          <h2 className={styles.sectionTitle}>What you get</h2>
          <p className={styles.sectionLead}>
            Everything you need to build a real income -- without giving any of
            it away.
          </p>
        </div>
        <div className={styles.cardGrid}>
          <Card title="On-Stream Ad Placement">
            A small, non-intrusive overlay sits in the bottom-left corner of
            your stream. You keep streaming. We handle the rest.
          </Card>
          <Card title="Featured Profile on Omega Agency">
            Your name, your image, your bio -- showcased to everyone who visits
            omegagency.cam.
          </Card>
          <Card title="Off-Site Promotion">
            We actively promote you beyond the site -- helping drive new viewers
            directly to your streams.
          </Card>
          <Card title="Full Coaching and Setup Support">
            Never streamed before? No problem. We'll walk you through
            equipment, lighting, platform setup, and what actually works.
          </Card>
          <Card title="Your Money, Your Account, Always">
            Your earnings hit your account directly. We never touch your money --
            not a single dollar passes through us.
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
            <p>taken from a single creator's income. Ever.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <div className={styles.testimonials}>
          <blockquote>
            "I was nervous about joining an agency. Omega was the first one
            that didn't ask for anything from me. Within two weeks I had
            more viewers than I'd ever had on my own." -- Anonymous, StripChat
          </blockquote>
          <blockquote>
            "They set everything up for me from scratch. I didn't know
            anything about streaming and now I'm making more than I did at
            my 9-to-5." -- Anonymous, Chaturbate
          </blockquote>
          <blockquote>
            "What sold me was knowing my account is mine and my money is mine.
            Omega doesn't change that. They just help you grow." -- Anonymous,
            StripChat
          </blockquote>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.ctaStrip}>
        <h2>Ready to start? It costs you nothing.</h2>
        <Button href="/apply">Apply Now -></Button>
      </section>
    </div>
  );
}
