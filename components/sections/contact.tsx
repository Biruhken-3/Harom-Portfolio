import { Card } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { profile, summary } from "@/lib/data";

const contactInfo = [
  { label: "Email", value: "contact@example.com", href: profile.email },
  { label: "LinkedIn", value: "linkedin.com/in/dr-harom", href: profile.linkedin },
  { label: "Office", value: "Jimma University Medical Center (JUMC), Jimma, Ethiopia", href: null },
  { label: "Practice", value: "Addis Ababa University — Plastic & Reconstructive Surgery", href: null },
];

export function Contact() {
  return (
    <section id="contact" className="w-full py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Get in Touch</h2>
          <p className="mt-2 max-w-2xl text-muted">{summary}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {/* Form — message side */}
          <Reveal className="lg:col-span-3" delay={100}>
            <Card>
              <h3 className="text-lg font-semibold text-ink">Send a Message</h3>
              <p className="mt-1 mb-6 text-sm text-muted">
                Have a consultation request, collaboration idea, or speaking invitation? Send a
                message directly — it goes straight to my inbox.
              </p>
              <ContactForm />
            </Card>
          </Reveal>

          {/* Contact information side */}
          <Reveal className="lg:col-span-2" delay={200}>
            <Card className="flex h-full flex-col gap-6">
              <div>
                <h3 className="text-lg font-semibold text-ink">Contact Information</h3>
                <p className="mt-1 text-sm text-muted">
                  Reach out through any of these channels.
                </p>
              </div>
              <ul className="flex flex-col gap-5">
                {contactInfo.map((item) => (
                  <li key={item.label}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-ink transition-colors hover:text-teal"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-ink">{item.value}</p>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-auto rounded-2xl bg-teal/10 p-5 ring-1 ring-teal/20">
                <p className="text-sm font-semibold text-ink">Consultations &amp; Referrals</p>
                <p className="mt-1 text-sm text-muted">
                  Available for surgical consultations, second opinions, and reconstructive case
                  referrals at JUMC and AAU teaching hospitals.
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


export function Footer() {
  return (
    <footer className="w-full border-t border-ink/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          Â© {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Consultant General Surgeon Â· Assistant Professor Â· Plastic &amp; Reconstructive Surgery Fellow</p>
      </div>
    </footer>
  );
}
