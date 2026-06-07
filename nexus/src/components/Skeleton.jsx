export function ProductSkeleton() {
  return (
    <div
      style={{
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <div className="skeleton" style={{ height: "220px", borderRadius: 0 }} />
      <div
        style={{
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div className="skeleton" style={{ height: "10px", width: "60px" }} />
        <div className="skeleton" style={{ height: "14px", width: "80%" }} />
        <div className="skeleton" style={{ height: "14px", width: "60%" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="skeleton" style={{ height: "20px", width: "60px" }} />
          <div
            className="skeleton"
            style={{ height: "32px", width: "70px", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "64px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            className="skeleton"
            style={{ height: "24px", width: "140px", borderRadius: "100px" }}
          />
          <div className="skeleton" style={{ height: "48px", width: "90%" }} />
          <div className="skeleton" style={{ height: "36px", width: "70%" }} />
          <div className="skeleton" style={{ height: "80px", width: "100%" }} />
          <div style={{ display: "flex", gap: "12px" }}>
            <div
              className="skeleton"
              style={{ height: "48px", width: "180px", borderRadius: "12px" }}
            />
            <div
              className="skeleton"
              style={{ height: "48px", width: "120px", borderRadius: "12px" }}
            />
          </div>
        </div>
        <div
          className="skeleton"
          style={{ aspectRatio: "1", borderRadius: "24px" }}
        />
      </div>
    </div>
  );
}
