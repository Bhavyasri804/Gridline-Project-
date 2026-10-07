export const DEFAULT_CATEGORY = "All";
export const DEFAULT_SORT = "featured";

export const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price low to high" },
  { value: "price-desc", label: "Price high to low" },
  { value: "rating", label: "Rating" },
];

/**
 * Pure function: given the products and the user's choices, return the list to show.
 * It never changes the array it receives.
 */
export function getVisibleProducts(products, { category, search, sort }) {
  const query = search.trim().toLowerCase();

  // filter() always returns a NEW array, so sorting it below cannot
  // reorder the original products array.
  const result = products.filter((product) => {
    const matchesCategory = category === DEFAULT_CATEGORY || product.category === category;
    const matchesSearch = product.title.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  switch (sort) {
    case "price-asc":
      return result.sort((a, b) => a.price - b.price);
    case "price-desc":
      return result.sort((a, b) => b.price - a.price);
    case "rating":
      return result.sort(
        (a, b) => b.rating.rate - a.rating.rate || b.rating.count - a.rating.count
      );
    default:
      // "featured": keep the original order
      return result;
  }
}
