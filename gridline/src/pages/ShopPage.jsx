import { useMemo, useState } from "react";
import ProductList from "../components/ProductList";
import CartPanel from "../components/CartPanel";
import FilterSortBar from "../components/FilterSortBar";
import SearchBar from "../components/SearchBar";
import MobileMenu from "../components/MobileMenu";
import { getCategories } from "../services/productService";
import { DEFAULT_CATEGORY, DEFAULT_SORT, getVisibleProducts } from "../utils/productFilters";

/**
 * The shop screen. It owns the search / category / sort state.
 * Props:
 *   products      - all products
 *   isCartOpen    - cart drawer open flag (from App)
 *   isMenuOpen    - mobile menu open flag (from App)
 *   onCloseCart   - closes the cart drawer
 *   onCloseMenu   - closes the mobile menu
 */
function ShopPage({ products, isCartOpen, isMenuOpen, onCloseCart, onCloseMenu }) {
  const categories = getCategories();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const [sort, setSort] = useState(DEFAULT_SORT);

  // Recalculated only when one of these four values changes, not on every render.
  const visibleProducts = useMemo(
    () => getVisibleProducts(products, { category, search, sort }),
    [products, category, search, sort]
  );

  function clearFilters() {
    setCategory(DEFAULT_CATEGORY);
    setSearch("");
  }

  const count = visibleProducts.length;

  return (
    <div className="App-layout">
      <main className="Shop" id="main">
        <div className="Shop-head">
          <h1 className="Shop-title">
            {category === DEFAULT_CATEGORY ? "All products" : category}
          </h1>
          <p className="Shop-count" aria-live="polite">
            {count} {count === 1 ? "product" : "products"}
          </p>
        </div>

        <FilterSortBar
          categories={categories}
          selectedCategory={category}
          onSelectCategory={setCategory}
          sort={sort}
          onSortChange={setSort}
        />
        <SearchBar value={search} onChange={setSearch} />
        <ProductList products={visibleProducts} onClearFilters={clearFilters} />
      </main>

      <CartPanel isOpen={isCartOpen} onClose={onCloseCart} />

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={onCloseMenu}
        products={products}
        categories={categories}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
    </div>
  );
}

export default ShopPage;
