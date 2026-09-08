import Image from "next/image";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import HeroScene from "@/components/three/hero-scene";

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
      <div className="absolute inset-0 -z-10 bg-dark/35" />

      {/* Three.js particle field & floating shapes */}
      <HeroScene />

      {/* Intro content */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-20 text-white sm:px-6 lg:pt-28">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-hover">
              Surgeon / Educator / Researcher
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-base font-medium text-white/90 sm:text-lg">{profile.title}</p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-5 leading-8 text-white/85">{profile.tagline}</p>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-4 leading-8 text-white/85">{profile.heroAbout}</p>
          </Reveal>
          <Reveal delay={500}>
            <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
              <Button href="#publications">View Publications</Button>
              <Button href="#contact" variant="outline">Get in Touch</Button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Full-bleed hero image - stretches to the left and right edges, with hover zoom */}
      <div className="group relative mt-12 h-[55vh] min-h-[22rem] w-full sm:h-[65vh]">
        <Image
          src={profile.heroImage}
          alt={profile.name}
          fill
          priority
          sizes="100vw"
          className="object-contain transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04] group-hover:drop-shadow-[0_20px_45px_rgba(20,184,166,0.35)]"
        />
        {/* Large-font caption over the bottom of the full image */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/85 via-dark/40 to-transparent px-6 pb-6 pt-16 text-center lg:text-left">
          <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {profile.name}
          </p>
          <p className="mt-1 text-sm font-medium text-teal-hover sm:text-base">
            Consultant General Surgeon / Assistant Professor / JUMC &amp; AAU
          </p>
        </div>
      </div>

      {/* Stats - full width below */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:pb-28">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-6 text-center backdrop-blur">
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
