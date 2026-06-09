"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="border-t border-card-border bg-background py-8 text-text-muted transition-colors duration-300">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-cyan-500 text-white font-mono text-xl font-bold">
                &lt;/&gt;
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-foreground">
                  DEV<span className="text-orange-500">JAM</span>
                </span>
                <span className="text-[10px] text-text-muted font-medium">
                  Engineering Labs for Curious Minds
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              DevJam is a project-driven technology hub focused on learning through building.
            </p>
            <div className="text-xs font-bold text-orange-500 dark:text-orange-400 tracking-wider">
              Learn • Build • Share • Grow
            </div>
            <div className="text-xs text-text-muted/80 mt-2">
              © {new Date().getFullYear()} DevJam. All rights reserved.
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-foreground uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/labs" className="hover:text-orange-500 dark:hover:text-cyan-400 transition-colors duration-200">
                  Labs
                </Link>
              </li>
              <li>
                <Link href="/roadmaps" className="hover:text-orange-500 dark:hover:text-cyan-400 transition-colors duration-200">
                  Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-orange-500 dark:hover:text-cyan-400 transition-colors duration-200">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-orange-500 dark:hover:text-cyan-400 transition-colors duration-200">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-foreground uppercase mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://github.com/devJam2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscribe Footer Banner */}
        <div className="mt-8 pt-6 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div className="flex flex-col max-w-md text-center md:text-left">
            <h4 className="text-xs font-extrabold tracking-wider text-foreground mb-1">STAY UPDATED</h4>
            <p className="text-xs text-text-muted">
              Get the latest labs, articles, and updates straight to your inbox.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full md:w-auto items-center gap-2 max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:w-64 rounded-lg border border-input-border bg-input-bg px-4 py-2.5 text-sm text-foreground placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-colors duration-200 shrink-0 cursor-pointer"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
