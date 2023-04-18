import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      'background-site-body': 'hsl(var(--background-site-body))',
      'background-site-rectangle': 'hsl(var(--background-site-rectangle))',
      'color-site-primary': 'hsl(var(--color-site-primary))',
      'color-site-subtle': 'hsl(var(--color-site-subtle))',
      'color-site-normal': 'hsl(var(--color-site-normal))',
      'color-site-emphasis': 'hsl(var(--color-site-emphasis))',
      'color-site-stress': 'hsl(var(--color-site-stress))',
    }
  },
  plugins: [],
} satisfies Config
