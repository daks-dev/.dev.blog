import type { NavItem as NI, NavSite as NS } from '@daks.dev/astro.sdk/astro/navigate';
import type { IconsKeys } from '$app/icons';

export interface NavItem extends NI {
  icon?: IconsKeys;
  items?: NavItem[];
}

interface NavSite extends NS {
  navbar: {
    items: NavItem[];
  };
}

export default {
  navbar: {
    items: [
      /*
      {
        href: '/about',
        label: 'dropdown', // &equiv;',
        icon: 'globe',
        items: [
          {
            href: '/about',
            label: 'About'
          },
          {
            href: '/astro',
            label: 'Astro'
          },
          {
            href: '/blog',
            label: 'Blog'
          }
        ]
      },
      */
      {
        rel: 'prefetch',
        href: '/astro',
        label: 'Astro'
      },
      {
        rel: 'prefetch',
        href: '/about',
        label: 'About'
      },
      {
        rel: 'prefetch',
        href: '/blog',
        label: 'Blog'
      }
      /*
      {
        label: 'dropdown', // &equiv;',
        icon: 'trophy',
        items: [
          {
            href: '/about',
            label: 'About'
          },
          {
            href: '/astro',
            label: 'Astro'
          },
          {
            href: '/blog',
            label: 'Blog'
          }
        ]
      }
      */
    ]
  }
} satisfies NavSite;
