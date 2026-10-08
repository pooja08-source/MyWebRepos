import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application Error:", error);
    console.error("Error Information:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <h2>Something went wrong 😔</h2>

          <p>
            Sorry, an unexpected error occurred.
            Please refresh the page and try again.
          </p>

          <button
            onClick={() =>
              window.location.reload()
            }
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;