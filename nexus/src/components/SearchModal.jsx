import { useState, useEffect, useRef } from "react";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../context/CartContext";

export default function SearchModal({ onClose, onCategoryChange }) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const inputRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 400);
    return () => clearTimeout(t);
  }, [query]);

  const { products, loading } = useProducts({
    search: debouncedQuery,
    limit: 8,
  });
  const showResults = debouncedQuery.length > 1;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "80px",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <div
        style={{ width: "100%", maxWidth: "600px", margin: "0 20px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ position: "relative", marginBottom: "16px" }}>
          <svg
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--text-3)",
            }}
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, brands, categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "18px 50px",
              fontSize: "16px",
              fontFamily: "'Inter', sans-serif",
              background: "var(--bg2)",
              border: "1px solid var(--border2)",
              borderRadius: "16px",
              color: "var(--text)",
              outline: "none",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-3)",
                fontSize: "20px",
              }}
            >
              ×
            </button>
          )}
        </div>

        {showResults && (
          <div
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {loading ? (
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="skeleton"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "8px",
                        flexShrink: 0,
                      }}
                    />
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <div
                        className="skeleton"
                        style={{ height: "12px", width: "70%" }}
                      />
                      <div
                        className="skeleton"
                        style={{ height: "10px", width: "40%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : products.length === 0 ? (
              <div style={{ padding: "32px", textAlign: "center" }}>
                <p style={{ color: "var(--text-2)" }}>
                  No results for "<strong>{debouncedQuery}</strong>"
                </p>
              </div>
            ) : (
              <div>
                <p
                  style={{
                    padding: "12px 16px 8px",
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--text-3)",
                  }}
                >
                  {products.length} Results
                </p>
                {products.slice(0, 6).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      addToCart(p);
                      onClose();
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "10px 16px",
                      cursor: "pointer",
                      transition: "background 0.15s",
                      borderTop: "1px solid var(--border)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "var(--bg3)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      style={{
                        width: "44px",
                        height: "44px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        flexShrink: 0,
                      }}
                      onError={(e) => (e.target.style.display = "none")}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "var(--text)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {p.title}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "var(--accent)",
                          textTransform: "capitalize",
                        }}
                      >
                        {p.category}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        color: "var(--text)",
                        flexShrink: 0,
                      }}
                    >
                      ${p.price}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {!showResults && (
          <div
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "20px 16px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-3)",
                marginBottom: "12px",
              }}
            >
              Popular Searches
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[
                "iPhone",
                "MacBook",
                "Headphones",
                "Smart Watch",
                "Gaming",
                "Laptop",
                "Camera",
                "Speaker",
              ].map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: "100px",
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    color: "var(--text-2)",
                    fontSize: "12px",
                    cursor: "pointer",
                    transition: "all 0.15s",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(99,102,241,0.15)";
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                    e.currentTarget.style.color = "#6366F1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--bg3)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-2)";
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
