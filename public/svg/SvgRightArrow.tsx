import * as React from "react";

interface SvgRightArrowProps extends React.SVGProps<SVGSVGElement> {}

const SvgRightArrow: React.FC<SvgRightArrowProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgRightArrow;
