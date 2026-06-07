export default function Footer({ dark }) {
  const year = new Date().getFullYear();
  const textColor = dark ? "#F5F5F5" : "#0A0A0A";
  const mutedColor = dark ? "rgba(245,245,245,0.35)" : "rgba(10,10,10,0.35)";
  const borderC = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const cardBg = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";

  const cols = [
    {
      title: "Company",
      links: ["About Us", "Press", "Careers", "Blog", "Contact"],
    },
    {
      title: "Products",
      links: ["Smartphones", "Laptops", "Audio", "Wearables", "Gaming"],
    },
    {
      title: "Support",
      links: ["Help Center", "Shipping", "Returns", "Track Order", "Warranty"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms", "Cookies", "Accessibility"],
    },
  ];

  return (
    <footer
      style={{
        background: dark ? "#0A0A0A" : "#F8F8F8",
        borderTop: `1px solid ${borderC}`,
        padding: "64px 48px 32px",
        transition: "background 0.4s",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(4,1fr)",
            gap: "40px",
            marginBottom: "56px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
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
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: textColor,
                }}
              >
                NEXUS
              </span>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: mutedColor,
                lineHeight: 1.7,
                maxWidth: "220px",
                marginBottom: "20px",
              }}
            >
              The premium technology marketplace. Curated products, unmatched
              experience.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {["𝕏", "in", "f", "▶"].map((s) => (
                <button
                  key={s}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: cardBg,
                    border: `1px solid ${borderC}`,
                    cursor: "pointer",
                    color: mutedColor,
                    fontSize: "13px",
                    fontWeight: 700,
                    transition: "all 0.2s",
                    fontFamily: "'Inter',sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(99,102,241,0.12)";
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                    e.currentTarget.style.color = "#6366F1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = cardBg;
                    e.currentTarget.style.borderColor = borderC;
                    e.currentTarget.style.color = mutedColor;
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: dark ? "rgba(245,245,245,0.5)" : "rgba(10,10,10,0.5)",
                  marginBottom: "16px",
                }}
              >
                {col.title}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontSize: "13px",
                      color: mutedColor,
                      transition: "color 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = textColor)}
                    onMouseLeave={(e) => (e.target.style.color = mutedColor)}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: `1px solid ${borderC}`,
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: mutedColor }}>
            © {year} Nexus Technologies, Inc. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {["🔒 SSL Secured", "💳 Secure Payments", "🚀 Fast Shipping"].map(
              (t) => (
                <span key={t} style={{ fontSize: "11px", color: mutedColor }}>
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width:900px) { footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width:500px) { footer > div > div:first-child { grid-template-columns: 1fr !important; } footer { padding: 48px 24px 24px !important; } }
      `}</style>
    </footer>
  );
}
