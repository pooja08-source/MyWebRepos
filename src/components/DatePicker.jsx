function DatePicker({ label, value, onChange, dates = [] }) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <select value={value} onChange={onChange}>
        <option value="">Select a date</option>

        {dates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DatePicker;