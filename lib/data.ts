export const profile = {
  name: "Dr. Harom Gari Wakjira",
  shortName: "Dr. Harom",
  title:
    "Consultant General Surgeon · Assistant Professor · Plastic, Reconstructive & Hand Surgery Fellow",
  tagline:
    "Blending advanced surgical techniques with compassionate patient care — clinical excellence, academic leadership, and impactful research.",
  heroAbout:
    "From the operating theater at Jimma University Medical Center to advanced microsurgery training at Ganga Hospital, India, Dr. Harom has built a career on precision, empathy, and evidence. He treats every patient as a story worth restoring — and every student as the next generation of surgical excellence.",
  heroVideo: "/hero/haronvideo.mp4",
  heroImage: "/hero/hero.png",
  linkedin: "https://www.linkedin.com/",
  email: "mailto:contact@example.com",
  stats: [
    { value: "9+", label: "Years in Medicine & Surgery" },
    { value: "5+", label: "Peer-Reviewed Publications" },
    { value: "<1mm", label: "Microvascular Anastomosis" },
    { value: "3", label: "International Languages" },
  ],
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Publications" },
  { href: "#skills", label: "Skills" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
] as const;

export const education = [
  {
    school: "Addis Ababa University",
    credential: "Subspecialty Fellowship — Plastic & Reconstructive Surgery",
    period: "Sep 2023 – Oct 2026",
    description:
      "Three years of intensive subspecialty training in plastic, reconstructive, and hand surgery at Ethiopia's flagship teaching hospital — covering flap reconstruction, cleft lip and palate repair, burn reconstruction, and complex trauma management.",
  },
  {
    school: "Jimma University",
    credential: "Doctor of Medicine (MD)",
    period: "2011 – 2017",
    description:
      "Six years of rigorous medical training at one of Ethiopia's leading academic medical centers, building the clinical foundation and bedside compassion that continue to shape his practice today.",
  },
  {
    school: "Adama Hospital Medical College",
    credential: "General Surgery Residency Program",
    period: "2017 – 2021",
    description:
      "Four years of hands-on residency covering emergency surgery, trauma, oncologic procedures, and broad operative experience — earning board certification as a Consultant General Surgeon.",
  },
  {
    school: "Ganga Medical Centre & Hospital, India",
    credential: "Certificate in Microsurgery",
    period: "2025",
    description:
      "Elite microsurgical training at one of Asia's premier centers for hand and reconstructive surgery — successfully performed microvascular anastomosis on rat femoral vessels smaller than 1mm, a benchmark of surgical precision.",
  },
] as const;

export const experience = [
  {
    role: "Plastic & Reconstructive Surgery Fellow",
    org: "Addis Ababa University",
    period: "2023 – Present",
    points: [
      "Advanced subspecialty training spanning free flap reconstruction, rhinoplasty, breast reconstruction, cranioplasty, and cleft lip and palate repair.",
      "Manages complex reconstructive cases referred from across the country, including burns, tumors, and congenital deformities.",
    ],
  },
  {
    role: "Microsurgery Observership",
    org: "Ganga Hospital, India",
    period: "Mar – Apr 2025",
    points: [
      "Observed world-renowned microsurgeons performing free flap reconstruction, rhinoplasty, breast reconstruction, and cranioplasty.",
      "Absorbed advanced techniques in microvascular anastomosis and supermicrosurgery under international mentorship.",
    ],
  },
  {
    role: "General Surgeon",
    org: "Gimbie Adventist General Hospital",
    period: "Feb – Apr 2023",
    points: [
      "Delivered full-spectrum surgical care in a resource-conscious district hospital setting.",
      "Achieved excellent postoperative outcomes across emergency and elective procedures.",
    ],
  },
  {
    role: "Lecturer & Researcher",
    org: "Jimma University",
    period: "2017 – Present",
    points: [
      "Lectures and mentors medical students in surgery and clinical research methodology.",
      "Conducts academic work spanning statistical data analysis, public speaking, and scholarly publication.",
    ],
  },
  {
    role: "Medical Doctor",
    org: "Adama Hospital Medical College",
    period: "2017 – 2022",
    points: [
      "Provided clinical care and surgical services during residency, managing diverse pathology from trauma to elective general surgery.",
    ],
  },
] as const;

export const certifications = [
  {
    title: "Cleft Lip and Palate Surgery",
    issuer: "ReSurge International",
    issued: "Issued June 2026",
    description:
      "International certification in cleft lip and palate surgical care, delivered in partnership with ReSurge International's global surgical training program — extending life-changing reconstructive care to children born with cleft conditions.",
  },
] as const;

export const publications = [
  {
    title: "Successful Excision and Skin Grafting of Verrucous Hemangiomas",
    venue: "Plastic and Reconstructive Surgery Global Open (PRS Global Open)",
    summary:
      "Documents a successful surgical approach to a rare vascular lesion, emphasizing excision and grafting techniques with durable cosmetic and functional outcomes.",
  },
  {
    title: "Delayed Presentation of Common Peroneal Nerve Schwannoma",
    venue: "Plastic and Reconstructive Surgery Global Open (PRS Global Open)",
    summary:
      "Case report exploring the diagnostic and surgical challenges of a peripheral nerve tumor presenting late, with guidance for earlier recognition and nerve-sparing excision.",
  },
  {
    title: "Fibrosarcomatous Transformation of Recurrent DFSP",
    venue: "Plastic and Reconstructive Surgery Global Open (PRS Global Open)",
    summary:
      "Analyzes the rare malignant transformation of dermatofibrosarcoma protuberans, underscoring the importance of wide excision and vigilant long-term follow-up.",
  },
  {
    title: "Syndromic Cleft Lip and Palate in Trisomy 13 (Patau Syndrome)",
    venue: "Plastic and Reconstructive Surgery Global Open (PRS Global Open)",
    summary:
      "Presents the multidisciplinary management of a syndromic cleft within a chromosomal anomaly — a delicate balance of surgical timing and systemic considerations.",
  },
  {
    title: "Juvenile Hyaline Fibromatosis — Finger Contracture Case",
    venue: "Plastic and Reconstructive Surgery Global Open (PRS Global Open)",
    summary:
      "Details surgical release of finger contractures in a rare genetic fibrous tissue disorder, restoring hand function where medical therapy alone had failed.",
  },
] as const;

export const skillGroups = [
  {
    group: "Medical & Surgical Expertise",
    skills: [
      "General Surgery",
      "Plastic & Reconstructive Surgery",
      "Microsurgery",
      "Cleft Lip & Palate Surgery",
    ],
    description:
      "Operative mastery across general and subspecialty surgery — from emergency abdominal procedures to microvascular free flap reconstruction.",
  },
  {
    group: "Academic & Professional",
    skills: [
      "Higher Education Teaching",
      "University Lecturing",
      "Public Speaking",
      "Statistical Data Analysis",
      "Research & Publication",
    ],
    description:
      "A decade of teaching, mentoring, and scholarly work — translating clinical questions into peer-reviewed publications and confident podium presentations.",
  },
  {
    group: "Languages",
    skills: ["English", "French", "Spanish"],
    description:
      "Communicating with patients, peers, and international collaborators across three languages.",
  },
  {
    group: "Creative & Personal",
    skills: ["Poetry Writing", "Social Media Influencing", "Guitar (Acoustic, Bass, Electric)"],
    description:
      "The human side of the surgeon — poet, guitarist, and digital storyteller sharing the humanity behind the scrubs.",
  },
] as const;

export const impact = [
  {
    title: "Patient Stories",
    text: "Shared inspiring patient recovery stories, including survivors of high-voltage electrical burns and complex reconstructive journeys.",
    detail:
      "By giving survivors of devastating injuries — like high-voltage electrical burns — a public voice, he transforms individual recoveries into hope for thousands of patients awaiting reconstructive care.",
  },
  {
    title: "Doctors' Day Recognition",
    text: "Recognized by peers and family on Doctors' Day for compassion and dedication.",
    detail:
      "Celebrated publicly by colleagues and loved ones alike — a rare testament to a physician who treats the person, not just the pathology.",
  },
  {
    title: "Mentorship",
    text: "Actively mentors young surgeons at Jimma University Medical Center.",
    detail:
      "Guides the next generation of Ethiopian surgeons through ward rounds, operative teaching, and research supervision — multiplying his impact far beyond his own two hands.",
  },
] as const;

export const summary =
  "Dr. Harom Gari Wakjira is a highly skilled surgeon, educator, and researcher whose career is defined by clinical mastery, academic excellence, and humanitarian impact. His contributions to surgical literature, his dedication to teaching, and his compassionate patient care make him a respected figure in Ethiopian medicine and an emerging voice in global surgical innovation.";
