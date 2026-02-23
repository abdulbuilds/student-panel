import { useState, useEffect } from "react";

const styles = {
  root: (dark) => ({
    minHeight: "100vh",
    background: dark
      ? "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)"
      : "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #fce4ec 100%)",
    fontFamily: "'Georgia', serif",
    transition: "all 0.4s ease",
    padding: "2rem",
    boxSizing: "border-box",
  }),
  container: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  title: (dark) => ({
    fontSize: "2.6rem",
    fontWeight: "bold",
    letterSpacing: "-1px",
    color: dark ? "#e2e8f0" : "#1a202c",
    margin: 0,
    textAlign: "center",
  }),
  subtitle: (dark) => ({
    fontSize: "1rem",
    color: dark ? "#94a3b8" : "#64748b",
    marginTop: "0.4rem",
    fontStyle: "italic",
    textAlign: "center",
  }),
  card: (dark) => ({
    background: dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.75)",
    backdropFilter: "blur(12px)",
    border: dark
      ? "1px solid rgba(255,255,255,0.1)"
      : "1px solid rgba(0,0,0,0.08)",
    borderRadius: "16px",
    padding: "1.8rem 2rem",
    marginBottom: "1.5rem",
    boxShadow: dark
      ? "0 8px 32px rgba(0,0,0,0.4)"
      : "0 8px 32px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  }),
  cardTitle: (dark) => ({
    fontSize: "0.75rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: dark ? "#64748b" : "#94a3b8",
    marginBottom: "0.8rem",
  }),
  statusText: (loggedIn, dark) => ({
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: loggedIn ? "#22c55e" : dark ? "#f87171" : "#ef4444",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  }),
  dot: (loggedIn) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: loggedIn ? "#22c55e" : "#ef4444",
    boxShadow: loggedIn ? "0 0 8px #22c55e" : "0 0 8px #ef4444",
  }),
  btn: (variant, dark) => {
    const variants = {
      login: { bg: "#22c55e", color: "#fff" },
      logout: { bg: "#ef4444", color: "#fff" },
      click: { bg: "#6366f1", color: "#fff" },
      theme: { bg: dark ? "#f59e0b" : "#1e293b", color: dark ? "#1e293b" : "#f8fafc" },
    };
    const v = variants[variant] || variants.click;
    return {
      background: v.bg,
      color: v.color,
      border: "none",
      borderRadius: "10px",
      padding: "0.6rem 1.4rem",
      fontFamily: "'Georgia', serif",
      fontSize: "0.95rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "transform 0.1s, opacity 0.2s",
    };
  },
  countDisplay: (dark) => ({
    fontSize: "3rem",
    fontWeight: "bold",
    color: dark ? "#a78bfa" : "#6366f1",
    lineHeight: 1,
    marginBottom: "0.8rem",
    fontVariantNumeric: "tabular-nums",
  }),
  input: (dark) => ({
    width: "100%",
    padding: "0.7rem 1rem",
    borderRadius: "10px",
    border: dark
      ? "1px solid rgba(255,255,255,0.15)"
      : "1px solid rgba(0,0,0,0.15)",
    background: dark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.9)",
    color: dark ? "#e2e8f0" : "#1a202c",
    fontFamily: "'Georgia', serif",
    fontSize: "1rem",
    outline: "none",
    marginBottom: "0.8rem",
    boxSizing: "border-box",
  }),
  feedbackDisplay: (dark) => ({
    padding: "0.7rem 1rem",
    borderRadius: "10px",
    background: dark ? "rgba(99,102,241,0.15)" : "rgba(99,102,241,0.08)",
    border: dark
      ? "1px solid rgba(99,102,241,0.3)"
      : "1px solid rgba(99,102,241,0.2)",
    color: dark ? "#a78bfa" : "#4f46e5",
    fontStyle: "italic",
    minHeight: "2.5rem",
    fontSize: "0.95rem",
  }),
  label: (dark) => ({
    fontSize: "1rem",
    color: dark ? "#cbd5e1" : "#475569",
    marginBottom: "0.3rem",
  }),
};

export default function StudentInteractionPanel() {
  // 1. Login Status - useState
  const [loggedIn, setLoggedIn] = useState(false);

  // 2. Click Counter - useState
  const [count, setCount] = useState(0);

  // 3. Theme Switcher - useState
  const [dark, setDark] = useState(false);

  // 5. Feedback Input - useState
  const [feedback, setFeedback] = useState("");

  // 4. Component Load Message - useEffect (runs only once)
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <div style={styles.root(dark)}>
      <div style={styles.container}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={styles.title(dark)}>Student Interaction Panel</h1>
          <p style={styles.subtitle(dark)}>
            React Hooks Assignment — Functional Components Only
          </p>
        </div>

        {/* Theme Toggle Button */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
          <button
            style={styles.btn("theme", dark)}
            onClick={() => setDark((d) => !d)}
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* 1. Login Status Section */}
        <div style={styles.card(dark)}>
          <div style={styles.cardTitle(dark)}>01 — Login Status</div>
          <div style={styles.statusText(loggedIn, dark)}>
            <span style={styles.dot(loggedIn)} />
            {loggedIn ? "User Logged In" : "User Logged Out"}
          </div>
          <button
            style={styles.btn(loggedIn ? "logout" : "login", dark)}
            onClick={() => setLoggedIn((v) => !v)}
          >
            {loggedIn ? "Logout" : "Login"}
          </button>
        </div>

        {/* 2. Click Counter */}
        <div style={styles.card(dark)}>
          <div style={styles.cardTitle(dark)}>02 — Click Counter</div>
          <div style={styles.countDisplay(dark)}>{count}</div>
          <p style={styles.label(dark)}>Total button clicks</p>
          <button
            style={styles.btn("click", dark)}
            onClick={() => setCount((c) => c + 1)}
          >
            Click Me
          </button>
        </div>

        {/* 3. Theme Switcher Info */}
        <div style={styles.card(dark)}>
          <div style={styles.cardTitle(dark)}>03 — Theme Switcher</div>
          <p style={styles.label(dark)}>
            Currently in <strong>{dark ? "Dark" : "Light"}</strong> mode.
            Use the button at the top-right to toggle.
          </p>
          <div
            style={{
              display: "inline-block",
              padding: "0.4rem 1rem",
              borderRadius: "8px",
              background: dark ? "#1e293b" : "#f1f5f9",
              color: dark ? "#f8fafc" : "#1e293b",
              border: dark ? "1px solid #334155" : "1px solid #cbd5e1",
              fontSize: "0.85rem",
              fontWeight: "bold",
            }}
          >
            {dark ? "🌑 Dark Theme Active" : "🌕 Light Theme Active"}
          </div>
        </div>

        {/* 4. useEffect / Component Load */}
        <div style={styles.card(dark)}>
          <div style={styles.cardTitle(dark)}>04 — Component Load Message</div>
          <p style={styles.label(dark)}>
            On page load,{" "}
            <code
              style={{
                background: dark ? "#1e293b" : "#e2e8f0",
                padding: "0.1rem 0.4rem",
                borderRadius: "5px",
              }}
            >
              useEffect
            </code>{" "}
            ran once and logged to console:
          </p>
          <div
            style={{
              padding: "0.6rem 1rem",
              borderRadius: "8px",
              background: dark ? "#0f172a" : "#1e293b",
              color: "#4ade80",
              fontFamily: "monospace",
              fontSize: "0.95rem",
            }}
          >
            &gt; Component Loaded
          </div>
        </div>

        {/* 5. Feedback Input */}
        <div style={styles.card(dark)}>
          <div style={styles.cardTitle(dark)}>05 — Live Feedback Input</div>
          <p style={styles.label(dark)}>Type your feedback below:</p>
          <input
            style={styles.input(dark)}
            type="text"
            placeholder="Write something..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <div style={styles.feedbackDisplay(dark)}>
            {feedback ? `💬 ${feedback}` : "Your feedback will appear here..."}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            color: dark ? "#475569" : "#94a3b8",
            fontSize: "0.8rem",
            marginTop: "1rem",
          }}
        >
          Built with React Hooks — useState & useEffect
        </div>
      </div>
    </div>
  );
}
