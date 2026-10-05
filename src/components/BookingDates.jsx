import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import "./components.css";

function BookingDates() {
  const navigate = useNavigate();

  const {
    selectedPackage,
    travelDate,
    setTravelDate,
  } = useBooking();

  const handleNext = () => {
    if (!selectedPackage) {
      alert("Please select a package first.");
      navigate("/packages");
      return;
    }

    if (!travelDate) {
      alert("Please choose a travel date.");
      return;
    }

    navigate("/booking/travelers");
  };

  if (!selectedPackage) {
    return (
      <div className="booking-step">
        <h2>No Package Selected</h2>

        <p>Please select a travel package first.</p>

        <button onClick={() => navigate("/packages")}>
          Explore Packages →
        </button>
      </div>
    );
  }

  return (
    <div className="booking-step">
      <h2>Choose Your Travel Date 📅</h2>

      <p>
        Select an available travel date for{" "}
        <strong>{selectedPackage.name}</strong>.
      </p>

      <div className="form-group">
        <label>Available Travel Dates</label>

        <select
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
        >
          <option value="">Select a date</option>

          {selectedPackage.dates?.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleNext}>
        Continue to Travelers →
      </button>
    </div>
  );
}

export default BookingDates;