/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy:      '#16284A',
        navydeep:  '#0E1A30',
        paper:     '#F7F4EC',
        ink:       '#1C1C1E',
        pcyan:     '#00AEEF',
        pmagenta:  '#EC1C8D',
        pyellow:   '#FFC700',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        body:    ['"Work Sans"', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
