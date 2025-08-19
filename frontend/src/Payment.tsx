import React from "react";
import styles from "../src/css/Payment.module.css";

const payments = [
  {
    id: 1,
    organization: "Dubai holding",
    amount: "$99",
    method: "Credit Card",
    date: "2025-07-15",
    status: "Paid",
  },
  {
    id: 2,
    organization: "Comcast",
    amount: "$199",
    method: "PayPal",
    date: "2025-06-10",
    status: "Pending",
  },
];

export default function Payment() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Payment History</h1>
      <div className={styles.table}>
        <div className={styles.header}>
          <span>Organization</span>
          <span>Amount</span>
          <span>Method</span>

          <span>Status</span>
        </div>
        {payments.map((pay) => (
          <div key={pay.id} className={styles.row}>
            <span>{pay.organization}</span>
            <span>{pay.amount}</span>
            <span>{pay.method}</span>

            <span
              className={`${styles.status} ${styles[pay.status.toLowerCase()]}`}
            >
              {pay.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
