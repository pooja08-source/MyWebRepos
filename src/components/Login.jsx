import { useState } from "react";
import {Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./components.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    const success = login(email, password);

    if (!success) {
      setError("Invalid email or password.");
      return;
    }

    const from =
      location.state?.from?.pathname || "/packages";

    navigate(from, { replace: true });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2>Welcome Back 👋</h2>

        <p>
          Login to continue your journey with Wanderly.
        </p>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} autoComplete="off">

          <label>Email</label>

          <input
            type="email"
            name="login-email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />

          <label>Password</label>

          <input
            type="password"
            name="login-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <p className="forgot-password">
            <Link to="/forgot-password">
                Forgot Password?
            </Link>
          </p>

          <button type="submit">
            Login
          </button>

        </form>

        <p className="auth-link">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>
            Create Account
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;