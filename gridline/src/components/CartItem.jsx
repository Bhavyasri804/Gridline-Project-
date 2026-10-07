import { useDispatch } from "react-redux";
import Icon from "./Icon";
import QuantityControl from "./QuantityControl";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";
import { formatPrice } from "../utils/formatPrice";

/**
 * One line in the cart. It talks to Redux directly, so it only needs the item.
 * Props:
 *   item - a product plus a qty field
 */
function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li className="CartItem">
      <div className="CartItem-thumb" aria-hidden="true">
        <Icon name={item.icon} size={30} />
      </div>
      <div className="CartItem-info">
        <h3 className="CartItem-title">{item.title}</h3>
        <p className="CartItem-unit">{formatPrice(item.price)} each</p>
      </div>
      <div className="CartItem-actions">
        <QuantityControl
          quantity={item.qty}
          onChange={(qty) => dispatch(updateQuantity({ id: item.id, qty }))}
        />
        <button
          className="btn btn-ghost"
          type="button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
      <p className="CartItem-total">{formatPrice(item.price * item.qty)}</p>
    </li>
  );
}

export default CartItem;
