/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": `radial-gradient(circle closest-side, currentColor 90%, #0000 0% 50%),
          radial-gradient(circle closest-side, currentColor 90%, #0000 50% 50%),
          radial-gradient(circle closest-side, currentColor 90%, #0000 100% 50%)
          `,
      },
      backgroundSize: {
        "loader-size": "calc(100% / 3) 12px",
      },
      keyframes: {
        loader: {
          "0%": {
            backgroundPosition: "0% 50%, 50% 50%, 100% 50%",
          },
          "20%": {
            backgroundPosition: "0% 0%, 50% 50%, 100% 50%",
          },
          "40%": {
            backgroundPosition: "0% 100%, 50% 0%, 100% 50%",
          },
          "60%": {
            backgroundPosition: "0% 50%, 50% 100%, 100% 0%",
          },
          "80%": {
            backgroundPosition: "0% 50%, 50% 50%, 100% 100%",
          },
          "100%": { backgroundPosition: "0% 50%, 50% 50%, 100% 50%" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        logoColorChange: {
          "0%": { background: "#ff0000" },
          "15%": { background: "#ff7f00" },
          "30%": { background: "#0000ff" },
          "40%": { background: "#00ff00" },
          "60%": { background: "#8a2be2" },
          "80%": { background: "#ffff00" },
          "100%": { background: "#4b0082" },
        },
        logoCircleContract: {
          "0%": { width: "1rem" },
          "50%": { width: "1.8rem" },
          "100%": { width: "1rem" },
        },
        blink: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.5 },
          "75%": { opacity: 1 },
          "100%": { opacity: 0.5 },
        },
        highlight: {
          "0%": { opacity: 0.7 },
          "50%": { opacity: 1, color: "white" },
          "100%": { opacity: 0.7 },
        },
        enlarge: {
          "0%": { fontSize: "2rem" },
          "50%": { fontSize: "2.5rem" },
          "100%": { fontSize: "2rem" },
        },
      },
      animation: {
        loader: "loader 1s linear infinite",
        spin: "spin 20s linear infinite",
        logoColorChange: "logoColorChange 14s linear infinite",
        logoCircleContract: "logoCircleContract 2s linear infinite",
        blink: "blink 0.5s linear",
        highlight: "highlight 0.6s linear",
        enlarge: "enlarge 0.4s linear",
      },
      margin: {
        "heading-mb": "2rem",
      },
      fontFamily: {
        codystar: ["Codystar", "sans-serif"],
      },
      fontSize: {
        "heading-h1": "4rem",
        "heading-h2": "3.6rem",
        "heading-h3": "2.4rem",
        "heading-h4": "2.2rem",
      },
      colors: {
        dark: "#495057",
        medium: "#ced4da",
        light: "#f1f3f5",
        theme: "#1098ad",
        black: "#1A1A1A",
        progress_bar_color: "#adadad",
        progress_bar_bg: "#414040",
        gold: "goldenrod",
        light_red: "#fa5732",
        medium_red: "#ad0505",
        dark_red: "#8a0404",
        purple: "#b536a8",
      },
    },
  },
  plugins: [],
};
