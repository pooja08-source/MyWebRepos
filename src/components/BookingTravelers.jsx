import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import "./components.css";

function BookingTravelers() {
  const navigate = useNavigate();

  const {
    travelers,
    setTravelers,
    traveler,
    setTraveler,
  } = useBooking();

  const handleNext = () => {
    if (!traveler.name.trim()) {
      alert("Please enter traveler name");
      return;
    }

    if (!traveler.email.trim()) {
      alert("Please enter email");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(traveler.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!traveler.phone.trim()) {
      alert("Please enter phone number");
      return;
    }

    if (!/^[0-9]{10}$/.test(traveler.phone)) {
      alert("Phone number must contain 10 digits");
      return;
    }

    if (travelers < 1) {
      alert("Number of travelers must be at least 1");
      return;
    }

    navigate("/booking/summary");
  };

  return (
    <div className="booking-step">
      <h2>Traveler Information 👤</h2>

      <div className="traveler-step-form">
        <label>Full Name</label>

        <input
          type="text"
          placeholder="Enter full name"
          value={traveler.name}
          onChange={(e) =>
            setTraveler({
              ...traveler,
              name: e.target.value,
            })
          }
        />

        <label>Email</label>

        <input
          type="email"
          placeholder="Enter email"
          value={traveler.email}
          onChange={(e) =>
            setTraveler({
              ...traveler,
              email: e.target.value,
            })
          }
        />

        <label>Phone Number</label>

        <input
          type="tel"
          placeholder="Enter 10 digit phone number"
          value={traveler.phone}
          onChange={(e) =>
            setTraveler({
              ...traveler,
              phone: e.target.value.replace(/\D/g, ""),
            })
          }
        />

        <label>Number of Travelers</label>

        <input
          type="number"
          min="1"
          value={travelers}
          onChange={(e) =>
            setTravelers(
              Math.max(1, Number(e.target.value))
            )
          }
        />
      </div>

      <div className="booking-step-actions">
        <button
          onClick={() => navigate("/booking/dates")}
        >
          ← Back
        </button>

        <button onClick={handleNext}>
          Continue to Summary →
        </button>
      </div>
    </div>
  );
}

export default BookingTravelers;