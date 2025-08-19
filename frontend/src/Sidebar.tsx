import React from "react";
import profile from "./images/profile.png";
import { Link } from "react-router-dom"; // <-- import Link

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-profile-image">
        <img
          src={profile}
          style={{ width: "120px" }}
          alt="#ashTag Technologies"
        />
      </div>
      <ul>
        <li>
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/organizations"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Organizations
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/LicenseKeys"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Licence Keys
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/analytics"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Analytics
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/payment"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Payments
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/logs"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            logs
          </Link>
        </li>
      </ul>
    </div>
  );
}
