import { useDispatch } from "react-redux";
import Icon from "./Icon";
import { addToCart } from "../features/cart/cartSlice";
import { formatPrice } from "../utils/formatPrice";

/**
 * Shows one product. Clicking the button sends an addToCart action to Redux.
 * Props:
 *   product - { id, title, category, price, rating, icon, ... }
 */
function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { id, title, category, price, rating, icon } = product;

  return (
    <li className="ProductCard">
      <div className="ProductCard-media" aria-hidden="true">
        <Icon name={icon} size={96} />
        <span className="ProductCard-index">{String(id).padStart(2, "0")}</span>
      </div>
      <div className="ProductCard-body">
        <p className="ProductCard-meta">
          <span>{category}</span>
          <span
            className="ProductCard-rating"
            aria-label={`Rated ${rating.rate} out of 5`}
          >
            <Icon name="star" size={13} fill="currentColor" />
            {rating.rate}
          </span>
        </p>
        <h2 className="ProductCard-title">{title}</h2>
        <p className="ProductCard-price">{formatPrice(price)}</p>
      </div>
      <button
        className="btn btn-primary ProductCard-add"
        type="button"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to cart <Icon name="plus" size={18} />
      </button>
    </li>
  );
}

export default ProductCard;
