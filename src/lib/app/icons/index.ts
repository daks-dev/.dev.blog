import type { IconsBandle, IconsKeys as IK } from '@daks.dev/astro.sdk/astro/icon';

const bundle = {
  code: {
    body: '<path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z" />',
    box: 256,
    size: 44
  },
  'code-block': {
    body: '<path d="M58.34,101.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,69.66,37.66L43.31,64,69.66,90.34a8,8,0,0,1-11.32,11.32Zm40,0a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0,0-11.32l-32-32A8,8,0,0,0,98.34,37.66L124.69,64,98.34,90.34A8,8,0,0,0,98.34,101.66ZM200,40H176a8,8,0,0,0,0,16h24V200H56V136a8,8,0,0,0-16,0v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Z" />',
    box: 256,
    size: 44
  },
  'package': {
    body: '<path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z" />',
    box: 256,
    size: 44
  },
  'terminal-window': {
    body: '<path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z" />',
    box: 256,
    size: 44
  },
  trophy: {
    body: '<path d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z" />',
    box: 256,
    size: 44
  }
} satisfies IconsBandle;;

export type IconsKeys = keyof typeof bundle | IK;
export default bundle;