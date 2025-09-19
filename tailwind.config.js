/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['sora', 'sans-serif'],
      },
      colors: {
        background: '#00102A',
        secondary: '#FF518C',
        count: '#FF8AB2',
        error: '#FF0000',
      },
      text: {
        sm: '16px',
        base: '18px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '48px',
        '5xl': '56px',
        '6xl': '64px',
      },
    },
  },
  plugins: [],
};
