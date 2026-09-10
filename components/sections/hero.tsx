import Image from "next/image";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import HeroScene from "@/components/three/hero-scene";

const highlights = [
  "Consultant General Surgeon & Assistant Professor, JUMC",
  "Plastic, Reconstructive & Hand Surgery Fellow, AAU",
  "Advanced Microsurgery Training, Ganga Hospital, India",
];

export function Hero() {
  return (
    <section id="home" className="relative isolate w-full overflow-hidden">
      {/* Background video - kept clearly visible under a light scrim */}
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={profile.heroVideo}
        poster={profile.heroImage}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        controlsList="nodownload"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-dark/55 via-dark/40 to-dark/60" />

      {/* Three.js particle field & floating shapes */}
      <HeroScene />

      <div className="mx-auto w-full max-w-7xl px-4 py-20 text-white sm:px-6 lg:py-24">
        {/* Professional split: description (left) + image (right) */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* ---- Left: description ---- */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-hover ring-1 ring-white/20 backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal-hover" />
                Surgeon / Educator / Researcher
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-4 text-lg font-medium text-white/95">{profile.title}</p>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-5 leading-8 text-white/80">{profile.tagline}</p>
            </Reveal>

            <Reveal delay={400}>
              {/* Credential highlights - professional quick facts */}
              <ul className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:mx-0">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal text-[10px] font-bold text-white"
                      aria-hidden="true"
                    >
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-9 flex flex-wrap justify-center gap-4 sm:justify-start">
                <Button href="#publications">View Publications</Button>
                <Button href="#contact" variant="outline">
                  Get in Touch
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ---- Right: image (professional presentation, no borders) ---- */}
          <div className="order-1 lg:order-2">
            <Reveal delay={200}>
              <figure className="group relative mx-auto w-full max-w-md lg:max-w-none">
                {/* Soft ambient glow behind the image (no border lines) */}
                <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-teal/15 blur-2xl" />
                <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-teal/25 blur-2xl" />
                <div className="absolute -top-4 -left-4 -z-10 h-24 w-24 rounded-full bg-teal-hover/20 blur-2xl" />

                {/* Full image, nothing cropped, with smooth hover zoom */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-dark/40 shadow-2xl">
                  <Image
                    src={profile.heroImage}
                    alt={profile.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.05]"
                  />
                  {/* Bottom gradient for caption legibility */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent px-6 pb-5 pt-14 text-center">
                    <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {profile.name}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-teal-hover sm:text-sm">
                      Plastic &amp; Reconstructive Surgery Fellow
                    </p>
                  </div>
                </div>

                {/* Floating credential chip (outside the image frame) */}
                <figcaption className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-5 py-2 text-xs font-semibold text-ink shadow-xl backdrop-blur sm:text-sm">
                  JUMC &amp; AAU · Ethiopia
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Stats - full width below, equal spacing */}
        <dl className="mt-20 grid grid-cols-2 gap-4 lg:mt-24 lg:grid-cols-4">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-6 text-center backdrop-blur transition-colors hover:border-teal/50 hover:bg-white/15">
                <dt className="text-2xl font-bold sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-sm text-white/85">{stat.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
