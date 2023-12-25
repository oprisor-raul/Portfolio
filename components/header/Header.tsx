import React from "react";

function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        <a href="/">Raul-Alexandru Oprișor</a>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
        Full-stack developer
      </h2>
      <p className="mt-4 max-w-xs text-text leading-normal">
        I build bridges between user needs and technological capabilities.
      </p>
    </header>
  );
}

export default Header;
