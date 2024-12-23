import React from "react";

const TwIndicator = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex size-7 md:size-10 lg:size-12 items-center justify-center rounded-full bg-background-subtle border p-3 font-mono responsive-text-xs text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
};

export default TwIndicator;
