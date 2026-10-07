import { SORT_OPTIONS } from "../utils/productFilters";

/**
 * Category chips and the sort dropdown.
 * Props:
 *   categories          - list of category names (starts with "All")
 *   selectedCategory    - the chosen category
 *   onSelectCategory    - called with a category name
 *   sort                - the chosen sort value
 *   onSortChange        - called with a sort value
 */
function FilterSortBar({ categories, selectedCategory, onSelectCategory, sort, onSortChange }) {
  return (
    <section className="FilterSortBar" aria-label="Filter and sort">
      <div className="FilterSortBar-chips" role="group" aria-label="Category">
        {categories.map((category) => (
          <button
            key={category}
            className="Chip"
            type="button"
            aria-pressed={category === selectedCategory}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="FilterSortBar-sort">
        <label htmlFor="sort">Sort by</label>
        <select
          className="Select"
          id="sort"
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default FilterSortBar;
