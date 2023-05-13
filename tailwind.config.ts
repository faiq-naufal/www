import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      'background-site-body': 'var(--background-site-body)',
      'background-site-rectangle': 'var(--background-site-rectangle)',
      'color-site-primary': 'var(--color-site-primary)',
      'color-site-subtle': 'var(--color-site-subtle)',
      'color-site-normal': 'var(--color-site-normal)',
      'color-site-emphasis': 'var(--color-site-emphasis)',
      'color-site-stress': 'var(--color-site-stress)',
    }
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true
  }
} satisfies Config
