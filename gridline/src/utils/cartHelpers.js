/**
 * Total number of units in the cart (sum of every qty).
 * A cart with 1 headphones and 2 keyboards has a count of 3.
 */
export function getCartCount(cart) {
  return cart.reduce((count, item) => count + item.qty, 0);
}

/**
 * Total price of the cart.
 * We add up whole cents (integers) and divide at the end, because adding
 * decimals like 59.99 + 19.99 directly can give results such as 79.97999999.
 */
export function getCartTotal(cart) {
  const cents = cart.reduce(
    (total, item) => total + Math.round(item.price * 100) * item.qty,
    0
  );
  return cents / 100;
}
