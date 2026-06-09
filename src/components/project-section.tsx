import React from "react";

interface ProjectSectionProps {
  kicker: string;
  title: string;
  children: React.ReactNode;
  isCyan?: boolean;
}

export default function ProjectSection({ kicker, title, children, isCyan = false }: ProjectSectionProps) {
  return (
    <section className="py-6 border-b border-card-border/50 last:border-b-0 w-full scroll-mt-24">
      <div className="flex flex-col gap-3">
        <div>
          <span className={`text-[10px] font-extrabold tracking-widest uppercase ${isCyan ? "text-cyan-400" : "text-orange-500"}`}>
            {kicker}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-foreground mt-0.5">
            {title}
          </h2>
        </div>
        <div className="text-sm text-text-muted leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
