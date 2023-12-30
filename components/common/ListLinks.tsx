import SvgLink from "@/public/svg/SvgLink";
import React from "react";

interface ListLinksProps {
  links: { url: string; title: string }[];
}

const ListLinks: React.FC<ListLinksProps> = ({ links }) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Related links">
      {links.map((link, index) => (
        <li key={index} className="mr-4">
          <a
            className="relative mt-2 inline-flex items-center text-sm font-medium text-text"
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${link.title} (opens in a new tab)`}
          >
            <SvgLink
              className="mr-1 h-3 w-3 fill-vague hover:fill-primary"
              aria-hidden="true"
              viewBox="0 0 20 20"
            />
            <span className="hover:text-primary focus-visible:text-primary">
              {link.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListLinks;
