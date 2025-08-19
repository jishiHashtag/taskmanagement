import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import SignUp from "./signup";
import Dashboard from "./Dashboard";
import SubscriberTable from "./SubscriberTable";
import OrganizationsPage from "./organizations";
import AnalyticsPage from "./Analytics";
import Employees from "./Employees";
import LicenseKeys from "./LicenseKeys";
import Settings from "./Settings";
import Support from "./Support";
import Payment from "./Payment";
import Logs from "./Logs";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Dashboard layout with nested routes */}
      <Route path="/dashboard" element={<Dashboard />}>
        {/* Default route inside dashboard */}
        <Route index element={<SubscriberTable />} />
        <Route path="organizations" element={<OrganizationsPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="employees/:organisation" element={<Employees />} />
        <Route path="licensekeys" element={<LicenseKeys />} />
        <Route path="settings" element={<Settings />} />
        <Route path="logs" element={<Logs />} />
        <Route path="support" element={<Support />} />
        <Route path="payment" element={<Payment />} />
      </Route>

      {/* Redirect all others */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
