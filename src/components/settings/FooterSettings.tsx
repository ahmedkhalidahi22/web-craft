import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useEditor } from "@/providers/editorProvider";

export const FooterSettings = () => {
  const { state, dispatch } = useEditor();
  const { selectedSection } = state;

  const handleWebsiteNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedContent = {
      ...selectedSection?.content,
      websiteName: e.target.value,
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
          Website name
        </Label>
        <Input
          value={selectedSection?.content.websiteName || ""}
          onChange={handleWebsiteNameChange}
          id="section-title"
          placeholder="Enter title"
        />
      </div>
    </div>
  );
};
