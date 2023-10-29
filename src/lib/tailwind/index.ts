import { getTwMerge } from '@daks.dev/astro.sdk/tailwind/tailwind-merge';
import { twmerge as store } from '@daks.dev/astro.sdk/stores';

store.set({
  'bg-image': [{ bg: ['waiting', 'loading'] }]
});

const twMerge = getTwMerge();

export default (...x: ClassName[]) => twMerge(...x) || undefined;
