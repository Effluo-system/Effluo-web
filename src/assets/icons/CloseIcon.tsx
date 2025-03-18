import { SVGProps } from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.66699 2.66669L13.3337 13.3334M13.3337 2.66669L2.66699 13.3334"
      stroke={props.stroke || '#878B9E'}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export default CloseIcon;
