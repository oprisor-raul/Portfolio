import React from "react";
import InPageJumpLinks from "./InPageJumpLinks";
import SocialMediaLinks from "./SocialMediaLinks";

function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          <a href="/">Oprișor Raul-Alexandru</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
          Full-stack developer
        </h2>
        <p className="mt-4 max-w-xs text-vague leading-normal">
          I build bridges between user needs and technological capabilities.
        </p>
        <InPageJumpLinks />
      </div>
      <SocialMediaLinks />
    </header>
  );
}

export default Header;
