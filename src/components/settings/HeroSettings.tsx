import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useEditor } from "@/providers/editorProvider";

export const HeroSettings = () => {
  const { state, dispatch } = useEditor();
  const { selectedSection } = state;

  const handleContentChange = (property: string, value: string) => {
    const updatedContent = {
      ...selectedSection?.content,
      [property]: value,
    };

    if (selectedSection) {
      dispatch({
        type: "UPDATE_SECTION_CONTENT",
        payload: {
          ...selectedSection,
          content: updatedContent,
        },
      });
    }
  };

  return (
    <div className="p-4 space-y-4 relative ">
      <h2 className="mb-2 text font-semibold text-stone-900">{selectedSection?.type} Settings</h2>
      <div className="space-y-2">
        <Label className="text-sm text-stone-700" htmlFor="section-title">
          Title
        </Label>
        <Input
          value={selectedSection?.content.title || ""}
          onChange={(e) => {
            handleContentChange("title", e.target.value);
          }}
          id="section-title"
          placeholder="Enter title"
        />
      </div>
      <div className="space-y-2">
        <Label className="text-sm text-stone-700" htmlFor="section-subtitle">
          Subtitle
        </Label>
        <Input
          value={selectedSection?.content.subtitle || ""}
          onChange={(e) => {
            handleContentChange("subtitle", e.target.value);
          }}
          id="section-subtitle"
          placeholder="Enter subtitle"
        />
      </div>
      <div className="space-y-2">
        <Label className="text-sm text-stone-700" htmlFor="section-subtitle">
          CTA button text
        </Label>
        <Input
          value={selectedSection?.content.buttonText || ""}
          onChange={(e) => {
            handleContentChange("buttonText", e.target.value);
          }}
          id="section-subtitle"
          placeholder="Enter button text"
        />
      </div>
    </div>
  );
};
