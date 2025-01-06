import { Section } from "@/lib/types";
import { Features } from "./builder/Features";
import Footer from "./builder/Footer";
import { Header } from "./builder/Header";
import Hero from "./builder/Hero";
import Testimonials from "./builder/Testimonials";

type Props = {
  section: Section;
};

const RenderedSection = ({ section }: Props) => {
  const { type: SectionName } = section;

  if (!SectionName) return null;

  switch (SectionName) {
    case "Header":
      return <Header key={section.id} section={section} />;
    case "Hero":
      return <Hero key={section.id} section={section} />;
    case "Features":
      return <Features key={section.id} section={section} />;
    case "Testimonials":
      return <Testimonials key={section.id} section={section} />;
    case "Footer":
      return <Footer key={section.id} section={section} />;
    default:
      return null;
  }
};

export default RenderedSection;
