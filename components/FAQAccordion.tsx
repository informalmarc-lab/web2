"use client";

import { useState } from "react";
import styles from "./FAQAccordion.module.css";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div className={styles.item} key={item.question}>
            <button
              className={styles.trigger}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              id={`faq-trigger-${index}`}
              type="button"
            >
              <span>{item.question}</span>
              <span className={styles.icon}>{isOpen ? "–" : "+"}</span>
            </button>
            <div
              className={`${styles.panel} ${isOpen ? styles.open : ""}`}
              role="region"
              id={`faq-panel-${index}`}
              aria-labelledby={`faq-trigger-${index}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
