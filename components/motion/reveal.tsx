"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

/**
 * Reactive media-query hook (SSR-safe via useSyncExternalStore).
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/**
 * Scroll-triggered reveal animation (fade + rise), stagger-friendly.
 * Purely CSS-transition based — no animation library needed.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Directional slide-in reveal — used by Education / Experience / Skills
 * for a different feel from the hero's vertical fade-rise.
 * `direction`: 'left' | 'right' | 'up' — the direction the element travels FROM.
 * `scale`: optional start scale (e.g. 0.95) for a zoom-settle effect.
 */
export function SlideReveal({
  children,
  delay = 0,
  direction = "up",
  scale,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "left" | "right" | "up";
  scale?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hidden =
    direction === "left"
      ? "-translate-x-12"
      : direction === "right"
        ? "translate-x-12"
        : "translate-y-10";
  // Static Tailwind classes only (JIT can't generate dynamic values)
  const scaleHidden = scale === 0.9 ? "scale-90" : scale === 0.95 ? "scale-95" : "";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? `translate-x-0 translate-y-0 scale-100 opacity-100` : `${hidden} ${scaleHidden} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
}
