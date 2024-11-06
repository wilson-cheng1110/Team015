import { memo, SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.25 20L7.85 16.8C7.63333 16.7167 7.42917 16.6167 7.2375 16.5C7.04583 16.3833 6.85833 16.2583 6.675 16.125L3.7 17.375L0.95 12.625L3.525 10.675C3.50833 10.5583 3.5 10.4458 3.5 10.3375V9.6625C3.5 9.55417 3.50833 9.44167 3.525 9.325L0.95 7.375L3.7 2.625L6.675 3.875C6.85833 3.74167 7.05 3.61667 7.25 3.5C7.45 3.38333 7.65 3.28333 7.85 3.2L8.25 -1.19209e-07H13.75L14.15 3.2C14.3667 3.28333 14.5708 3.38333 14.7625 3.5C14.9542 3.61667 15.1417 3.74167 15.325 3.875L18.3 2.625L21.05 7.375L18.475 9.325C18.4917 9.44167 18.5 9.55417 18.5 9.6625V10.3375C18.5 10.4458 18.4833 10.5583 18.45 10.675L21.025 12.625L18.275 17.375L15.325 16.125C15.1417 16.2583 14.95 16.3833 14.75 16.5C14.55 16.6167 14.35 16.7167 14.15 16.8L13.75 20H8.25ZM10 18H11.975L12.325 15.35C12.8417 15.2167 13.3208 15.0208 13.7625 14.7625C14.2042 14.5042 14.6083 14.1917 14.975 13.825L17.45 14.85L18.425 13.15L16.275 11.525C16.3583 11.2917 16.4167 11.0458 16.45 10.7875C16.4833 10.5292 16.5 10.2667 16.5 10C16.5 9.73333 16.4833 9.47083 16.45 9.2125C16.4167 8.95417 16.3583 8.70833 16.275 8.475L18.425 6.85L17.45 5.15L14.975 6.2C14.6083 5.81667 14.2042 5.49583 13.7625 5.2375C13.3208 4.97917 12.8417 4.78333 12.325 4.65L12 2H10.025L9.675 4.65C9.15833 4.78333 8.67917 4.97917 8.2375 5.2375C7.79583 5.49583 7.39167 5.80833 7.025 6.175L4.55 5.15L3.575 6.85L5.725 8.45C5.64167 8.7 5.58333 8.95 5.55 9.2C5.51667 9.45 5.5 9.71667 5.5 10C5.5 10.2667 5.51667 10.525 5.55 10.775C5.58333 11.025 5.64167 11.275 5.725 11.525L3.575 13.15L4.55 14.85L7.025 13.8C7.39167 14.1833 7.79583 14.5042 8.2375 14.7625C8.67917 15.0208 9.15833 15.2167 9.675 15.35L10 18ZM11.05 13.5C12.0167 13.5 12.8417 13.1583 13.525 12.475C14.2083 11.7917 14.55 10.9667 14.55 10C14.55 9.03333 14.2083 8.20833 13.525 7.525C12.8417 6.84167 12.0167 6.5 11.05 6.5C10.0667 6.5 9.2375 6.84167 8.5625 7.525C7.8875 8.20833 7.55 9.03333 7.55 10C7.55 10.9667 7.8875 11.7917 8.5625 12.475C9.2375 13.1583 10.0667 13.5 11.05 13.5Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Icon);
export { Memo as Icon };
