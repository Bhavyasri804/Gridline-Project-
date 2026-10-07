import Icon from "./Icon";

/**
 * Message shown inside the cart list when there are no items.
 * Props:
 *   onBrowse - called when "Browse products" is clicked (closes the cart on small screens)
 */
function EmptyCart({ onBrowse }) {
  return (
    <li className="EmptyCart">
      <div className="EmptyCart-icon" aria-hidden="true">
        <Icon name="cart" size={28} />
      </div>
      <h3>Your cart is empty</h3>
      <p>Add something from the grid and it will show up here.</p>
      <button className="btn btn-secondary" type="button" onClick={onBrowse}>
        Browse products
      </button>
    </li>
  );
}

export default EmptyCart;
