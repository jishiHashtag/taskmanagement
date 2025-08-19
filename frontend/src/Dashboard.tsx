import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./css/dashboard.css";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content-area">
          <Outlet /> {/* Content changes here */}
        </div>
      </div>
    </div>
  );
}
