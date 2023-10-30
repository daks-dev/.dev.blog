import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import { common, fontSans } from '@daks.dev/astro.sdk/tailwind';

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,md,mdx,astro,svelte,vue}', ...common.content],

  presets: [common],

  theme: {
    extend: {
      fontFamily: fontSans(),
      backgroundImage: {
        waiting: 'url(@daks.dev/astro.sdk/icons/spinners/clock.svg)',
        loading: 'url(@daks.dev/astro.sdk/icons/spinners/90-ring-bg.svg)'
      }
    }
  },

  plugins: [typography]
} satisfies Config;
