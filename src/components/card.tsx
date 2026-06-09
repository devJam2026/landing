import React from "react";

interface CardProps {
  children: React.ReactNode;
  isCyan?: boolean;
  className?: string;
  id?: string;
}

export default function Card({ children, isCyan = false, className = "", id }: CardProps) {
  return (
    <div
      id={id}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-xl p-6 transition-all duration-300 scroll-mt-24 ${
        isCyan ? "premium-card premium-card-cyan" : "premium-card"
      } ${className}`}
    >
      {children}
    </div>
  );
}
