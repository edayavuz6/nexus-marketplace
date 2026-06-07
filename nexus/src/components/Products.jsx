import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import { ProductSkeleton } from "./Skeleton";
import ProductModal from "./ProductModal";

const sortOptions = [
  { value: "default", label: "Featured" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "rating", label: "Top Rated" },
  { value: "discount", label: "Best Deals" },
];

export default function Products({ category, search, dark }) {
  const [sort, setSort] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { products, loading, error } = useProducts({
    category,
    search,
    limit: 30,
  });

  const textColor = dark ? "#F5F5F5" : "#0A0A0A";
  const mutedColor = dark ? "rgba(245,245,245,0.45)" : "rgba(10,10,10,0.45)";
  const surfaceBg = dark ? "#111111" : "#ffffff";
  const borderC = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  const sorted = [...products].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "rating") return (b.rating || 0) - (a.rating || 0);
    if (sort === "discount")
      return (b.discountPercentage || 0) - (a.discountPercentage || 0);
    return 0;
  });

  return (
    <>
      <section
        id="products"
        style={{
          padding: "80px 0",
          background: dark ? "#0A0A0A" : "#F8F8F8",
          transition: "background 0.4s",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "40px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#6366F1",
                  marginBottom: "8px",
                }}
              >
                {category ? category.replace(/-/g, " ") : "All Products"}
              </p>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
                  fontWeight: 800,
                  color: textColor,
                  letterSpacing: "-0.03em",
                }}
              >
                Featured Products
              </h2>
              {!loading && (
                <p
                  style={{
                    fontSize: "13px",
                    color: mutedColor,
                    marginTop: "6px",
                  }}
                >
                  {sorted.length} products
                </p>
              )}
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              style={{
                padding: "10px 16px",
                borderRadius: "10px",
                background: surfaceBg,
                border: `1px solid ${borderC}`,
                color: textColor,
                fontSize: "13px",
                cursor: "pointer",
                outline: "none",
                fontFamily: "'Inter',sans-serif",
                transition: "background 0.4s",
              }}
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <div
              style={{
                padding: "40px",
                textAlign: "center",
                borderRadius: "16px",
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.2)",
              }}
            >
              <p style={{ color: "#EF4444", fontWeight: 600 }}>
                Failed to load products
              </p>
            </div>
          )}

          {loading ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))",
                gap: "20px",
              }}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : sorted.length === 0 ? (
            <div style={{ padding: "80px 40px", textAlign: "center" }}>
              <p
                style={{ fontSize: "18px", fontWeight: 600, color: textColor }}
              >
                No products found
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))",
                gap: "20px",
              }}
            >
              {sorted.map((p, i) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onClick={setSelectedProduct}
                  delay={Math.min(i * 0.03, 0.3)}
                  dark={dark}
                />
              ))}
            </div>
          )}
        </div>
      </section>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          dark={dark}
        />
      )}
    </>
  );
}
