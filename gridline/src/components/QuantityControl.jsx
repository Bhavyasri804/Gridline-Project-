import Icon from "./Icon";

/**
 * Minus / quantity / plus.
 * Props:
 *   quantity  - the current quantity
 *   onChange  - called with the NEW quantity (the parent decides what 0 means)
 */
function QuantityControl({ quantity, onChange }) {
  return (
    <div className="QuantityControl" role="group" aria-label="Quantity">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(quantity - 1)}
      >
        <Icon name="minus" size={16} />
      </button>
      <output aria-live="polite">{quantity}</output>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(quantity + 1)}
      >
        <Icon name="plus" size={16} />
      </button>
    </div>
  );
}

export default QuantityControl;
