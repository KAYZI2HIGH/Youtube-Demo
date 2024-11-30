/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  darkMode: "selector",
  theme: {
    extend: {
      backgroundColor: {
        "body-gray": "hsl(0, 0%, 90%)",
        "body-blue": "hsl(222, 26%, 31%)",
        "screen-gray": "hsl(0, 0%, 93%)",
        "screen-blue": "hsl(224, 36%, 15%)",
        "keypad-gray": "hsl(0, 5%, 81%)",
        "keypad-blue": "hsl(223, 31%, 20%)",
        "key-cyan": "hsl(185, 42%, 37%)",
        "key-orange": "hsl(25, 99%, 27%)",
        "key-blue": "hsl(225, 21%, 49%)",
        "key-orange": "hsl(30, 25%, 89%)",
        base: "rgba(var(--bg-base))",
        secondary: "rgba(var(--bg-secondary))",
        logo: "rgba(var(--color-primary))",
      },
      textColor: {
        "text-blue": "rgba(var(--color-primary))",
        "text-color": "rgba(var(--text-color))",
        "text-muted": "rgba(var(--text-color-muted)",
      },
      fontSize: {
        body: "clamp(1rem, 0.4737rem + 3.807vw, 3rem)",
        heading: "clamp(2rem, 0.9474rem + 5.614vw, 6rem)",
      },
      gridTemplateColumns: {
        "auto-lg": "repeat(auto-fit, minmax(400px, 1fr))",
        videos: "repeat(auto-fit, minmax(250px, 1fr))",
        "auto-input": "repeat(auto-fit, minmax(350px, 1fr))",
      },
    },
  },
  plugins: [],
};
