import React from "react";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="topbar">
      <div className="topbar-title"></div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
