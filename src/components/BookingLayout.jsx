import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import "./components.css";

function BookingLayout() {
  const navigate = useNavigate();
  const { selectedPackage } = useBooking();

  return (
    <div className="booking-layout">
      <div className="booking-header">
        <div>
          <h2>Complete Your Trip ✈️</h2>

          {selectedPackage && (
            <p>
              Booking: <strong>{selectedPackage.name}</strong>
            </p>
          )}
        </div>

        <button onClick={() => navigate("/packages")}>
          ← Back to Packages
        </button>
      </div>

      <nav className="booking-nav">
        <NavLink
          to="/booking/dates"
          className={({ isActive }) =>
            isActive ? "booking-link active" : "booking-link"
          }
        >
          1. Dates
        </NavLink>

        <NavLink
          to="/booking/travelers"
          className={({ isActive }) =>
            isActive ? "booking-link active" : "booking-link"
          }
        >
          2. Travelers
        </NavLink>

        <NavLink
          to="/booking/summary"
          className={({ isActive }) =>
            isActive ? "booking-link active" : "booking-link"
          }
        >
          3. Summary
        </NavLink>

        <NavLink
          to="/booking/payment"
          className={({ isActive }) =>
            isActive ? "booking-link active" : "booking-link"
          }
        >
          4. Payment
        </NavLink>
      </nav>

      <div className="booking-content">
        <Outlet />
      </div>
    </div>
  );
}

export default BookingLayout;