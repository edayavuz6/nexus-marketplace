import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useToast } from "./Toast";

export default function ProductModal({ product, onClose, dark }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const { addToast } = useToast();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const isFav = wishlist.includes(product.id);
  const images = product.images?.length ? product.images : [product.thumbnail];
  const discount = product.discountPercentage
    ? Math.round(product.discountPercentage)
    : null;
  const originalPrice = discount
    ? Math.round(product.price / (1 - discount / 100))
    : null;

  const textColor = dark ? "#F5F5F5" : "#0A0A0A";
  const mutedColor = dark ? "rgba(245,245,245,0.5)" : "rgba(10,10,10,0.5)";
  const surfaceBg = dark ? "#111111" : "#ffffff";
  const borderC = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  const handleAdd = () => {
    addToCart(product, qty);
    addToast({
      message: `${product.title} added to cart!`,
      type: "success",
      img: product.thumbnail,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(10px)",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "860px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: surfaceBg,
          border: `1px solid ${borderC}`,
          borderRadius: "24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          position: "relative",
          boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
        }}
        className="no-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            zIndex: 10,
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)",
            border: `1px solid ${borderC}`,
            cursor: "pointer",
            color: mutedColor,
            fontSize: "20px",
          }}
        >
          ×
        </button>

        <div
          style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              aspectRatio: "1",
              borderRadius: "16px",
              overflow: "hidden",
              background: dark ? "#1A1A1A" : "#f5f5f5",
            }}
          >
            <img
              src={images[activeImg]}
              alt={product.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => (e.target.src = product.thumbnail)}
            />
          </div>
          {images.length > 1 && (
            <div
              style={{ display: "flex", gap: "8px", overflowX: "auto" }}
              className="no-scroll"
            >
              {images.slice(0, 5).map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    flexShrink: 0,
                    cursor: "pointer",
                    border: `2px solid ${i === activeImg ? "#6366F1" : "transparent"}`,
                    transition: "border-color 0.2s",
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => (e.target.src = product.thumbnail)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          style={{
            padding: "24px 24px 24px 0",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#6366F1",
                marginBottom: "6px",
              }}
            >
              {product.category} · {product.brand}
            </p>
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "1.4rem",
                fontWeight: 800,
                color: textColor,
                lineHeight: 1.2,
                marginBottom: "10px",
              }}
            >
              {product.title}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "flex", gap: "2px" }}>
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill={
                      i < Math.round(product.rating || 4)
                        ? "#F59E0B"
                        : dark
                          ? "#2a2a2a"
                          : "#e5e5e5"
                    }
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: "12px", color: mutedColor }}>
                {product.rating?.toFixed(1)} · {product.stock} in stock
              </span>
            </div>
          </div>

          <p style={{ fontSize: "13px", color: mutedColor, lineHeight: 1.75 }}>
            {product.description}
          </p>

          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "1.8rem",
                fontWeight: 800,
                color: textColor,
              }}
            >
              ${product.price}
            </span>
            {originalPrice && (
              <span
                style={{
                  fontSize: "14px",
                  color: mutedColor,
                  textDecoration: "line-through",
                }}
              >
                ${originalPrice}
              </span>
            )}
            {discount && (
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#10B981",
                  background: "rgba(16,185,129,0.1)",
                  padding: "2px 8px",
                  borderRadius: "6px",
                }}
              >
                Save {discount}%
              </span>
            )}
          </div>

          {product.tags?.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {product.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "100px",
                    background: dark
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.05)",
                    border: `1px solid ${borderC}`,
                    fontSize: "11px",
                    color: mutedColor,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{ fontSize: "13px", color: mutedColor, fontWeight: 500 }}
            >
              Quantity
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: dark ? "#1A1A1A" : "#f5f5f5",
                borderRadius: "10px",
                overflow: "hidden",
                border: `1px solid ${borderC}`,
              }}
            >
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                style={{
                  width: "36px",
                  height: "36px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: mutedColor,
                  fontSize: "18px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                −
              </button>
              <span
                style={{
                  width: "40px",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: textColor,
                }}
              >
                {qty}
              </span>
              <button
                onClick={() => setQty(qty + 1)}
                style={{
                  width: "36px",
                  height: "36px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: mutedColor,
                  fontSize: "18px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                +
              </button>
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={handleAdd}
              style={{
                flex: 1,
                padding: "13px",
                borderRadius: "12px",
                background: added
                  ? "rgba(16,185,129,0.15)"
                  : "linear-gradient(135deg,#6366F1,#8B5CF6)",
                color: added ? "#10B981" : "white",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "'Inter',sans-serif",
                transition: "all 0.2s",
                boxShadow: added ? "none" : "0 8px 24px rgba(99,102,241,0.3)",
              }}
            >
              {added
                ? "✓ Added to Cart!"
                : `Add to Cart — $${(product.price * qty).toFixed(2)}`}
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: dark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.05)",
                border: `1px solid ${isFav ? "rgba(239,68,68,0.4)" : borderC}`,
                cursor: "pointer",
                fontSize: "20px",
                color: isFav ? "#EF4444" : mutedColor,
                transition: "all 0.2s",
              }}
            >
              {isFav ? "♥" : "♡"}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              paddingTop: "8px",
              borderTop: `1px solid ${borderC}`,
            }}
          >
            {[
              ["🚀", "Free shipping over $99"],
              ["🛡️", "2-year warranty included"],
              ["↩️", "30-day free returns"],
            ].map(([icon, text]) => (
              <div
                key={text}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span style={{ fontSize: "15px" }}>{icon}</span>
                <span style={{ fontSize: "12px", color: mutedColor }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`@media (max-width:640px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
      </div>
    </div>
  );
}
