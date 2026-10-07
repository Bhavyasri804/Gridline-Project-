import { products, categories } from "../data/products";

/**
 * The single place the rest of the app gets its data from.
 * Today the data is a local array. In Lab 2 these functions can call a real API
 * and no component will need to change.
 */
export function getProducts() {
  return products;
}

/** The category names for the filter chips, starting with "All". */
export function getCategories() {
  return categories;
}
