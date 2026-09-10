import { navLinks, profile } from "@/lib/data";
import { MobileNav } from "@/components/sections/mobile-nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-surface/80 backdrop-blur">
      <nav className="relative mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-10">
        <a href="#home" className="text-lg font-bold text-ink">
          {profile.shortName}
          <span className="text-teal">.</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover md:inline-flex"
        >
          Get in Touch
        </a>
        <MobileNav />
      </nav>
    </header>
  );
}
