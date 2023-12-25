"use client";

import React, { useState, useEffect } from "react";

const CursorFollowerBackground = ({}: {}) => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [cursorPosition, setCursorPosition] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });

  const backgroundStyle = {
    background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(162, 145, 219, 0.06), transparent 55%)`,
  } as React.CSSProperties;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={backgroundStyle}
    />
  );
};

export default CursorFollowerBackground;
