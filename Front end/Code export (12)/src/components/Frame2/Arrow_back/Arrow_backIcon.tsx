import { memo, SVGProps } from 'react';

const Arrow_backIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z' fill='#1D1B20' />
  </svg>
);

const Memo = memo(Arrow_backIcon);
export { Memo as Arrow_backIcon };