/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: '#050816',
          'bg-secondary': '#0A1024',
          card: '#0F162B',
          'card-hover': '#16203B',
          border: '#1E293B',
          text: '#F8FAFC',
          muted: '#94A3B8',
          glass: 'rgba(255, 255, 255, 0.05)',
          'aurora-1': '#4F46E5', // Indigo
          'aurora-2': '#9333EA', // Purple
          'aurora-3': '#06B6D4', // Cyan
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'theme-shadow': '0 4px 30px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
