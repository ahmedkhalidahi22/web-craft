import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useEditor } from "@/providers/editorProvider";

export const HeaderSettings = () => {
  const { state } = useEditor();
  const { selectedSection } = state;
  return (
    <div className="p-4 space-y-4 relative ">
      <h2 className="mb-2 text font-semibold text-stone-900">{selectedSection?.type} Settings</h2>
      <div className="space-y-2">
        <Label className="text-sm text-stone-700" htmlFor="section-title">
          Website name
        </Label>
        <Input id="section-title" placeholder="Enter website name" />
      </div>
      {/* <div className="space-y-2">
        <Label className="text-sm text-stone-700" htmlFor="section-subtitle">
          Subtitle
        </Label>
        <Input id="section-subtitle" placeholder="Enter subtitle" />
      </div> */}
    </div>
  );
};
