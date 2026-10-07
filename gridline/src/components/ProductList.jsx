import ProductCard from "./ProductCard";

/**
 * Shows one ProductCard per product, or an empty message when there are none.
 * Props:
 *   products         - array of products to show
 *   onClearFilters   - called when the Clear filters button is clicked
 */
function ProductList({ products, onClearFilters }) {
  if (products.length === 0) {
    return (
      <div className="ProductList-empty">
        <h2>No products match</h2>
        <p>Try a different search or category.</p>
        <button className="btn btn-secondary" type="button" onClick={onClearFilters}>
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <ul className="ProductList" aria-label="Products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
