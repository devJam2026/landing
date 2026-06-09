import React from "react";

interface PageHeroProps {
  kicker: string;
  title: string;
  description: string;
}

export default function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 pt-4 px-4">
      <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
        {kicker}
      </span>
      <h1 className="text-4xl sm:text-5xl font-black text-foreground mt-2 tracking-tight">
        {title}
      </h1>
      <p className="text-sm sm:text-base text-text-muted mt-4 leading-relaxed max-w-xl mx-auto">
        {description}
      </p>
    </div>
  );
}
