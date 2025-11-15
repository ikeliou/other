/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        accent: '#F97316',
        bg: '#F8FAFC',
        surface: '#FFFFFF',
        'text-primary': '#0F172A',
        'text-muted': '#6B7280'
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px'
      }
    }
  },
  plugins: []
};
