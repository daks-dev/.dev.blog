// import { sequence } from 'astro:middleware';
import { stores } from '@daks.dev/astro.sdk/astro/middleware';

export const onRequest = stores();
