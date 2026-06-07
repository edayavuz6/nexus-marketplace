import { useState } from "react";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Designer",
    text: "Nexus has completely changed how I shop for tech. The curation is incredible and shipping is always fast.",
    avatar: "SK",
    rating: 5,
  },
  {
    name: "Marcus L.",
    role: "Engineer",
    text: "Best e-commerce experience I've had. The product pages are so well done. Will definitely be back!",
    avatar: "ML",
    rating: 5,
  },
  {
    name: "Priya R.",
    role: "Product Manager",
    text: "The cart and checkout flow is seamless. Found everything I needed for my home office setup.",
    avatar: "PR",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Photographer",
    text: "Outstanding product quality and customer service is second to none. Highly recommend Nexus.",
    avatar: "JT",
    rating: 5,
  },
];

const brands = [
  "Apple",
  "Samsung",
  "Sony",
  "Bose",
  "Google",
  "Microsoft",
  "Dell",
  "LG",
];

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.",
  },
  {
    q: "What is your return policy?",
    a: "We offer free 30-day returns on all products. Simply initiate a return from your account page.",
  },
  {
    q: "Do you offer warranty?",
    a: "All electronics come with a minimum 1-year manufacturer warranty. Extended warranties available at checkout.",
  },
  {
    q: "Is my payment information secure?",
    a: "Yes, we use industry-standard SSL encryption. We never store your payment details on our servers.",
  },
];

export function BrandPartners({ dark }) {
  const textColor = dark ? "#F5F5F5" : "#0A0A0A";
  const mutedColor = dark ? "rgba(245,245,245,0.3)" : "rgba(10,10,10,0.3)";
  const cardBg = dark ? "#111111" : "#ffffff";
  const borderC = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <section
      style={{
        padding: "48px 0",
        background: dark ? "#111111" : "#ffffff",
        borderTop: `1px solid ${borderC}`,
        borderBottom: `1px solid ${borderC}`,
        transition: "background 0.4s",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "10px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: mutedColor,
            marginBottom: "24px",
          }}
        >
          Trusted Partners
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "8px 32px",
            alignItems: "center",
          }}
        >
          {brands.map((brand) => (
            <div
              key={brand}
              style={{
                padding: "8px 18px",
                borderRadius: "10px",
                border: `1px solid ${borderC}`,
                background: dark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(0,0,0,0.02)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                e.currentTarget.style.background = "rgba(99,102,241,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = borderC;
                e.currentTarget.style.background = dark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(0,0,0,0.02)";
              }}
            >
              <span
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: mutedColor,
                }}
              >
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials({ dark }) {
  const textColor = dark ? "#F5F5F5" : "#0A0A0A";
  const mutedColor = dark ? "rgba(245,245,245,0.5)" : "rgba(10,10,10,0.5)";
  const cardBg = dark ? "#1A1A1A" : "#f5f5f5";
  const borderC = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <section
      style={{
        padding: "80px 0",
        background: dark ? "#111111" : "#ffffff",
        borderTop: `1px solid ${borderC}`,
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
            Reviews
          </p>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(1.8rem,4vw,3rem)",
              fontWeight: 800,
              color: textColor,
              letterSpacing: "-0.03em",
            }}
          >
            What Our Customers Say
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
            gap: "20px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                padding: "24px",
                borderRadius: "16px",
                background: cardBg,
                border: `1px solid ${borderC}`,
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div style={{ display: "flex", gap: "2px" }}>
                {Array.from({ length: t.rating }, (_, j) => (
                  <svg
                    key={j}
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="#F59E0B"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: mutedColor,
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "auto",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: textColor,
                    }}
                  >
                    {t.name}
                  </p>
                  <p style={{ fontSize: "11px", color: mutedColor }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Newsletter({ dark }) {
  const textColor = dark ? "#F5F5F5" : "#0A0A0A";
  const mutedColor = dark ? "rgba(245,245,245,0.45)" : "rgba(10,10,10,0.45)";
  const borderC = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <section
      style={{
        padding: "80px 48px",
        background: dark ? "#0A0A0A" : "#F8F8F8",
        borderTop: `1px solid ${borderC}`,
        transition: "background 0.4s",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: "22px",
          }}
        >
          ✉️
        </div>
        <h2
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
            fontWeight: 800,
            color: textColor,
            letterSpacing: "-0.03em",
            marginBottom: "12px",
          }}
        >
          Stay in the Loop
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: mutedColor,
            fontWeight: 300,
            lineHeight: 1.7,
            marginBottom: "32px",
          }}
        >
          Get early access to new arrivals, exclusive deals, and the latest tech
          news delivered to your inbox.
        </p>
        <div
          style={{
            display: "flex",
            gap: "8px",
            maxWidth: "440px",
            margin: "0 auto",
          }}
        >
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              flex: 1,
              padding: "13px 16px",
              borderRadius: "12px",
              background: dark ? "#111111" : "#ffffff",
              border: `1.5px solid ${borderC}`,
              color: textColor,
              fontSize: "14px",
              fontFamily: "'Inter',sans-serif",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#6366F1")}
            onBlur={(e) => (e.target.style.borderColor = borderC)}
          />
          <button
            style={{
              padding: "13px 20px",
              borderRadius: "12px",
              background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
              fontFamily: "'Inter',sans-serif",
              whiteSpace: "nowrap",
              boxShadow: "0 8px 24px rgba(99,102,241,0.35)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Subscribe
          </button>
        </div>
        <p style={{ fontSize: "11px", color: mutedColor, marginTop: "12px" }}>
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

export function FAQ({ dark }) {
  const [open, setOpen] = useState(null);
  const textColor = dark ? "#F5F5F5" : "#0A0A0A";
  const mutedColor = dark ? "rgba(245,245,245,0.5)" : "rgba(10,10,10,0.5)";
  const cardBg = dark ? "#1A1A1A" : "#f5f5f5";
  const borderC = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <section
      style={{
        padding: "80px 0",
        background: dark ? "#111111" : "#ffffff",
        borderTop: `1px solid ${borderC}`,
        transition: "background 0.4s",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 48px" }}>
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
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(1.8rem,4vw,2.8rem)",
              fontWeight: 800,
              color: textColor,
              letterSpacing: "-0.03em",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderRadius: "14px",
                background: cardBg,
                border: `1px solid ${open === i ? "rgba(99,102,241,0.3)" : borderC}`,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "'Inter',sans-serif",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: textColor,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    fontSize: "20px",
                    color: mutedColor,
                    transform: open === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.2s",
                    flexShrink: 0,
                    marginLeft: "16px",
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div style={{ padding: "0 20px 18px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      color: mutedColor,
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
