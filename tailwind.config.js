/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: [
    "bg-indigo-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-cyan-500",
    "bg-red-500",
    "bg-yellow-500",
    "hover:bg-indigo-400",
    "hover:bg-blue-400",
    "hover:bg-green-400",
    "hover:bg-cyan-400",
    "hover:bg-red-400",
    "hover:bg-yellow-400"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
