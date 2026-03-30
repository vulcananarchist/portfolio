import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0d',
        bg2: '#141414',
        bg3: '#1c1c1c',
        tx: '#f0f0f0',
        dim: 'rgba(240,240,240,0.62)',
        muted: '#606060',
        acc: '#c5cad4',
      },
      fontFamily: {
        clash: ['Clash Display', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
