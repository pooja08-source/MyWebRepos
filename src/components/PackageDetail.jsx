import { useNavigate, useParams } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import { packages } from "../data/packagesData";
import "./components.css";

function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { setSelectedPackage } = useBooking();

  const packageData = packages.find(
    (item) => String(item.id) === String(id)
  );

  if (!packageData) {
    return (
      <div className="package-detail">
        <h2>Package Not Found</h2>

        <button onClick={() => navigate("/packages")}>
          Back to Packages
        </button>
      </div>
    );
  }

  const handleBookNow = () => {
    setSelectedPackage(packageData);
    navigate("/booking/dates");
  };

  return (
    <div className="package-detail">

      <h2>{packageData.name}</h2>

      <p>
        📍 <strong>Destination:</strong>{" "}
        {packageData.destination}
      </p>

      <p>
        ⏱️ <strong>Duration:</strong>{" "}
        {packageData.duration}
      </p>

      <p>
        ⭐ <strong>Rating:</strong>{" "}
        {packageData.rating}
      </p>

      <p>
        💰 <strong>Price:</strong>{" "}
        ₹{packageData.price}
      </p>

      <h3>Journey Plan</h3>
      <p>{packageData.itinerary}</p>

      <h3>What's Included</h3>

      <ul>
        {packageData.inclusions?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>What's Excluded</h3>

      <ul>
        {packageData.exclusions?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={handleBookNow}>
        Book This Trip →
      </button>

    </div>
  );
}

export default PackageDetail;