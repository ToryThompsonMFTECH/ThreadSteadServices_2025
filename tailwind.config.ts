import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#BA0C2F', // UGA Red
          dark: '#8B0A23',
          light: '#D91E47',
        },
        accent: {
          DEFAULT: '#000000', // Black
          light: '#1a1a1a', // Very dark gray (almost black) for hover states
          dark: '#000000',
        },
        uga: {
          red: '#BA0C2F',
          black: '#000000',
        },
      },
    },
  },
  plugins: [],
}
export default config

