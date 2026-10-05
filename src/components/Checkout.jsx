import { useNavigate } from "react-router-dom";
import TravelerForm from "./TravelerForm";
import { useBooking } from "../context/BookingContext";
import "./components.css";

function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    traveler,
    confirmBooking,
  } = useBooking();

  const handleConfirm = () => {
    if (
      !traveler.name ||
      !traveler.email ||
      !traveler.phone ||
      !traveler.payment
    ) {
      alert("Please complete all traveler details");
      return;
    }

    if (!cart.length) {
      alert("Please add a package to continue");
      return;
    }

    const confirmed = confirmBooking();

    if (confirmed) {
      navigate("/confirmation");
    }
  };

  if (!cart.length) {
    return (
      <div className="checkout">
        <h2>Please add a package to continue</h2>

        <button onClick={() => navigate("/packages")}>
          Explore Destinations
        </button>
      </div>
    );
  }

  return (
    <div className="checkout">

      <h2>Complete Your Booking ✈️</h2>

      <div className="booking-summary">

        <h3>Booking Summary</h3>

        {cart.map((item) => (
          <div key={item.cartId}>

            <p>
              <strong>Package:</strong> {item.name}
            </p>

            <p>
              <strong>Destination:</strong> {item.destination}
            </p>

            <p>
              <strong>Travel Date:</strong> {item.travelDate}
            </p>

            <p>
              <strong>Travelers:</strong> {item.travelers}
            </p>

            <p>
              <strong>Total Cost:</strong> ₹{item.total}
            </p>

            <p>
              <strong>Status:</strong> Ready to Confirm
            </p>

          </div>
        ))}

        <p>
          <strong>
            Final Booking Amount: ₹{cartTotal}
          </strong>
        </p>

      </div>

      <TravelerForm />

      <div className="checkout-actions">

        <button onClick={() => navigate("/cart")}>
          ← Back
        </button>

        <button onClick={handleConfirm}>
          Book My Trip ✨
        </button>

      </div>

    </div>
  );
}

export default Checkout;