import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./components.css";

function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    const result = signup(name, email, password);

    // Account already exists
    if (!result.success) {
      setError(result.message);
      return;
    }

    // Account created + automatically logged in
    navigate("/packages", { replace: true });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2>Create Your Account ✨</h2>

        <p className="auth-subtitle">
          Join Wanderly and start planning your next trip.
        </p>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} autoComplete="off">

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="wanderly-signup-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="wanderly-signup-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="wanderly-signup-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            className="auth-submit"
          >
            Create Account
          </button>

        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

        <Link to="/" className="auth-back">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Signup;