import React, { useEffect, useState } from "react";
import styles from "../src/css/LicenseKeys.module.css";
import "../src/css/dashboard.css";
import axios from "axios";

type LicenseKey = {
  id: string;
  organisation: string;
  licenseKey: string;
  createdAt: string; // ISO string from backend
  validity: string; // "1 year", "6 months", "14 days"
  status?: "Active" | "Expired" | "Revoked"; // optional if backend not sending
};

// ✅ Helper function to calculate expiry
const calculateExpiry = (createdAt: string, validity: string): Date => {
  const createdDate = new Date(createdAt);
  const expiryDate = new Date(createdDate);

  if (validity.toLowerCase().includes("year")) {
    const years = parseInt(validity);
    expiryDate.setFullYear(expiryDate.getFullYear() + years);
  } else if (validity.toLowerCase().includes("month")) {
    const months = parseInt(validity);
    expiryDate.setMonth(expiryDate.getMonth() + months);
  } else if (validity.toLowerCase().includes("day")) {
    const days = parseInt(validity);
    expiryDate.setDate(expiryDate.getDate() + days);
  }

  return expiryDate;
};

// ✅ Helper function to determine status
const getStatus = (createdAt: string, validity: string, revoked = false) => {
  if (revoked) return "Revoked";

  const expiryDate = calculateExpiry(createdAt, validity);
  const now = new Date();

  return now > expiryDate ? "Expired" : "Active";
};

export default function LicenseKeys() {
  const [rows, setRows] = useState<LicenseKey[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/subscribers");
        const dataWithStatus = response.data.map((key: LicenseKey) => ({
          ...key,
          status: getStatus(key.createdAt, key.validity),
        }));
        setRows(dataWithStatus);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>License Keys</h1>

      <div className={styles.grid}>
        {rows.map((key) => (
          <div className={styles.card} key={key.id}>
            <h2 className={styles.org}>{key.organisation}</h2>
            <p>
              <strong>Key:</strong> {key.licenseKey}
            </p>
            <p>
              <strong>Issued:</strong>{" "}
              {new Date(key.createdAt).toLocaleDateString()}
            </p>
            <p>
              <strong>Validity:</strong> {key.validity}
            </p>
            <p>
              <strong>Expiry:</strong>{" "}
              {calculateExpiry(
                key.createdAt,
                key.validity
              ).toLocaleDateString()}
            </p>
            <span
              className={`${styles.status} ${
                styles[key.status?.toLowerCase() || "active"]
              }`}
            >
              {key.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
