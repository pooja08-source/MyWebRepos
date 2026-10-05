import { useNavigate } from "react-router-dom";
import "./components.css";

function PackageCard({ pkg }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(`/package/${pkg.id}`);
  };

  return (
    <div className="package-card">
      <h3>{pkg.name}</h3>

      <p>📍 {pkg.destination}</p>
      <p>⏱️ {pkg.duration}</p>
      <p>⭐ {pkg.rating}</p>
      <p>💰 ₹{pkg.price}</p>

      <button type="button" onClick={handleExplore}>
        Explore Trip →
      </button>
    </div>
  );
}

export default PackageCard;