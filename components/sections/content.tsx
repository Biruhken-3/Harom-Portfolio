import { Section, Card, Badge, TimelineItem } from "@/components/ui";
import { SlideReveal } from "@/components/motion/reveal";
import {
  education,
  certifications,
  experience,
  publications,
  skillGroups,
  impact,
} from "@/lib/data";

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="A foundation built across leading institutions."
      scene="education"
    >
      {/* Cards rise in staggered, zoom-settle entrance */}
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((item, i) => (
          <SlideReveal key={item.credential} direction="up" scale={0.95} delay={i * 120}>
            <Card className="h-full">
              <p className="text-sm font-semibold text-teal">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{item.school}</h3>
              <p className="mt-1 font-medium text-ink/90">{item.credential}</p>
              <p className="mt-3 text-sm leading-7 text-ink/75">{item.description}</p>
            </Card>
          </SlideReveal>
        ))}
      </div>
      {certifications.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <SlideReveal key={cert.title} direction="up" scale={0.95} delay={i * 120}>
              <Card>
                <p className="text-sm font-semibold text-teal">{cert.issued}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{cert.title}</h3>
                <p className="mt-1 font-medium text-ink/90">{cert.issuer}</p>
                <p className="mt-3 text-sm leading-7 text-ink/75">{cert.description}</p>
              </Card>
            </SlideReveal>
          ))}
        </div>
      )}
    </Section>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="A decade of clinical, academic, and surgical leadership."
      scene="experience"
    >
      {/* Timeline entries slide in from the left along the timeline */}
      <ol className="space-y-8 border-l-2 border-teal/20 pl-8">
        {experience.map((item, i) => (
          <SlideReveal key={item.role} direction="left" delay={i * 150}>
            <TimelineItem period={item.period} title={item.role} org={item.org}>
              <ul className="list-disc space-y-1 pl-4">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </TimelineItem>
          </SlideReveal>
        ))}
      </ol>
    </Section>
  );
}

export function Publications() {
  return (
    <Section
      id="publications"
      title="Publications"
      subtitle="Co-authored case reports and research in PRS Global Open â€” 6 papers published in just 2 months (2026)."
    >
      <div className="grid gap-4">
        {publications.map((pub) => (
          <Card key={pub.title}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold text-ink">{pub.title}</h3>
              <p className="text-sm text-muted">{pub.venue}</p>
            </div>
            <p className="mt-2 text-sm leading-7 text-ink/75">{pub.summary}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Surgical expertise, academic craft, and creative pursuits."
      scene="skills"
    >
      {/* Skill groups rise with a zoom-settle; badges pop in staggered */}
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <SlideReveal key={group.group} direction="up" scale={0.9} delay={i * 150}>
            <Card className="h-full">
              <h3 className="text-lg font-semibold text-ink">{group.group}</h3>
              <p className="mt-2 text-sm leading-7 text-ink/75">{group.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <SlideReveal key={skill} direction="up" delay={i * 150 + 200 + j * 80} scale={0.8}>
                    <Badge>{skill}</Badge>
                  </SlideReveal>
                ))}
              </div>
            </Card>
          </SlideReveal>
        ))}
      </div>
    </Section>
  );
}

export function Impact() {
  return (
    <Section
      id="impact"
      title="Community Impact"
      subtitle="Beyond the operating room â€” sharing stories, recognition, and mentorship."
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {impact.map((item) => (
          <Card key={item.title}>
            <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-ink/80">{item.text}</p>
            <p className="mt-2 text-sm leading-7 text-ink/65">{item.detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
