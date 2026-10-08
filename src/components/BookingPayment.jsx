import { useNavigate } from "react-router-dom";

import { useBooking } from "../context/BookingContext";

import "./components.css";

function BookingPayment() {

  const navigate = useNavigate();

  const {
    cart,
    traveler,
    setTraveler,
    confirmBooking,
  } = useBooking();

  const handlePayment = () => {

    if (!traveler.payment) {

      alert(
        "Please select a payment method."
      );

      return;
    }

    if (!cart.length) {

      alert(
        "Please add a package to the booking cart."
      );

      navigate("/packages");

      return;
    }

    const lastItem =
      cart[cart.length - 1];

    const confirmed =
      confirmBooking(lastItem);

    if (!confirmed) {

      alert(
        "Unable to confirm booking."
      );

      return;
    }

    navigate(
      "/confirmation"
    );
  };

  return (

    <div className="booking-step">

      <h2>
        Payment 💳
      </h2>

      <p>
        Select your preferred payment method
        to complete the booking.
      </p>

      <div className="form-group">

        <label>
          Payment Method
        </label>

        <select
          value={traveler.payment}
          onChange={(e) =>
            setTraveler({
              ...traveler,
              payment:
                e.target.value,
            })
          }
        >

          <option value="">
            Select Payment Method
          </option>

          <option value="UPI">
            UPI
          </option>

          <option value="Debit Card">
            Debit Card
          </option>

          <option value="Credit Card">
            Credit Card
          </option>

          <option value="Net Banking">
            Net Banking
          </option>

        </select>

      </div>

      <div className="booking-step-actions">

        <button
          onClick={() =>
            navigate(
              "/booking/summary"
            )
          }
        >
          ← Back
        </button>

        <button
          onClick={handlePayment}
        >
          Confirm Booking
        </button>

      </div>

    </div>
  );
}

export default BookingPayment;