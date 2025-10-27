/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-periwinkle': '#afabfd',
        'secondary-teal': '#88d4cb',
        'accent-yellow': '#ffbd59',
        'accent-pink': '#ff9aa2',
        'neutral-bg': '#f7f4f1',
        'neutral-white': '#FFFFFF',
        'text-charcoal': '#424040',
        'text-light': '#6c757d',
        'border-subtle': '#e9ecef',
      }
    }
  },
  plugins: []
}