import React from "react";

interface H1TextProps {
  text: string;
}

function H1Text({ text }: H1TextProps) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
      {text}
    </h1>
  );
}

export default H1Text;
