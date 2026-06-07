import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ message, type = "success", img }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, img }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      3500,
    );
  }, []);

  const remove = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          pointerEvents: "none",
        }}
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "14px",
              minWidth: "280px",
              maxWidth: "340px",
              background: "rgba(20,20,28,0.95)",
              backdropFilter: "blur(20px)",
              border: `1px solid ${t.type === "success" ? "rgba(99,102,241,0.4)" : "rgba(239,68,68,0.4)"}`,
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              pointerEvents: "all",
              animation: "toastIn 0.35s cubic-bezier(.34,1.56,.64,1) both",
            }}
          >
            {t.img && (
              <img
                src={t.img}
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  flexShrink: 0,
                }}
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
            {!t.img && (
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background:
                    t.type === "success"
                      ? "linear-gradient(135deg,#6366F1,#8B5CF6)"
                      : "#EF4444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "16px",
                }}
              >
                {t.type === "success" ? "✓" : "✕"}
              </div>
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#F5F5F5",
                  lineHeight: 1.3,
                }}
              >
                {t.message}
              </p>
            </div>
            <button
              onClick={() => remove(t.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.3)",
                fontSize: "18px",
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes toastIn {
          from { opacity: 0; transform: translateX(40px) scale(0.9); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
