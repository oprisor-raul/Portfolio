import SvgRightArrow from "@/public/svg/SvgRightArrow";
import React from "react";

interface BackButtonProps {
  href: string;
  description: string;
}

function BackButton({ href, description }: BackButtonProps) {
  return (
    <a
      className="group mb-2 inline-flex items-center font-semibold leading-tight text-primary"
      href={href}
    >
      <SvgRightArrow className="scale-x-[-1] fill-vague mr-1 transition-transform group-hover:-translate-x-2" />
      {description}
    </a>
  );
}

export default BackButton;
