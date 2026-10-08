import { useNavigate } from "react-router-dom";

import { useBooking } from "../context/BookingContext";

import DatePicker from "./DatePicker";

import "./components.css";

function BookingDates() {

  const navigate = useNavigate();

  const {
    selectedPackage,
    travelDate,
    setTravelDate,
    addToCart,
  } = useBooking();

  const handleNext = () => {

    if (!selectedPackage) {

      alert(
        "Please select a travel package first."
      );

      navigate("/packages");

      return;
    }

    if (!travelDate) {

      alert(
        "Please choose a travel date."
      );

      return;
    }

    const selectedDate =
      new Date(travelDate);

    const today =
      new Date();

    today.setHours(
      0,
      0,
      0,
      0
    );

    if (selectedDate < today) {

      alert(
        "Travel date cannot be in the past."
      );

      return;
    }

    const item = addToCart();

    if (!item) {

      alert(
        "Unable to add the package to booking cart."
      );

      return;
    }

    navigate(
      "/booking/travelers"
    );
  };

  if (!selectedPackage) {

    return (

      <div className="booking-step">

        <h2>No Package Selected</h2>

        <p>
          Please select a travel package first.
        </p>

        <button
          onClick={() =>
            navigate("/packages")
          }
        >
          Explore Packages →
        </button>

      </div>
    );
  }

  return (

    <div className="booking-step">

      <h2>
        Choose Your Travel Date 📅
      </h2>

      <p>
        Select an available travel date for{" "}
        <strong>
          {selectedPackage.name}
        </strong>.
      </p>

      <DatePicker
        label="Available Travel Dates"
        value={travelDate}
        onChange={(e) =>
          setTravelDate(
            e.target.value
          )
        }
        dates={
          selectedPackage.dates || []
        }
      />

      <button
        onClick={handleNext}
      >
        Add to Booking Cart & Continue →
      </button>

    </div>
  );
}

export default BookingDates;