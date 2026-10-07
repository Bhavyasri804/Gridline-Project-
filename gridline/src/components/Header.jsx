import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import { selectCartCount } from "../features/cart/cartSlice";

/**
 * Top bar. It reads the cart count from Redux itself.
 * Props:
 *   isMenuOpen  - true while the mobile menu is open (for aria-expanded)
 *   onOpenMenu  - called by the hamburger button
 *   onOpenCart  - called by the Cart button
 */
function Header({ isMenuOpen, onOpenMenu, onOpenCart }) {
  const cartCount = useSelector(selectCartCount);
  const headerRef = useRef(null);

  // The cart sidebar sticks below the header, so the CSS needs the header's real height.
  useEffect(() => {
    const header = headerRef.current;
    const observer = new ResizeObserver(([entry]) => {
      document.documentElement.style.setProperty("--header-h", `${entry.target.offsetHeight}px`);
    });
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="Header" ref={headerRef}>
      <div className="Header-inner">
        <button
          className="icon-btn Header-menuBtn"
          type="button"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={onOpenMenu}
        >
          <Icon name="menu" size={24} />
        </button>
        <a className="Header-brand" href="#main">
          <span className="Header-mark" aria-hidden="true"></span>Gridline
        </a>
        <div className="Header-actions">
          <ThemeToggle />
          <button className="CartButton" type="button" aria-controls="cart" onClick={onOpenCart}>
            <Icon name="cart" size={20} />
            <span className="CartButton-label">Cart</span>
            <span className="CartButton-count">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
