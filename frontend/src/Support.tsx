import React from "react";
import styles from "../src/css/Support.module.css";

export default function Support() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Support</h1>
      <p className={styles.description}>
        Need help? Contact our support team or browse the FAQ.
      </p>
      <div className={styles.card}>
        <h2>Contact Us</h2>
        <p>Email: support@yourcompany.com</p>
        <p>Phone: +91 98765 43210</p>
        <button className={styles.button}>Open Ticket</button>
      </div>
    </div>
  );
}
