import { useCategories } from "../hooks/useProducts";

const categoryIcons = {
  smartphones: "📱",
  laptops: "💻",
  fragrances: "🌸",
  skincare: "✨",
  groceries: "🛒",
  "home-decoration": "🏠",
  furniture: "🛋️",
  tops: "👕",
  "womens-dresses": "👗",
  "womens-shoes": "👠",
  "mens-shoes": "👟",
  "mens-watches": "⌚",
  "womens-watches": "⌚",
  "womens-bags": "👜",
  "womens-jewellery": "💍",
  sunglasses: "🕶️",
  automotive: "🚗",
  motorcycle: "🏍️",
  lighting: "💡",
};
const gradients = [
  "linear-gradient(135deg,#6366F1,#8B5CF6)",
  "linear-gradient(135deg,#EC4899,#F43F5E)",
  "linear-gradient(135deg,#10B981,#059669)",
  "linear-gradient(135deg,#F59E0B,#EF4444)",
  "linear-gradient(135deg,#3B82F6,#6366F1)",
  "linear-gradient(135deg,#8B5CF6,#EC4899)",
  "linear-gradient(135deg,#06B6D4,#3B82F6)",
  "linear-gradient(135deg,#F97316,#EF4444)",
  "linear-gradient(135deg,#84CC16,#10B981)",
  "linear-gradient(135deg,#E879F9,#8B5CF6)",
  "linear-gradient(135deg,#FB923C,#F59E0B)",
  "linear-gradient(135deg,#38BDF8,#06B6D4)",
];

export default function Categories({ onSelect, dark }) {
  const { categories, loading } = useCategories();
  const textColor = dark ? "#F5F5F5" : "#0A0A0A";
  const mutedColor = dark ? "rgba(245,245,245,0.45)" : "rgba(10,10,10,0.45)";
  const cardBg = dark ? "#111111" : "#ffffff";
  const borderC = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <section
      id="categories"
      style={{
        padding: "80px 0",
        background: dark ? "#111111" : "#ffffff",
        transition: "background 0.4s",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#6366F1",
              marginBottom: "12px",
            }}
          >
            Browse
          </p>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(1.8rem,4vw,3rem)",
              fontWeight: 800,
              color: textColor,
              letterSpacing: "-0.03em",
              marginBottom: "12px",
            }}
          >
            Shop by Category
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: mutedColor,
              fontWeight: 300,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Explore our curated selection across all major categories.
          </p>
        </div>
        {loading ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))",
              gap: "16px",
            }}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="skeleton"
                style={{ height: "110px", borderRadius: "16px" }}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))",
              gap: "16px",
            }}
          >
            {categories.map((cat, i) => {
              const slug = cat.slug || cat;
              const name = cat.name || cat;
              return (
                <button
                  key={slug}
                  onClick={() => onSelect(slug)}
                  style={{
                    position: "relative",
                    padding: "22px 14px",
                    borderRadius: "14px",
                    background: cardBg,
                    border: `1px solid ${borderC}`,
                    cursor: "pointer",
                    overflow: "hidden",
                    textAlign: "center",
                    transition: "all 0.3s cubic-bezier(.34,1.56,.64,1)",
                    fontFamily: "'Inter',sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-5px) scale(1.02)";
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)";
                    e.currentTarget.style.boxShadow = dark
                      ? "0 16px 48px rgba(0,0,0,0.45)"
                      : "0 16px 48px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.borderColor = borderC;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: gradients[i % gradients.length],
                      opacity: dark ? 0.06 : 0.04,
                    }}
                  />
                  <div style={{ fontSize: "30px", marginBottom: "8px" }}>
                    {categoryIcons[slug] || "🔷"}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: textColor,
                      textTransform: "capitalize",
                      lineHeight: 1.3,
                    }}
                  >
                    {name.replace(/-/g, " ")}
                  </div>
                </button>
              );
            })}
            <button
              onClick={() => onSelect("all")}
              style={{
                padding: "22px 14px",
                borderRadius: "14px",
                background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
                border: "none",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.3s",
                fontFamily: "'Inter',sans-serif",
                boxShadow: "0 8px 32px rgba(99,102,241,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-5px) scale(1.02)";
                e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.opacity = "1";
              }}
            >
              <div style={{ fontSize: "30px", marginBottom: "8px" }}>🛍️</div>
              <div
                style={{ fontSize: "11px", fontWeight: 700, color: "white" }}
              >
                All Products
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
