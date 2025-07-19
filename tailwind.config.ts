import { type Config } from "tailwindcss";
import { clindentTheme } from "./plugins/tailwind-theme";
import * as twAnimate from "tw-animate-css"; // ✅ importação correta

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        card: {
          bg: "var(--card-bg)",
          border: "var(--card-border)",
        },
      },
    },
  },
  plugins: [clindentTheme, twAnimate.default ?? twAnimate], // ✅ tudo certo aqui agora
};

export default config;
