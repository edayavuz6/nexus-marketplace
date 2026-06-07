import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useToast } from "./Toast";

export default function ProductCard({ product, onClick, delay = 0, dark }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const { addToast } = useToast();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const isFav = wishlist.includes(product.id);
  const discount = product.discountPercentage
    ? Math.round(product.discountPercentage)
    : null;
  const stars = Math.min(5, Math.round(product.rating || 4));

  const textColor = dark ? "#F5F5F5" : "#0A0A0A";
  const mutedColor = dark ? "rgba(245,245,245,0.45)" : "rgba(10,10,10,0.45)";

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    addToast({
      message: `${product.title} added to cart!`,
      type: "success",
      img: product.thumbnail,
    });
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      onClick={() => onClick(product)}
      className="fade-in"
      style={{
        animationDelay: `${delay}s`,
        background: dark ? "var(--bg2)" : "#ffffff",
        border: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        transition:
          "transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s, border-color 0.3s",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
        e.currentTarget.style.boxShadow = dark
          ? "0 20px 60px rgba(0,0,0,0.45)"
          : "0 20px 60px rgba(0,0,0,0.12)";
        e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = dark
          ? "rgba(255,255,255,0.07)"
          : "rgba(0,0,0,0.07)";
      }}
    >
      <div
        style={{
          position: "relative",
          height: "220px",
          background: dark ? "#1A1A1A" : "#f5f5f5",
          overflow: "hidden",
        }}
      >
        {!imgError ? (
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
            onError={() => setImgError(true)}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.07)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              style={{ color: mutedColor }}
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span style={{ fontSize: "11px", color: mutedColor }}>
              {product.brand}
            </span>
          </div>
        )}

        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            display: "flex",
            gap: "5px",
          }}
        >
          {discount && discount > 5 && (
            <span
              style={{
                background: "#EF4444",
                color: "white",
                fontSize: "10px",
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: "6px",
              }}
            >
              -{discount}%
            </span>
          )}
          {product.stock < 10 && product.stock > 0 && (
            <span
              style={{
                background: "#F59E0B",
                color: "white",
                fontSize: "10px",
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: "6px",
              }}
            >
              Low Stock
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: dark ? "rgba(10,10,10,0.7)" : "rgba(255,255,255,0.85)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${isFav ? "rgba(239,68,68,0.4)" : dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "15px",
            color: isFav ? "#EF4444" : mutedColor,
            transition: "all 0.2s",
          }}
        >
          {isFav ? "♥" : "♡"}
        </button>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "10px",
            transform: "translateY(100%)",
            transition: "transform 0.22s ease",
          }}
          className="quick-add-wrap"
        >
          <button
            onClick={handleAdd}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: 600,
              fontFamily: "'Inter',sans-serif",
              background: added
                ? "rgba(16,185,129,0.9)"
                : "rgba(10,10,10,0.88)",
              color: "white",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s",
            }}
          >
            {added ? "✓ Added!" : "Quick Add"}
          </button>
        </div>
      </div>

      <div style={{ padding: "14px" }}>
        <p
          style={{
            fontSize: "10px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#6366F1",
            marginBottom: "5px",
          }}
        >
          {product.category}
        </p>
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: textColor,
            lineHeight: 1.3,
            marginBottom: "8px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.title}
        </h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "2px" }}>
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill={i < stars ? "#F59E0B" : dark ? "#2a2a2a" : "#e5e5e5"}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span style={{ fontSize: "11px", color: mutedColor }}>
            {product.rating?.toFixed(1)}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: textColor,
              }}
            >
              ${product.price}
            </span>
            {discount && (
              <span
                style={{
                  fontSize: "11px",
                  color: mutedColor,
                  textDecoration: "line-through",
                  marginLeft: "6px",
                }}
              >
                ${Math.round(product.price / (1 - discount / 100))}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            style={{
              padding: "7px 14px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: 600,
              fontFamily: "'Inter',sans-serif",
              background: added
                ? "rgba(16,185,129,0.15)"
                : "linear-gradient(135deg,#6366F1,#8B5CF6)",
              color: added ? "#10B981" : "white",
              transition: "all 0.2s",
            }}
          >
            {added ? "✓" : "+ Add"}
          </button>
        </div>
      </div>

      <style>{`.p-card:hover .quick-add-wrap, div:hover .quick-add-wrap { transform: translateY(0) !important; }`}</style>
    </div>
  );
}
