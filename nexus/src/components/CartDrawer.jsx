import { useCart } from "../context/CartContext";

export default function CartDrawer({ onClose, dark }) {
  const { cart, removeFromCart, updateQty, cartTotal, clearCart } = useCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const shipping = cartTotal > 99 ? 0 : 9.99;
  const textColor = dark ? "#F5F5F5" : "#0A0A0A";
  const mutedColor = dark ? "rgba(245,245,245,0.45)" : "rgba(10,10,10,0.45)";
  const surfaceBg = dark ? "#111111" : "#ffffff";
  const itemBg = dark ? "#1A1A1A" : "#f5f5f5";
  const borderC = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex" }}>
      <div
        style={{
          flex: 1,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(4px)",
        }}
        onClick={onClose}
      />
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: surfaceBg,
          borderLeft: `1px solid ${borderC}`,
          boxShadow: "-20px 0 60px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px",
            borderBottom: `1px solid ${borderC}`,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: textColor,
              }}
            >
              Shopping Cart
            </h2>
            <p
              style={{ fontSize: "12px", color: mutedColor, marginTop: "2px" }}
            >
              {count} {count === 1 ? "item" : "items"}
            </p>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                style={{
                  fontSize: "11px",
                  color: mutedColor,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#EF4444")}
                onMouseLeave={(e) => (e.target.style.color = mutedColor)}
              >
                Clear all
              </button>
            )}
            <button
              onClick={onClose}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: dark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.05)",
                border: `1px solid ${borderC}`,
                cursor: "pointer",
                color: mutedColor,
                fontSize: "18px",
              }}
            >
              ×
            </button>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {cart.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                gap: "16px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: dark ? "#1A1A1A" : "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  style={{ color: mutedColor }}
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 600,
                    color: textColor,
                    marginBottom: "6px",
                  }}
                >
                  Your cart is empty
                </p>
                <p style={{ fontSize: "13px", color: mutedColor }}>
                  Add some amazing products!
                </p>
              </div>
              <button
                onClick={onClose}
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "12px",
                  padding: "12px",
                  borderRadius: "12px",
                  background: itemBg,
                  border: `1px solid ${borderC}`,
                }}
              >
                <img
                  src={item.thumbnail || item.img}
                  alt={item.title}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    flexShrink: 0,
                  }}
                  onError={(e) => (e.target.style.display = "none")}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: textColor,
                      lineHeight: 1.3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      marginBottom: "3px",
                    }}
                  >
                    {item.title || item.name}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#6366F1",
                      fontWeight: 500,
                      marginBottom: "8px",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.category || item.tag}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0",
                        background: dark ? "#0A0A0A" : "#ffffff",
                        borderRadius: "8px",
                        border: `1px solid ${borderC}`,
                        overflow: "hidden",
                      }}
                    >
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        style={{
                          width: "28px",
                          height: "28px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: mutedColor,
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        −
                      </button>
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: textColor,
                          minWidth: "20px",
                          textAlign: "center",
                        }}
                      >
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        style={{
                          width: "28px",
                          height: "28px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
                          border: "none",
                          cursor: "pointer",
                          color: "white",
                          fontSize: "14px",
                          fontWeight: 700,
                        }}
                      >
                        +
                      </button>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: textColor,
                      }}
                    >
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    alignSelf: "flex-start",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: mutedColor,
                    fontSize: "16px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#EF4444")}
                  onMouseLeave={(e) => (e.target.style.color = mutedColor)}
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div
            style={{ padding: "20px 24px", borderTop: `1px solid ${borderC}` }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              {[
                ["Subtotal", `$${cartTotal.toFixed(2)}`],
                ["Shipping", shipping === 0 ? "Free 🎉" : `$${shipping}`],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "13px",
                  }}
                >
                  <span style={{ color: mutedColor }}>{k}</span>
                  <span
                    style={{
                      color:
                        shipping === 0 && k === "Shipping"
                          ? "#10B981"
                          : textColor,
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
              {shipping > 0 && (
                <p style={{ fontSize: "11px", color: mutedColor }}>
                  Add ${(99 - cartTotal).toFixed(2)} more for free shipping
                </p>
              )}
              <div
                style={{ height: "1px", background: borderC, margin: "4px 0" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600, color: textColor }}>Total</span>
                <span
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: textColor,
                  }}
                >
                  ${(cartTotal + shipping).toFixed(2)}
                </span>
              </div>
            </div>
            <button
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "'Inter',sans-serif",
                boxShadow: "0 8px 32px rgba(99,102,241,0.35)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Checkout — ${(cartTotal + shipping).toFixed(2)}
            </button>
            <p
              style={{
                textAlign: "center",
                fontSize: "11px",
                color: mutedColor,
                marginTop: "10px",
              }}
            >
              🔒 Secure checkout · SSL encrypted
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
