import React from "react";
import Image from "next/image";
import SvgGithub from "@/public/svg/SvgGithub";
import SvgLinkedin from "@/public/svg/SvgLinkedin";
import SvgMail from "@/public/svg/SvgMail";

interface SocialMediaLinkItemProps {
  href: string;
  ariaLabel: string;
  Icon: React.ReactNode;
}

function SocialMediaLinkItem({
  href,
  ariaLabel,
  Icon,
}: SocialMediaLinkItemProps) {
  return (
    <li className="mr-5 text-xs">
      <a
        className="block hover:text-green-200"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={ariaLabel}
      >
        {Icon}
      </a>
    </li>
  );
}

function SocialMediaLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      <SocialMediaLinkItem
        href="https://github.com/oprisor-raul"
        ariaLabel="GitHub (opens in a new tab)"
        Icon={<SvgGithub className="fill-vague hover:fill-primary" />}
      />
      <SocialMediaLinkItem
        href="https://linkedin.com/in/oprisorraul/"
        ariaLabel="Linkedin (opens in a new tab)"
        Icon={<SvgLinkedin className="fill-vague hover:fill-primary" />}
      />
      <SocialMediaLinkItem
        href="mailto:raul@oprisor.dev"
        ariaLabel="Mail (opens in a new tab)"
        Icon={<SvgMail className="fill-vague hover:fill-primary" />}
      />
    </ul>
  );
}

export default SocialMediaLinks;
