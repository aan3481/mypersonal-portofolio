/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        card: "#1E293B",
        primary: "#38BDF8",
        secondary: "#34D399",
        textMain: "#F8FAFC",
        textMuted: "#94A3B8",
      },
    },
  },
  plugins: [],
};
