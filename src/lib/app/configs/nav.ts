import type { NavItem as NI, NavSite as NS } from '@daks.dev/astro.sdk/astro/navigate';
import type { IconKeys } from '$app/icons';

export interface NavItem extends NI {
  icon?: IconKeys;
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
      {
        prefetch: true,
        href: '/astro',
        label: 'Astro'
      },
      {
        prefetch: true,
        href: '/about',
        label: 'About'
      },
      {
        prefetch: true,
        href: '/blog',
        label: 'Blog'
      },
      {
        href: '/',
        label: 'Dropdown',
        icon: 'package',
        size: '1.125em',
        items: [
          {
            href: '/astro',
            label: 'Astro'
          },
          {
            href: '/about',
            label: 'About'
          },
          {
            href: '/blog',
            label: 'Blog'
          }
        ]
      }
    ]
  }
} satisfies NavSite;
