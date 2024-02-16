/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      desktop: { max: "1342px" },
      // => @media (max-width: 1342px) { ... }
      ipadPro: { max: "834px" },
      // => @media (max-width: 834px) { ... }
      ipad: { max: "768px" },
      // => @media (max-width: 768px) { ... }
      mobile: { max: "375px" },
      // => @media (max-width: 375px) { ... }
    },
    colors: {
      white: "#ffffff",
      gray: "#535353",
      primary: "#685dc5",
      secondary: "#4fa16c",
    },
  },
  plugins: [],
};
