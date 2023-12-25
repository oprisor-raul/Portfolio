import React from "react";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background tracking-wide leading-relaxed text-text antialiased selection:bg-primary selection:text-background">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
