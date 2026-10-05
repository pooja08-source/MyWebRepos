import { Link } from "react-router-dom";
import "./components.css";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>
          Adventure<br />
          Awaits You..!!
        </h1>

        <p>
          Discover amazing destinations and plan your perfect journey
          with Wanderly.
        </p>

        <div className="home-auth-box">
          <h3>Ready to Travel?</h3>
          <p>Login or create an account to start booking your trip.</p>

          <div className="home-auth-buttons">
            <Link to="/login" className="home-login-btn">
              Login
            </Link>

            <Link to="/signup" className="home-signup-btn">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;