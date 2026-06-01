export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans:  ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'monospace'],
      },
      colors: {
        paper:       'var(--paper)',
        'paper-deep':'var(--paper-deep)',
        ink:         'var(--ink)',
        'ink-soft':  'var(--ink-soft)',
        'ink-faint': 'var(--ink-faint)',
        accent:      'var(--accent)',
        'accent-deep':'var(--accent-deep)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
