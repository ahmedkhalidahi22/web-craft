import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useEditor } from "@/providers/editorProvider";

export const TestimonialsSettings = () => {
  const { state } = useEditor();
  const { selectedSection } = state;
  return (
    <div className="p-4 space-y-4 relative ">
      <h2 className="mb-2 text font-semibold text-stone-900">{selectedSection?.type} Settings</h2>
      <div className="space-y-2">
        <Label className="text-sm text-stone-700" htmlFor="section-title">
          Title
        </Label>
        <Input id="section-title" placeholder="Enter title" />
      </div>
      <div className="space-y-2">
        <Label className="text-sm text-stone-700" htmlFor="section-subtitle">
          Discription
        </Label>
        <Input id="section-subtitle" placeholder="Enter Discription" />
      </div>
      <div className="space-y-2">
        <Label className="text-sm text-stone-700" htmlFor="section-subtitle">
          Testimonials
        </Label>
        <Input id="section-subtitle" placeholder="Enter Testimonials 1" />
        <Input id="section-subtitle" placeholder="Enter Testimonials 2" />
        <Input id="section-subtitle" placeholder="Enter Testimonials 3" />
      </div>
    </div>
  );
};
