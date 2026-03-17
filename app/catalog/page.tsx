import Button from "@/components/Button";
import styles from "./page.module.css";

type Creator = {
  name: string;
  bio: string;
  platforms: string[];
  status: "Online Now" | "Available" | "Away";
};

const creators: Creator[] = [
  {
    name: "Jade M.",
    bio:
      "Warm and easy to talk to. Jade loves connecting with her audience and makes every session feel personal.",
    platforms: ["StripChat", "Chaturbate"],
    status: "Online Now",
  },
  {
    name: "Rosa V.",
    bio:
      "Bilingual creator bringing high energy and genuine personality to every stream.",
    platforms: ["StripChat"],
    status: "Available",
  },
  {
    name: "Ava K.",
    bio:
      "Easy going and authentic. Ava started with no experience and built a loyal following in just 3 months.",
    platforms: ["Chaturbate"],
    status: "Away",
  },
  {
    name: "Lily S.",
    bio:
      "Creative, confident, and always entertaining. Lily is one of Omega's fastest growing creators.",
    platforms: ["StripChat", "Chaturbate"],
    status: "Online Now",
  },
  {
    name: "Nina R.",
    bio:
      "Professional and punctual. Nina runs a tight schedule and consistently delivers for her audience.",
    platforms: ["Chaturbate"],
    status: "Available",
  },
  {
    name: "Cami T.",
    bio:
      "Fun, spontaneous, and genuinely herself on every stream. New to Omega and already turning heads.",
    platforms: ["StripChat"],
    status: "Online Now",
  },
];

export default function CatalogPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Our Creators</h1>
        <p>
          Meet some of the talent working with Omega Agency.
        </p>
      </section>

      <section className={styles.grid}>
        {creators.map((creator) => {
          const statusClass = creator.status.replace(" ", "").toLowerCase();
          return (
            <article key={creator.name} className={styles.card}>
              <div className={styles.avatar} aria-hidden="true" />
              <div className={styles.cardHeader}>
                <h2>{creator.name}</h2>
                <span
                  className={`${styles.status} ${
                    styles[statusClass as keyof typeof styles]
                  }`}
                >
                  <span className={styles.dot} aria-hidden="true" />
                  {creator.status}
                </span>
              </div>
              <p className={styles.bio}>{creator.bio}</p>
              <div className={styles.badges}>
                {creator.platforms.map((platform) => (
                  <span key={platform} className={styles.badge}>
                    {platform}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section className={styles.cta}>
        <h2>Want to be featured here?</h2>
        <Button href="/apply">Apply Now -></Button>
      </section>
    </div>
  );
}
