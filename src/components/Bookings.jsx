import { useBooking } from "../context/BookingContext";
import "./components.css";

function Bookings() {
  const { confirmedBooking } = useBooking();

  return (
    <div className="bookings-page">
      <h2>My Bookings ✈️</h2>

      {!confirmedBooking ? (
        <div className="empty-bookings">
          <h3>No Bookings Yet</h3>
          <p>Once you book a trip, your booking details will appear here.</p>
        </div>
      ) : (
        <div className="booking-card">
          <h3>Booking Confirmed ✅</h3>

          {confirmedBooking.items?.map((item) => (
            <div className="booking-trip" key={item.cartId}>
              <h3>{item.name}</h3>

              <p>📍 Destination: {item.destination}</p>
              <p>📅 Travel Date: {item.travelDate}</p>
              <p>⏱️ Duration: {item.duration}</p>
              <p>👥 Travelers: {item.travelers}</p>
              <p>💰 Total Amount: ₹{item.total}</p>
            </div>
          ))}

          <p>
            <strong>Booking Status: Confirmed ✅</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default Bookings;