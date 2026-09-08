import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import SectionScene, { type SceneVariant } from "@/components/three/section-scene";

export function Section({
  id,
  title,
  subtitle,
  children,
  animated = true,
  scene,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Set false to disable the scroll-reveal entrance animation. */
  animated?: boolean;
  /** Optional Three.js motion scene rendered behind the section content. */
  scene?: SceneVariant;
}) {
  const header = (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-2xl text-muted">{subtitle}</p>}
    </>
  );
  return (
    <section id={id} className="relative w-full overflow-hidden py-16 sm:py-20">
      {scene && <SectionScene variant={scene} />}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        {animated ? <Reveal>{header}</Reveal> : header}
        {animated ? (
          <Reveal delay={120}>
            <div className="mt-8">{children}</div>
          </Reveal>
        ) : (
          <div className="mt-8">{children}</div>
        )}
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-ink/10 bg-box p-6 shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-teal/10 px-3 py-1 text-sm font-medium text-ink ring-1 ring-teal/20">
      {children}
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-teal text-white hover:bg-teal-hover"
      : "border border-ink/20 text-ink hover:border-teal hover:text-teal";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export function TimelineItem({
  period,
  title,
  org,
  children,
}: {
  period: string;
  title: string;
  org: string;
  children?: ReactNode;
}) {
  return (
    <li className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-teal before:ring-4 before:ring-teal/20">
      <p className="text-sm font-semibold text-teal">{period}</p>
      <h3 className="mt-1 text-lg font-semibold text-ink">{title}</h3>
      <p className="text-muted">{org}</p>
      {children && <div className="mt-2 text-sm text-ink/80">{children}</div>}
    </li>
  );
}
