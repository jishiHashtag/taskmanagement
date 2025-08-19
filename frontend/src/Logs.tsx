import React from "react";
import styles from "../src/css/Logs.module.css";

type Log = {
  id: number;
  user: string;
  role: "Employee" | "Admin" | "System";
  action: string;
  timestamp: string;
};

const logs: Log[] = [
  {
    id: 1,
    user: "System",
    role: "System",
    action: "Server restarted successfully.",
    timestamp: "2025-08-01 09:00 AM",
  },
  {
    id: 2,
    user: "Alice Johnson",
    role: "Employee",
    action: "Logged in from desktop app.",
    timestamp: "2025-08-01 09:12 AM",
  },
  {
    id: 3,
    user: "Mark Lee",
    role: "Admin",
    action: "Created a new license key for NovaCorp.",
    timestamp: "2025-08-01 09:35 AM",
  },
  {
    id: 4,
    user: "System",
    role: "System",
    action: "Screenshot failed due to network error.",
    timestamp: "2025-08-01 10:01 AM",
  },
  {
    id: 5,
    user: "John Doe",
    role: "Employee",
    action: "Marked task #23 as completed.",
    timestamp: "2025-08-01 10:15 AM",
  },
];

export default function Logs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>System Logs</h1>
      <div className={styles.logList}>
        {logs.map((log) => (
          <div key={log.id} className={styles.logCard}>
            <div className={styles.header}>
              <span
                className={`${styles.badge} ${styles[log.role.toLowerCase()]}`}
              >
                {log.role}
              </span>
              <span className={styles.timestamp}>{log.timestamp}</span>
            </div>
            <p className={styles.user}>
              <strong>User:</strong> {log.user}
            </p>
            <p className={styles.action}>{log.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
