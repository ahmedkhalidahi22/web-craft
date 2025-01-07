import { HeaderSettings } from "./settings/HeaderSettings";
import { useEditor } from "@/providers/editorProvider";
import { HeroSettings } from "./settings/HeroSettings";
import { TestimonialsSettings } from "./settings/TestimonialsSettings";
import { FeaturesSettings } from "./settings/FeaturesSettings";
import { FooterSettings } from "./settings/FooterSettings";

const RenderedSettings = () => {
  const { state } = useEditor();
  const { selectedSection } = state;

  if (!selectedSection?.type) return null;

  switch (selectedSection.type) {
    case "Header":
      return <HeaderSettings key={selectedSection?.id} />;
    case "Hero":
      return <HeroSettings key={selectedSection.id} />;
    case "Features":
      return <FeaturesSettings key={selectedSection.id} />;
    case "Testimonials":
      return <TestimonialsSettings key={selectedSection.id} />;
    case "Footer":
      return <FooterSettings key={selectedSection.id} />;
    default:
      return null;
  }
};

export default RenderedSettings;
