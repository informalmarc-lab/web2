"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Button from "./Button";
import styles from "./ApplyForm.module.css";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ApplyForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const isLoading = status === "loading";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      // Submit to the API route and surface the response.
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage("Thank you for applying. We'll be in touch within 48 hours.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="fullName">Full name or alias</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="country">Country</label>
        <input
          id="country"
          name="country"
          type="text"
          required
        />
      </div>
      <div className={styles.checkboxRow}>
        <input
          id="ageConfirm"
          name="ageConfirm"
          type="checkbox"
          required
        />
        <label htmlFor="ageConfirm">
          I confirm I am 18 years of age or older
        </label>
      </div>
      <div className={styles.field}>
        <label htmlFor="stripchat">Are you currently on StripChat?</label>
        <select id="stripchat" name="stripchat" required defaultValue="">
          <option value="" aria-hidden="true" />
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="I want to join">I want to join</option>
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="chaturbate">Are you currently on Chaturbate?</label>
        <select id="chaturbate" name="chaturbate" required defaultValue="">
          <option value="" aria-hidden="true" />
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="I want to join">I want to join</option>
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="about">
          Tell us a little about yourself and what you&apos;re looking for
        </label>
        <textarea
          id="about"
          name="about"
          rows={5}
          required
        />
      </div>
      <Button type="submit" fullWidth disabled={isLoading}>
        Submit Application
      </Button>
      <p
        className={`${styles.message} ${
          status === "success" ? styles.success : ""
        } ${status === "error" ? styles.error : ""}`}
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
