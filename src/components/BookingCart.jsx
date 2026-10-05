import { useState } from "react";
import { useBooking } from "../context/BookingContext";
import { useNavigate } from "react-router-dom";
import "./components.css";

function BookingCart() {
  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    confirmedBooking,
    removeFromCart,
    updateTravelDates,
    updateTravelers,
    clearCart,
  } = useBooking();

  const [editingId, setEditingId] = useState(null);

  const isBooked = (cartId) => {
    return confirmedBooking?.items?.some(
      (item) => item.cartId === cartId
    );
  };

  return (
    <div className="booking-cart">

      <h2>My Travel Plans 🧳</h2>

      {cart.length === 0 ? (
        <div>
          <p>Your booking cart is empty</p>

          <button onClick={() => navigate("/packages")}>
            Explore Destinations
          </button>
        </div>
      ) : (
        <>
          {cart.map((item) => {
            const booked = isBooked(item.cartId);
            const editing = editingId === item.cartId;

            return (
              <div className="cart-item" key={item.cartId}>

                <div className="cart-item-details">

                  <h3>{item.name}</h3>

                  <p>
                    📍 <strong>Destination:</strong>{" "}
                    {item.destination}
                  </p>

                  <p>
                    🗓️ <strong>Duration:</strong>{" "}
                    {item.duration}
                  </p>

                  <p>
                    ⭐ <strong>Rating:</strong>{" "}
                    {item.rating}
                  </p>

                  <p>
                    <strong>Journey Plan:</strong>{" "}
                    {item.itinerary}
                  </p>

                  <p>
                    <strong>What's Included:</strong>{" "}
                    {item.inclusions.join(", ")}
                  </p>

                  {!editing ? (
                    <>
                      <p>
                        📅 <strong>Travel Date:</strong>{" "}
                        {item.travelDate}
                      </p>

                      <p>
                        👥 <strong>Travelers:</strong>{" "}
                        {item.travelers}
                      </p>

                      <p>
                        💰 <strong>Package Cost:</strong>{" "}
                        ₹{item.subtotal}
                      </p>

                      {item.discount > 0 && (
                        <p>
                          🎁 <strong>Group Savings:</strong>{" "}
                          −₹{item.discount}
                        </p>
                      )}

                      <p>
                        🧾 <strong>Tax:</strong>{" "}
                        ₹{item.tax}
                      </p>

                      <p>
                        💵 <strong>Final Amount:</strong>{" "}
                        ₹{item.total}
                      </p>

                      {booked && (
                        <p>
                          ✅ <strong>Status:</strong>{" "}
                          Booking Confirmed
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <label>Travel Date</label>

                      <select
                        value={item.travelDate}
                        onChange={(e) =>
                          updateTravelDates(
                            item.cartId,
                            e.target.value
                          )
                        }
                      >
                        {item.dates.map((date) => (
                          <option
                            key={date}
                            value={date}
                          >
                            {date}
                          </option>
                        ))}
                      </select>

                      <label>Travelers</label>

                      <input
                        type="number"
                        min="1"
                        value={item.travelers}
                        onChange={(e) =>
                          updateTravelers(
                            item.cartId,
                            Math.max(
                              1,
                              Number(e.target.value)
                            )
                          )
                        }
                      />

                      <p>
                        💵 <strong>Updated Amount:</strong>{" "}
                        ₹{item.total}
                      </p>
                    </>
                  )}

                </div>

                <div className="cart-item-actions">

                  <button
                    onClick={() =>
                      removeFromCart(item.cartId)
                    }
                  >
                    Remove Trip
                  </button>

                  {booked && !editing && (
                    <button
                      onClick={() =>
                        setEditingId(item.cartId)
                      }
                    >
                      ✏️ Edit Trip
                    </button>
                  )}

                  {booked && editing && (
                    <button
                      onClick={() =>
                        setEditingId(null)
                      }
                    >
                      ✓ Save Changes
                    </button>
                  )}

                  {!booked && (
                    <button
                      onClick={() =>
                        navigate("/checkout")
                      }
                    >
                      Continue to Booking →
                    </button>
                  )}

                </div>

              </div>
            );
          })}

          <div className="cart-total">

            <p>
              <strong>
                Final Booking Amount: ₹{cartTotal}
              </strong>
            </p>

            <button onClick={clearCart}>
              Clear Cart
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default BookingCart;