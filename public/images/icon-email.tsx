import { SVGProps } from "react";

const IconEmail = (props: SVGProps<SVGSVGElement>) => (
  <svg width={48} height={48} stroke={props.stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m6 16 15.781 10.52a4 4 0 0 0 4.438 0L42 16M10 38h28a4 4 0 0 0 4-4V14a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4Z"
      strokeWidth={3}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconEmail;
