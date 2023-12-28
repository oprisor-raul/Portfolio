import * as React from "react";

interface SvgArrowProps extends React.SVGProps<SVGSVGElement> {}

const SvgArrow: React.FC<SvgArrowProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default SvgArrow;
