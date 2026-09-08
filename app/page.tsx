import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import {
  Education,
  Experience,
  Publications,
  Skills,
  Impact,
} from "@/components/sections/content";
import { Contact, Footer } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Publications />
        <Skills />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
