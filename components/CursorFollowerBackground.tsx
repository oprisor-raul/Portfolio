"use client";
import React, { useState, useEffect } from "react";

const CursorFollowerBackground = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.pageX - window.scrollX;
      const y = event.pageY - window.scrollY;

      setCursorPosition({ x, y });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="hidden lg:block fixed inset-0 z-30 pointer-events-none transition duration-300"
      style={{
        background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(162, 145, 219, 0.06), transparent 55%)`,
      }}
    />
  );
};

export default CursorFollowerBackground;
