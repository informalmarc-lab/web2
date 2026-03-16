import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const className = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : "",
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
