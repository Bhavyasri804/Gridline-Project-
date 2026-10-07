import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import ShopPage from "./pages/ShopPage";
import { getProducts } from "./services/productService";

const DESKTOP_QUERY = "(min-width: 1024px)";

/**
 * Root component. The cart now lives in Redux and the theme in Context,
 * so App only keeps UI state: which drawer (if any) is open.
 */
function App() {
  const products = getProducts();

  // One value instead of two booleans: "menu", "cart" or null (nothing open).
  // That makes it impossible for both drawers to be open at once.
  const [openPanel, setOpenPanel] = useState(null);

  const closePanel = useCallback(() => setOpenPanel(null), []);

  function openMenu() {
    setOpenPanel("menu");
  }

  function openCart() {
    // On wide screens the cart is always visible as a sidebar, so there is nothing to open.
    if (window.matchMedia(DESKTOP_QUERY).matches) return;
    setOpenPanel("cart");
  }

  // Stop the page behind a drawer from scrolling.
  useEffect(() => {
    document.body.classList.toggle("is-locked", openPanel !== null);
    return () => document.body.classList.remove("is-locked");
  }, [openPanel]);

  // Escape closes whatever is open.
  useEffect(() => {
    if (openPanel === null) return;
    function handleKeyDown(event) {
      if (event.key === "Escape") closePanel();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openPanel, closePanel]);

  // If the window is resized across 1024px, close the drawers.
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    query.addEventListener("change", closePanel);
    return () => query.removeEventListener("change", closePanel);
  }, [closePanel]);

  return (
    <>
      <Header
        isMenuOpen={openPanel === "menu"}
        onOpenMenu={openMenu}
        onOpenCart={openCart}
      />
      <ShopPage
        products={products}
        isCartOpen={openPanel === "cart"}
        isMenuOpen={openPanel === "menu"}
        onCloseCart={closePanel}
        onCloseMenu={closePanel}
      />
      <div
        className={`Overlay${openPanel !== null ? " is-open" : ""}`}
        onClick={closePanel}
        aria-hidden="true"
      ></div>
    </>
  );
}

export default App;
