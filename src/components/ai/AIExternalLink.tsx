import React from "react";
import Link from "next/link";
import { DevJamExternalLink } from "@/data/ai/projects";

interface AIExternalLinkProps {
  link: DevJamExternalLink;
  className?: string;
  activeClassName?: string;
  disabledClassName?: string;
}

export default function AIExternalLink({
  link,
  className = "",
  activeClassName = "text-cyan-400 hover:text-cyan-300 hover:underline transition-colors font-semibold",
  disabledClassName = "text-text-muted opacity-50 cursor-not-allowed text-[10px] font-mono select-none"
}: AIExternalLinkProps) {
  if (link.status === "available" && link.url) {
    // If it is an internal route or an external link
    const isExternal = link.url.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${activeClassName} ${className}`}
        >
          {link.label}
        </a>
      );
    } else {
      return (
        <Link href={link.url} className={`${activeClassName} ${className}`}>
          {link.label}
        </Link>
      );
    }
  }

  if (link.status === "coming-soon") {
    return (
      <span className={`${disabledClassName} ${className}`}>
        {link.label}: Coming Soon
      </span>
    );
  }

  return (
    <span className={`${disabledClassName} ${className}`}>
      {link.label}: Not Applicable
    </span>
  );
}
