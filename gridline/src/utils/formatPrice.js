const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

/**
 * Turns a number into a dollar string: 59.99 -> "$59.99", 89 -> "$89.00".
 */
export function formatPrice(amount) {
  return priceFormatter.format(amount);
}
