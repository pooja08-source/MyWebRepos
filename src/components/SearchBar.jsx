import { useEffect, useRef } from "react";
import "./components.css";
function SearchBar({ value, onChange }) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <input
      ref={inputRef}
      className="search-bar"
      type="text"
      placeholder="Where do you want to explore? 🔍"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
export default SearchBar;
