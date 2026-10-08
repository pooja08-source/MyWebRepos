import { useNavigate } from "react-router-dom";

import { useBooking } from "../context/BookingContext";

import TravelerCard from "./TravelerCard";

import "./components.css";

function BookingSummary() {

  const navigate = useNavigate();

  const {
    selectedPackage,
    travelDate,
    travelers,
    traveler,
    costSummary,
  } = useBooking();

  if (!selectedPackage) {

    return (

      <div className="booking-step">

        <h2>
          No package selected
        </h2>

        <button
          onClick={() =>
            navigate("/packages")
          }
        >
          Explore Packages
        </button>

      </div>
    );
  }

  return (

    <div className="booking-step">

      <h2>
        Booking Summary 🧳
      </h2>

      <div className="summary-card">

        <h3>
          Trip Details
        </h3>

        <p>
          <strong>Package:</strong>{" "}
          {selectedPackage.name}
        </p>

        <p>
          <strong>Destination:</strong>{" "}
          {selectedPackage.destination}
        </p>

        <p>
          <strong>Duration:</strong>{" "}
          {selectedPackage.duration}
        </p>

        <p>
          <strong>Travel Date:</strong>{" "}
          {travelDate}
        </p>

        <p>
          <strong>Travelers:</strong>{" "}
          {travelers}
        </p>

        <hr />

        <p>
          Package Cost: ₹
          {costSummary.subtotal}
        </p>

        <p>
          Discount: ₹
          {costSummary.discount}
        </p>

        <p>
          Tax: ₹
          {costSummary.tax}
        </p>

        <h3>
          Final Amount: ₹
          {costSummary.total}
        </h3>

      </div>

      <TravelerCard
        traveler={traveler}
        travelers={travelers}
      />

      <div className="booking-step-actions">

        <button
          onClick={() =>
            navigate(
              "/booking/travelers"
            )
          }
        >
          ← Back
        </button>

        <button
          onClick={() =>
            navigate("/payment")
          }
        >
          Continue to Payment →
        </button>

      </div>

    </div>
  );
}

export default BookingSummary;