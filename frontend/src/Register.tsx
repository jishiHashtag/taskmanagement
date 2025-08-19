import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/register.css";
import logo from "./images/hashtag.png";

interface Errors {
  username?: string;
  password?: string;
}

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("admin");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");

  const navigate = useNavigate();

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleRegister = async (): Promise<void> => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitError("");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:4000/auth/register", {
        username,
        password,
        role,
      });
      // On success, redirect to login
      navigate("/login");
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setSubmitError(err.response.data.message || "Registration failed");
      } else {
        setSubmitError("Registration failed: Network or server error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-logo-image">
        <img src={logo} alt="#ashTag Technologies" />
      </div>

      <div className="register-card">
        <h2>Register</h2>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="error">
          {errors.username ? errors.username : "\u00A0"}
        </div>

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="error">
          {errors.password ? errors.password : "\u00A0"}
        </div>

        <select onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="admin">Admin</option>
          <option value="superadmin">Super Admin</option>
        </select>

        {submitError && <div className="error">{submitError}</div>}

        <button onClick={handleRegister} disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
}
