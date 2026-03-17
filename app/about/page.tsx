import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* The Omega story */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>The Omega story</h1>
          <div className={styles.storyText}>
            <p>Elisa didn't start Omega because she wanted to run an agency.</p>
            <p>
              She started it because the agencies she worked with kept failing
              the creators they were supposed to help.
            </p>
            <p>
              When Elisa first entered the webcam industry, she did what most
              new models do -- she joined agencies that promised growth,
              promotion, and support. They talked about marketing teams, account
              management, and higher earnings.
            </p>
            <p>
              But after working with several different agencies, she realized
              something.
            </p>
            <p>
              Most of them were built around taking a percentage of the
              model's income while providing very little real help.
            </p>
            <p>
              Delayed payouts, poor communication, and empty promises became a
              pattern. Elisa watched talented creators struggle while agencies
              collected their cut.
            </p>
            <p>
              Eventually she decided she was done relying on a system that
              didn't respect the people doing the work.
            </p>
            <p>In 2022, Elisa founded Omega.</p>
            <p>
              Instead of building another agency that takes a percentage from
              models, she designed Omega around a different idea: creators
              should keep what they earn.
            </p>
            <p>
              Omega doesn't take a cut of model income. Instead, small
              advertisements are placed in the bottom-left corner of streams,
              which helps support the platform and its operations.
            </p>
            <p>
              Elisa also made another decision that separates her from many
              agency owners -- she stays close to the industry and the creators
              in it. That connection keeps Omega grounded in what creators
              actually deal with every day.
            </p>
            <p>
              What started as a small project helping a few models quickly grew
              through word of mouth. Creators who had experienced the same
              frustrations Elisa once faced began joining.
            </p>
            <p>
              Since launching in 2022, the creators working with Omega have
              collectively generated over $4 million. In 2026 alone, that number
              has already surpassed $250,000.
            </p>
            <p>
              For Elisa, those numbers aren't just milestones. They're proof
              that when creators are supported instead of exploited, everyone
              wins.
            </p>
            <p>
              Omega was built by someone who experienced the problems firsthand
              -- and decided to fix them.
            </p>
          </div>
        </div>
        <div className={styles.heroPanel}>
          <h2>Why it works</h2>
          <p>
            Omega keeps creators in control. Your account stays yours, your
            payouts go directly to you, and you can leave whenever you want.
          </p>
          <div className={styles.panelGrid}>
            <div>
              <span>Launched</span>
              <strong>2022</strong>
            </div>
            <div>
              <span>Creator earnings</span>
              <strong>$4,000,000+</strong>
            </div>
            <div>
              <span>Agency cut</span>
              <strong>$0</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Who we're looking for + beliefs */}
      <section className={styles.splitSection}>
        <div>
          <h2>Who we're looking for</h2>
          <p className={styles.lead}>
            You don't need experience. You don't need a following. You don't
            need to know anything about streaming.
          </p>
          <p>
            If you're ambitious and ready to build something for yourself,
            we'll handle the rest.
          </p>
          <p>
            We work with creators on StripChat and Chaturbate, and we welcome
            applications in any language with support in English and Spanish.
          </p>
          <p>
            We're particularly focused on helping women in the US who are
            looking for flexible, independent income on their own terms --
            including Latina creators, bilingual creators, and college women
            (18+) -- without sacrificing their accounts, their earnings, or their
            freedom to walk away whenever they want.
          </p>
        </div>
        <div className={styles.beliefs}>
          <h2>What we believe</h2>
          <ul>
            <li>Your account is yours. We will never ask for your login.</li>
            <li>Your money is yours. It goes directly to you.</li>
            <li>Your time is yours. No mandatory schedules or quotas.</li>
            <li>You can leave whenever you want. No lock-in or penalties.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
