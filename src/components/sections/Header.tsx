"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import { Icon } from "@iconify/react";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    setIsMenuOpen(false);

    const prefersReducedMotion = window
      .matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    if (prefersReducedMotion) {
      section.scrollIntoView({ behavior: "auto", block: "start" });
      return;
    }

    const targetPosition = section.getBoundingClientRect().top + window.scrollY;
    const scrollMarginTop = parseFloat(
      window.getComputedStyle(section).scrollMarginTop || "0"
    );

    smoothScrollTo(targetPosition - scrollMarginTop, 900);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="pointer-events-auto relative inline-flex items-center rounded-full border border-white/10 bg-card/80 px-4 py-2 text-sm font-medium shadow-lg shadow-black/30 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="hidden gap-2 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => scrollToSection(event, item.id)}
                className="rounded-full px-4 py-1.5 text-foreground/80 transition-colors duration-200 hover:bg-primary/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Abrir menu de navegação"
            className="flex items-center justify-center rounded-full border border-white/10 p-2 text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <Icon
              icon={isMenuOpen ? "mi:close" : "mi:menu"}
              className="size-5"
              aria-hidden="true"
            />
          </button>
        </div>

        <div
          className={cn(
            "absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-card/90 shadow-lg shadow-black/40 backdrop-blur transition-all duration-200 md:hidden",
            isMenuOpen
              ? "pointer-events-auto opacity-100 translate-y-0"
              : "pointer-events-none -translate-y-2 opacity-0"
          )}
        >
          <ul className="flex flex-col divide-y divide-white/5">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event) => scrollToSection(event, item.id)}
                  className="block px-5 py-3 text-sm text-foreground/85 transition hover:bg-primary/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

const smoothScrollTo = (targetY: number, duration: number) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    window.scrollTo({ top: startY + distance * easedProgress });

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};
