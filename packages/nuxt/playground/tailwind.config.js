module.exports = {
  content: [
    // './index.html',
    // './pages/**/*.{vue,js,ts,jsx,tsx}',
    "app.vue",
    "./node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  presets: [require("@gits-id/tailwind-config/preset")],
};
