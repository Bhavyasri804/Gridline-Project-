import Icon from "./Icon";
import { useTheme } from "../context/ThemeContext";
import { DEFAULT_CATEGORY } from "../utils/productFilters";

/**
 * Slide-in menu for screens below 1024px.
 * Props:
 *   isOpen            - true while open (adds the is-open class)
 *   onClose           - closes the menu
 *   products          - all products (used to show the count next to each category)
 *   categories        - category names, starting with "All"
 *   selectedCategory  - the chosen category (same state as the chips)
 *   onSelectCategory  - called with a category name
 */
function MobileMenu({ isOpen, onClose, products, categories, selectedCategory, onSelectCategory }) {
  const { theme, toggleTheme } = useTheme();

  function countFor(category) {
    if (category === DEFAULT_CATEGORY) return products.length;
    return products.filter((product) => product.category === category).length;
  }

  function handleSelect(category) {
    onSelectCategory(category);
    onClose();
  }

  return (
    <nav
      className={`MobileMenu${isOpen ? " is-open" : ""}`}
      id="mobile-menu"
      aria-label="Menu"
    >
      <div className="MobileMenu-head">
        <span className="Header-brand">
          <span className="Header-mark" aria-hidden="true"></span>Gridline
        </span>
        <button className="icon-btn" type="button" aria-label="Close menu" onClick={onClose}>
          <Icon name="close" size={22} />
        </button>
      </div>
      <div>
        <h2 className="MobileMenu-heading">Shop by category</h2>
        <ul className="MobileMenu-list">
          {categories.map((category) => (
            <li key={category}>
              <button
                className="MobileMenu-link"
                type="button"
                aria-current={category === selectedCategory ? "true" : undefined}
                onClick={() => handleSelect(category)}
              >
                {category === DEFAULT_CATEGORY ? "All products" : category}
                <span className="MobileMenu-count">{countFor(category)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="MobileMenu-heading">Appearance</h2>
        <label className="MobileMenu-row">
          Dark theme{" "}
          <input
            className="switch"
            type="checkbox"
            role="switch"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </label>
      </div>
    </nav>
  );
}

export default MobileMenu;
