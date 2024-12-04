/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'BG1': "url('/image/bg-1.webp')",
        'BG2': "url('/image/bg-2.webp')",
        'BG3': "url('/image/bg-3.webp')",
        'BG4': "url('/image/bg-4.webp')",
        'BG5': "url('/image/bg-5.webp')",
        'BG6': "url('/image/couctom-construction-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
