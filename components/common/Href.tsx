import SvgRightArrow from "@/public/svg/SvgRightArrow";
import React from "react";

interface HrefProps {
  href: string;
  title: string;
}

const Href: React.FC<HrefProps> = ({ href, title }) => {
  return (
    <a
      className="inline-flex items-center font-medium leading-tight text-text font-semibold text-text group"
      aria-label={title}
      href={href}
    >
      <span>
        <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
          {title}
        </span>
        <span className="whitespace-nowrap">
          <SvgRightArrow
            className="fill-vague ml-1 inline-block shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </span>
      </span>
    </a>
  );
};

export default Href;
