import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useToast } from "./Toast";

const heroProducts = [
  {
    id: 101,
    name: "iPhone 15 Pro",
    tag: "Smartphone",
    badge: "New Arrival",
    tagline: "Titanium. So strong. So light. So Pro.",
    desc: "A17 Pro chip. Dynamic Island. Always-On ProMotion display. 48MP main camera with 5x optical zoom. The thinnest borders ever on an iPhone.",
    price: 999,
    color: "#6366F1",
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=700&q=90",
    features: ["A17 Pro Chip", "48MP Camera", "5x Optical Zoom", "USB-C"],
    category: "smartphones",
  },
  {
    id: 102,
    name: "MacBook Pro M3 Max",
    tag: "Laptop",
    badge: "Most Powerful",
    tagline: "Mind-blowing. Head-turning.",
    desc: "M3 Max chip with up to 40-core GPU. Up to 128GB unified memory. ProMotion Liquid Retina XDR display. Up to 22 hours battery life.",
    price: 3499,
    color: "#8B5CF6",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&q=90",
    features: ["M3 Max Chip", "128GB RAM", "22hr Battery", "Liquid XDR"],
    category: "laptops",
  },
  {
    id: 103,
    name: "Sony WH-1000XM5",
    tag: "Audio",
    badge: "Best Seller",
    tagline: "Industry-leading noise cancelling.",
    desc: "Two processors. Eight microphones. Auto NC Optimizer. Crystal clear hands-free calling. Up to 30 hours playtime. Multipoint connection.",
    price: 349,
    color: "#EC4899",
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=700&q=90",
    features: ["30hr Battery", "ANC", "8 Microphones", "Multipoint"],
    category: "audio",
  },
  {
    id: 104,
    name: "Apple Watch Ultra 2",
    tag: "Wearable",
    badge: "Ultra",
    tagline: "Built for the most extreme athletes.",
    desc: "Titanium case. 3000 nit display. Precision dual-frequency GPS. Emergency siren. 60 hours battery life. Depth rated to 100m.",
    price: 799,
    color: "#10B981",
    img: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=700&q=90",
    features: ["3000 nit Display", "60hr Battery", "100m Water", "Siren"],
    category: "wearables",
  },
];

export default function Hero({ onShop, dark }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const p = heroProducts[current];

  const goTo = (i, auto = false) => {
    if (i === current || animating) return;
    setAnimating(true);
    setPrev(current);
    setTimeout(() => {
      setCurrent(i);
      setPrev(null);
      setAnimating(false);
    }, 420);
  };

  useEffect(() => {
    const t = setInterval(
      () => goTo((current + 1) % heroProducts.length, true),
      5500,
    );
    return () => clearInterval(t);
  }, [current, animating]);

  const handleAddToCart = () => {
    addToCart({
      id: p.id,
      title: p.name,
      price: p.price,
      thumbnail: p.img,
      category: p.tag,
    });
    addToast({
      message: `${p.name} added to cart!`,
      type: "success",
      img: p.img,
    });
  };

  const textColor = dark ? "#F5F5F5" : "#0A0A0A";
  const mutedColor = dark ? "rgba(245,245,245,0.55)" : "rgba(10,10,10,0.5)";

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "64px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${p.color}18 0%, transparent 65%)`,
            filter: "blur(60px)",
            transition: "all 1s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "-5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${p.color}10 0%, transparent 65%)`,
            filter: "blur(80px)",
            transition: "all 1s ease",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"} 1px, transparent 1px), linear-gradient(90deg, ${dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            opacity: 0.6,
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateX(-24px)" : "none",
            transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "100px",
              background: dark
                ? "rgba(99,102,241,0.12)"
                : "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.25)",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: p.color,
                boxShadow: `0 0 8px ${p.color}`,
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#6366F1",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {p.tag} · {p.badge}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(2.2rem,4.2vw,3.8rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: textColor,
              marginBottom: "16px",
            }}
          >
            {p.tagline}
          </h1>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(1.4rem,2.5vw,2rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
              background: `linear-gradient(135deg, ${p.color}, #8B5CF6)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {p.name}
          </h2>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: mutedColor,
              maxWidth: "440px",
              marginBottom: "32px",
            }}
          >
            {p.desc}
          </p>

          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "36px",
            }}
          >
            {p.features.map((f) => (
              <div
                key={f}
                style={{
                  padding: "6px 14px",
                  borderRadius: "100px",
                  background: dark
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.04)",
                  border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
                  fontSize: "12px",
                  fontWeight: 500,
                  color: mutedColor,
                }}
              >
                {f}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button
              onClick={handleAddToCart}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "12px",
                background: `linear-gradient(135deg, ${p.color}, #8B5CF6)`,
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "'Inter',sans-serif",
                boxShadow: `0 8px 32px ${p.color}40`,
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = `0 14px 40px ${p.color}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = `0 8px 32px ${p.color}40`;
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
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Add to Cart — ${p.price}
            </button>
            <button
              onClick={onShop}
              style={{
                padding: "14px 28px",
                borderRadius: "12px",
                background: dark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.05)",
                border: `1px solid ${dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}`,
                color: textColor,
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "'Inter',sans-serif",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = dark
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = dark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.05)";
              }}
            >
              Explore All →
            </button>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              border: `1px solid ${p.color}25`,
              transition: "all 1s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "340px",
              height: "340px",
              borderRadius: "50%",
              border: `1px solid ${p.color}15`,
              transition: "all 1s ease",
            }}
          />

          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "480px",
              opacity: animating ? 0 : 1,
              transform: animating
                ? "scale(0.94) translateY(12px)"
                : "scale(1) translateY(0)",
              transition: "all 0.42s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <div
              style={{
                borderRadius: "28px",
                overflow: "hidden",
                background: dark
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(255,255,255,0.7)",
                backdropFilter: "blur(20px)",
                border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.8)"}`,
                boxShadow: dark
                  ? `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px ${p.color}15`
                  : `0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px ${p.color}10`,
                transition: "box-shadow 1s ease",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  background: dark
                    ? "rgba(255,255,255,0.02)"
                    : "rgba(0,0,0,0.02)",
                }}
              >
                <img
                  key={current}
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.04)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x450/1a1a2e/6366F1?text=${encodeURIComponent(p.name)}`;
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(to top, ${dark ? "rgba(10,10,10,0.5)" : "rgba(255,255,255,0.1)"} 0%, transparent 50%)`,
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    padding: "5px 12px",
                    borderRadius: "100px",
                    background: "rgba(10,10,10,0.75)",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${p.color}40`,
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: p.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {p.badge}
                  </span>
                </div>
              </div>

              <div
                style={{
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "#6366F1",
                      marginBottom: "3px",
                    }}
                  >
                    {p.tag}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: textColor,
                    }}
                  >
                    {p.name}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      fontSize: "10px",
                      color: mutedColor,
                      marginBottom: "2px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    From
                  </p>
                  <p
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: textColor,
                    }}
                  >
                    ${p.price}
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "-14px",
                right: "-14px",
                padding: "8px 14px",
                borderRadius: "12px",
                background: dark
                  ? "rgba(10,10,10,0.85)"
                  : "rgba(255,255,255,0.9)",
                backdropFilter: "blur(16px)",
                border: `1px solid ${p.color}30`,
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              }}
            >
              <p style={{ fontSize: "11px", fontWeight: 700, color: p.color }}>
                ✦ {p.features[0]}
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "70px",
                left: "-18px",
                padding: "8px 14px",
                borderRadius: "12px",
                background: dark
                  ? "rgba(10,10,10,0.85)"
                  : "rgba(255,255,255,0.9)",
                backdropFilter: "blur(16px)",
                border: `1px solid ${p.color}30`,
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              }}
            >
              <p style={{ fontSize: "11px", fontWeight: 700, color: p.color }}>
                ✦ {p.features[1]}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        {heroProducts.map((hp, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? "32px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background:
                i === current
                  ? p.color
                  : dark
                    ? "rgba(255,255,255,0.2)"
                    : "rgba(0,0,0,0.15)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.35s ease",
              boxShadow: i === current ? `0 0 12px ${p.color}80` : "none",
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "36px",
          right: "48px",
          fontSize: "11px",
          fontWeight: 600,
          color: mutedColor,
          letterSpacing: "0.08em",
        }}
      >
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(heroProducts.length).padStart(2, "0")}
      </div>

      <style>{`
        @media (max-width: 900px) {
          section#home > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            padding: 0 24px !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
