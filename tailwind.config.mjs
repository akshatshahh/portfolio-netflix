/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#E50914',
          'red-hover': '#F40612',
          dark: '#141414',
          'dark-lighter': '#181818',
          'dark-card': '#2F2F2F',
          gray: '#808080',
          'light-gray': '#B3B3B3',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Onest Variable"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
