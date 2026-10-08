import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import PackageList from "./components/PackageList";
import PackageDetail from "./components/PackageDetail";

import BookingCart from "./components/BookingCart";
import Checkout from "./components/Checkout";

import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

import BookingLayout from "./components/BookingLayout";
import BookingDates from "./components/BookingDates";
import BookingTravelers from "./components/BookingTravelers";
import BookingSummary from "./components/BookingSummary";
import BookingPayment from "./components/BookingPayment";

import ForgetPassword from "./components/ForgetPassword";
import Bookings from "./components/Bookings";

function App() {
  return (
    <div className="app">

      <Header />

      <Routes>

        {/* PUBLIC ROUTES */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/forgot-password"
          element={<ForgetPassword />}
        />


        {/* PROTECTED PACKAGE ROUTES */}

        <Route
          path="/packages"
          element={
            <ProtectedRoute>
              <PackageList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/package/:id"
          element={
            <ProtectedRoute>
              <PackageDetail />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <BookingCart />
            </ProtectedRoute>
          }
        />


        {/* PROTECTED BOOKING FLOW */}

        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <BookingLayout />
            </ProtectedRoute>
          }
        >

          <Route
            index
            element={<BookingDates />}
          />

          <Route
            path="dates"
            element={<BookingDates />}
          />

          <Route
            path="travelers"
            element={<BookingTravelers />}
          />

          <Route
            path="summary"
            element={<BookingSummary />}
          />

          <Route
            path="payment"
            element={<BookingPayment />}
          />

        </Route>


        {/* REQUIRED PROTECTED /PAYMENT ROUTE */}

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <BookingPayment />
            </ProtectedRoute>
          }
        />


        {/* PROTECTED CHECKOUT */}

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />


        {/* PROTECTED BOOKINGS */}

        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />


        {/* BOOKING CONFIRMATION */}

        <Route
          path="/confirmation"
          element={
            <ProtectedRoute>
              <div className="confirmation">
                <h2>Booking Confirmed 🎉</h2>

                <p>
                  Your trip has been successfully booked!
                </p>
              </div>
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;