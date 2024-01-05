import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'scale-pulse': 'scale-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'scale-pulse': {
          '75%, 100%': {opacity: '0%', transform: 'scale(3.5)'},
        },
      },
    },
    debugScreens: {
      style: {
        backgroundColor: '#C0FFEE',
        color: 'black',
        position: 'fixed',
        bottom: '10px',
        left: '10px',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
export default config
