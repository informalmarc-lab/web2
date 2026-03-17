import Image from "next/image";
import Button from "@/components/Button";
import FAQAccordion from "@/components/FAQAccordion";
import styles from "./page.module.css";

const faqItems = [
  {
    question: "Do you take a percentage of my earnings?",
    answer:
      "No. Not now, not ever. You keep 100% of everything you earn on StripChat and Chaturbate. Omega’s operations are supported by small advertisements placed on streams — your income is never touched.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Directly from the platform to you. StripChat and Chaturbate pay you directly into your account. Omega is never involved in your payments — we don’t hold your money, delay it, or take anything from it.",
  },
  {
    question: "Who owns my accounts?",
    answer:
      "You do. Always. We will never ask for your login credentials, and your accounts remain entirely under your control. You can leave at any time and keep everything.",
  },
  {
    question: "Do I need experience?",
    answer:
      "Not at all. Many of the creators who join Omega have never streamed before. We walk you through setup, equipment, lighting, and what works on each platform — from scratch if needed.",
  },
  {
    question: "What does the on-stream ad look like?",
    answer:
      "It’s a small, non-intrusive overlay in the bottom-left corner of your stream. It doesn’t interrupt your content or distract your viewers.",
  },
  {
    question: "Do I have to be exclusive to Omega?",
    answer:
      "We prefer it, but it’s not required. You’re free to work with other agencies if you choose. We just ask that you’re upfront with us.",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "We work with creators on StripChat and Chaturbate, and we help funnel your audience toward OnlyFans over time as your following grows.",
  },
  {
    question: "What languages do you support?",
    answer:
      "We welcome creators in any language, with support available in English and Spanish.",
  },
  {
    question: "Is there a contract?",
    answer:
      "There is a simple agreement that outlines how the ad placement works and confirms your account ownership. It is straightforward and designed to protect you, not trap you.",
  },
  {
    question: "How long does approval take?",
    answer:
      "We review every application personally. You’ll hear back within 48 hours.",
  },
  {
    question: "What if I want to leave?",
    answer:
      "You can leave at any time. No penalties, no fees, no complications. Your accounts and earnings are yours to take with you.",
  },
];

export default function FAQPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.hero}>
        <h1>Everything you want to know.</h1>
      </section>

      {/* Visuals */}
      <section className={styles.gallery}>
        <Image
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
          alt="Woman smiling before a work session"
          width={900}
          height={1100}
          className={styles.galleryImage}
        />
        <Image
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80"
          alt="Woman working from home at her laptop"
          width={900}
          height={1100}
          className={styles.galleryImage}
        />
      </section>

      {/* Accordion */}
      <FAQAccordion items={faqItems} />

      {/* Footer CTA */}
      <section className={styles.footerCta}>
        <h2>
          Still have questions? Reach out through the Apply page and ask us
          directly.
        </h2>
        <Button href="/apply">Apply Now ?</Button>
      </section>
    </div>
  );
}
