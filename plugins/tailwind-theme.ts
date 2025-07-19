// src/plugins/tailwind-theme.ts
import plugin from "tailwindcss/plugin";

export const clindentTheme = plugin(({ addBase, addComponents }) => {
  addBase({
    ":root": {
      "--background": "#f9fafb",
      "--foreground": "#1f2937",
      "--accent": "#2563eb",
      "--muted": "#6b7280",
      "--card-bg": "#ffffff",
      "--card-border": "#e5e7eb",
      "--font-poppins": "'Poppins', sans-serif",
    },
    "@media (prefers-color-scheme: dark)": {
      ":root": {
        "--background": "#0f172a",
        "--foreground": "#f1f5f9",
        "--accent": "#3b82f6",
        "--muted": "#9ca3af",
        "--card-bg": "#1e293b",
        "--card-border": "#334155",
      },
    },
  });

  addComponents({
    ".card": {
      backgroundColor: "var(--card-bg)",
      color: "var(--foreground)",
      borderColor: "var(--card-border)",
      borderRadius: "0.75rem",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      padding: "1.5rem",
      borderWidth: "1px",
    },
  });
});
