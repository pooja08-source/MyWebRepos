import "./components.css";

function FilterPanel({
  maxPrice,
  setMaxPrice,
  maxDuration,
  setMaxDuration,
  minRating,
  setMinRating,
}) {
  return (
    <div className="filter-panel">
      <select
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      >
        <option value={0}>All Budgets</option>
        <option value={10000}>Under ₹10,000</option>
        <option value={15000}>Under ₹15,000</option>
        <option value={20000}>Under ₹20,000</option>
        <option value={25000}>Under ₹25,000</option>
      </select>

      <select
        value={maxDuration}
        onChange={(e) => setMaxDuration(Number(e.target.value))}
      >
        <option value={0}>All Durations</option>
        <option value={3}>Up to 3 Days</option>
        <option value={4}>Up to 4 Days</option>
        <option value={5}>Up to 5 Days</option>
        <option value={6}>Up to 6 Days</option>
      </select>

      <select
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
      >
        <option value={0}>All Ratings</option>
        <option value={4}>4.0 ⭐ & above</option>
        <option value={4.5}>4.5 ⭐ & above</option>
      </select>
    </div>
  );
}

export default FilterPanel;