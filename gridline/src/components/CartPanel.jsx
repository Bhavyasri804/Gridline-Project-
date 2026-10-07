import { useSelector } from "react-redux";
import Icon from "./Icon";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { selectCartCount, selectCartItems, selectCartTotal } from "../features/cart/cartSlice";
import { formatPrice } from "../utils/formatPrice";

/**
 * The cart: a sidebar on wide screens, a drawer / bottom sheet below 1024px.
 * Props:
 *   isOpen   - true while the drawer is open (adds the is-open class)
 *   onClose  - called by the close button and the Browse products button
 */
function CartPanel({ isOpen, onClose }) {
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = formatPrice(useSelector(selectCartTotal));
  const isEmpty = items.length === 0;

  return (
    <aside
      className={`CartPanel${isOpen ? " is-open" : ""}`}
      id="cart"
      aria-labelledby="cart-title"
    >
      <div className="CartPanel-handle" aria-hidden="true"></div>
      <div className="CartPanel-head">
        <h2 className="CartPanel-title" id="cart-title">
          Your cart
          {!isEmpty && <span>{count} {count === 1 ? "item" : "items"}</span>}
        </h2>
        <button
          className="icon-btn CartPanel-close"
          type="button"
          aria-label="Close cart"
          onClick={onClose}
        >
          <Icon name="close" size={22} />
        </button>
      </div>

      <ul className="CartPanel-items">
        {isEmpty ? (
          <EmptyCart onBrowse={onClose} />
        ) : (
          items.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </ul>

      {!isEmpty && (
        <div className="CartPanel-footer">
          <p className="CartPanel-row">
            <span>Subtotal</span>
            <span>{total}</span>
          </p>
          <p className="CartPanel-row">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </p>
          <p className="CartPanel-total">
            <span>Total</span>
            <strong>{total}</strong>
          </p>
          <button className="btn btn-primary CartPanel-checkout" type="button">
            Checkout <Icon name="arrow" size={18} />
          </button>
        </div>
      )}
    </aside>
  );
}

export default CartPanel;
