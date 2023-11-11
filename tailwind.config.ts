import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import { common, fontSans, screens } from '@daks.dev/astro.sdk/tailwind';

export const breakpoint = 736;

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,md,mdx,astro,svelte}', ...common.content],

  presets: [common],

  theme: {
    screens: screens(breakpoint),
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
