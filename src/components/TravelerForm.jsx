import { useBooking } from "../context/BookingContext";
import "./components.css";

function TravelerForm() {
  const { traveler, setTraveler } = useBooking();

  const handleChange = (e) => {
    setTraveler({
      ...traveler,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="traveler-form">
      <h3>Traveler Details ✈️</h3>

      <input
        name="name"
        placeholder="Enter Your Full Name"
        value={traveler.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Enter Your Email"
        value={traveler.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Enter Your Phone Number"
        value={traveler.phone}
        onChange={handleChange}
      />

      <select
        name="payment"
        value={traveler.payment}
        onChange={handleChange}
      >
        <option value="">Choose Payment Method</option>
        <option value="Card">Credit / Debit Card</option>
        <option value="UPI">UPI Payment</option>
        <option value="NetBanking">Net Banking</option>
      </select>
    </div>
  );
}

export default TravelerForm;