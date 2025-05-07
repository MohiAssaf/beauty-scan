module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        text: "#1E293B",
        primary: "#3B82F6",
        secondary: "#60A5FA",
        accent: "#2563EB",
        "neutral-100": "#F1F5F9",
        "neutral-200": "#E2E8F0",
        "neutral-300": "#CBD5E1",
        "neutral-500": "#64748B",
        error: "#EF4444",
        success: "#10B981",

        "background-dark": "#0A1128",
        "text-dark": "#E2E8F0",
        "primary-dark": "#4F9BFF",
        "secondary-dark": "#3B82F6",
        "accent-dark": "#93C5FD",
        "neutral-100-dark": "#1A2747",
        "neutral-200-dark": "#243356",
        "neutral-300-dark": "#3A4A76",
        "neutral-500-dark": "#94A3C8",
        "error-dark": "#FF6B6B",
        "success-dark": "#6EE7B7",

        "card-dark": "#16213D",
        "header-dark": "#111C3A",
      },
    },
  },
  plugins: [],
};
