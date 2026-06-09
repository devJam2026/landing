import React from "react";

interface CardProps {
  children: React.ReactNode;
  isCyan?: boolean;
  className?: string;
}

export default function Card({ children, isCyan = false, className = "" }: CardProps) {
  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-xl p-6 transition-all duration-300 ${
        isCyan ? "premium-card premium-card-cyan" : "premium-card"
      } ${className}`}
    >
      {children}
    </div>
  );
}
