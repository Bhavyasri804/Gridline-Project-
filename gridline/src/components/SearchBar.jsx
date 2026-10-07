import Icon from "./Icon";

/**
 * Controlled search box: the text lives in the parent, not here.
 * Props:
 *   value     - the current search text
 *   onChange  - function called with the new text on every keystroke
 */
function SearchBar({ value, onChange }) {
  return (
    <div className="SearchBar">
      <label className="visually-hidden" htmlFor="search">Search products</label>
      <Icon name="search" size={18} className="SearchBar-icon" />
      <input
        className="SearchBar-input"
        id="search"
        type="search"
        placeholder="Search products"
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
