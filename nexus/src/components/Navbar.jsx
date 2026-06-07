import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";
import SearchModal from "./SearchModal";

const Logo = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
    }}
  >
    <div
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "8px",
        background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </div>
    <span
      style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 700,
        fontSize: "18px",
        letterSpacing: "-0.02em",
      }}
    >
      NEX
      <span
        style={{
          background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        US
      </span>
    </span>
  </div>
);

export default function Navbar({ onCategoryChange, dark, toggleDark }) {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Categories", href: "#categories" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const navBg = dark
    ? scrolled
      ? "rgba(10,10,10,0.9)"
      : "transparent"
    : scrolled
      ? "rgba(245,245,245,0.9)"
      : "transparent";

  const borderC = scrolled
    ? dark
      ? "rgba(255,255,255,0.07)"
      : "rgba(0,0,0,0.07)"
    : "transparent";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "64px",
          display: "flex",
          alignItems: "center",
          padding: "0 48px",
          gap: "0",
          background: navBg,
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: `1px solid ${borderC}`,
          transition: "all 0.4s ease",
        }}
      >
        <Logo />

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            listStyle: "none",
            marginLeft: "48px",
            flex: 1,
          }}
          className="hidden md:flex"
        >
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: dark ? "rgba(245,245,245,0.6)" : "rgba(26,20,16,0.6)",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = dark ? "#F5F5F5" : "#1a1410")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = dark
                    ? "rgba(245,245,245,0.6)"
                    : "rgba(26,20,16,0.6)")
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginLeft: "auto",
          }}
        >
          <button
            onClick={() => setSearchOpen(true)}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
              border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
              cursor: "pointer",
              color: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(99,102,241,0.15)";
              e.currentTarget.style.color = "#6366F1";
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = dark
                ? "rgba(255,255,255,0.05)"
                : "rgba(0,0,0,0.05)";
              e.currentTarget.style.color = dark
                ? "rgba(255,255,255,0.5)"
                : "rgba(0,0,0,0.5)";
              e.currentTarget.style.borderColor = dark
                ? "rgba(255,255,255,0.08)"
                : "rgba(0,0,0,0.08)";
            }}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          <button
            onClick={toggleDark}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
              border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
              cursor: "pointer",
              color: dark ? "#F5E100" : "#6366F1",
              fontSize: "17px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(99,102,241,0.15)";
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = dark
                ? "rgba(255,255,255,0.05)"
                : "rgba(0,0,0,0.05)";
              e.currentTarget.style.borderColor = dark
                ? "rgba(255,255,255,0.08)"
                : "rgba(0,0,0,0.08)";
            }}
            title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setCartOpen(true)}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              padding: "0 18px",
              height: "38px",
              borderRadius: "10px",
              background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
              fontFamily: "'Inter',sans-serif",
              transition: "all 0.2s",
              boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.88";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-6px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "#EF4444",
                  fontSize: "10px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {cartOpen && (
        <CartDrawer onClose={() => setCartOpen(false)} dark={dark} />
      )}
      {searchOpen && (
        <SearchModal
          onClose={() => setSearchOpen(false)}
          onCategoryChange={onCategoryChange}
          dark={dark}
        />
      )}
    </>
  );
}
