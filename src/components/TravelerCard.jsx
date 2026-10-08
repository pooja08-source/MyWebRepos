function TravelerCard({ traveler, travelers }) {
  return (
    <div className="summary-card">
      <h3>Traveler Details 👤</h3>

      <p>
        <strong>Name:</strong> {traveler.name}
      </p>

      <p>
        <strong>Email:</strong> {traveler.email}
      </p>

      <p>
        <strong>Phone:</strong> {traveler.phone}
      </p>

      <p>
        <strong>Number of Travelers:</strong> {travelers}
      </p>
    </div>
  );
}

export default TravelerCard;