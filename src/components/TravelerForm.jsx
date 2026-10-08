import { useBooking } from "../context/BookingContext";

import Input from "./Input";

import "./components.css";

function TravelerForm() {

  const {
    traveler,
    setTraveler
  } = useBooking();

  const handleChange = (e) => {

    setTraveler({
      ...traveler,
      [e.target.name]:
        e.target.value,
    });
  };

  return (

    <div className="traveler-form">

      <h3>
        Traveler Details ✈️
      </h3>

      <Input
        label="Full Name"
        name="name"
        placeholder="Enter Your Full Name"
        value={traveler.name}
        onChange={handleChange}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Enter Your Email"
        value={traveler.email}
        onChange={handleChange}
      />

      <Input
        label="Phone Number"
        type="tel"
        name="phone"
        placeholder="Enter Your Phone Number"
        value={traveler.phone}
        onChange={handleChange}
      />

      <div className="form-group">

        <label>
          Payment Method
        </label>

        <select
          name="payment"
          value={traveler.payment}
          onChange={handleChange}
        >

          <option value="">
            Choose Payment Method
          </option>

          <option value="Credit Card">
            Credit Card
          </option>

          <option value="Debit Card">
            Debit Card
          </option>

          <option value="UPI">
            UPI Payment
          </option>

          <option value="Net Banking">
            Net Banking
          </option>

        </select>

      </div>

    </div>
  );
}

export default TravelerForm;