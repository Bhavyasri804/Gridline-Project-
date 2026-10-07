import Icon from "./Icon";
import { useTheme } from "../context/ThemeContext";

/**
 * Switch button for light / dark mode. Moon in light mode, sun in dark mode.
 */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="ThemeToggle">
      <button
        className="ThemeToggle-btn"
        type="button"
        role="switch"
        aria-checked={isDark}
        onClick={toggleTheme}
      >
        <span className="ThemeToggle-icon" aria-hidden="true">
          <Icon name={isDark ? "sun" : "moon"} size={18} />
        </span>
        <span className="ThemeToggle-text">Dark theme</span>
      </button>
    </div>
  );
}

export default ThemeToggle;
