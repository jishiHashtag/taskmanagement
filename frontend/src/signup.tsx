import React, { useState } from "react";
import "./css/signup.css"; // CSS included below
import logo from "./images/hashtag.png";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password, newsletter });
  };

  return (
    <div className="signup-wrapper">
      <form className="signup-card" onSubmit={handleSubmit}>
        <div className="signup-left">
          <h2>Sign up</h2>

          <label>First &amp; last name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Stephen Johnson"
            required
          />

          <label>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="stephen.johnson@daily-ui"
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="newsletter">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={() => setNewsletter(!newsletter)}
            />
            <span>I would like to receive a weekly newsletter.</span>
          </div>

          <button type="submit" className="signup-btn">SIGN ME UP</button>
        </div>

        <div className="signup-right">
          <div className="resort-branding">
            <span className="sun-icon">☀️</span>
            <span>THE OLD MOUNTAIN RESORT</span>
          </div>
        </div>
      </form>
    </div>
  );
}


