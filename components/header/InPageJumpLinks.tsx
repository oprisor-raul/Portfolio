import React from "react";

interface JumpLinkItemProps {
  text: string;
  href: string;
}

function JumpLinkItem({ text, href }: JumpLinkItemProps) {
  return (
    <li>
      <a className="group flex items-center py-3" href={href}>
        <span className="nav-indicator mr-4 h-px w-8 bg-vague transition-all group-hover:w-16 group-hover:bg-text group-focus-visible:w-16 group-focus-visible:bg-text motion-reduce:transition-none"></span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-vague group-hover:text-text group-focus-visible:text-text">
          {text}
        </span>
      </a>
    </li>
  );
}

function InPageJumpLinks() {
  const links = [
    { text: "About Me", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
  ];

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {links.map((link) => (
          <JumpLinkItem key={link.text} text={link.text} href={link.href} />
        ))}
      </ul>
    </nav>
  );
}

export default InPageJumpLinks;
