import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useEditor } from "@/providers/editorProvider";

export const FeaturesSettings = () => {
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
          Discription
        </Label>
        <Input
          value={selectedSection?.content.description || ""}
          onChange={(e) => {
            handleContentChange("description", e.target.value);
          }}
          id="section-subtitle"
          placeholder="Enter Discription"
        />
      </div>
      {/* <div className="space-y-2">
        <Label className="text-sm text-stone-700" htmlFor="section-subtitle">
          Features
        </Label>
        <Input id="section-subtitle" placeholder="Enter Feature 1" />
        <Input id="section-subtitle" placeholder="Enter Feature 2" />
        <Input id="section-subtitle" placeholder="Enter Feature 3" />
      </div> */}
    </div>
  );
};
