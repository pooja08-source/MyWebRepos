import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./components.css";

function Header() {
  const { user, logout } = useAuth();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="header">

      {/* Wanderly Logo */}
      <Link to="/" className="logo">
        🌍Wanderly..!!
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>

        {user && (
          <>
            <NavLink to="/packages">Packages</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/bookings">My Bookings</NavLink>
          </>
        )}

        {!user ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        ) : (
          <div className="profile-wrapper">

            <button
              className="profile-button"
              onClick={() => setShowProfile(!showProfile)}
            >
              <span className="profile-icon">👤</span>
            </button>

            {showProfile && (
              <div className="profile-dropdown">

                <div className="profile-info">
                  <div className="profile-avatar">👤</div>

                  <div>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                  </div>
                </div>

                <div className="profile-divider"></div>

                <Link
                  to="/bookings"
                  onClick={() => setShowProfile(false)}
                >
                  📋 My Bookings
                </Link>

                <button
                  className="profile-logout"
                  onClick={() => {
                    logout();
                    setShowProfile(false);
                  }}
                >
                  🚪 Logout
                </button>

              </div>
            )}

          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;