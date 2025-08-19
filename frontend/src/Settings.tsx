import React from "react";
import styles from "../src/css/Settings.module.css";

export default function Settings() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Settings</h1>
      <div className={styles.card}>
        <label>
          <span>Notification Settings</span>
          <select>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </label>
        <label>
          <span>Theme</span>
          <select>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </label>
        <button className={styles.button}>Save Changes</button>
      </div>
    </div>
  );
}
