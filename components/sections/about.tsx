import { Section, Card, Badge } from "@/components/ui";

export function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="I am a surgeon defined by clinical mastery, academic leadership, and compassionate care."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <p className="leading-8 text-ink/90">
            I am a Consultant General Surgeon, Assistant Professor at Jimma
            University Medical Center (JUMC), and a Plastic, Reconstructive &amp; Hand Surgery
            Fellow at Addis Ababa University (AAU). I am recognized for blending advanced surgical
            techniques with compassionate patient care.
          </p>
          <p className="mt-4 leading-8 text-ink/90">
            I have completed advanced microsurgery training at Ganga Hospital, India, mastering
            delicate procedures such as free flap reconstruction, rhinoplasty, breast
            reconstruction, and cranioplasty. I actively share my milestones, publications, and
            reflections with the medical community - inspiring both peers and students.
          </p>
          <p className="mt-4 leading-8 text-ink/90">
            My research productivity is remarkable - six peer-reviewed papers published in just
            two months in 2026, spanning rare tumors, syndromic clefts, and complex reconstructive
            cases, all in Plastic and Reconstructive Surgery Global Open. Beyond the operating
            room, I am a dedicated lecturer at Jimma University, a mentor to young surgeons, and a
            storyteller who shares patient recovery journeys - from high-voltage electrical burn
            survivors to life-changing cleft repairs - with an audience of thousands.
          </p>
        </Card>
        <Card className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-ink">Microsurgery Mastery</h3>
          <p className="text-sm text-ink/80">
            Ganga Hospital, India - successfully performed anastomosis on rat femoral vessels
            smaller than 1mm.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge>Free Flap Reconstruction</Badge>
            <Badge>Rhinoplasty</Badge>
            <Badge>Breast Reconstruction</Badge>
            <Badge>Cranioplasty</Badge>
          </div>
        </Card>
      </div>
    </Section>
  );
}
