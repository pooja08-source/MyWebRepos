import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { BookingProvider } from "./context/BookingContext";

import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter basename="/MyWebRepos/">

      <ErrorBoundary>

        <AuthProvider>

          <BookingProvider>

            <App />

          </BookingProvider>

        </AuthProvider>

      </ErrorBoundary>

    </BrowserRouter>

  </React.StrictMode>
);