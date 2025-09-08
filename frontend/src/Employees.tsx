import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../src/css/Employees.module.css";
import "../src/css/org.css";
import axios from "axios";

type Employee = {
  id: string;
  licenseKey: string;
  firstName: string;
  lastName: string;
  organisation: string;
  email: string;
  mobile: number;
  country: string;
  subscriptionType: string;
  validity: string;
  role: string;
  status: "Active" | "Inactive";
  date: string;
};

export default function Employees() {
  const { organisation } = useParams();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      setError(null);
      try {
        const API_URL = process.env.REACT_APP_API_URL;
        const response = await axios.get(
          `${API_URL}/subscribers/organisation/${organisation}`
        );
        setEmployees(response.data);
      } catch (err: any) {
        console.error(err);
        setError("Failed to load employees");
      }
      setLoading(false);
    };

    if (organisation) {
      fetchEmployees();
    }
  }, [organisation]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Employees - {organisation}</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : employees.length === 0 ? (
        <p>No employees found for this organization.</p>
      ) : (
        <div className={styles.grid}>
          {employees.map((emp) => (
            <div className={styles.card} key={emp.id}>
              <div className={styles.header}>
                <h2>{emp.firstName + " " + emp.lastName}</h2>
                <span
                  className={`${styles.status} ${
                    "Active" === "Active" ? styles.active : styles.inactive
                  }`}
                >
                  Active
                </span>
              </div>
              <p className={styles.role}>Licence Key: {emp.licenseKey}</p>
              <p className={styles.email}>Email: {emp.email}</p>
              <p className={styles.role}>Role: {emp.role}</p>
              <p className={styles.country}>Country: {emp.country}</p>
              <p className={styles.subscriptionType}>
                SubscriptionType: {emp.subscriptionType}
              </p>
              <p className={styles.date}>Activated Date: {emp.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
