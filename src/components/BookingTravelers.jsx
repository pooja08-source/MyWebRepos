import { useNavigate } from "react-router-dom";

import { useBooking } from "../context/BookingContext";

import Input from "./Input";

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

      alert(
        "Please enter traveler name."
      );

      return;
    }

    const namePattern =
      /^[A-Za-z ]+$/;

    if (!namePattern.test(
      traveler.name.trim()
    )) {

      alert(
        "Traveler name should contain only letters."
      );

      return;
    }

    if (!traveler.email.trim()) {

      alert(
        "Please enter email."
      );

      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(
      traveler.email
    )) {

      alert(
        "Please enter a valid email address."
      );

      return;
    }

    if (!traveler.phone.trim()) {

      alert(
        "Please enter phone number."
      );

      return;
    }

    if (!/^[0-9]{10}$/.test(
      traveler.phone
    )) {

      alert(
        "Phone number must contain 10 digits."
      );

      return;
    }

    if (
      !Number.isInteger(travelers) ||
      travelers < 1
    ) {

      alert(
        "Number of travelers must be at least 1."
      );

      return;
    }

    navigate(
      "/booking/summary"
    );
  };

  return (

    <div className="booking-step">

      <h2>
        Traveler Information 👤
      </h2>

      <Input
        label="Full Name"
        name="name"
        value={traveler.name}
        placeholder="Enter full name"
        onChange={(e) =>
          setTraveler({
            ...traveler,
            name: e.target.value,
          })
        }
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={traveler.email}
        placeholder="Enter email"
        onChange={(e) =>
          setTraveler({
            ...traveler,
            email: e.target.value,
          })
        }
      />

      <Input
        label="Phone Number"
        type="tel"
        name="phone"
        value={traveler.phone}
        placeholder="Enter 10 digit phone number"
        onChange={(e) =>
          setTraveler({
            ...traveler,
            phone:
              e.target.value.replace(
                /\D/g,
                ""
              ),
          })
        }
      />

      <Input
        label="Number of Travelers"
        type="number"
        name="travelers"
        value={travelers}
        onChange={(e) =>
          setTravelers(
            Number(e.target.value)
          )
        }
      />

      <div className="booking-step-actions">

        <button
          onClick={() =>
            navigate(
              "/booking/dates"
            )
          }
        >
          ← Back
        </button>

        <button
          onClick={handleNext}
        >
          Continue to Summary →
        </button>

      </div>

    </div>
  );
}

export default BookingTravelers;