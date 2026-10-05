import { useCallback, useEffect, useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";

function getAmount(price, travelers) {

  const subtotal = price * travelers;

  const discount =
    travelers >= 4
      ? subtotal * 0.1
      : 0;

  const taxableAmount =
    subtotal - discount;

  const tax =
    taxableAmount * 0.05;

  const total =
    taxableAmount + tax;

  return {
    subtotal,
    discount,
    tax,
    total,
  };
}

function useBookingCart() {

  const { user } = useAuth();

  // Separate data for every account
  const accountKey = user?.email
    ? `wanderly-data-${user.email.toLowerCase()}`
    : null;

  const [cart, setCart] = useState([]);

  const [confirmedBooking, setConfirmedBooking] =
    useState(null);

  const [selectedPackage, setSelectedPackage] =
    useState(null);

  const [travelDate, setTravelDate] =
    useState("");

  const [travelers, setTravelers] =
    useState(1);

  const [traveler, setTraveler] = useState({
    name: "",
    email: "",
    phone: "",
    payment: "",
  });

  // ==============================
  // LOAD ACCOUNT DATA
  // ==============================

  useEffect(() => {

    if (!accountKey) {

      setCart([]);
      setConfirmedBooking(null);
      setSelectedPackage(null);
      setTravelDate("");
      setTravelers(1);

      setTraveler({
        name: "",
        email: "",
        phone: "",
        payment: "",
      });

      return;
    }

    const saved =
      localStorage.getItem(accountKey);

    if (saved) {

      const data = JSON.parse(saved);

      setCart(data.cart || []);

      setConfirmedBooking(
        data.confirmedBooking || null
      );

      setTraveler({
          name: "",
          email: "",
          phone: "",
          payment: "",
        }
      );

    } else {

      setCart([]);
      setConfirmedBooking(null);
      setSelectedPackage(null);
      setTravelDate("");
      setTravelers(1);

      setTraveler({
        name: "",
        email: "",
        phone: "",
        payment: "",
      });
    }

  }, [accountKey]);

  // ==============================
  // SAVE ACCOUNT DATA
  // ==============================

  useEffect(() => {

    if (!accountKey) return;

    localStorage.setItem(
      accountKey,
      JSON.stringify({
        cart,
        confirmedBooking,
        traveler,
      })
    );

  }, [
    accountKey,
    cart,
    confirmedBooking,
    traveler,
  ]);

  // ==============================
  // COST
  // ==============================

  const costSummary = useMemo(() => {

    if (!selectedPackage) {

      return {
        subtotal: 0,
        discount: 0,
        tax: 0,
        total: 0,
      };
    }

    return getAmount(
      selectedPackage.price,
      travelers
    );

  }, [selectedPackage, travelers]);

  // ==============================
  // CART TOTAL
  // ==============================

  const cartTotal = useMemo(() => {

    return cart.reduce(
      (sum, item) =>
        sum + Number(item.total || 0),
      0
    );

  }, [cart]);

  // ==============================
  // ADD TO CART
  // ==============================

  const addToCart = useCallback(() => {

    if (!selectedPackage || !travelDate) {
      return null;
    }

    const item = {

      ...selectedPackage,

      travelDate,

      travelers,

      ...costSummary,

      cartId: Date.now(),
    };

    setCart((prev) => [
      ...prev,
      item,
    ]);

    return item;

  }, [
    selectedPackage,
    travelDate,
    travelers,
    costSummary,
  ]);

  // ==============================
  // REMOVE
  // ==============================

  const removeFromCart =
    useCallback((cartId) => {

      setCart((prev) =>
        prev.filter(
          (item) =>
            item.cartId !== cartId
        )
      );

    }, []);

  // ==============================
  // UPDATE DATE
  // ==============================

  const updateTravelDates =
    useCallback(
      (cartId, newDate) => {

        setCart((prev) =>
          prev.map((item) =>
            item.cartId === cartId
              ? {
                  ...item,
                  travelDate: newDate,
                }
              : item
          )
        );

      },
      []
    );

  // ==============================
  // UPDATE TRAVELERS
  // ==============================

  const updateTravelers =
    useCallback(
      (cartId, newTravelers) => {

        setCart((prev) =>
          prev.map((item) => {

            if (
              item.cartId !== cartId
            ) {
              return item;
            }

            const amount =
              getAmount(
                item.price,
                newTravelers
              );

            return {
              ...item,
              travelers:
                newTravelers,
              ...amount,
            };

          })
        );

      },
      []
    );

  // ==============================
  // CLEAR CART
  // ==============================

  const clearCart =
    useCallback(() => {
      setCart([]);
    }, []);

  // ==============================
  // CONFIRM BOOKING
  // ==============================

  const confirmBooking =
    useCallback(
      (item) => {

        if (!item) {
          return false;
        }

        setConfirmedBooking({
          traveler,
          total: item.total,
          items: [item],
        });

        return true;
      },
      [traveler]
    );

  return {

    cart,

    selectedPackage,
    setSelectedPackage,

    travelDate,
    setTravelDate,

    travelers,
    setTravelers,

    traveler,
    setTraveler,

    confirmedBooking,

    costSummary,

    cartTotal,

    addToCart,

    removeFromCart,

    updateTravelDates,

    updateTravelers,

    clearCart,

    confirmBooking,
  };
}

export default useBookingCart;